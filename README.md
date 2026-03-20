# CyberLearn Backend

Production-oriented FastAPI backend scaffold for the CyberLearn cybersecurity learning platform.

## Features

- FastAPI application with modular structure under `app/`
- PostgreSQL + SQLAlchemy ORM
- Alembic migration setup
- Environment-based configuration using `.env`
- JWT access token authentication with refresh-token cookie rotation
- Bcrypt password hashing
- Role-aware authorization dependency
- Protected user route example at `GET /api/v1/users/me`
- Refresh token persistence with HttpOnly cookie-based rotation support
- MFA-ready login flow placeholder (`mfa_required` response if enabled)

## Project Structure

```text
app/
  main.py
  core/
    config.py
    dependencies.py
    security.py
  db/
    base.py
    base_class.py
    session.py
  models/
    refresh_token.py
    user.py
  routes/
    admin.py
    auth.py
    users.py
  schemas/
    auth.py
    user.py
  services/
    auth_service.py
    user_service.py
alembic/
  env.py
  versions/
requirements.txt
```

## Prerequisites

- Python 3.10+
- PostgreSQL 14+

## Setup

1. Create and activate a virtual environment.
2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Copy environment configuration:

   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your PostgreSQL and JWT secrets.

5. Run database migrations:

   ```bash
   alembic upgrade head
   ```

6. Start the API:

   ```bash
   uvicorn app.main:app --reload
   ```

## API Base URL

- Local API root: `http://127.0.0.1:8000/api/v1`
- Docs: `http://127.0.0.1:8000/docs`

## Auth Flow Summary

### Register
- `POST /api/v1/auth/register`
- Creates a learner account, returns an access token payload, and sets the refresh token in an HttpOnly cookie.

### Login
- `POST /api/v1/auth/login`
- Verifies email/password.
- If `mfa_enabled` is `true`, returns `mfa_required: true` and no tokens.
- Otherwise returns an access token payload and sets the refresh token in an HttpOnly cookie.

### Refresh
- `POST /api/v1/auth/refresh`
- Reads the refresh token from the HttpOnly cookie, validates it, rotates it, and returns a new access token payload.

### Logout
- `POST /api/v1/auth/logout`
- Revokes the refresh token from the HttpOnly cookie and clears that cookie.

### Current User
- `GET /api/v1/auth/me`
- Returns the authenticated user from the bearer access token.

## Notes

- MFA challenge/verification is intentionally not implemented yet.
- Refresh tokens are intentionally kept out of frontend storage and are expected to move through the HttpOnly cookie only.
- For production, replace the example secrets, restrict CORS, and run behind HTTPS.
