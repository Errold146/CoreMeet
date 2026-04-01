"use client"

import Link from "next/link";
import Image from "next/image";
import {
    ArrowRightCircleIcon,
    UserGroupIcon,
    PencilSquareIcon,
    TrashIcon,
    CalendarDaysIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

import { useCoreConnectStore } from "../stores/connect.store";
import { ConnectWithPermissions } from "../types";
import { displayDate } from "@/src/shared/utils";
import { pluralize } from "@/src/shared/utils";

interface ConnectCardProps {
    connect: ConnectWithPermissions
}

export function ConnectCard({ connect }: ConnectCardProps) {
    const { data, context, permissions, attendanceCount } = connect;
    const { setOpen, setConnect } = useCoreConnectStore();

    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-azul-200 hover:border-azul-400">
            {/* Imagen */}
            <div className="relative h-48 w-full overflow-hidden bg-azul-100">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {context.isAdmin && (
                    <div className="absolute top-4 right-4 bg-naranja-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ADMIN
                    </div>
                )}
                <div className="absolute top-4 left-4 bg-azul-500/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <UsersIcon className="w-3.5 h-3.5" />
                    {attendanceCount} {pluralize('asistente', attendanceCount)}
                </div>
            </div>

            {/* Contenido */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-mirage-800 mb-1 group-hover:text-azul-600 transition-colors">
                    <Link
                        href={`/connects/${data.id}`}
                        className="hover:underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.title}
                    </Link>
                </h3>

                <p className="text-mirage-600 text-sm mb-3 line-clamp-2">
                    {data.details}
                </p>

                <div className="flex items-center gap-2 text-sm text-mirage-500 mb-4">
                    <CalendarDaysIcon className="w-4 h-4 text-azul-500 shrink-0" />
                    <span>{displayDate(data.date)}</span>
                </div>

                {/* Acciones */}
                <div className="flex flex-col gap-2 mt-4">
                    <Link
                        href={`/connects/${data.id}`}
                        className="w-full flex items-center justify-center gap-2 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ArrowRightCircleIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        <span>Ver Detalles</span>
                    </Link>

                    {permissions.canViewAttendes && (
                        <Link
                            href={`/dashboard/connects/${data.id}/attendees` as any}
                            className="w-full flex items-center justify-center gap-2 bg-mirage-200 text-mirage-800 hover:text-mirage-50 hover:bg-mirage-500 border border-mirage-400 hover:border-mirage-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <UserGroupIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                            <span>Ver Asistentes</span>
                        </Link>
                    )}

                    {permissions.canEdit && (
                        <Link
                            href={`/dashboard/connects/${data.id}/edit` as any}
                            className="w-full flex items-center justify-center gap-2 bg-naranja-200 text-naranja-800 hover:text-naranja-50 hover:bg-naranja-500 border border-naranja-400 hover:border-naranja-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <PencilSquareIcon className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                            <span>Editar</span>
                        </Link>
                    )}

                    {permissions.canDelete && (
                        <button
                            className="w-full flex items-center justify-center gap-2 bg-red-200 text-red-800 hover:text-red-50 hover:bg-red-500 border border-red-400 hover:border-red-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                            onClick={() => {
                                setOpen(true)
                                setConnect(data)
                            }}
                        >
                            <TrashIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                            <span>Eliminar</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

