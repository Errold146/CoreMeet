import { BellIcon } from "@heroicons/react/24/outline";

function NotificationCount() {
    const totalNotifications = 0;

    return (
        <button className="relative group p-2.5 text-mirage-600 hover:text-azul-600 hover:bg-azul-50 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-azul-500 focus:ring-offset-2 dark:text-mirage-400 dark:hover:text-azul-400 dark:hover:bg-mirage-800 dark:focus:ring-offset-mirage-950">
            <span className="sr-only">View notifications</span>
            <BellIcon
                aria-hidden="true"
                className="size-6 transition-transform duration-300 group-hover:rotate-12"
            />
            {totalNotifications > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-naranja-500 to-naranja-600 text-[10px] font-bold text-white shadow-lg animate-pulse border-2 border-white dark:border-mirage-950">
                    {totalNotifications}
                </span>
            )}
        </button>
    );
}

export default function NotificationsPanel() {
    return <NotificationCount />;
}
