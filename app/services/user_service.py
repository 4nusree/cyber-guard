from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.user import User, UserRole
from app.schemas.auth import RegisterRequest
from app.core.security import hash_password


class UserService:
    def __init__(self, db: Session) -> None:
        self.db = db

    def get_by_email(self, email: str) -> User | None:
        return self.db.scalar(select(User).where(User.email == email.lower()))

    def create_user(self, payload: RegisterRequest, role: UserRole = UserRole.LEARNER) -> User:
        user = User(
            email=payload.email.lower(),
            password_hash=hash_password(payload.password),
            role=role,
        )
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user
