# Test Better Auth Endpoints

## Scripts de prueba

PowerShell:
```powershell
# Verificar sesión (sin autenticar)
Invoke-WebRequest -Uri "http://localhost:3000/api/auth/get-session" -Method GET -UseBasicParsing

# Registrar usuario (ejemplo)
$body = @{
    email = "test@example.com"
    password = "securePassword123"
    name = "Test User"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/auth/sign-up/email" `
    -Method POST `
    -Body $body `
    -ContentType "application/json" `
    -UseBasicParsing

# Login (ejemplo)
$loginBody = @{
    email = "test@example.com"
    password = "securePassword123"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/auth/sign-in/email" `
    -Method POST `
    -Body $loginBody `
    -ContentType "application/json" `
    -UseBasicParsing
```

## Endpoints Disponibles de Better Auth

- GET  `/api/auth/get-session` - Obtener sesión actual
- POST `/api/auth/sign-up/email` - Registro con email/password
- POST `/api/auth/sign-in/email` - Login con email/password
- POST `/api/auth/sign-out` - Cerrar sesión
- POST `/api/auth/update-user` - Actualizar usuario
- POST `/api/auth/change-password` - Cambiar contraseña
- POST `/api/auth/forget-password` - Solicitar reset de contraseña
- POST `/api/auth/reset-password` - Resetear contraseña

