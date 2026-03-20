from fastapi import APIRouter, Depends

from app.core.dependencies import require_role
from app.models.user import User, UserRole
from app.schemas.user import UserRead

router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/me", response_model=UserRead)
def read_admin_profile(
    current_user: User = Depends(require_role(UserRole.ADMIN)),
) -> UserRead:
    return UserRead.model_validate(current_user)
