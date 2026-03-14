# CoreMeet 🤝

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-1.5.4-orange?style=for-the-badge&logo=auth0&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45.1-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Headless UI](https://img.shields.io/badge/Headless_UI-2.2.9-66E3FF?style=for-the-badge&logo=headlessui&logoColor=black)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.71.2-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4.3.6-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-8.0.2-339933?style=for-the-badge&logo=nodemailer&logoColor=white)

## 📋 Descripción

**CoreMeet** es una red social empresarial diseñada para conectar equipos, departamentos y comunidades internas dentro de una organización. Permite crear reuniones por departamento, encuentros globales entre colaboradores y espacios comunitarios para fomentar la comunicación y la colaboración.

### 🎯 Características Principales

- **CoreConnect**: Encuentros globales entre colaboradores
- **CoreCommunity**: Espacios comunitarios para grupos de interés
- Sistema de reuniones departamentales
- Comunicación en tiempo real
- Red social empresarial interna

## 🚀 Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| **Next.js 16** | Framework React con App Router y Server Components |
| **React 19** | Biblioteca de UI con Server Components |
| **TypeScript** | Type-safe development |
| **Better Auth 1.5.4** | Sistema de autenticación moderno y completo |
| **Drizzle ORM** | ORM TypeScript-first para PostgreSQL |
| **PostgreSQL** | Base de datos relacional |
| **TailwindCSS 4** | Framework CSS utility-first |
| **Headless UI** | Componentes UI accesibles sin estilos |
| **React Hook Form** | Gestión de formularios con validación |
| **Zod 4** | Validación de esquemas TypeScript |
| **Heroicons** | Librería de iconos SVG |
| **Nodemailer** | Envío de emails transaccionales |
| **Sonner** | Sistema de notificaciones toast |

## 📁 Estructura del Proyecto

```
core-meet/
├── app/                          # App Router de Next.js
│   ├── (public)/                 # Grupo de rutas públicas
│   │   ├── layout.tsx           # Layout con Header
│   │   └── page.tsx             # Página de inicio con Hero
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts     # API routes de Better Auth
│   ├── auth/                     # Autenticación
│   │   ├── layout.tsx           # Layout de auth con Logo
│   │   ├── login/               # Página de inicio de sesión
│   │   ├── register/            # Página de registro
│   │   └── forgot-password/     # Recuperación de contraseña
│   ├── dashboard/                # Panel administrativo
│   │   ├── layout.tsx           # Layout con navegación
│   │   └── page.tsx             # Dashboard principal
│   ├── globals.css              # Estilos globales
│   └── layout.tsx               # Root layout
├── src/
│   ├── db/                       # Base de datos
│   │   ├── index.ts             # Configuración de Drizzle
│   │   └── schema/
│   │       ├── auth-schema.ts   # Schema de autenticación
│   │       ├── community.ts     # Schema de comunidades
│   │       └── index.ts
│   ├── features/                 # Features del proyecto
│   │   └── auth/                # Feature de autenticación
│   │       ├── actions/
│   │       │   └── auth-actions.ts  # Server Actions
│   │       ├── components/
│   │       │   ├── LoginForm.tsx
│   │       │   ├── RegisterForm.tsx
│   │       │   └── ForgotPasswordForm.tsx
│   │       ├── schemas/
│   │       │   └── authSchema.ts    # Validación con Zod
│   │       ├── services/
│   │       │   ├── AuthRepository.ts  # Capa de datos
│   │       │   └── AuthService.ts     # Lógica de negocio
│   │       └── index.ts
│   ├── lib/
│   │   └── auth.ts              # Configuración de Better Auth
│   └── shared/
│       ├── components/
│       │   ├── dashboard/       # Componentes del dashboard
│       │   │   ├── DashboardNavigation.tsx
│       │   │   ├── DashboardPanel.tsx
│       │   │   ├── MobileSidebar.tsx
│       │   │   ├── NotificationsPanel.tsx
│       │   │   ├── UserMenu.tsx
│       │   │   └── index.ts
│       │   ├── forms/           # Componentes de formularios
│       │   │   ├── Form.tsx
│       │   │   ├── FormInput.tsx
│       │   │   ├── FormLabel.tsx
│       │   │   ├── FormError.tsx
│       │   │   ├── FormSubmit.tsx
│       │   │   └── index.ts
│       │   ├── typography/      # Componentes de tipografía
│       │   │   ├── Heading.tsx
│       │   │   └── index.ts
│       │   └── ui/              # Componentes de interfaz
│       │       ├── GuestNavigation.tsx
│       │       ├── Header.tsx
│       │       ├── Hero.tsx
│       │       ├── Logo.tsx
│       │       └── index.ts
│       └── utils/               # Utilidades
│           ├── metadata.ts      # Helpers de metadata
│           └── index.ts
├── drizzle/                      # Migraciones de base de datos
├── public/
│   ├── logo-core.png            # Logo de la aplicación
│   └── Meetis/                   # Assets adicionales
├── drizzle.config.ts            # Configuración de Drizzle
├── next.config.ts               # Configuración de Next.js
├── tsconfig.json                # Configuración de TypeScript
├── tailwind.config.ts           # Configuración de Tailwind
└── package.json
```

## 🎨 Componentes Implementados

### UI Components

- **Header**: Encabezado principal con logo y navegación
- **Hero**: Sección destacada de página de inicio
- **Logo**: Componente de imagen del logo
- **GuestNavigation**: Navegación con botones de login/registro elegantes

### Form Components

- **Form**: Contenedor de formularios con manejo de Server Actions
- **FormInput**: Input reutilizable con estilos consistentes
- **FormLabel**: Labels accesibles para formularios
- **FormError**: Componente para mostrar errores de validación
- **FormSubmit**: Botón de submit con estados de loading

### Typography Components

- **Heading**: Componente de encabezados con variantes (h1, h2, h3)

### Auth Components

- **LoginForm**: Formulario de inicio de sesión con validación
- **RegisterForm**: Formulario de registro de usuarios con validación
- **ForgotPasswordForm**: Formulario de recuperación de contraseña

### Dashboard Components

- **DashboardNavigation**: Barra de navegación lateral del dashboard
- **DashboardPanel**: Panel contenedor principal del dashboard
- **MobileSidebar**: Navegación móvil responsive
- **NotificationsPanel**: Panel de notificaciones de usuario
- **UserMenu**: Menú desplegable de usuario con opciones de perfil y cierre de sesión

## 🛣️ Rutas Implementadas

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/` | Página de inicio | ✅ Implementado |
| `/auth/login` | Inicio de sesión | ✅ Implementado |
| `/auth/register` | Registro de usuario | ✅ Implementado |
| `/auth/forgot-password` | Recuperación de contraseña | ✅ Implementado |
| `/dashboard` | Panel administrativo de usuario | ✅ Implementado |
| `/api/auth/[...all]` | API routes de Better Auth | ✅ Implementado |

## 🏛️ Arquitectura del Proyecto

### Repository Pattern + Service Layer

El proyecto utiliza una arquitectura en capas para mejor organización y mantenibilidad:

```
┌─────────────────────────────────────┐
│      Actions (Server Actions)      │  ← Capa de presentación
├─────────────────────────────────────┤
│       Services (Lógica negocio)     │  ← Validaciones y reglas
├─────────────────────────────────────┤
│    Repositories (Capa de datos)    │  ← Acceso a base de datos
├─────────────────────────────────────┤
│         Database (Drizzle)          │  ← ORM y esquemas
└─────────────────────────────────────┘
```

**Ventajas:**
- ✅ Separación de responsabilidades clara
- ✅ Código más testeable y mantenible
- ✅ Lógica de negocio desacoplada de la UI
- ✅ Inyección de dependencias para flexibilidad

### Feature-Based Structure

Cada feature (auth, comunidades, etc.) contiene:
- **actions/**: Server Actions de Next.js
- **components/**: Componentes React específicos
- **schemas/**: Validaciones con Zod
- **services/**: Lógica de negocio
- **repositories/**: Capa de acceso a datos (opcional)

## 🎨 Sistema de Diseño

El proyecto utiliza una paleta de colores personalizada:

- **Azul**: Color principal para headers (`azul-950`)
- **Naranja**: Color de acento para CTAs (`naranja-50` a `naranja-600`)
- Tipografía: **Space Grotesk** de Google Fonts

### Características de Diseño

- Diseño responsive con Mobile-First
- Transiciones suaves y elegantes
- Botones con estados hover y efectos de sombra
- Esquinas redondeadas modernas (rounded-xl)

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20 o superior
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Errold146/CoreMeet.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🔧 Configuración

### TypeScript

- Rutas tipadas habilitadas (`typedRoutes: true`)
- Path aliases configurados:
  - `@/*` → raíz del proyecto
  - `@/components/*` → `./src/shared/components/*`

### Next.js

- App Router activado
- Rutas tipadas habilitadas
- Server Components por defecto

## 🏗️ Próximas Funcionalidades

- [x] Sistema de autenticación con Better Auth
- [x] Integración de Drizzle ORM con PostgreSQL
- [x] Validación de formularios con Zod
- [x] Formulario de registro funcional
- [x] Formulario de login funcional
- [x] Recuperación de contraseña (UI implementada)
- [x] Dashboard de usuario con navegación
- [x] Sistema de notificaciones con Sonner
- [x] Menú de usuario con opciones de perfil
- [x] Integración de email con Nodemailer
- [ ] Verificación de email funcional
- [ ] Sistema de perfiles de usuario
- [ ] Gestión de uploads con UploadThing
- [ ] Chat en tiempo real con Pusher
- [ ] Sistema de caché con Redis
- [ ] CoreConnect (Encuentros)
- [ ] CoreCommunity (Comunidades)
- [ ] Sistema de reuniones

## 📝 Convenciones de Código

- Componentes React en PascalCase
- Uso de Server Components por defecto
- Export named para componentes
- Barrel exports en archivos `index.ts`
- Metadata por página para SEO
- Repository Pattern para acceso a datos
- Service Layer para lógica de negocio
- Validación con Zod en todos los formularios
- Server Actions para mutaciones de datos
- TypeScript estricto habilitado

## 📄 Licencia

Este proyecto es privado y confidencial.

---

## ✉️ Contacto

[![GitHub](https://img.shields.io/badge/GitHub-Errold146-181717?logo=github)](https://github.com/Errold146)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ErroldNúñezS-0A66C2?logo=linkedin)](https://linkedin.com/in/errold-núñez-sánchez)
[![Email](https://img.shields.io/badge/Email-ErroldNúñezS-D14836?logo=gmail)](mailto:errold222@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+506_7802_7211-25D366?logo=whatsapp&logoColor=white)](https://wa.me/50678027211)

**Desarrollado con ❤️ usando Next.js**
