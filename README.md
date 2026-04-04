# CoreMeet 🤝

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-1.5.4-orange?style=for-the-badge&logo=auth0&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45.1-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![AI SDK](https://img.shields.io/badge/AI_SDK-6.0.145-FF6B00?style=for-the-badge&logo=openai&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter-2.3.3-7C3AED?style=for-the-badge&logo=openai&logoColor=white)
![Headless UI](https://img.shields.io/badge/Headless_UI-2.2.9-66E3FF?style=for-the-badge&logo=headlessui&logoColor=black)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.71.2-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4.3.6-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![React Leaflet](https://img.shields.io/badge/React_Leaflet-5.0.0-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-8.0.2-339933?style=for-the-badge&logo=nodemailer&logoColor=white)
![UploadThing](https://img.shields.io/badge/UploadThing-7.7.4-F97316?style=for-the-badge&logo=upload&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.12-A855F7?style=for-the-badge&logo=zustand&logoColor=white)
![Sonner](https://img.shields.io/badge/Sonner-2.0.7-10B981?style=for-the-badge&logo=notifications&logoColor=white)
![Date-fns](https://img.shields.io/badge/Date--fns-4.1.0-770C56?style=for-the-badge&logo=calendar&logoColor=white)
![Heroicons](https://img.shields.io/badge/Heroicons-2.2.0-8B5CF6?style=for-the-badge&logo=heroicons&logoColor=white)
![Pusher](https://img.shields.io/badge/Pusher-5.3.3-300D4F?style=for-the-badge&logo=pusher&logoColor=white)
![Upstash Redis](https://img.shields.io/badge/Upstash_Redis-1.37.0-00C7B7?style=for-the-badge&logo=redis&logoColor=white)
![Upstash Ratelimit](https://img.shields.io/badge/Upstash_Ratelimit-2.0.8-00C7B7?style=for-the-badge&logo=speedtest&logoColor=white)

> **v1.0.0** — Primera versión completa de la plataforma.

## Tabla de Contenidos

- [Descripción](#-descripción)
- [Stack Tecnológico](#-stack-tecnológico)
- [Inicio Rápido](#-inicio-rápido)
- [Variables de Entorno](#-variables-de-entorno)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Arquitectura](#-arquitectura)
- [Por Dónde Entrarle al Código](#-por-dónde-entrarle-al-código)
- [Base de Datos](#-base-de-datos)
- [Módulos Principales](#-módulos-principales)
  - [Autenticación](#-autenticación)
  - [CoreCommunity — Comunidades](#-corecommunity--comunidades)
  - [CoreConnect — Eventos](#-coreconnect--eventos)
  - [Asistente IA](#-asistente-ia)
  - [Notificaciones en Tiempo Real](#-notificaciones-en-tiempo-real)
  - [Perfil de Usuario](#-perfil-de-usuario)
  - [Rate Limiting](#-rate-limiting)
  - [Gestión de Archivos](#-gestión-de-archivos)
  - [Emails Transaccionales](#-emails-transaccionales)
- [Rutas de la Aplicación](#-rutas-de-la-aplicación)
- [Sistema de Diseño](#-sistema-de-diseño)
- [Funcionalidades Completadas v1.0](#-funcionalidades-completadas-v10)
- [Próximas Funcionalidades](#-próximas-funcionalidades)
- [Convenciones de Código](#-convenciones-de-código)
- [Contacto](#-contacto)

---

## 📋 Descripción

**CoreMeet** es una red social empresarial para conectar equipos, departamentos y comunidades internas. Permite crear eventos (**CoreConnects**) y espacios colaborativos (**CoreCommunities**), con un asistente de inteligencia artificial que facilita la búsqueda de eventos y comunidades usando lenguaje natural.

### Características principales

| Módulo | Descripción |
|---|---|
| **CoreConnect** | Eventos presenciales y virtuales con cupos, asistencia y notificaciones |
| **CoreCommunity** | Comunidades con membresía, eventos asociados y página pública |
| **Asistente IA** | Chat conversacional con herramientas para buscar eventos, comunidades y categorías |
| **Notificaciones** | Tiempo real vía Pusher WebSockets con contador en header |
| **Autenticación** | Registro, login, verificación de email, recuperación de contraseña |
| **Rate Limiting** | Protección contra abuso con Upstash Redis (ventana deslizante) |
| **Uploads** | Gestión de imágenes con UploadThing |
| **Emails** | Transaccionales con Nodemailer y plantillas React Email |

---

## 🚀 Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| **Next.js** | 16.1.6 | Framework con App Router y Server Components |
| **React** | 19.2.3 | UI con Server y Client Components |
| **TypeScript** | 5.x | Type-safety en todo el proyecto |
| **Better Auth** | 1.5.4 | Autenticación completa (email, sesiones, reset password) |
| **Drizzle ORM** | 0.45.1 | ORM TypeScript-first para PostgreSQL |
| **PostgreSQL** | — | Base de datos relacional |
| **TailwindCSS** | 4.x | CSS utility-first con paleta personalizada |
| **AI SDK** (`ai`) | 6.0.145 | Streaming de respuestas y herramientas de IA |
| **@ai-sdk/react** | 3.0.147 | Hook `useChat` para el chat en el cliente |
| **@openrouter/ai-sdk-provider** | 2.3.3 | Proveedor de modelos LLM vía OpenRouter |
| **Headless UI** | 2.2.9 | Componentes accesibles sin estilos |
| **React Hook Form** | 7.71.2 | Formularios con validación eficiente |
| **Zod** | 4.3.6 | Validación de esquemas en cliente y servidor |
| **React Leaflet** | 5.0.0 | Mapas interactivos para eventos presenciales |
| **HERE Maps API** | — | Geocoding y búsqueda de ubicaciones |
| **Heroicons** | 2.2.0 | Iconos SVG |
| **Nodemailer** | 8.0.2 | Envío de emails transaccionales |
| **Sonner** | 2.0.7 | Notificaciones toast |
| **UploadThing** | 7.7.4 | Almacenamiento y gestión de imágenes |
| **Zustand** | 5.0.12 | Estado global del cliente |
| **Date-fns** | 4.1.0 | Manipulación de fechas |
| **Pusher** | 5.3.3 | WebSockets para tiempo real (servidor) |
| **pusher-js** | 8.4.3 | WebSockets para tiempo real (cliente) |
| **Upstash Redis** | 1.37.0 | Redis serverless para rate limiting |
| **@upstash/ratelimit** | 2.0.8 | Rate limiting con ventana deslizante |
| **Drizzle Kit** | 0.31.9 | Migraciones y studio de base de datos |

---

## ⚡ Inicio Rápido

### Prerrequisitos

- Node.js 20+
- PostgreSQL (local o Neon serverless)
- Cuentas en: UploadThing, Pusher, Upstash, OpenRouter, HERE Maps

### Instalación

```bash
git clone https://github.com/Errold146/CoreMeet.git
cd CoreMeet
npm install
```

### Comandos principales

```bash
npm run dev              # Servidor de desarrollo
npm run build            # Build de producción
npx drizzle-kit generate # Generar migraciones
npx drizzle-kit push     # Aplicar migraciones
npx drizzle-kit studio   # Explorador visual de la DB
npm run drizzle:seed     # Poblar DB con datos de prueba
```

---

## 🔑 Variables de Entorno

Crea `.env.local` en la raíz del proyecto:

```env
# Base de datos
DATABASE_URL="postgresql://usuario:password@host:5432/coremeet"

# Better Auth
BETTER_AUTH_SECRET="tu-secret-key-muy-seguro"
BETTER_AUTH_URL="http://localhost:3000"

# Email (SMTP)
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="tu@gmail.com"
EMAIL_PASS="tu-app-password"

# UploadThing
UPLOADTHING_TOKEN="tu-token"

# Pusher (reales en tiempo real)
NEXT_PUBLIC_PUSHER_KEY="tu-pusher-key"
NEXT_PUBLIC_PUSHER_CLUSTER="us2"
PUSHER_APP_ID="tu-app-id"
PUSHER_SECRET="tu-pusher-secret"

# HERE Maps API (geocoding)
NEXT_PUBLIC_HERE_API_KEY="tu-here-key"

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL="https://tu-redis.upstash.io"
UPSTASH_REDIS_REST_TOKEN="tu-token"

# OpenRouter (IA)
OPEN_ROUTER_KEY="tu-openrouter-key"
```

---

## 📁 Estructura del Proyecto

```
core-meet/
├── app/                              # App Router de Next.js
│   ├── (public)/                     # Rutas públicas (sin auth)
│   │   ├── layout.tsx               # Layout con Header y Footer
│   │   ├── page.tsx                 # Inicio: Hero + Connects + Comunidades + Categorías
│   │   ├── ai/
│   │   │   └── page.tsx             # Página del asistente de IA
│   │   ├── categories/[id]/         # Connects filtrados por categoría
│   │   ├── communities/[id]/        # Detalle público de comunidad (OpenGraph)
│   │   └── connects/[id]/           # Detalle público de evento + asistencia
│   ├── api/
│   │   ├── auth/[...all]/           # Handlers de Better Auth
│   │   ├── categories/route.ts      # GET: lista de categorías
│   │   ├── chat/route.ts            # POST: streaming de IA con herramientas
│   │   ├── user/notifications/      # GET: conteo de notificaciones no leídas
│   │   └── uploadthing/             # Upload + delete de archivos
│   ├── auth/                         # Flujo de autenticación
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   └── reset-password/
│   └── dashboard/                    # Panel privado (requiere auth)
│       ├── page.tsx                 # Resumen del dashboard
│       ├── profile/page.tsx         # Perfil editable del usuario
│       ├── security/page.tsx        # Cambio de contraseña
│       ├── notifications/page.tsx   # Lista completa de notificaciones
│       ├── communities/             # CRUD de comunidades
│       │   ├── page.tsx
│       │   ├── create/
│       │   ├── joined/              # Comunidades en las que participa
│       │   └── [id]/edit/
│       └── connects/                # CRUD de CoreConnects
│           ├── page.tsx
│           ├── create/
│           └── [id]/
│               ├── edit/
│               └── attendees/       # Lista de asistentes confirmados
├── src/
│   ├── db/
│   │   ├── index.ts                 # Pool de conexiones Drizzle + Neon
│   │   ├── schema/
│   │   │   ├── auth-schema.ts       # Tablas de Better Auth (users, sessions...)
│   │   │   ├── category.ts
│   │   │   ├── community.ts         # communities + community_members
│   │   │   ├── connects.ts          # connects + connect_locations + connect_attendees
│   │   │   ├── notifications.ts
│   │   │   └── index.ts             # Re-export de todos los schemas
│   │   └── seed/                    # Scripts de poblado inicial
│   ├── features/                     # Lógica de negocio por dominio
│   │   ├── ai/
│   │   │   ├── components/
│   │   │   │   └── IASearch.tsx     # Componente de chat con tool rendering
│   │   │   ├── tools/
│   │   │   │   ├── communityTools.ts
│   │   │   │   ├── connectTools.ts
│   │   │   │   ├── categoryTools.ts
│   │   │   │   └── index.ts         # Exporta el objeto `tools` para la API
│   │   │   └── types/
│   │   │       └── ai.types.ts      # Message tipado con InferUITools
│   │   ├── auth/
│   │   │   ├── actions/auth-actions.ts
│   │   │   ├── components/          # LoginForm, RegisterForm, ForgotPasswordForm
│   │   │   ├── schemas/authSchema.ts
│   │   │   └── services/            # AuthRepository, AuthService
│   │   ├── communities/
│   │   │   ├── actions/             # community-actions.ts, membership-action.ts
│   │   │   ├── components/          # 14 componentes (ver sección Módulos)
│   │   │   ├── policies/communityPolicies.ts
│   │   │   ├── schemas/communitySchema.ts
│   │   │   ├── services/            # CommunityRepository, CommunityService,
│   │   │   │                        # MembershipRepository, MembershipService
│   │   │   ├── stores/communityStore.ts
│   │   │   └── types/community.types.ts
│   │   ├── connects/
│   │   │   ├── actions/             # connect-action.ts, attendance-action.ts
│   │   │   ├── components/          # 18 componentes (ver sección Módulos)
│   │   │   ├── policies/            # ConnectPolicy, ConnectAttendeesPolicy
│   │   │   ├── schemas/connectSchema.ts
│   │   │   ├── services/            # ConnectRepository, ConnectService,
│   │   │   │                        # ConnectAttendeesRepository, ConnectAttendeesService,
│   │   │   │                        # CategoryRepository, CategoryService
│   │   │   ├── stores/connect.store.ts
│   │   │   └── types/connect.types.ts
│   │   ├── notifications/
│   │   │   ├── components/NotificationList.tsx
│   │   │   └── services/            # NotificationRepository, NotificationService,
│   │   │                            # NotificationPusher
│   │   └── profile/
│   │       ├── actions/
│   │       ├── components/          # ProfileForm, ProfileCard, ProfileCommunityCard,
│   │       │                        # ProfileConnectMiniCard
│   │       ├── schemas/
│   │       └── services/
│   ├── lib/
│   │   ├── auth.ts                  # Configuración central de Better Auth
│   │   ├── auth-client.ts           # authClient para componentes cliente
│   │   ├── auth-server.ts           # requireAuth() para server components/actions
│   │   ├── limiter.ts               # Ratelimit con Upstash (ventana deslizante)
│   │   ├── nodemailer.ts            # Transporter de Nodemailer
│   │   └── pusher.ts                # Clientes Pusher server-side
│   ├── emails/                       # Sistema de emails
│   │   ├── templates/               # Plantillas React Email
│   │   ├── services/                # Servicio de envío
│   │   ├── config/config.ts
│   │   └── types/
│   └── shared/
│       ├── components/
│       │   ├── dashboard/           # DashboardNavigation, DashboardPanel,
│       │   │                        # MobileSidebar, NotificationsPanel, UserMenu
│       │   ├── forms/               # Form, FormInput, FormLabel, FormError, FormSubmit
│       │   ├── typography/          # Heading
│       │   └── ui/                  # Header, Footer, Hero, Logo, GuestNavigation,
│       │                            # Spinner
│       └── utils/
│           ├── date.ts              # displayDate(), generatePageTitle()
│           ├── ip.ts                # getClientIp() proxy-aware
│           ├── uploadthing-utils.ts # deleteFileFromUploadThing()
│           └── auth.ts              # checkPassword()
├── drizzle/                          # Migraciones SQL (0000→0010)
├── drizzle.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 🏛️ Arquitectura

### Capas por feature

Cada dominio (`connects`, `communities`, `notifications`, etc.) sigue este patrón vertical:

```
┌──────────────────────────────────────────────────────┐
│  Next.js Page / API Route                            │  Server Component o Route Handler
├──────────────────────────────────────────────────────┤
│  Server Action  (actions/*.ts)                       │  'use server' — валидación de sesión, rate limit
├──────────────────────────────────────────────────────┤
│  Service  (services/*Service.ts)                     │  Lógica de negocio + aplicar Policies
├──────────────────────────────────────────────────────┤
│  Policy  (policies/*.ts)                             │  Reglas: canEdit, canDelete, canConfirm...
├──────────────────────────────────────────────────────┤
│  Repository  (services/*Repository.ts)               │  Consultas SQL vía Drizzle ORM
├──────────────────────────────────────────────────────┤
│  Schema  (db/schema/*.ts)                            │  Definición de tablas con Drizzle
└──────────────────────────────────────────────────────┘
```

### Inyección de dependencias

Los servicios se instancian una sola vez exportando un singleton con sus dependencias:

```typescript
// Ejemplo: ConnectAttendeesService recibe sus repos e instancia externa de notificaciones
export const connectAttendeesService = new ConnectAttendeesService(
    connectAttendeesRepository,   // IConnectAttendeesRepository
    connectRepository,            // IConnectRepository
    notificationService           // INotificationService
)
```

Esto hace los servicios **testeables** (se pueden mockear las dependencias) y desacoplados entre sí.

### Server Components vs Client Components

| Tipo | Dónde | Para qué |
|---|---|---|
| **Server Component** | Pages, layouts | Fetch de datos inicial |
| **Server Action** | `actions/*.ts` con `'use server'` | Mutaciones (crear, editar, eliminar) |
| **Client Component** | `'use client'` en components | Estado local, interactividad, formularios, WebSockets |

---

## 🧭 Por Dónde Entrarle al Código

Si eres nuevo en el proyecto, este es el orden recomendado para entender la base de código:

### 1. Base de datos — `src/db/schema/`
Empieza aquí. Define qué existe en el sistema. Los 5 archivos describen todas las entidades:
- `auth-schema.ts` — usuarios, sesiones (generado por Better Auth)
- `community.ts` — comunidades y membresía
- `connects.ts` — eventos, ubicaciones y asistentes
- `category.ts` — categorías
- `notifications.ts` — notificaciones

### 2. Tipos — `src/features/*/types/*.ts`
Cada feature expone sus tipos derivados del schema de Drizzle. Son el contrato entre capas.

### 3. Repositorios — `src/features/*/services/*Repository.ts`
Todas las consultas a la DB están aquí. Si quieres saber "qué datos se pueden obtener", mira los repositorios.

### 4. Servicios — `src/features/*/services/*Service.ts`
Contienen la lógica de negocio real: validaciones, permisos, orquestación. Si quieres saber "qué puede hacer la aplicación", mira los servicios.

### 5. Policies — `src/features/*/policies/*.ts`
Funciones puras que responden preguntas de permisos: `canEdit`, `canDelete`, `canConfirm`, etc. Sin efectos secundarios.

### 6. Server Actions — `src/features/*/actions/*.ts`
Punto de entrada desde el cliente. Verifican sesión, aplican rate limiting y delegan al servicio.

### 7. Componentes — `src/features/*/components/`
Los componentes en `'use client'` manejan estado local. Los que no tienen directiva son Server Components.

### 8. Rutas — `app/`
- `(public)/` → accesible sin login
- `dashboard/` → requiere sesión activa
- `api/` → endpoints (auth, chat IA, uploads, notificaciones)

---

## 🗄️ Base de Datos

### Esquema de tablas

```
users (Better Auth)
  ├── id, name, email, emailVerified, image, createdAt, updatedAt

communities
  ├── id, name, description, imageUrl, createdAt
  └── createdBy → users.id (CASCADE DELETE)

community_members
  ├── communityId → communities.id (CASCADE DELETE)
  └── userId → users.id (CASCADE DELETE)

connects
  ├── id, title, details, availableSeats, date, time, image
  ├── virtual (boolean), meetingUrl (nullable)
  ├── communityId → communities.id (CASCADE DELETE)
  ├── categoryId → categories.id
  └── createdBy → users.id (CASCADE DELETE)

connect_locations (solo eventos presenciales)
  ├── connectId → connects.id (CASCADE DELETE)
  └── placeName, address, city, country, lat, lng

connect_attendees
  ├── connectId → connects.id (CASCADE DELETE)
  ├── userId → users.id (CASCADE DELETE)
  └── createdAt

categories
  └── id, name, slug, imageUrl, createdAt

notifications
  └── id, userId, actorName, message, target, read, createdAt
```

### Migraciones

Las migraciones están en `drizzle/` (archivos `0000_*.sql` hasta `0010_*.sql`).

```bash
npx drizzle-kit generate   # Genera nueva migración desde cambios en schema
npx drizzle-kit push       # Aplica migraciones a la DB
npx drizzle-kit studio     # Explorador visual de la DB
```

---

## 📦 Módulos Principales

### 🔐 Autenticación

**Entry points:** `src/lib/auth.ts`, `src/lib/auth-client.ts`, `src/lib/auth-server.ts`

Better Auth gestiona sesiones, cookies y flujos de email. La configuración central está en `src/lib/auth.ts`.

```typescript
// En Server Components y Server Actions
import { requireAuth } from '@/src/lib/auth-server'
const { session } = await requireAuth()
if (!session) throw new Error('No autenticado')

// En Client Components
import { authClient } from '@/src/lib/auth-client'
const { data: session } = authClient.useSession()
```

**Rutas del flujo:**
- `POST /api/auth/[...all]` — Todos los handlers de Better Auth
- `app/auth/login` → `app/auth/register` → verificación de email → `app/dashboard`
- `app/auth/forgot-password` → email con token → `app/auth/reset-password`

---

### 🏘️ CoreCommunity — Comunidades

**Entry points:** `src/features/communities/`

Flujo completo de una **creación de comunidad**:

```
CreateCoreCommunity.tsx (Client)
  → createCommunityAction() (Server Action)
    → CommunitySchema.safeParse() (Zod)
    → communityService.createCommunity() (Service)
      → CommunityPolicy.isAdmin() (Policy)
      → communityRepository.insert() (Repository → DB)
```

**Permisos:**
- Crear comunidad → cualquier usuario autenticado
- Editar / Eliminar → solo el creador (`CommunityPolicy.isAdmin`)
- Unirse / Salir → cualquier usuario que no sea el creador

**Componentes clave:**
| Componente | Propósito |
|---|---|
| `CommunityForm` | Formulario creación/edición con preview de imagen |
| `CommunityCard` | Tarjeta con imagen, miembros y acciones contextuales |
| `CommunityMembership` | Toggle unirse/salir con feedback toast |
| `FeatureCommunities` | Sección pública con las más populares |
| `UpcomingCommunityConnects` | Próximos eventos de la comunidad |
| `DeleteCommunityModal` | Modal con confirmación por contraseña |

---

### 🎉 CoreConnect — Eventos

**Entry points:** `src/features/connects/`

#### Discriminated Union (Virtual vs Presencial)

```typescript
// connectSchema.ts
const VirtualConnectSchema = BaseSchema.extend({
    virtual: z.literal(true),
    meetingUrl: z.string().url().optional().or(z.literal('')),
})

const PhysicalConnectSchema = BaseSchema.extend({
    virtual: z.literal(false),
    location: ConnectLocationSchema,   // requerido
})

export const ConnectSchema = z.discriminatedUnion('virtual', [
    VirtualConnectSchema,
    PhysicalConnectSchema,
])
```

#### Sistema de asistencia — Flujo completo

```
AttendanceToggleButton (Client) — estado local canConfirm/canCancel
  → toggleAttendanceAction() (Server Action)
    → rateLimit.limit(ip) — máx 3 req / 10 min
    → connectAttendeesService.toggleAttendance()
      → ConnectAttendeesPolicy.canConfirm(user, connect, isAttending, attendanceCount)
        · isPastConnect?  → false
        · isAdmin?        → false
        · isAttending?    → false
        · seats full?     → false  ← cupos dinámicos
      → connectAttendeesRepository.insert() / remove()
      → notificationService.createAndNotify() al organizador
```

#### Cupos dinámicos

`availableSeats` se guarda al crear el evento. El conteo real de asistentes (`findAttendeesCount`) se resta en runtime:

```typescript
// ConnectSevice.ts — getConnectWithDetails()
const [isAttending, attendanceCount] = await Promise.all([
    connectAttendeesRepository.isUserAttending(user.id, connect.id),
    connectAttendeesRepository.findAttendeesCount(connect.id)
])
// remainingSeats = connect.availableSeats - attendanceCount
```

La UI muestra: `45 de 50 cupos` con colores: verde → naranja (≤5) → rojo (lleno).

#### Notificación al cancelar un evento

Cuando un admin elimina un CoreConnect, **todos los asistentes reciben una notificación automática**:

```typescript
// ConnectSevice.ts — deleteConnect()
const attendees = await connectAttendeesRepository.findAttendeesByConnectId(connectId)
await Promise.all(
    attendees.map(attendee =>
        notificationService.createAndNotify({
            userId: attendee.userId,
            actorName: user.name,
            message: 'Ha cancelado el CoreConnect: ',
            target: connect.title
        })
    )
)
await connectRepository.delete(connectId)
```

**Componentes clave:**
| Componente | Propósito |
|---|---|
| `ConnectForm` | Formulario dinámico Virtual/Presencial |
| `ConnectCard` | Tarjeta con acciones según permisos del usuario |
| `AttendanceToggleButton` | Confirmar/cancelar asistencia con estado optimista |
| `LocationPicker` | Mapa interactivo con HERE Maps (carga dinámica, SSR off) |
| `OrganizerCard` | Tarjeta del organizador en el detalle público |
| `MyConnects` | Lista de eventos propios con acciones CRUD |
| `UncomingConnects` | Próximos eventos filtrados por fecha y hora actual |

---

### 🤖 Asistente IA

**Entry points:** `app/api/chat/route.ts`, `src/features/ai/`

Chat de lenguaje natural para buscar eventos y comunidades. Usa el AI SDK de Vercel con streaming y **herramientas (tool calls)** que consultan la DB en tiempo real.

#### Arquit ectura

```
IASearch.tsx (Client)
  useChat<Message>()  ←→  POST /api/chat
                              ├── streamText() con Vercel AI SDK
                              ├── Model: stepfun/step-3.5-flash via OpenRouter
                              └── tools: { getRecommendedConnects, getUpcomingConnects,
                                           getConnectsByCategory, getConnectsByLocation,
                                           getConnectsByDate, getRecommendedCommunities,
                                           getFeaturedCommunities, getCategories }
```

#### Herramientas disponibles

| Herramienta | Cuándo se invoca | Qué hace |
|---|---|---|
| `getRecommendedConnects` | Usuario busca eventos por tema | `connectService.searchByTopicEnriched(query)` |
| `getUpcomingConnects` | "¿Qué eventos hay próximamente?" | `connectService.getUpcomingEnriched(limit)` |
| `getConnectsByCategory` | Menciona una categoría explícita | `connectService.getConnectsByCategoryName(name)` |
| `getConnectsByLocation` | Menciona una ciudad o país | `connectService.getConnectsByLocation(location)` — hace `ilike` en `city` y `country` de `connectLocations` |
| `getConnectsByDate` | Menciona una fecha o período ("hoy", "20 de mayo", "esta semana") | `connectService.getConnectsByDateRange(startDate, endDate)` — el modelo resuelve fechas relativas con la fecha actual inyectada en el system prompt |
| `getRecommendedCommunities` | Busca comunidades por tema | `communityService.searchCommunityByTopicEnriched(query)` |
| `getFeaturedCommunities` | "Comunidades populares" | `communityService.getFeatureCommunities()` |
| `getCategories` | "¿Qué categorías existen?" | `categoryService.getAllCategories()` |

#### Renderizado de herramientas en el cliente

El componente `IASearch.tsx` detecta los tool parts del mensaje con un helper robusto que maneja las dos formas en que el AI SDK v6 puede entregarlos:

```typescript
// Maneja ToolUIPart estático (type: 'tool-{name}')
// y DynamicToolUIPart (type: 'tool-output-available', toolName: string)
function getReadyToolName(part: any): string | null {
    if (part.state !== 'output-available') return null
    if (part.type === 'tool-output-available' && part.toolName) return part.toolName
    if (typeof part.type === 'string' && part.type.startsWith('tool-')) return part.type.slice(5)
    return null
}
```

Los resultados se renderizan como tarjetas interactivas con `target="_blank"` directamente dentro del bubble de la IA.

#### Añadir una nueva herramienta

1. Crear la función en `src/features/ai/tools/miTool.ts`:
```typescript
import { tool } from 'ai'
import z from 'zod'

export const miTools = {
    getMiDato: tool({
        description: 'Cuando usar esta herramienta...',
        inputSchema: z.object({ query: z.string() }),
        execute: async ({ query }) => {
            const data = await miService.buscar(query)
            return { data }
        }
    })
}
```
2. Añadir al barrel en `src/features/ai/tools/index.ts`.
3. Añadir el renderizado del output en `IASearch.tsx` dentro del `message.parts.map`.

---

### 🔔 Notificaciones en Tiempo Real

**Entry points:** `src/features/notifications/`, `src/lib/pusher.ts`

#### Flujo

```
Server Action → notificationService.createAndNotify(data)
    → notificationRepository.create()        → guarda en DB
    → notificationPusher.notify(notification) → pusher.trigger()
        → Cliente (NotificationList.tsx)
            channel.bind('new-notification', handler)
            → actualiza estado local
            → incrementa badge del header
```

#### Canal por usuario

```typescript
// Servidor — pusher.ts
pusher.trigger(`notifications-channel-${userId}`, 'new-notification', notification)

// Cliente — NotificationList.tsx
const channel = pusher.subscribe(`notifications-channel-${userId}`)
channel.bind('new-notification', (notification) => {
    setNotifications(prev => [notification, ...prev])
})
```

**Cuándo se generan notificaciones:**
- Alguien confirma asistencia a tu CoreConnect
- Un admin cancela un CoreConnect al que tenías asistencia confirmada

---

### 👤 Perfil de Usuario

**Entry points:** `src/features/profile/`, `app/dashboard/profile/`, `app/dashboard/security/`

- `ProfileForm` — Editar nombre y foto de perfil con UploadThing
- `ProfileCard` — Resumen visual del perfil
- `ProfileCommunityCard` — Tarjeta compacta de comunidad en el perfil
- `ProfileConnectMiniCard` — Tarjeta mini de evento en el perfil
- `app/dashboard/security/page.tsx` — Cambio de contraseña

---

### 🛡️ Rate Limiting

**Entry point:** `src/lib/limiter.ts`

```typescript
// Ventana deslizante: 3 peticiones por IP en 10 minutos
export const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, '10 m'),
})

// Uso en Server Actions
const ip = await getClientIp()
const { success, reset } = await rateLimit.limit(ip)
if (!success) {
    return { error: `Límite alcanzado. Espera ${getMinutesDiffFromNow(reset)} minutos.` }
}
```

Actualmente protege: `toggleAttendanceAction`, `joinCommunityAction`, acciones de autenticación.

---

### 📤 Gestión de Archivos

**Entry points:** `app/api/uploadthing/`, `src/shared/utils/uploadthing-utils.ts`

- Configurada en `app/api/uploadthing/core.ts` con middleware de autenticación
- Límite: imágenes hasta 1MB para comunidades y eventos
- Al actualizar imagen: `deleteFileFromUploadThing(oldImageUrl)` elimina el archivo anterior
- Al eliminar entidad: el archivo también se elimina

---

### 📧 Emails Transaccionales

**Entry points:** `src/emails/`, `src/lib/nodemailer.ts`

- **Verificación de email** — al registrarse
- **Recuperación de contraseña** — con token de expiración
- Plantillas en `src/emails/templates/` usando `@react-email/components`

---

## 🛣️ Rutas de la Aplicación

### Área pública

| Ruta | Descripción |
|---|---|
| `/` | Inicio: Hero + próximos eventos + comunidades + categorías |
| `/ai` | Asistente de IA conversacional |
| `/communities/[id]` | Detalle público de comunidad (OpenGraph + Twitter Cards) |
| `/connects/[id]` | Detalle público de evento + botón de asistencia |
| `/categories/[id]` | Eventos próximos filtrados por categoría |

### Autenticación

| Ruta | Descripción |
|---|---|
| `/auth/login` | Inicio de sesión |
| `/auth/register` | Registro de usuario |
| `/auth/forgot-password` | Solicitar recuperación de contraseña |
| `/auth/reset-password` | Restablecer contraseña con token |

### Dashboard (requiere sesión)

| Ruta | Descripción |
|---|---|
| `/dashboard` | Resumen general |
| `/dashboard/profile` | Editar perfil |
| `/dashboard/security` | Cambiar contraseña |
| `/dashboard/notifications` | Lista de notificaciones |
| `/dashboard/communities` | Mis comunidades |
| `/dashboard/communities/create` | Crear comunidad |
| `/dashboard/communities/joined` | Comunidades en las que participo |
| `/dashboard/communities/[id]/edit` | Editar comunidad |
| `/dashboard/connects` | Mis CoreConnects |
| `/dashboard/connects/create` | Crear CoreConnect |
| `/dashboard/connects/[id]/edit` | Editar CoreConnect |
| `/dashboard/connects/[id]/attendees` | Ver asistentes |

### API Routes

| Ruta | Método | Descripción |
|---|---|---|
| `/api/auth/[...all]` | ALL | Handlers de Better Auth |
| `/api/chat` | POST | Streaming de IA con tool calls |
| `/api/categories` | GET | Lista de categorías |
| `/api/user/notifications` | GET | Conteo de notificaciones no leídas |
| `/api/uploadthing` | GET/POST | UploadThing router |
| `/api/uploadthing/delete` | POST | Eliminar archivo de UploadThing |

---

## 🎨 Sistema de Diseño

**Tipografía:** Space Grotesk (Google Fonts)

**Paleta personalizada:**

| Token | Uso |
|---|---|
| `azul-*` (50–950) | Color principal: headers, botones, links |
| `naranja-*` (50–600) | Acento: CTAs, badges, highlights |
| `mirage-*` (50–950) | Escala de grises para dashboard oscuro |
| `emerald-*` | Estados de éxito, eventos presenciales |

**Principios:**
- Mobile-first, completamente responsive
- Dashboard con fondo oscuro fijo (`mirage-800` a `mirage-950`)
- Área pública con fondo claro
- Gradientes sutiles, sombras suaves, esquinas `rounded-2xl` / `rounded-3xl`
- `target="_blank"` + `rel="noopener noreferrer"` en todos los enlaces externos

---

## ✅ Funcionalidades Completadas v1.0

### Autenticación
- [x] Registro e inicio de sesión con email/contraseña
- [x] Verificación de email obligatoria
- [x] Recuperación y restablecimiento de contraseña por email
- [x] Sesiones persistentes con cookies (Better Auth)
- [x] Middleware de protección de rutas del dashboard

### CoreCommunity
- [x] CRUD completo (crear, editar, eliminar con contraseña)
- [x] Subida de imagen con UploadThing + eliminación de la anterior al actualizar
- [x] Sistema de membresía (unirse / salir)
- [x] Página pública con OpenGraph y Twitter Cards
- [x] Sección de próximos CoreConnects en la página de comunidad
- [x] Rankings de comunidades por número de miembros

### CoreConnect
- [x] CRUD completo con permisos (solo admin de comunidad)
- [x] Eventos virtuales (meetingUrl opcional) y presenciales (ubicación con mapa)
- [x] LocationPicker con React Leaflet + HERE Maps geocoding
- [x] Discriminated union de Zod para tipos de eventos
- [x] Sistema de cupos dinámicos (`availableSeats - attendanceCount`)
- [x] Bloqueo de asistencia cuando no hay cupos disponibles
- [x] Confirmación y cancelación de asistencia con rate limiting
- [x] Notificación al organizador cuando alguien confirma asistencia
- [x] Notificación a asistentes cuando el admin cancela el evento
- [x] Conteo de asistentes visible en tarjetas y página de detalle
- [x] Vista pública del detalle con OpenGraph (compartible en redes)
- [x] Tarjeta del organizador con avatar en el detalle
- [x] Vista de asistentes en el dashboard del organizador
- [x] Filtro de eventos futuros por fecha **y hora** exactas

### Asistente IA
- [x] Chat conversacional con streaming en tiempo real
- [x] 6 herramientas que consultan la DB en vivo
- [x] Tarjetas interactivas en los resultados (eventos y comunidades)
- [x] System prompt que fuerza uso de herramientas en follow-ups
- [x] Helper robusto para detectar tool parts en ambos formatos del AI SDK v6
- [x] Sugerencias rápidas en estado vacío del chat

### Notificaciones
- [x] Tiempo real con Pusher WebSockets
- [x] Canales individualizados por usuario
- [x] Badge con contador en el header
- [x] Lista completa en `/dashboard/notifications`
- [x] Notificaciones por asistencia y cancelación de eventos

### Perfil de Usuario
- [x] Edición de nombre y foto de perfil
- [x] Cambio de contraseña desde el dashboard

### Infraestructura
- [x] Rate limiting (Upstash Redis, ventana deslizante 3 req/10 min)
- [x] Gestión de archivos con UploadThing (subir + eliminar)
- [x] Emails transaccionales con Nodemailer (verificación + recuperación)
- [x] Pool de conexiones robusto para Neon serverless
- [x] Seed de base de datos con datos de prueba

---

## 🚧 Próximas Funcionalidades

- [ ] Marcar notificaciones como leídas individualmente
- [ ] Paginación en listas de eventos y comunidades
- [ ] Chat en tiempo real dentro de comunidades
- [ ] Sistema de roles dentro de comunidades (moderadores)
- [ ] Búsqueda global con filtros avanzados
- [ ] Dashboard con analytics para organizadores

---

## 📝 Convenciones de Código

- Componentes en **PascalCase**; funciones y variables en **camelCase**
- Server Components por defecto; `'use client'` solo cuando es necesario
- **Named exports** en todos los componentes; barrel exports vía `index.ts`
- Toda mutación pasa por un **Server Action** (`'use server'`)
- Toda consulta a DB pasa por un **Repository** (nunca Drizzle directo en components)
- Toda regla de permiso está en un **Policy** (función pura sin efectos secundarios)
- Validación con **Zod** tanto en cliente (RHF) como en servidor (Server Action)
- `target="_blank"` siempre acompañado de `rel="noopener noreferrer"`

---

## 📄 Licencia

Este proyecto es privado y confidencial.

---

## ✉️ Contacto

[![GitHub](https://img.shields.io/badge/GitHub-Errold146-181717?logo=github&style=flat-square)](https://github.com/Errold146)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ErroldNúñezS-0A66C2?logo=linkedin&style=flat-square)](https://linkedin.com/in/errold-núñez-sánchez)
[![Email](https://img.shields.io/badge/Email-errold222@gmail.com-D14836?logo=gmail&style=flat-square)](mailto:errold222@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+506_7802_7211-25D366?logo=whatsapp&logoColor=white&style=flat-square)](https://wa.me/50678027211)

**Desarrollado con ❤️ usando Next.js**
