"use client";

import Link from "next/link";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";

import { useSession } from "@/src/lib/auth-client";

export default function NotificationsPanel() {

    const [totalNotifications, setTotalNotifications] = useState(0);
    const { data } = useSession()

    useEffect(() => {
        async function fetchNotifications() {
            try {
                const response = await fetch('/api/user/notifications');
                if (response.ok) {
                    const count = await response.json();
                    setTotalNotifications(count);
                }
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        }

        fetchNotifications();
    }, [])

    useEffect(() => {
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
            cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!
        })

        const id = `notifications-channel-${data?.user.id}`
        const channel = pusher.subscribe(id)
        channel.bind('new-notification', () => {
            setTotalNotifications(prev => prev + 1)
        })

        return () => {
            channel.unbind_all()
            channel.unsubscribe()
        }

    }, [data])


    return (
        <Link
            className="relative group p-2.5 text-mirage-400 hover:text-azul-400 hover:bg-mirage-800 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-azul-500 focus:ring-offset-2 focus:ring-offset-mirage-950"
            href={'/dashboard/notifications'}
        >
            <span className="sr-only">View notifications</span>
            <BellIcon
                aria-hidden="true"
                className="size-6 transition-transform duration-300 group-hover:rotate-12"
            />
            {totalNotifications > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-br from-naranja-500 to-naranja-600 text-[10px] font-bold text-white shadow-lg border-2 border-mirage-950">
                    {totalNotifications}
                </span>
            )}
        </Link>
    );
}
