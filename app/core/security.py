import hashlib
from datetime import datetime, timedelta, timezone
from typing import Any
from uuid import uuid4

from jose import JWTError, jwt
from passlib.context import CryptContext

from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class TokenType:
    ACCESS = "access"
    REFRESH = "refresh"


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def _build_token(
    subject: str,
    secret_key: str,
    expires_delta: timedelta,
    token_type: str,
) -> tuple[str, datetime, str]:
    expires_at = datetime.now(timezone.utc) + expires_delta
    jti = str(uuid4())
    payload: dict[str, Any] = {
        "sub": subject,
        "type": token_type,
        "jti": jti,
        "exp": expires_at,
    }
    token = jwt.encode(payload, secret_key, algorithm=settings.jwt_algorithm)
    return token, expires_at, jti



def create_access_token(subject: str) -> tuple[str, datetime, str]:
    return _build_token(
        subject=subject,
        secret_key=settings.jwt_secret_key,
        expires_delta=timedelta(minutes=settings.access_token_expire_minutes),
        token_type=TokenType.ACCESS,
    )



def create_refresh_token(subject: str) -> tuple[str, datetime, str]:
    return _build_token(
        subject=subject,
        secret_key=settings.jwt_refresh_secret_key,
        expires_delta=timedelta(days=settings.refresh_token_expire_days),
        token_type=TokenType.REFRESH,
    )



def decode_token(token: str, token_type: str) -> dict[str, Any]:
    secret_key = (
        settings.jwt_secret_key if token_type == TokenType.ACCESS else settings.jwt_refresh_secret_key
    )
    payload = jwt.decode(token, secret_key, algorithms=[settings.jwt_algorithm])
    if payload.get("type") != token_type:
        raise JWTError("Invalid token type")
    return payload



def sha256_digest(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()
