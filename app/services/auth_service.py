from datetime import datetime, timezone

from fastapi import HTTPException, Request, status
from jose import JWTError
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.security import (
    TokenType,
    create_access_token,
    create_refresh_token,
    decode_token,
    sha256_digest,
    verify_password,
)
from app.models.refresh_token import RefreshToken
from app.models.user import User
from app.schemas.auth import AuthResponse, LoginRequest, RefreshRequest, TokenPair
from app.schemas.user import UserRead


class AuthService:
    def __init__(self, db: Session) -> None:
        self.db = db

    def login(self, payload: LoginRequest, request: Request) -> AuthResponse:
        user = self.db.scalar(select(User).where(User.email == payload.email.lower()))
        if not user or not verify_password(payload.password, user.password_hash):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

        if not user.is_active:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Inactive account")

        if user.mfa_enabled:
            return AuthResponse(
                user=UserRead.model_validate(user),
                tokens=None,
                mfa_required=True,
                message="MFA required before issuing tokens",
            )

        return self._issue_tokens(user=user, request=request, message="Login successful")

    def refresh(self, payload: RefreshRequest, request: Request) -> AuthResponse:
        try:
            token_payload = decode_token(payload.refresh_token, TokenType.REFRESH)
        except JWTError as exc:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token") from exc

        token_hash = sha256_digest(payload.refresh_token)
        stored_token = self.db.scalar(
            select(RefreshToken).where(RefreshToken.token_hash == token_hash)
        )
        if not stored_token or stored_token.revoked_at is not None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token revoked")

        if stored_token.expires_at <= datetime.now(timezone.utc):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token expired")

        user = self.db.get(User, token_payload.get("sub"))
        if not user or not user.is_active:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token subject")

        stored_token.revoked_at = datetime.now(timezone.utc)
        self.db.add(stored_token)
        self.db.commit()
        return self._issue_tokens(user=user, request=request, message="Token refreshed")

    def issue_tokens_for_user(self, user: User, request: Request, message: str) -> AuthResponse:
        return self._issue_tokens(user=user, request=request, message=message)

    def logout(self, refresh_token: str | None) -> None:
        if not refresh_token:
            return

        token_hash = sha256_digest(refresh_token)
        stored_token = self.db.scalar(
            select(RefreshToken).where(RefreshToken.token_hash == token_hash)
        )
        if stored_token and stored_token.revoked_at is None:
            stored_token.revoked_at = datetime.now(timezone.utc)
            self.db.add(stored_token)
            self.db.commit()

    def _issue_tokens(self, user: User, request: Request, message: str) -> AuthResponse:
        access_token, access_expires_at, _ = create_access_token(str(user.id))
        refresh_token, refresh_expires_at, _ = create_refresh_token(str(user.id))

        stored_refresh_token = RefreshToken(
            user_id=user.id,
            token_hash=sha256_digest(refresh_token),
            expires_at=refresh_expires_at,
            user_agent=request.headers.get("user-agent"),
            ip_address=request.client.host if request.client else None,
        )
        self.db.add(stored_refresh_token)
        self.db.commit()

        tokens = TokenPair(
            access_token=access_token,
            refresh_token=refresh_token,
            access_token_expires_at=access_expires_at,
            refresh_token_expires_at=refresh_expires_at,
        )
        return AuthResponse(
            user=UserRead.model_validate(user),
            tokens=tokens,
            mfa_required=False,
            message=message,
        )
