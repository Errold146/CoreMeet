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
![React Leaflet](https://img.shields.io/badge/React_Leaflet-5.0.0-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-8.0.2-339933?style=for-the-badge&logo=nodemailer&logoColor=white)
![UploadThing](https://img.shields.io/badge/UploadThing-7.7.4-F97316?style=for-the-badge&logo=upload&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.12-A855F7?style=for-the-badge&logo=zustand&logoColor=white)
![Sonner](https://img.shields.io/badge/Sonner-2.0.7-10B981?style=for-the-badge&logo=notifications&logoColor=white)
![Date-fns](https://img.shields.io/badge/Date--fns-4.1.0-770C56?style=for-the-badge&logo=calendar&logoColor=white)
![Heroicons](https://img.shields.io/badge/Heroicons-2.2.0-8B5CF6?style=for-the-badge&logo=heroicons&logoColor=white)
![Pusher](https://img.shields.io/badge/Pusher-5.3.3-300D4F?style=for-the-badge&logo=pusher&logoColor=white)
![Upstash Redis](https://img.shields.io/badge/Upstash_Redis-1.37.0-00C7B7?style=for-the-badge&logo=redis&logoColor=white)
![Upstash Ratelimit](https://img.shields.io/badge/Upstash_Ratelimit-2.0.8-00C7B7?style=for-the-badge&logo=speedtest&logoColor=white)

## 📋 Descripción

**CoreMeet** es una red social empresarial diseñada para conectar equipos, departamentos y comunidades internas dentro de una organización. Permite crear reuniones por departamento, encuentros globales entre colaboradores y espacios comunitarios para fomentar la comunicación y la colaboración.

### 🎯 Características Principales

- **CoreConnect**: Sistema completo de eventos y encuentros globales entre colaboradores
  - CRUD completo: crear, editar y eliminar eventos
  - Eventos presenciales con ubicación geográfica (mapa interactivo)
  - Eventos virtuales con soporte para enlaces de reunión (Zoom, Teams, Google Meet, etc.)
  - Sistema de categorías para organizar eventos
  - Gestión de cupos y disponibilidad
  - **Sistema de asistencia**: confirmar y cancelar asistencia con un click
  - **Tarjeta del organizador**: info del creador del evento visible públicamente
  - **Vista pública de eventos**: página de detalle compartible con OpenGraph metadata
- **CoreCommunity**: Espacios comunitarios para grupos de interés (CRUD completo)
  - Creación y gestión de comunidades
  - Sistema de miembros y pertenencia
  - Validación de permisos y políticas de acceso
  - **Próximos CoreConnects**: lista de eventos futuros de la comunidad en su página pública
  - **Vista pública de comunidades**: página de detalle compartible con OpenGraph/Twitter Cards
- **Sistema de Notificaciones**: Notificaciones en tiempo real con Pusher y WebSockets
  - Contador dinámico de notificaciones no leídas
  - Actualización automática sin recargar página
- **Sistema de Autenticación**: Autenticación completa con Better Auth
  - Registro y login con validación de email
  - Recuperación y restablecimiento de contraseña
  - Sesiones persistentes y seguras
- **Rate Limiting**: Protección contra abuso de peticiones con Upstash Redis y Ratelimit
  - Ventana deslizante de 3 peticiones / 10 minutos
- **Gestión de Archivos**: Subida y gestión de imágenes con UploadThing
  - Optimización automática de imágenes
  - Eliminación de archivos antiguos
- **Dashboard**: Panel administrativo con diseño oscuro elegante y moderno
- **Comunicación en tiempo real**: Integración con Pusher para eventos instantáneos
- **Seguridad en enlaces**: `target="_blank"` con `rel="noopener noreferrer"` en todos los links

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
| **React Leaflet** | Mapas interactivos para eventos presenciales |
| **HERE Maps API** | Geocoding y búsqueda de ubicaciones |
| **Heroicons** | Librería de iconos SVG |
| **Nodemailer** | Envío de emails transaccionales |
| **Sonner** | Sistema de notificaciones toast |
| **UploadThing** | Gestión y almacenamiento de archivos |
| **Zustand** | Gestión de estado global |
| **Date-fns** | Manipulación y formato de fechas |
| **Clsx** | Utilidad para clases CSS condicionales |
| **Pusher** | WebSockets y eventos en tiempo real |
| **Upstash Redis** | Almacenamiento Redis serverless para rate limiting |
| **Upstash Ratelimit** | Rate limiting con ventana deslizante |

## 📁 Estructura del Proyecto

```
core-meet/
├── app/                          # App Router de Next.js
│   ├── (public)/                 # Grupo de rutas públicas
│   │   ├── layout.tsx           # Layout con Header
│   │   ├── page.tsx             # Página de inicio con Hero
│   │   ├── categories/
│   │   │   └── [id]/            # Detalle de categoría pública
│   │   ├── communities/
│   │   │   └── [id]/
│   │   │       └── page.tsx     # Detalle de comunidad pública (OpenGraph)
│   │   └── connects/
│   │       └── [id]/
│   │           ├── page.tsx     # Detalle de evento público con asistencia
│   │           └── error.tsx    # Página de error del evento
│   ├── api/
│   │   ├── auth/[...all]/       # API routes de Better Auth
│   │   ├── categories/
│   │   │   └── route.ts         # API de categorías
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
│   │   ├── forgot-password/     # Recuperación de contraseña
│   │   └── reset-password/      # Restablecer contraseña
│   ├── dashboard/                # Panel administrativo
│   │   ├── layout.tsx           # Layout con navegación lateral
│   │   ├── page.tsx             # Dashboard principal
│   │   ├── notifications/
│   │   │   └── page.tsx         # Lista de notificaciones
│   │   ├── communities/
│   │   │   ├── page.tsx         # Gestión de comunidades
│   │   │   ├── not-found.tsx    # Página de comunidad no encontrada
│   │   │   ├── create/          # Crear comunidad
│   │   │   ├── joined/          # Comunidades unidas
│   │   │   └── [id]/
│   │   │       └── edit/        # Editar comunidad
│   │   └── connects/
│   │       ├── page.tsx         # Gestión de CoreConnects
│   │       ├── not-found.tsx    # Página de connect no encontrado
│   │       ├── create/          # Crear CoreConnect
│   │       └── [id]/
│   │           ├── edit/        # Editar CoreConnect
│   │           └── error.tsx    # Página de error del connect
│   ├── globals.css              # Estilos globales
│   └── layout.tsx               # Root layout
├── src/
│   ├── db/                       # Base de datos
│   │   ├── index.ts             # Configuración de Drizzle
│   │   └── schema/
│   │       ├── auth-schema.ts   # Schema de autenticación (Better Auth)
│   │       ├── category.ts      # Schema de categorías
│   │       ├── community.ts     # Schema de comunidades y miembros
│   │       ├── connects.ts      # Schema de eventos, ubicaciones y asistentes
│   │       ├── notifications.ts # Schema de notificaciones
│   │       └── index.ts
│   ├── features/                 # Features del proyecto
│   │   ├── auth/                # Feature de autenticación
│   │   │   ├── actions/
│   │   │   │   └── auth-actions.ts      # Server Actions
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   └── ForgotPasswordForm.tsx
│   │   │   ├── schemas/
│   │   │   │   └── authSchema.ts        # Validación con Zod
│   │   │   ├── services/
│   │   │   │   ├── AuthRepository.ts
│   │   │   │   └── AuthService.ts
│   │   │   └── index.ts
│   │   ├── communities/         # Feature de comunidades
│   │   │   ├── actions/
│   │   │   │   ├── community-actions.ts   # Server Actions para comunidades
│   │   │   │   └── membership-action.ts   # Server Actions para miembros
│   │   │   └── components/
│   │   │       ├── CommunityActionsPanel.tsx       # Panel de acciones (editar/unirse)
│   │   │       ├── CommunityCard.tsx               # Tarjeta de comunidad
│   │   │       ├── CommunityForm.tsx               # Formulario CRUD con imagen
│   │   │       ├── CommunityMembership.tsx         # Gestión de membresía
│   │   │       ├── CommunityWithConnectsCard.tsx   # Tarjeta de connect en comunidad
│   │   │       ├── CreateCoreCommunity.tsx         # Crear comunidad
│   │   │       ├── DeleteCommunityForm.tsx         # Eliminar comunidad
│   │   │       ├── DeleteCommunityModal.tsx        # Modal de confirmación
│   │   │       ├── EditCoreCommunity.tsx           # Editar comunidad
│   │   │       ├── FeatureCommunities.tsx          # Sección destacada pública
│   │   │       ├── MyCommunities.tsx               # Lista de mis comunidades
│   │   │       ├── NotCommunities.tsx              # Estado vacío
│   │   │       ├── PublicCommunityCard.tsx         # Tarjeta pública de comunidad
│   │   │       └── UpcomingCommunityConnects.tsx   # Próximos connects de la comunidad
│   │   │   ├── policies/
│   │   │   │   └── communityPolicies.ts            # Políticas de acceso
│   │   │   ├── schemas/
│   │   │   │   └── communitySchema.ts              # Validación con Zod
│   │   │   ├── services/
│   │   │   │   ├── CommunityRepository.ts
│   │   │   │   ├── CommunityService.ts
│   │   │   │   ├── MembershipRepository.ts
│   │   │   │   └── MembershipService.ts
│   │   │   ├── stores/
│   │   │   │   └── communityStore.ts               # Estado global con Zustand
│   │   │   ├── types/
│   │   │   │   └── community.types.ts
│   │   │   └── index.ts
│   │   ├── connects/            # Feature de eventos (CoreConnect)
│   │   │   ├── actions/
│   │   │   │   ├── attendance-action.ts   # Server Action para asistencia
│   │   │   │   └── connect-action.ts      # Server Actions CRUD de eventos
│   │   │   ├── components/
│   │   │   │   ├── AttendanceToggleButton.tsx    # Confirmar/cancelar asistencia
│   │   │   │   ├── CategoryCard.tsx              # Tarjeta de categoría con fallback gradiente
│   │   │   │   ├── CategoryList.tsx              # Sección exploración por categoría
│   │   │   │   ├── ConnectCard.tsx               # Tarjeta de evento con acciones
│   │   │   │   ├── ConnectForm.tsx               # Formulario de evento
│   │   │   │   ├── ConnectLocation.tsx           # Muestra ubicación del evento
│   │   │   │   ├── CreateConnect.tsx             # Crear evento
│   │   │   │   ├── DeleteConnectForm.tsx         # Eliminar evento
│   │   │   │   ├── DeleteConnectModal.tsx        # Modal de confirmación
│   │   │   │   ├── DynamicConnectLocation.tsx    # Carga dinámica de ubicación
│   │   │   │   ├── EditConnect.tsx               # Editar evento
│   │   │   │   ├── LocationPicker.tsx            # Selector de ubicación con mapa
│   │   │   │   ├── MyConnects.tsx                # Lista de mis eventos
│   │   │   │   ├── NotConnects.tsx               # Estado vacío de eventos
│   │   │   │   ├── OrganizerCard.tsx             # Tarjeta del organizador
│   │   │   │   ├── PublicConnectCard.tsx         # Tarjeta pública (sin permisos)
│   │   │   │   ├── UncomingConnects.tsx          # Próximos CoreConnects (área pública)
│   │   │   │   └── index.ts
│   │   │   ├── policies/
│   │   │   │   ├── ConnectAttendeesPolicy.ts     # Política de asistencia
│   │   │   │   └── ConnectPolicy.ts              # Política general de eventos
│   │   │   ├── schemas/
│   │   │   │   └── connectSchema.ts              # Validación (discriminated union)
│   │   │   ├── services/
│   │   │   │   ├── CategoryRepository.ts
│   │   │   │   ├── CategoryService.ts
│   │   │   │   ├── ConnectAttendeesRepository.ts  # Capa de datos de asistentes
│   │   │   │   ├── ConnectAttendeesService.ts     # Lógica de asistencia
│   │   │   │   ├── ConnectRepository.ts
│   │   │   │   └── ConnectSevice.ts
│   │   │   ├── stores/
│   │   │   │   └── connect.store.ts              # Estado global de connects
│   │   │   └── types/
│   │   │       ├── connect.types.ts
│   │   │       └── index.ts
│   │   └── notifications/       # Feature de notificaciones
│   │       ├── components/
│   │       │   ├── NotificationList.tsx
│   │       │   └── index.ts
│   │       ├── services/
│   │       │   ├── NotificationRepository.ts
│   │       │   ├── NotificationService.ts
│   │       │   └── index.ts
│   │       └── types/
│   │           └── index.ts
│   ├── lib/
│   │   ├── auth.ts              # Configuración de Better Auth
│   │   ├── auth-client.ts       # Cliente de autenticación
│   │   ├── auth-server.ts       # Helpers de auth para servidor
│   │   ├── limiter.ts           # Rate limiting con Upstash Redis
│   │   ├── nodemailer.ts        # Configuración de Nodemailer
│   │   └── pusher.ts            # Configuración de Pusher
│   └── shared/
│       ├── components/
│       │   ├── dashboard/
│       │   │   ├── DashboardNavigation.tsx
│       │   │   ├── DashboardPanel.tsx
│       │   │   ├── MobileSidebar.tsx
│       │   │   ├── NotificationsPanel.tsx
│       │   │   ├── UserMenu.tsx
│       │   │   └── index.ts
│       │   ├── forms/
│       │   │   ├── Form.tsx
│       │   │   ├── FormInput.tsx
│       │   │   ├── FormLabel.tsx
│       │   │   ├── FormError.tsx
│       │   │   ├── FormSubmit.tsx
│       │   │   └── index.ts
│       │   ├── typography/
│       │   │   ├── Heading.tsx
│       │   │   └── index.ts
│       │   └── ui/
│       │       ├── Footer.tsx
│       │       ├── GuestNavigation.tsx
│       │       ├── Header.tsx
│       │       ├── Hero.tsx
│       │       ├── Logo.tsx
│       │       ├── Spinner.tsx
│       │       └── index.ts
│       └── utils/
│           ├── date.ts          # Helpers de fechas
│           ├── ip.ts            # Utilidad para obtener IP del cliente
│           ├── metadata.ts      # Helpers de metadata de páginas
│           └── index.ts
├── drizzle/                      # Migraciones de base de datos (0000 - 0010)
├── public/
│   ├── categoria_01.jpg - categoria_12.jpg  # Imágenes de categorías
│   ├── logo-core.png            # Logo de la aplicación
│   └── Connects/                # Assets de eventos
├── drizzle.config.ts            # Configuración de Drizzle
├── next.config.ts               # Configuración de Next.js
├── tsconfig.json                # Configuración de TypeScript
└── package.json
```

## 🎨 Componentes Implementados

### UI Components

- **Header**: Encabezado principal con logo y navegación diferenciada (autenticado / invitado)
- **Footer**: Pie de página con logo, aviso de seguridad (sin tarjetas de crédito), atribución a MicroWeb-cr, derechos reservados y gradiente decorativo
- **Hero**: Sección destacada de página de inicio con CTA (texto corregido sin `\n` literales)
- **Logo**: Componente de imagen del logo
- **GuestNavigation**: Navegación con botones de login/registro elegantes
- **Spinner**: Indicador de carga
- **UserNavigation**: Navegación para usuarios autenticados con acceso al dashboard

### Form Components

- **Form**: Contenedor de formularios con manejo de Server Actions
- **FormInput**: Input reutilizable con estilos consistentes y estados de error
- **FormLabel**: Labels accesibles para formularios
- **FormError**: Componente para mostrar errores de validación
- **FormSubmit**: Botón de submit con estados de loading

### Typography Components

- **Heading**: Componente de encabezados con variantes (h1, h2, h3)

### Auth Components

- **LoginForm**: Formulario de inicio de sesión con validación
- **RegisterForm**: Formulario de registro de usuarios con validación
- **ForgotPasswordForm**: Formulario de recuperación de contraseña
- **SetPasswordForm**: Formulario para restablecer contraseña con token

### Dashboard Components

- **DashboardNavigation**: Barra de navegación lateral con diseño oscuro elegante
- **DashboardPanel**: Panel contenedor principal con top-bar y sidebar responsive
- **MobileSidebar**: Navegación móvil responsive con diseño oscuro
- **NotificationsPanel**: Badge de notificaciones con contador en tiempo real (Pusher)
- **UserMenu**: Menú desplegable de usuario con opciones de perfil y cierre de sesión

### Notification Components

- **NotificationList**: Lista de notificaciones con animaciones de entrada, indicadores de lectura y formato de fecha localizado

### Community Components

- **CommunityCard**: Tarjeta de comunidad con imagen, contador de miembros y acciones
- **CommunityForm**: Formulario reutilizable para crear/editar con preview de imagen (UploadThing)
- **CommunityWithConnectsCard**: Tarjeta compacta de un CoreConnect dentro de la página de comunidad
- **FeatureCommunities**: Sección pública de comunidades destacadas, ordenadas por número de miembros
- **PublicCommunityCard**: Tarjeta pública de comunidad (imagen, miembros, descripción, link)
- **UpcomingCommunityConnects**: Sección de próximos CoreConnects en la página pública de comunidad
- **CreateCoreCommunity**: Página de creación de comunidades
- **EditCoreCommunity**: Página de edición de comunidades
- **MyCommunities**: Lista de comunidades propias del usuario
- **CommunityActionsPanel**: Panel de acciones (editar, unirse/salir)
- **CommunityMembership**: Gestión de membresía con botones de unirse y salir
- **DeleteCommunityModal**: Modal de confirmación para eliminar comunidad
- **DeleteCommunityForm**: Formulario de eliminación
- **NotCommunities**: Estado vacío cuando no hay comunidades

### Connect Components (Eventos CoreConnect)

- **ConnectCard**: Tarjeta de evento con imagen, fecha, acciones y permisos contextuales
- **ConnectForm**: Formulario completo con toggle virtual/presencial, validación dinámica
- **ConnectLocation**: Muestra la ubicación del evento (nombre, dirección, mapa)
- **DynamicConnectLocation**: Carga dinámica (SSR desactivado) del mapa de ubicación
- **CreateConnect**: Página de creación de eventos con React Hook Form
- **EditConnect**: Página de edición de eventos con valores precargados
- **DeleteConnectModal**: Modal de confirmación para eliminar evento
- **DeleteConnectForm**: Formulario de eliminación de evento
- **MyConnects**: Lista de eventos del usuario con acciones contextuales
- **NotConnects**: Estado vacío cuando no hay eventos
- **AttendanceToggleButton**: Botón para confirmar o cancelar asistencia en tiempo real
- **OrganizerCard**: Tarjeta con avatar y nombre del organizador del evento
- **LocationPicker**: Selector de ubicación con mapa interactivo (React Leaflet + HERE Maps)
- **PublicConnectCard**: Tarjeta pública de evento sin permisos (usa `SelectConnect` directamente)
- **UncomingConnects**: Sección de próximos CoreConnects en la página principal (filtra por fecha Y hora)
- **CategoryCard**: Tarjeta de categoría con imagen o fallback de gradiente rotativo por índice
- **CategoryList**: Sección de exploración por categoría con grid responsivo (2→3→4→5 columnas)

## 🛣️ Rutas Implementadas

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/` | Página de inicio con Hero, próximos connects, comunidades destacadas y categorías | ✅ Implementado |
| `/communities/[id]` | Detalle público de comunidad (OpenGraph) | ✅ Implementado |
| `/connects/[id]` | Detalle público de CoreConnect con asistencia | ✅ Implementado |
| `/categories/[id]` | Connects futuros filtrados por categoría con hero de imagen | ✅ Implementado |
| `/auth/login` | Inicio de sesión | ✅ Implementado |
| `/auth/register` | Registro de usuario | ✅ Implementado |
| `/auth/forgot-password` | Recuperación de contraseña | ✅ Implementado |
| `/auth/reset-password` | Restablecer contraseña | ✅ Implementado |
| `/dashboard` | Panel administrativo de usuario | ✅ Implementado |
| `/dashboard/notifications` | Lista de notificaciones | ✅ Implementado |
| `/dashboard/communities` | Gestión de comunidades | ✅ Implementado |
| `/dashboard/communities/create` | Crear nueva comunidad | ✅ Implementado |
| `/dashboard/communities/joined` | Comunidades a las que se unió | ✅ Implementado |
| `/dashboard/communities/[id]/edit` | Editar comunidad | ✅ Implementado |
| `/dashboard/connects` | Gestión de CoreConnects | ✅ Implementado |
| `/dashboard/connects/create` | Crear nuevo CoreConnect | ✅ Implementado |
| `/dashboard/connects/[id]/edit` | Editar CoreConnect | ✅ Implementado |
| `/api/auth/[...all]` | API routes de Better Auth | ✅ Implementado |
| `/api/user/notifications` | API de conteo de notificaciones | ✅ Implementado |
| `/api/categories` | API de categorías de eventos | ✅ Implementado |
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

# HERE Maps API (para LocationPicker y geocoding)
NEXT_PUBLIC_HERE_API_KEY="tu-here-maps-api-key"

# Upstash Redis (para rate limiting)
UPSTASH_REDIS_REST_URL="https://tu-redis.upstash.io"
UPSTASH_REDIS_REST_TOKEN="tu-upstash-token"
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

#### **Categories**
- `id` (UUID): Identificador único
- `name` (VARCHAR): Nombre de la categoría
- `slug` (VARCHAR): Slug único para URLs
- `createdAt` (TIMESTAMP): Fecha de creación

#### **Connects** (Eventos)
- `id` (UUID): Identificador único
- `title` (VARCHAR 255): Título del evento
- `details` (TEXT): Descripción detallada del evento
- `availableSeats` (INTEGER): Cupos disponibles
- `date` (DATE): Fecha del evento
- `time` (TIME): Hora del evento
- `image` (VARCHAR 100): URL de la imagen del evento
- `communityId` (UUID): ID de la comunidad organizadora (FK - cascade delete)
- `categoryId` (UUID): ID de la categoría del evento
- `createdBy` (TEXT): ID del usuario creador (FK - cascade delete)
- `virtual` (BOOLEAN): Si es evento virtual o presencial (default: false)
- `meetingUrl` (TEXT): URL de reunión virtual (opcional, para eventos virtuales)

#### **ConnectLocations** (Ubicaciones de Eventos)
- `id` (UUID): Identificador único
- `connectId` (UUID): ID del evento (FK - cascade delete)
- `placeName` (VARCHAR 255): Nombre del lugar
- `address` (VARCHAR 255): Dirección completa
- `city` (VARCHAR 100): Ciudad
- `country` (VARCHAR 100): País
- `lat` (DOUBLE PRECISION): Latitud (coordenada geográfica)
- `lng` (DOUBLE PRECISION): Longitud (coordenada geográfica)
- **Foreign Key**: Cascade delete cuando se elimina el evento

#### **ConnectAttendees** (Asistentes a Eventos)
- `connectId` (UUID): ID del evento (FK - cascade delete)
- `userId` (TEXT): ID del usuario asistente (FK - cascade delete)
- **Primary Key**: Compuesta (connectId, userId)

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

## 📧 Sistema de Emails

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

## 🎉 Sistema de Eventos (CoreConnect)

El proyecto implementa un sistema completo de eventos llamado **CoreConnect** para crear encuentros globales entre colaboradores:

### Características

- ✅ **CRUD de Eventos**: Crear, leer, actualizar y eliminar eventos
- ✅ **Eventos Virtuales y Presenciales**: Sistema de discriminated union para distinguir tipos
- ✅ **Enlaces de Reunión Virtual**: Campo opcional `meetingUrl` para eventos virtuales (Zoom, Teams, Google Meet, etc.)
- ✅ **Ubicación Geográfica**: Selector de ubicación con mapa interactivo para eventos presenciales
- ✅ **Sistema de Categorías**: Organización de eventos por categorías
- ✅ **Gestión de Cupos**: Control de disponibilidad de asientos
- ✅ **Integración con Comunidades**: Eventos asociados a comunidades específicas
- ✅ **Validación Robusta**: Schemas con Zod usando discriminated union
- ✅ **Políticas de Acceso**: Solo administradores de comunidades pueden crear eventos
- ✅ **Imágenes de Eventos**: Integración con UploadThing para imágenes
- ✅ **Responsive**: Formulario adaptado a todos los tamaños de pantalla

### Arquitectura

El sistema de eventos sigue el patrón Repository + Service + Policy:

```typescript
// Repositories - Acceso a datos
ConnectRepository
  ├── insert()              // Insertar evento (con ubicación si es presencial)

CategoryRepository
  ├── getAll()              // Obtener todas las categorías

// Services - Lógica de negocio
ConnectService
  ├── createConnect()       // Crear evento con validación de permisos

CategoryService
  ├── getAll()              // Obtener categorías

// Policies - Validación de permisos
CommunityPolicy
  ├── isAdmin()             // Verificar si usuario es admin de la comunidad
```

### Eventos Virtuales vs Presenciales

El sistema usa una **discriminated union** de Zod para manejar dos tipos de eventos:

#### **Eventos Virtuales** (`virtual: true`)
```typescript
{
  virtual: true,
  meetingUrl?: string,  // Opcional: URL de Zoom, Teams, Google Meet, etc.
  // ... campos comunes
}
```

- Campo `meetingUrl` **opcional** para enlace de reunión
- No requiere ubicación física
- Validación de URL cuando se proporciona
- Perfecto para: reuniones remotas, webinars, talleres online

#### **Eventos Presenciales** (`virtual: false`)
```typescript
{
  virtual: false,
  location: {
    placeName: string,
    address: string,
    city: string,
    country: string,
    lat: number,
    lng: number
  },
  // ... campos comunes
}
```

- Campo `location` **requerido** con datos completos
- Selector de ubicación con mapa interactivo (LocationPicker)
- Validación de coordenadas geográficas
- Perfecto para: meetups, eventos corporativos, talleres presenciales

### Schemas de Validación

```typescript
// Schema Base - Campos comunes a todos los eventos
const BaseSchema = z.object({
  title: z.string().min(1, { message: "El Titulo es requerido." }),
  details: z.string().min(50, { message: "Añade más detalles al Evento." }),
  image: z.url({ message: "La imagen es requerida." }),
  communityId: z.uuid({ message: "Elige Una CoreComunity." }),
  availableSeats: z.preprocess(Number, z.number().min(1)),
  date: z.iso.date({ message: "Añade una Fecha." }),
  time: z.string().min(1, { message: "La Hora es requerida." }),
  categoryId: z.uuid({ message: "Elige Una Categoría." }),
});

// Schema de Ubicación - Para eventos presenciales
const ConnectLocationSchema = z.object({
  placeName: z.string().min(1, { message: "El Nombre del Lugar es requerido." }),
  address: z.string().min(1, { message: "La Dirección del Lugar es requerida." }),
  city: z.string().min(1, { message: "La ciudad es requerida." }),
  country: z.string().min(1, { message: "El país es requerido." }),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180)
});

// Schema de Evento Virtual
const VirtualConnectSchema = BaseSchema.extend({
  virtual: z.literal(true),
  meetingUrl: z.string().url({ message: "Ingresa una URL válida." })
    .optional().or(z.literal('')),  // Opcional o string vacío
});

// Schema de Evento Presencial
const PhysicalConnectSchema = BaseSchema.extend({
  virtual: z.literal(false),
  location: ConnectLocationSchema,  // Requerido
});

// Discriminated Union - El sistema elige el schema correcto
export const ConnectSchema = z.discriminatedUnion("virtual", [
  VirtualConnectSchema,
  PhysicalConnectSchema,
]);

export type ConnectInput = z.infer<typeof ConnectSchema>;
```

### Componentes

```typescript
// Componentes principales
<ConnectForm />           // Formulario con toggle virtual/presencial
  ├── Toggle para seleccionar tipo de evento
  ├── Campos dinámicos según tipo
  ├── Campo meetingUrl (solo si es virtual)
  ├── LocationPicker (solo si es presencial)
  └── Validación con Zod discriminated union

<CreateConnect />         // Página de creación con React Hook Form
  ├── Gestión de estado compleja
  ├── Validación en tiempo real
  └── Integración con Server Actions

<LocationPicker />        // Selector de ubicación con mapa
  ├── React Leaflet para mapas interactivos
  ├── HERE Maps API para búsqueda
  ├── Marcador arrastrable
  ├── Autocompletado de direcciones
  └── Validación de coordenadas
```

### Sistema de Categorías

Las categorías organizan los eventos y se gestionan mediante:

```typescript
// Obtener todas las categorías
const categories = await categoryService.getAll();

// Estructura de categoría
type Category = {
  id: string;
  name: string;
  slug: string;
  createdAt: Date | null;
};
```

**API Route**: `/api/categories` (GET)
- Devuelve todas las categorías disponibles
- Usado en el selector de categorías del formulario

### LocationPicker - Mapa Interactivo

El componente `LocationPicker` proporciona una interfaz interactiva para seleccionar ubicaciones:

#### Características
- **Mapa Interactivo**: Visualización con React Leaflet
- **Búsqueda de Ubicaciones**: Integración con HERE Maps Geocoding API
- **Marcador Arrastrable**: Ajuste fino de la ubicación
- **Autocompletado**: Sugerencias de direcciones mientras escribes
- **Validación Automática**: Actualiza coordenadas y datos de ubicación
- **Carga Dinámica**: Se carga solo para eventos presenciales (optimiza bundle)

#### Uso
```typescript
// El componente es dinámico y solo se carga cuando se necesita
const DynamicLocationPicker = dynamic(() => import('./LocationPicker'), {
  ssr: false  // Desactiva SSR para usar APIs del navegador
});

// Dentro del formulario (solo eventos presenciales)
{!isVirtual && (
  <DynamicLocationPicker />
)}
```

#### Integración con React Hook Form
```typescript
const { setValue, watch } = useFormContext<ConnectInput>();

// Actualizar ubicación desde el mapa
const handleLocationSelect = (location: Location) => {
  setValue('location.placeName', location.title);
  setValue('location.address', location.address);
  setValue('location.city', location.city);
  setValue('location.country', location.country);
  setValue('location.lat', location.position.lat);
  setValue('location.lng', location.position.lng);
};
```

### Políticas de Acceso

Solo los **administradores** (creadores) de una comunidad pueden crear eventos:

```typescript
// CommunityPolicy
class CommunityPolicy {
  static isAdmin(user: User, community: SelectCoreCommunity): boolean {
    return user.id === community.createdBy;
  }
}

// Validación en el servicio
async createConnect(data: ConnectInput, user: User) {
  const community = await this.communityRepository.findById(data.communityId);
  
  if (!community || !CommunityPolicy.isAdmin(user, community)) {
    throw new Error('Acceso Denegado.');
  }
  
  await this.connectRepository.insert({...data, createdBy: user.id});
}
```

### Base de Datos - Relaciones

```sql
-- Tabla principal de eventos
CREATE TABLE connects (
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  details TEXT NOT NULL,
  available_seats INTEGER NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  image VARCHAR(100) NOT NULL,
  community_id UUID REFERENCES communities(id) ON DELETE CASCADE,
  category_id UUID NOT NULL,
  created_by TEXT REFERENCES users(id) ON DELETE CASCADE,
  virtual BOOLEAN DEFAULT FALSE NOT NULL,
  meeting_url TEXT  -- Opcional: para eventos virtuales
);

-- Tabla de ubicaciones (solo para eventos presenciales)
CREATE TABLE connect_locations (
  id UUID PRIMARY KEY,
  connect_id UUID REFERENCES connects(id) ON DELETE CASCADE,
  place_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL
);
```

### Uso - Crear un Evento

```typescript
// Evento Virtual
const virtualEvent = {
  title: 'Daily Standup',
  details: 'Reunión diaria del equipo de desarrollo para sincronizar avances',
  image: 'https://uploadthing.com/...',
  communityId: 'community-uuid',
  categoryId: 'category-uuid',
  availableSeats: 50,
  date: '2026-04-15',
  time: '09:00',
  virtual: true,
  meetingUrl: 'https://zoom.us/j/123456789'  // Opcional
};

// Evento Presencial
const physicalEvent = {
  title: 'Workshop de React',
  details: 'Taller práctico de React y Next.js para desarrolladores frontend',
  image: 'https://uploadthing.com/...',
  communityId: 'community-uuid',
  categoryId: 'category-uuid',
  availableSeats: 30,
  date: '2026-05-20',
  time: '14:00',
  virtual: false,
  location: {
    placeName: 'Centro de Innovación',
    address: 'Calle Principal 123',
    city: 'San José',
    country: 'Costa Rica',
    lat: 9.936561,
    lng: -84.107493
  }
};

// Crear evento (Server Action)
await createConnectAction(virtualEvent);
```

### Server Actions

```typescript
// connect-action.ts
'use server'

export async function createConnectAction(input: ConnectInput) {
  const { session } = await requireAuth();
  
  if (!session) {
    return { error: 'Acceso Denegado.', success: '' };
  }

  // Validación con Zod (discriminated union automática)
  const data = ConnectSchema.safeParse(input);
  
  if (!data.success) {
    return { error: 'Error de validación.', success: '' };
  }

  // Crear evento con validación de permisos
  await connectService.createConnect(data.data, session.user);

  return { error: '', success: 'CoreConnect creado correctamente.' };
}
```

### Método `findUncomingByCategory`

Filtrado de CoreConnects futuros por categoría con la misma lógica de fecha+hora que `findUncoming`:

```typescript
async findUncomingByCategory(categoryId: string): Promise<SelectConnect[]> {
    // Incluye eventos cuya fecha > hoy
    // O cuya fecha === hoy Y hora > ahora
    // Ordenado por fecha y hora ascendente
}
```

---

### 🎟️ Sistema de Asistencia (AttendanceToggleButton)

Los usuarios pueden confirmar o cancelar su asistencia a cualquier CoreConnect activo:

#### Arquitectura

```
ConnectAttendeesRepository  ← Acceso a DB (isAttending, insert, remove, count)
ConnectAttendeesService     ← Lógica: toggleAttendance + dispara notificación
ConnectAttendeesPolicy      ← Reglas: canConfirm / canCancel
attendance-action.ts        ← Server Action que invoca el service
AttendanceToggleButton.tsx  ← Botón cliente con estado optimista
```

#### Política de Acceso

```typescript
// ConnectAttendeesPolicy.ts
canConfirm(connect, user):
  - El evento no puede haber pasado ya
  - El usuario no puede ser el organizador
  - El usuario no puede estar ya apuntado

canCancel(connect, user):
  - El usuario tiene que estar apuntado actualmente
```

#### Componente

```tsx
// AttendanceToggleButton.tsx — estado optimista
<AttendanceToggleButton
  connectId={connect.id}
  userId={user.id}
  isAttending={isAttending}   // estado inicial desde el servidor
  communityId={connect.communityId}
/>
```

Cuando alguien confirma asistencia, se envía automáticamente una **notificación Pusher** al organizador del evento.

---

## 🔒 Rate Limiting

La aplicación protege sus rutas sensibles con **Upstash Redis** y **`@upstash/ratelimit`**:

### Configuración

```typescript
// src/lib/limiter.ts
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Ventana deslizante: máximo 3 peticiones por 10 minutos por IP
export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"),
});
```

### IP Helper

```typescript
// src/shared/utils/ip.ts — detecta IP real detrás de proxies/CDN
export function getIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
}
```

### Uso en Actions

```typescript
const ip = getIp(request);
const { success } = await rateLimiter.limit(ip);

if (!success) {
  return { error: "Demasiadas solicitudes. Inténtalo en unos minutos.", success: "" };
}
```

---

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

## 🎯 Mejoras Recientes

### Vistas Públicas, Asistencia y CRUD Completo de CoreConnect (v1.5.0)
- ✅ Página pública de detalle de CoreConnect (`/connects/[id]`) con OpenGraph metadata para compartir
- ✅ Página pública de detalle de CoreCommunity (`/communities/[id]`) con OpenGraph y Twitter Cards
- ✅ Sección "Próximos CoreConnects" en la página de comunidad (`UpcomingCommunityConnects`)
- ✅ Tarjeta del organizador (`OrganizerCard`) visible en la página de detalle del evento
- ✅ **Sistema de asistencia completo**: confirmar y cancelar asistencia con `AttendanceToggleButton`
  - Notificación en tiempo real al organizador cuando alguien confirma asistencia
  - Política de acceso: no puede confirmar el propio admin ni eventos pasados
  - Conteo de asistentes visible en listados y detalle
- ✅ `ConnectAttendeesRepository` y `ConnectAttendeesService` con patrón Repository
- ✅ `ConnectAttendeePolicy` y `ConnectPolicy` para validación de permisos
- ✅ **CRUD completo de CoreConnect**: editar (`EditConnect`) y eliminar (`DeleteConnectModal`)
- ✅ `ConnectCard` con acciones contextuales según permisos del usuario
- ✅ `MyConnects` y `NotConnects` para la vista de administración de eventos
- ✅ `ConnectLocation` y `DynamicConnectLocation` para mostrar la ubicación en el detalle
- ✅ **Rate Limiting** con Upstash Redis y `@upstash/ratelimit` (ventana deslizante 3 req/10 min)
- ✅ Nueva tabla `connectAttendees` en la base de datos (migración 0009)
- ✅ Utilidad `ip.ts` para obtener la IP real del cliente (proxy-aware)
- ✅ **Seguridad en links**: `target="_blank"` + `rel="noopener noreferrer"` en todos los enlaces para prevenir tabnabbing

### Sistema de Eventos CoreConnect (v1.4.0)
- ✅ Implementación completa del sistema de eventos (CoreConnect)
- ✅ Eventos virtuales con campo `meetingUrl` opcional para Zoom/Teams/Meet
- ✅ Eventos presenciales con sistema de ubicación geográfica
- ✅ LocationPicker interactivo con React Leaflet
- ✅ Integración con HERE Maps API para geocoding y búsqueda
- ✅ Discriminated union de Zod para validación de tipos de eventos
- ✅ Sistema de categorías para organizar eventos
- ✅ Políticas de acceso: Solo admin de comunidad puede crear eventos
- ✅ ConnectRepository y ConnectService con patrón Repository
- ✅ Gestión de cupos disponibles por evento
- ✅ Validación robusta de coordenadas geográficas
- ✅ Migración de base de datos con tablas connects y connect_locations
- ✅ API route para obtener categorías de eventos
- ✅ Carga dinámica de LocationPicker para optimizar bundle

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
- ✅ Formularios dinámicos con campos condicionales

### Correcciones Técnicas
- ✅ Fix de errores de hidratación en Headless UI components
- ✅ Corrección de sintaxis Drizzle ORM en queries
- ✅ Mejora en manejo de Client Components vs Server Components
- ✅ Optimización de fetch en NotificationsPanel
- ✅ Eliminación de clases dark mode (diseño oscuro fijo)
- ✅ Solución de conflictos de animación con CSS variables
- ✅ Fix de warnings de React con propiedades shorthand/non-shorthand
- ✅ Validación correcta de discriminated unions en React Hook Form

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

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
  - [x] Sistema de miembros (unirse / salir)
  - [x] Página pública de detalle de comunidad (OpenGraph + Twitter Cards)
  - [x] Próximos CoreConnects en la página de comunidad
- [x] **CoreConnect (Eventos)** - Sistema completo de eventos
  - [x] Crear eventos con validación de permisos
  - [x] Editar eventos existentes
  - [x] Eliminar eventos con modal de confirmación
  - [x] Eventos virtuales con campo `meetingUrl` opcional
  - [x] Eventos presenciales con ubicación geográfica
  - [x] LocationPicker con mapa interactivo (React Leaflet)
  - [x] Integración con HERE Maps API para búsqueda
  - [x] Sistema de categorías de eventos
  - [x] Discriminated union de Zod para tipos de eventos
  - [x] Validación robusta con políticas de acceso
  - [x] Gestión de cupos disponibles
  - [x] Subida de imágenes para eventos
  - [x] Página pública de detalle de evento (OpenGraph)
  - [x] Tarjeta del organizador en la página de detalle
  - [x] **Sistema de asistencia**: confirmar y cancelar con un click
  - [x] Notificación al organizador al confirmar asistencia
  - [x] Conteo de asistentes en tarjetas y detalle
- [x] **Área Pública completa** (parteOnce)
  - [x] Footer con logo, aviso de seguridad y atribución a MicroWeb-cr
  - [x] Sección "Próximos CoreConnects" filtrada por fecha y hora actual
  - [x] Sección "CoreCommunities Destacadas" ordenadas por número de miembros
  - [x] Sección "Explora por Categoría" con grid adaptativo e imágenes locales
  - [x] Página de categoría con hero, connects filtrados y botón de regreso
  - [x] Pool de conexiones robusto para Neon serverless
- [x] Gestión de uploads con UploadThing
  - [x] Subida de imágenes para comunidades y eventos
  - [x] Eliminación de imágenes antiguas
  - [x] Middleware de autenticación en uploads
- [x] **Notificaciones en tiempo real con Pusher**
  - [x] Integración de WebSockets
  - [x] Canales individualizados por usuario
  - [x] Actualización automática de UI
  - [x] Contador de notificaciones en tiempo real
- [x] **Rate Limiting con Upstash Redis**
  - [x] Ventana deslizante (3 peticiones / 10 minutos)
  - [x] Protección contra abuso de peticiones
- [x] **Seguridad en enlaces**: `target="_blank"` + `rel="noopener noreferrer"` en todos los links

### 🚧 Próximas Funcionalidades

- [ ] Ver asistentes de un evento
- [ ] Marcar notificaciones como leídas
- [ ] Sistema de perfiles de usuario completo
- [ ] Sistema de roles y permisos en comunidades
- [ ] Chat en tiempo real entre miembros
- [ ] Verificación de email automática al registrarse
- [ ] Sistema de reuniones departamentales

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
