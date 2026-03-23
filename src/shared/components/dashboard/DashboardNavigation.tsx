import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {BellIcon, FolderIcon, HomeIcon, UsersIcon} from "@heroicons/react/24/outline";

import { classNames, currentPath } from "@/shared/utils";


export const navigation = [
    { name: "Panel de Administración", href: "/dashboard", icon: HomeIcon },
    { name: "CoreCommunties", href: "/dashboard/communities", icon: UsersIcon },
    { name: "CoreConnects", href: "/dashboard/connects", icon: FolderIcon },
    { name: "Notificaciones", href: "/dashboard/notifications", icon: BellIcon },
];

export default function DashboardNavigation() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-1 flex-col mt-4">
            <ul role="list" className="flex flex-1 flex-col gap-y-2">
                <li>
                    <ul role="list" className="space-y-2">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href as Route}
                                    className={classNames(
                                        currentPath(item.href, pathname)
                                            ? "bg-linear-to-r from-naranja-600 to-naranja-700 text-white shadow-lg shadow-naranja-600/40"
                                            : "text-mirage-300 hover:bg-linear-to-r hover:from-mirage-800/50 hover:to-mirage-700/50 hover:text-white",
                                        "group flex items-center gap-x-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-md",
                                    )}
                                >
                                    <item.icon
                                        aria-hidden="true"
                                        className={classNames(
                                            currentPath(
                                                item.href,
                                                pathname,
                                            )
                                                ? "text-white drop-shadow-sm"
                                                : "text-mirage-400 group-hover:text-azul-400",
                                            "size-6 shrink-0 transition-all duration-300",
                                        )}
                                    />
                                    <span className="tracking-wide">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="mt-6">
                    <div className="border-t border-mirage-800 pt-4">
                        <p className="text-xs font-medium text-mirage-500 px-4 mb-2 uppercase tracking-wider">Accesos Rápidos</p>
                        {/* TODO : Widgets */}
                    </div>
                </li>
            </ul>
        </nav>
    );
}
