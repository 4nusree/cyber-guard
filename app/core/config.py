from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    project_name: str = "CyberLearn API"
    project_version: str = "0.1.0"
    api_v1_prefix: str = "/api/v1"

    database_url: str = Field(
        default="postgresql+psycopg://postgres:postgres@localhost:5432/cyberlearn"
    )

    jwt_secret_key: str = Field(default="change-me-in-production")
    jwt_refresh_secret_key: str = Field(default="change-me-refresh-secret")
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 15
    refresh_token_expire_days: int = 7

    cors_origins: list[str] = ["http://localhost:3000", "http://localhost:5000"]


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
