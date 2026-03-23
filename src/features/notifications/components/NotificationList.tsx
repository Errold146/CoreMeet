"use client";

import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import { BellSlashIcon, BellIcon } from "@heroicons/react/24/outline";

import { SelectNotification } from "../types";
import { useSession } from "@/src/lib/auth-client";
import { formatCreatedDate } from "@/src/shared/utils";

interface Props {
    notifications: SelectNotification[]
}

export function NotificationList({ notifications }: Props) {

    const [unreadNotification, setUnreadNotification] = useState(notifications)
    const { data } = useSession()

    useEffect(() => {
            const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
                cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!
            })

            const id = `notifications-channel-${data?.user.id}`
            const channel = pusher.subscribe(id)
            channel.bind('new-notification', (notification: SelectNotification) => {
                setUnreadNotification(prev => [notification, ...prev])
            })

            return () => {
                channel.unbind_all()
                channel.unsubscribe()
            }

        }, [data])


    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            {unreadNotification.length ? (
                <div className="space-y-3">
                    {unreadNotification.map((noti, index) => (
                        <div
                            key={noti.id}
                            className="notification-card group relative bg-white border border-mirage-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-azul-300 hover:scale-[1.01] transform"
                            style={{
                                ['--animation-delay' as string]: `${index * 50}ms`
                            }}
                        >
                            {/* Indicador de no leído */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-linear-to-b from-azul-500 to-azul-600 rounded-r-full opacity-100 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-start gap-4 ml-3">
                                {/* Icono */}
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-naranja-500 to-naranja-600 flex items-center justify-center shadow-lg shadow-naranja-500/30">
                                        <BellIcon className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex-1">
                                            <p className="text-sm text-mirage-900 leading-relaxed">
                                                <span className="font-semibold text-azul-700">
                                                    {noti.actorName}
                                                </span>
                                                {' '}{noti.message}{' '}
                                                <span className="font-bold text-mirage-800">
                                                    {noti.target}
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Fecha */}
                                    <p className="text-xs text-mirage-500 mt-2 flex items-center gap-1.5">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {formatCreatedDate(noti.createdAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 px-6">
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-azul-600 blur-2xl opacity-20 rounded-full" />
                        <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-mirage-200 to-mirage-300 flex items-center justify-center border-4 border-white shadow-xl">
                            <BellSlashIcon className="w-12 h-12 text-mirage-600" />
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-mirage-800 mb-2">
                        No hay notificaciones
                    </h3>

                    <p className="text-center text-sm text-mirage-600 max-w-sm">
                        Cuando recibas nuevas actualizaciones o interacciones, aparecerán aquí.
                    </p>
                </div>
            )}

            <style jsx>{`
                .notification-card {
                    animation: fadeInUp 0.5s ease-out forwards;
                    animation-delay: var(--animation-delay);
                    opacity: 0;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}
