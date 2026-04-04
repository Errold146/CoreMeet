import Link from "next/link";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import {
    UserCircleIcon,
    UsersIcon,
    CalendarDaysIcon,
    BellIcon,
    ShieldCheckIcon,
    PlusCircleIcon,
    ChevronRightIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/components/typography";
import { generatePageTitle } from "@/src/shared/utils";
import { communityService } from "@/src/features/communities";
import { connectService } from "@/src/features/connects/services/ConnectSevice";
import { notificationService } from "@/src/features/notifications/services/NotificationService";

export const metadata: Metadata = {
    title: generatePageTitle("Dashboard"),
    description: "Administra tu perfil, crea comunidades y reuniones.",
};

export default async function DashboardPage() {
    const { session, isAuth } = await requireAuth();
    if (!isAuth || !session) redirect("/auth/login");

    const user = session.user;

    const [communities, connects, unreadCount] = await Promise.all([
        communityService.getUserCommunities(user),
        connectService.getUncommingConnectsByUser(user),
        notificationService.getUnreadCount(user.id),
    ]);

    const stats = [
        {
            label: "CoreCommunities",
            value: communities.length,
            icon: UsersIcon,
            href: "/dashboard/communities",
            color: "from-azul-500 to-azul-700",
            bg: "bg-azul-50",
            accent: "text-azul-600",
            border: "border-azul-200 hover:border-azul-400",
        },
        {
            label: "CoreConnects",
            value: connects.length,
            icon: CalendarDaysIcon,
            href: "/dashboard/connects",
            color: "from-naranja-500 to-naranja-700",
            bg: "bg-naranja-50",
            accent: "text-naranja-600",
            border: "border-naranja-200 hover:border-naranja-400",
        },
        {
            label: "Notificaciones",
            value: unreadCount,
            icon: BellIcon,
            href: "/dashboard/notifications",
            color: "from-violet-500 to-violet-700",
            bg: "bg-violet-50",
            accent: "text-violet-600",
            border: "border-violet-200 hover:border-violet-400",
        },
    ];

    const quickActions = [
        {
            label: "Crear CoreCommunity",
            description: "Lanza una nueva comunidad",
            icon: PlusCircleIcon,
            href: "/dashboard/communities/create",
            style: "border-azul-200 bg-azul-50 hover:bg-azul-100 hover:border-azul-400 text-azul-700",
            iconStyle: "text-azul-500",
        },
        {
            label: "Crear CoreConnect",
            description: "Organiza un nuevo evento",
            icon: CalendarDaysIcon,
            href: "/dashboard/connects/create",
            style: "border-naranja-200 bg-naranja-50 hover:bg-naranja-100 hover:border-naranja-400 text-naranja-700",
            iconStyle: "text-naranja-500",
        },
        {
            label: "Mi Perfil",
            description: "Ver y editar tu perfil público",
            icon: UserCircleIcon,
            href: "/dashboard/profile",
            style: "border-emerald-200 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-400 text-emerald-700",
            iconStyle: "text-emerald-500",
        },
        {
            label: "Seguridad",
            description: "Contraseña y sesiones activas",
            icon: ShieldCheckIcon,
            href: "/dashboard/security",
            style: "border-rose-200 bg-rose-50 hover:bg-rose-100 hover:border-rose-400 text-rose-700",
            iconStyle: "text-rose-500",
        },
    ];

    return (
        <div className="space-y-10">

            {/* Bienvenida */}
            <div className="rounded-2xl bg-linear-to-br from-mirage-950 via-mirage-900 to-azul-950 p-8 shadow-xl border border-mirage-800">
                <div className="flex items-center gap-3 mb-2">
                    <SparklesIcon className="size-6 text-naranja-400" />
                    <p className="text-sm font-semibold text-naranja-400 uppercase tracking-widest">
                        Bienvenido de vuelta
                    </p>
                </div>
                <Heading level={2} className="text-white mt-0">
                    {user.name}
                </Heading>
                <p className="text-mirage-400 mt-2 text-sm">
                    Desde aquí controlas todo — comunidades, eventos, notificaciones y tu cuenta.
                </p>
            </div>

            {/* Stats */}
            <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-mirage-400 mb-4">
                    Resumen
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {stats.map((stat) => (
                        <Link
                            key={stat.label}
                            href={stat.href as any}
                            className={`group flex items-center gap-4 rounded-2xl border-2 ${stat.border} ${stat.bg} p-5 shadow-sm transition-all duration-300 hover:shadow-lg`}
                        >
                            <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${stat.color} shadow-md`}>
                                <stat.icon className="size-6 text-white" />
                            </div>
                            <div>
                                <p className={`text-3xl font-black ${stat.accent}`}>{stat.value}</p>
                                <p className="text-xs font-semibold text-mirage-500 mt-0.5">{stat.label}</p>
                            </div>
                            <ChevronRightIcon className={`size-4 ml-auto ${stat.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Acciones rápidas */}
            <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-mirage-400 mb-4">
                    Acciones Rápidas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quickActions.map((action) => (
                        <Link
                            key={action.label}
                            href={action.href as any}
                            className={`group flex items-center gap-4 rounded-2xl border-2 p-5 shadow-sm transition-all duration-300 hover:shadow-lg ${action.style}`}
                        >
                            <action.icon className={`size-8 shrink-0 ${action.iconStyle} transition-transform duration-300 group-hover:scale-110`} />
                            <div className="min-w-0">
                                <p className="font-bold text-sm">{action.label}</p>
                                <p className="text-xs opacity-70 mt-0.5">{action.description}</p>
                            </div>
                            <ChevronRightIcon className="size-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Próximos connects */}
            {connects.length > 0 && (
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-mirage-400">
                            Próximos CoreConnects
                        </h2>
                        <Link
                            href="/dashboard/connects"
                            className="text-xs font-semibold text-azul-500 hover:text-azul-700 transition-colors"
                        >
                            Ver todos →
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        {connects.slice(0, 3).map((connect: typeof connects[number]) => (
                            <Link
                                key={connect.data.id}
                                href={`/dashboard/connects/${connect.data.id}` as any}
                                className="group flex items-center gap-4 rounded-2xl border-2 border-mirage-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-azul-300 hover:shadow-lg"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-azul-50">
                                    <CalendarDaysIcon className="size-5 text-azul-500" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate font-semibold text-mirage-800 text-sm">
                                        {connect.data.title}
                                    </p>
                                    <p className="text-xs text-mirage-400 mt-0.5">
                                        {new Date(connect.data.date).toLocaleDateString("es-ES", {
                                            weekday: "short",
                                            day: "numeric",
                                            month: "long",
                                        })}
                                        {" · "}{connect.attendanceCount} asistente{connect.attendanceCount !== 1 ? "s" : ""}
                                    </p>
                                </div>
                                <ChevronRightIcon className="size-4 text-mirage-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
