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
![UploadThing](https://img.shields.io/badge/UploadThing-7.7.4-F97316?style=for-the-badge&logo=upload&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.12-A855F7?style=for-the-badge&logo=zustand&logoColor=white)
![Sonner](https://img.shields.io/badge/Sonner-2.0.7-10B981?style=for-the-badge&logo=notifications&logoColor=white)
![Date-fns](https://img.shields.io/badge/Date--fns-4.1.0-770C56?style=for-the-badge&logo=calendar&logoColor=white)
![Heroicons](https://img.shields.io/badge/Heroicons-2.2.0-8B5CF6?style=for-the-badge&logo=heroicons&logoColor=white)
![Pusher](https://img.shields.io/badge/Pusher-5.3.3-300D4F?style=for-the-badge&logo=pusher&logoColor=white)

## 📋 Descripción

**CoreMeet** es una red social empresarial diseñada para conectar equipos, departamentos y comunidades internas dentro de una organización. Permite crear reuniones por departamento, encuentros globales entre colaboradores y espacios comunitarios para fomentar la comunicación y la colaboración.

### 🎯 Características Principales

- **CoreConnect**: Encuentros globales entre colaboradores
- **CoreCommunity**: Espacios comunitarios para grupos de interés (CRUD completo)
- **Sistema de Notificaciones**: Notificaciones en tiempo real con contador dinámico
- **Sistema de Autenticación**: Autenticación completa con Better Auth
- **Gestión de Archivos**: Subida y gestión de imágenes con UploadThing
- Sistema de reuniones departamentales
- Comunicación en tiempo real
- Red social empresarial interna
- Dashboard con diseño oscuro elegante y moderno

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
| **UploadThing** | Gestión y almacenamiento de archivos |
| **Zustand** | Gestión de estado global |
| **Date-fns** | Manipulación y formato de fechas |
| **Heroicons** | Librería de iconos SVG |
| **Clsx** | Utilidad para clases CSS condicionales |
| **Pusher** | WebSockets y eventos en tiempo real |

## 📁 Estructura del Proyecto

```
core-meet/
├── app/                          # App Router de Next.js
│   ├── (public)/                 # Grupo de rutas públicas
│   │   ├── layout.tsx           # Layout con Header
│   │   └── page.tsx             # Página de inicio con Hero
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...all]/
│   │   │       └── route.ts     # API routes de Better Auth
│   │   ├── user/
│   │   │   └── notifications/
│   │   │       └── route.ts     # API de notificaciones
│   │   └── uploadthing/
│   │       ├── core.ts          # Configuración UploadThing
│   │       ├── route.ts         # API UploadThing
│   │       └── delete/
│   │           └── route.ts     # Eliminar archivos
│   ├── auth/                     # Autenticación
│   │   ├── layout.tsx           # Layout de auth con Logo
│   │   ├── login/               # Página de inicio de sesión
│   │   ├── register/            # Página de registro
│   │   └── forgot-password/     # Recuperación de contraseña
│   ├── dashboard/                # Panel administrativo
│   │   ├── layout.tsx           # Layout con navegación
│   │   ├── page.tsx             # Dashboard principal
│   │   └── notifications/
│   │       └── page.tsx         # Página de notificaciones
│   ├── globals.css              # Estilos globales
│   └── layout.tsx               # Root layout
├── src/
│   ├── db/                       # Base de datos
│   │   ├── index.ts             # Configuración de Drizzle
│   │   └── schema/
│   │       ├── auth-schema.ts   # Schema de autenticación
│   │       ├── community.ts     # Schema de comunidades
│   │       ├── notifications.ts # Schema de notificaciones
│   │       └── index.ts
│   ├── features/                 # Features del proyecto
│   │   ├── auth/                # Feature de autenticación
│   │   │   ├── actions/
│   │   │   │   └── auth-actions.ts  # Server Actions
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   └── ForgotPasswordForm.tsx
│   │   │   ├── schemas/
│   │   │   │   └── authSchema.ts    # Validación con Zod
│   │   │   ├── services/
│   │   │   │   ├── AuthRepository.ts  # Capa de datos
│   │   │   │   └── AuthService.ts     # Lógica de negocio
│   │   │   └── index.ts
│   │   ├── communities/         # Feature de comunidades
│   │   │   ├── actions/
│   │   │   │   ├── community-actions.ts   # Server Actions para comunidades
│   │   │   │   └── membership-action.ts   # Server Actions para miembros
│   │   │   ├── components/
│   │   │   │   ├── CommunityActionsPanel.tsx    # Panel de acciones
│   │   │   │   ├── CommunityCard.tsx            # Tarjeta de comunidad
│   │   │   │   ├── CommunityForm.tsx            # Formulario CRUD
│   │   │   │   ├── CommunityMembership.tsx      # Gestión de miembros
│   │   │   │   ├── CreateCoreCommunity.tsx      # Crear comunidad
│   │   │   │   ├── DeleteCommunityForm.tsx      # Eliminar comunidad
│   │   │   │   ├── DeleteCommunityModal.tsx     # Modal de confirmación
│   │   │   │   ├── EditCoreCommunity.tsx        # Editar comunidad
│   │   │   │   ├── MyCommunities.tsx            # Lista de mis comunidades
│   │   │   │   └── NotCommunities.tsx           # Estado vacío
│   │   │   ├── policies/
│   │   │   │   └── communityPolicies.ts         # Políticas de acceso
│   │   │   ├── schemas/
│   │   │   │   └── communitySchema.ts           # Validación con Zod
│   │   │   ├── services/
│   │   │   │   ├── CommunityRepository.ts       # Capa de datos
│   │   │   │   ├── CommunityService.ts          # Lógica de negocio
│   │   │   │   ├── MembershipRepository.ts      # Datos de miembros
│   │   │   │   └── MembershipService.ts         # Lógica de miembros
│   │   │   ├── stores/
│   │   │   │   └── communityStore.ts            # Estado global con Zustand
│   │   │   ├── types/
│   │   │   │   └── index.ts                     # Tipos de comunidades
│   │   │   └── index.ts
│   │   └── notifications/       # Feature de notificaciones
│   │       ├── components/
│   │       │   ├── NotificationList.tsx  # Lista de notificaciones
│   │       │   └── index.ts
│   │       ├── services/
│   │       │   ├── NotificationRepository.ts  # Capa de datos
│   │       │   ├── NotificationService.ts     # Lógica de negocio
│   │       │   └── index.ts
│   │       └── types/
│   │           └── index.ts     # Tipos de notificaciones
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

- **DashboardNavigation**: Barra de navegación lateral del dashboard con diseño oscuro elegante
- **DashboardPanel**: Panel contenedor principal del dashboard con top-bar personalizable
- **MobileSidebar**: Navegación móvil responsive con diseño oscuro
- **NotificationsPanel**: Panel de notificaciones con contador en tiempo real
- **UserMenu**: Menú desplegable de usuario con opciones de perfil y cierre de sesión

### Notification Components

- **NotificationList**: Lista de notificaciones con diseño moderno y animaciones
  - Animaciones de entrada escalonadas
  - Indicadores visuales de notificaciones no leídas
  - Estado vacío elegante con iconos
  - Formato de fecha localizado en español
  - Diseño responsive y accesible

### Community Components

- **CommunityCard**: Tarjeta de presentación de comunidad con imagen y descripción
- **CommunityForm**: Formulario reutilizable para crear/editar comunidades
  - Validación con Zod y React Hook Form
  - Integración con UploadThing para imágenes
  - Preview de imagen antes de subir
  - Estados de carga y errores
- **CreateCoreCommunity**: Página de creación de comunidades
- **EditCoreCommunity**: Página de edición de comunidades
- **MyCommunities**: Lista de comunidades propias del usuario
- **CommunityActionsPanel**: Panel de acciones (editar, eliminar)
- **CommunityMembership**: Gestión de miembros y usuarios de la comunidad
- **DeleteCommunityModal**: Modal de confirmación para eliminar comunidad
- **DeleteCommunityForm**: Formulario para eliminación de comunidad
- **NotCommunities**: Estado vacío cuando no hay comunidades

## 🛣️ Rutas Implementadas

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/` | Página de inicio | ✅ Implementado |
| `/auth/login` | Inicio de sesión | ✅ Implementado |
| `/auth/register` | Registro de usuario | ✅ Implementado |
| `/auth/forgot-password` | Recuperación de contraseña | ✅ Implementado |
| `/auth/reset-password` | Restablecer contraseña | ✅ Implementado |
| `/dashboard` | Panel administrativo de usuario | ✅ Implementado |
| `/dashboard/notifications` | Lista de notificaciones | ✅ Implementado |
| `/dashboard/communities` | Gestión de comunidades | ✅ Implementado |
| `/dashboard/communities/create` | Crear nueva comunidad | ✅ Implementado |
| `/dashboard/communities/joined` | Comunidades unidas | ✅ Implementado |
| `/dashboard/communities/[id]/edit` | Editar comunidad | ✅ Implementado |
| `/api/auth/[...all]` | API routes de Better Auth | ✅ Implementado |
| `/api/user/notifications` | API de conteo de notificaciones | ✅ Implementado |
| `/api/uploadthing` | API de UploadThing para archivos | ✅ Implementado |
| `/api/uploadthing/delete` | Eliminar archivos de UploadThing | ✅ Implementado |

## 🏛️ Arquitectura del Proyecto

### Repository Pattern + Service Layer

El proyecto utiliza una arquitectura en capas para mejor organización y mantenibilidad:

```
┌─────────────────────────────────────┐
│      Actions (Server Actions)       │  ← Capa de presentación
├─────────────────────────────────────┤
│       Services (Lógica negocio)     │  ← Validaciones y reglas
├─────────────────────────────────────┤
│    Repositories (Capa de datos)     │  ← Acceso a base de datos
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

- **Azul**: Color principal para headers y elementos interactivos
- **Naranja**: Color de acento para CTAs (`naranja-50` a `naranja-600`)
- **Mirage**: Escala de grises para el diseño oscuro del dashboard (`mirage-200` a `mirage-950`)
- Tipografía: **Space Grotesk** de Google Fonts

### Características de Diseño

- Diseño responsive con Mobile-First
- Dashboard con diseño oscuro elegante (`mirage-800` a `mirage-950`)
- Top-bar personalizable con colores personalizados
- Transiciones suaves y elegantes
- Botones con estados hover y efectos de sombra
- Esquinas redondeadas modernas (rounded-xl)
- Animaciones de entrada y salida fluidas
- Gradientes sutiles para profundidad visual

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
# Crear un archivo .env.local en la raíz del proyecto con las siguientes variables:
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Base de datos PostgreSQL
DATABASE_URL="postgresql://usuario:password@localhost:5432/coremeet"

# Better Auth
BETTER_AUTH_SECRET="tu-secret-key-muy-seguro-aqui"
BETTER_AUTH_URL="http://localhost:3000"

# Nodemailer (SMTP)

## 🗄️ Base de Datos

### Esquema de Tablas

El proyecto utiliza Drizzle ORM con PostgreSQL. Las principales tablas son:

#### **Users** (Better Auth)
- Gestión de usuarios con autenticación
- Verificación de email
- Gestión de sesiones

#### **Communities**
- `id` (UUID): Identificador único
- `name` (VARCHAR): Nombre de la comunidad
- `description` (TEXT): Descripción de la comunidad
- `imageUrl` (VARCHAR): URL de la imagen de la comunidad
- `createdAt` (TIMESTAMP): Fecha de creación
- `createdBy` (TEXT): ID del usuario creador

#### **CommunityMembers**
- `communityId` (UUID): ID de la comunidad (FK)
- `userId` (TEXT): ID del usuario (FK)
- `joinedAt` (TIMESTAMP): Fecha de unión
- **Primary Key**: Compuesta (communityId, userId)
- **Foreign Keys**: Cascade delete en community y user

#### **Notifications**
- `id` (UUID): Identificador único
- `userId` (TEXT): ID del usuario destinatario
- `actorName` (VARCHAR): Nombre del usuario que generó la notificación
- `message` (TEXT): Mensaje de la notificación
- `target` (VARCHAR): Entidad objetivo de la notificación
- `read` (BOOLEAN): Estado de lectura (default: false)
- `createdAt` (TIMESTAMP): Fecha de creación

### Migraciones

Las migraciones se encuentran en la carpeta `drizzle/` y se gestionan con Drizzle Kit:

```bash
# Generar nueva migración
npx drizzle-kit generate

# Aplicar migraciones
npx drizzle-kit push

# Ver estado de migraciones
npx drizzle-kit status
```
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="tu-email@gmail.com"
EMAIL_PASS="tu-app-password"

# UploadThing (para subida de imágenes)
UPLOADTHING_TOKEN="tu-token-de-uploadthing"

# Pusher (para notificaciones en tiempo real)
NEXT_PUBLIC_PUSHER_KEY="tu-pusher-key"
NEXT_PUBLIC_PUSHER_CLUSTER="tu-pusher-cluster"
PUSHER_APP_ID="tu-pusher-app-id"
PUSHER_SECRET="tu-pusher-secret"
```

### Ejecutar Migraciones

```bash
# Generar migraciones
npm run drizzle-kit generate

# Aplicar migraciones a la base de datos
npm run drizzle-kit push

# Iniciar servidor de desarrollo
npm run dev
```

### � Sistema de Emails

El proyecto utiliza Nodemailer para el envío de emails transaccionales:

### Emails Implementados

- **Email de Verificación**: Enviado al registrarse o solicitar nueva verificación
- **Email de Recuperación de Contraseña**: Enviado al solicitar restablecer contraseña

### Configuración

Los emails utilizan plantillas React con `@react-email/components` y se configuran en:
- `src/emails/templates/`: Plantillas de emails
- `src/emails/services/`: Servicios de envío de emails
- `src/emails/config/`: Configuración de emails

## 🔔 Sistema de Notificaciones

El proyecto cuenta con un sistema completo de notificaciones en tiempo real:

### Características

- ✅ **Notificaciones en tiempo real**: Integración con Pusher para recibir notificaciones instantáneas
- ✅ **WebSockets**: Conexión persistente para actualizaciones automáticas sin recargar
- ✅ **Panel de notificaciones**: Vista completa de todas las notificaciones
- ✅ **Diseño moderno**: Animaciones suaves con CSS variables y diseño elegante
- ✅ **Estado de lectura**: Seguimiento de notificaciones leídas/no leídas
- ✅ **Indicadores visuales**: Badge con conteo en el header actualizado en tiempo real
- ✅ **Estado vacío elegante**: Mensaje y diseño cuando no hay notificaciones
- ✅ **Responsive**: Adaptado a todos los tamaños de pantalla

### Arquitectura

El sistema de notificaciones sigue el patrón Repository + Service:

```typescript
// Repositorio - Acceso a datos
NotificationRepository
  ├── create()          // Crear notificación
  ├── getUnreadCount()  // Obtener conteo de no leídas
  └── findByUserId()    // Obtener notificaciones por usuario

// Servicio - Lógica de negocio
NotificationService
  ├── create()          // Crear con validación
  ├── getUnreadCount()  // Obtener conteo
  └── getByUserId()     // Obtener por usuario
```

### Componentes

- **NotificationsPanel**: Badge de notificaciones en el header con contador en tiempo real
- **NotificationList**: Lista completa con animaciones CSS, diseño moderno y actualización automática vía Pusher
- **API Route**: `/api/user/notifications` para obtener el conteo

### Integración con Pusher

El sistema usa Pusher para enviar notificaciones en tiempo real:

```typescript
// Cliente - NotificationList.tsx
import Pusher from "pusher-js";

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!
});

const id = `notifications-channel-${userId}`;
const channel = pusher.subscribe(id);
channel.bind('new-notification', (notification) => {
  // Actualizar estado con nueva notificación
  setUnreadNotification(prev => [notification, ...prev]);
});

// Servidor - Enviar notificación
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
});

await pusher.trigger(
  `notifications-channel-${userId}`,
  'new-notification',
  notification
);
```

### Uso

```typescript
// Crear una notificación
await notificationService.create({
  userId: 'user-id',
  actorName: 'Juan Pérez',
  message: 'te invitó a unirte a',
  target: 'Comunidad de Desarrolladores'
});

// Obtener conteo de no leídas
const count = await notificationService.getUnreadCount('user-id');

// Obtener todas las notificaciones
const notifications = await notificationService.getByUserId('user-id');
```

## 🏘️ Sistema de Comunidades (CoreCommunity)

El proyecto implementa un sistema completo de comunidades (CoreCommunity) para crear espacios colaborativos:

### Características

- ✅ **CRUD Completo**: Crear, leer, actualizar y eliminar comunidades
- ✅ **Gestión de Imágenes**: Integración con UploadThing para subir y gestionar imágenes
- ✅ **Políticas de Acceso**: Validación de permisos de creador
- ✅ **Sistema de Miembros**: Gestión de usuarios que se unen a comunidades
- ✅ **Diseño Moderno**: Tarjetas elegantes con imágenes y descripciones
- ✅ **Validación Robusta**: Schemas con Zod en cliente y servidor
- ✅ **Estado Global**: Gestión de estado con Zustand
- ✅ **Responsive**: Adaptado a todos los tamaños de pantalla

### Arquitectura

El sistema de comunidades sigue el patrón Repository + Service + Store:

```typescript
// Repositories - Acceso a datos
CommunityRepository
  ├── create()              // Crear comunidad
  ├── update()              // Actualizar comunidad
  ├── delete()              // Eliminar comunidad
  ├── findById()            // Buscar por ID
  ├── findByCreator()       // Comunidades del creador
  └── getAll()              // Todas las comunidades

MembershipRepository
  ├── join()                // Unirse a comunidad
  ├── leave()               // Salir de comunidad
  ├── getMemberCount()      // Contador de miembros
  └── getUserCommunities()  // Comunidades del usuario

// Services - Lógica de negocio
CommunityService
  ├── create()              // Crear con validación
  ├── update()              // Actualizar con validación
  ├── delete()              // Eliminar con limpieza de archivos
  ├── getById()             // Obtener por ID
  └── getByCreator()        // Obtener por creador

MembershipService
  ├── join()                // Unirse con validaciones
  ├── leave()               // Salir con validaciones
  └── getUserCommunities()  // Comunidades del usuario

// Store - Estado Global (Zustand)
CommunityStore
  ├── communities           // Array de comunidades
  ├── setCommunities()      // Establecer comunidades
  ├── addCommunity()        // Agregar nueva comunidad
  └── updateCommunity()     // Actualizar comunidad existente
```

### Componentes

```typescript
// Componentes principales
<CommunityCard />              // Tarjeta de comunidad
<CommunityForm />              // Formulario CRUD con UploadThing
<CreateCoreCommunity />        // Página de creación
<EditCoreCommunity />          // Página de edición
<MyCommunities />              // Lista de comunidades propias
<CommunityActionsPanel />      // Panel de acciones (editar/eliminar)
<CommunityMembership />        // Gestión de miembros
<DeleteCommunityModal />       // Confirmación de eliminación
<NotCommunities />             // Estado vacío
```

### Schemas de Validación

```typescript
// Schema de Comunidad (Zod)
export const CommunitySchema = z.object({
  name: z.string().min(3, { 
    message: "El Titulo de CoreCommunity es requerido." 
  }),
  imageUrl: z.url({ 
    message: "Debes subir una imagen para la CoreCommunity." 
  }),
  description: z.string().min(10, { 
    message: "La Descripción es requerida." 
  }),
});

export type CommunityInput = z.infer<typeof CommunitySchema>;
```

### Políticas de Acceso

El sistema incluye políticas de validación para proteger las operaciones:

```typescript
// communityPolicies.ts
export const canEditCommunity = (userId: string, creatorId: string) => {
  return userId === creatorId;
};

export const canDeleteCommunity = (userId: string, creatorId: string) => {
  return userId === creatorId;
};
```

### Uso

```typescript
// Crear una comunidad
const community = await communityService.create({
  name: 'Desarrolladores Frontend',
  description: 'Comunidad para compartir conocimientos de React y Next.js',
  imageUrl: 'https://uploadthing.com/...',
  createdBy: 'user-id'
});

// Actualizar una comunidad
await communityService.update('community-id', {
  name: 'Nuevo nombre',
  description: 'Nueva descripción',
  imageUrl: 'https://uploadthing.com/new-image'
});

// Eliminar una comunidad (con limpieza de archivos)
await communityService.delete('community-id', 'old-image-url');

// Unirse a una comunidad
await membershipService.join({
  communityId: 'community-id',
  userId: 'user-id'
});

// Obtener comunidades del usuario
const userCommunities = await membershipService.getUserCommunities('user-id');
```

### Server Actions

```typescript
// community-actions.ts
'use server'

export async function createCommunityAction(data: CommunityInput) {
  const session = await requireAuth();
  return await communityService.create({
    ...data,
    createdBy: session.user.id
  });
}

export async function updateCommunityAction(id: string, data: CommunityInput) {
  const session = await requireAuth();
  // Validación de permisos...
  return await communityService.update(id, data);
}

// membership-action.ts
export async function joinCommunityAction(communityId: string) {
  const session = await requireAuth();
  return await membershipService.join({
    communityId,
    userId: session.user.id
  });
}
```

## 📤 Sistema de Uploads

UploadThing está integrado para la gestión de archivos:

### Características

- Subida de imágenes para comunidades (max 1MB)
- Middleware de autenticación en uploads
- Eliminación automática de imágenes antiguas al actualizar
- Integración con el componente `CommunityForm`

### Configuración

- `app/api/uploadthing/core.ts`: Configuración del router de archivos
- `app/api/uploadthing/route.ts`: API routes de UploadThing
- `app/api/uploadthing/delete/route.ts`: Eliminación de archivos

## 🔐 Sistema de Autenticación

Better Auth proporciona:

- ✅ Autenticación con email y contraseña
- ✅ Verificación de email requerida
- ✅ Recuperación de contraseña con token
- ✅ Sesiones persistentes con cookies
- ✅ Protección de rutas del dashboard
- ✅ Middleware de autenticación en API routes

### Helpers de Autenticación

```typescript
// Cliente (React Components)
import { authClient } from "@/lib/auth-client"

// Servidor (Server Components/Actions)
import { requireAuth } from "@/lib/auth-server"
```

## 📝 Convenciones de Código

- Componentes React en PascalCase
- Uso de Server Components por defecto
- Export named para componentes
- Barrel exports en archivos `index.ts`
- Metadata por página para SEO
- Repository Pattern para acceso a datos
- Server Actions para mutaciones
- Validación con Zod en cliente y servidor
- Tipos TypeScript estrictos

## 🎯 Mejoras Recientes

### Notificaciones en Tiempo Real con Pusher (v1.3.0)
- ✅ Integración completa de Pusher para WebSockets
- ✅ Notificaciones instantáneas sin recargar la página
- ✅ Sistema de canales por usuario individualizados
- ✅ Actualización automática del contador de notificaciones
- ✅ Animaciones CSS con variables para evitar conflictos de re-render
- ✅ Subscripción y cleanup automático de canales
- ✅ Configuración de variables de entorno para Pusher

### Sistema de Notificaciones (v1.2.0)
- ✅ Implementación completa del sistema de notificaciones
- ✅ NotificationRepository con patrón Repository
- ✅ NotificationService para lógica de negocio
- ✅ NotificationList con diseño moderno y animaciones
- ✅ API route para obtener conteo de notificaciones
- ✅ Panel de notificaciones en el header con contador en tiempo real

### Mejoras de UI/UX
- ✅ Diseño oscuro elegante en dashboard y menús
- ✅ Corrección de errores de hidratación en componentes cliente
- ✅ Top-bar personalizable con colores ajustables
- ✅ Animaciones fluidas en NotificationList
- ✅ Estado vacío elegante para notificaciones
- ✅ Mejora en la experiencia responsive
- ✅ Optimización de componentes de navegación

### Correcciones Técnicas
- ✅ Fix de errores de hidratación en Headless UI components
- ✅ Corrección de sintaxis Drizzle ORM en queries
- ✅ Mejora en manejo de Client Components vs Server Components
- ✅ Optimización de fetch en NotificationsPanel
- ✅ Eliminación de clases dark mode (diseño oscuro fijo)
- ✅ Solución de conflictos de animación con CSS variables
- ✅ Fix de warnings de React con propiedades shorthand/non-shorthand

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está en desarrollo activo.

## 👥 Autores

- **Equipo CoreMeet** - Desarrollo inicial

---

**CoreMeet** - Conectando equipos, construyendo comunidades 🚀

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

## 🏗️ Funcionalidades Implementadas

### ✅ Completadas

- [x] Sistema de autenticación con Better Auth
- [x] Integración de Drizzle ORM con PostgreSQL
- [x] Validación de formularios con Zod
- [x] Formulario de registro funcional
- [x] Formulario de login funcional
- [x] Recuperación de contraseña con envío de email
- [x] Restablecimiento de contraseña
- [x] Dashboard de usuario con navegación
- [x] Sistema de notificaciones con Sonner
- [x] Menú de usuario con opciones de perfil
- [x] Integración de email con Nodemailer
- [x] Sistema de emails transaccionales (verificación y recuperación)
- [x] **CoreCommunity (Comunidades)** - CRUD completo
  - [x] Crear comunidades con imagen
  - [x] Editar comunidades existentes
  - [x] Ver listado de comunidades propias
  - [x] Ver comunidades a las que se unió
  - [x] Políticas de acceso y validación
- [x] Gestión de uploads con UploadThing
  - [x] Subida de imágenes para comunidades
  - [x] Eliminación de imágenes antiguas
  - [x] Middleware de autenticación en uploads

### � Completadas

- [x] Sistema de autenticación con Better Auth
- [x] Integración de Drizzle ORM con PostgreSQL
- [x] Validación de formularios con Zod
- [x] Formulario de registro funcional
- [x] Formulario de login funcional
- [x] Recuperación de contraseña con envío de email
- [x] Restablecimiento de contraseña
- [x] Dashboard de usuario con navegación
- [x] Sistema de notificaciones con Sonner
- [x] Menú de usuario con opciones de perfil
- [x] Integración de email con Nodemailer
- [x] Sistema de emails transaccionales (verificación y recuperación)
- [x] **CoreCommunity (Comunidades)** - CRUD completo
  - [x] Crear comunidades con imagen
  - [x] Editar comunidades existentes
  - [x] Ver listado de comunidades propias
  - [x] Ver comunidades a las que se unió
  - [x] Políticas de acceso y validación
- [x] Gestión de uploads con UploadThing
  - [x] Subida de imágenes para comunidades
  - [x] Eliminación de imágenes antiguas
  - [x] Middleware de autenticación en uploads
- [x] **Notificaciones en tiempo real con Pusher**
  - [x] Integración de WebSockets
  - [x] Canales individualizados por usuario
  - [x] Actualización automática de UI

### �🚧 Próximas Funcionalidades

- [ ] Verificación de email automática
- [ ] Sistema de perfiles de usuario completo
- [ ] Gestión de miembros en comunidades
- [ ] Sistema de roles y permisos en comunidades
- [ ] Chat en tiempo real (escalando Pusher)
- [ ] Sistema de caché con Redis
- [ ] CoreConnect (Encuentros globales)
- [ ] Sistema de reuniones departamentales
- [ ] Marcar notificaciones como leídas
- [ ] Búsqueda y filtrado de comunidades

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
