"use client";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { signOut } from "@/src/lib/auth-client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { UserCircleIcon, Cog6ToothIcon, ShieldCheckIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function UserMenu() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="px-3 py-2">
                <Bars3Icon className="size-6 text-mirage-400" />
            </div>
        );
    }

    return (
        <Menu as="div" className="relative z-9999">
            <MenuButton className="group text-mirage-400 hover:text-azul-400 relative flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-mirage-800 transition-all duration-300 ease-out transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-500">
                <span className="sr-only">Abrir Menú de Usuario</span>
                <Bars3Icon className="size-6 transition-transform duration-300 group-hover:rotate-180" />
            </MenuButton>

            <MenuItems
                transition
                className="absolute right-0 mt-3 w-56 origin-top-right rounded-2xl bg-mirage-900 py-2 shadow-2xl ring-1 ring-mirage-700 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in backdrop-blur-sm"
            >
                <div className="px-4 py-3 border-b border-mirage-800">
                    <p className="text-sm font-semibold text-white">Mi Cuenta</p>
                    <p className="text-xs text-mirage-400 mt-0.5">Gestiona tu perfil</p>
                </div>

                <div className="py-1">
                    <MenuItem>
                        <a
                            href={`/p`}
                            className="group flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-mirage-300 transition-colors data-focus:bg-linear-to-r data-focus:from-mirage-800 data-focus:to-mirage-700 data-focus:text-white"
                        >
                            <UserCircleIcon className="size-5 text-mirage-400 group-data-focus:text-azul-400 transition-colors" />
                            Ver tu Perfil
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="/dashboard/profile"
                            className="group flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-mirage-300 transition-colors data-focus:bg-linear-to-r data-focus:from-mirage-800 data-focus:to-mirage-700 data-focus:text-white"
                        >
                            <Cog6ToothIcon className="size-5 text-mirage-400 group-data-focus:text-azul-400 transition-colors" />
                            Administra tu Perfil
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="/dashboard/security"
                            className="group flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-mirage-300 transition-colors data-focus:bg-linear-to-r data-focus:from-mirage-800 data-focus:to-mirage-700 data-focus:text-white"
                        >
                            <ShieldCheckIcon className="size-5 text-mirage-400 group-data-focus:text-azul-400 transition-colors" />
                            Seguridad
                        </a>
                    </MenuItem>
                </div>

                <div className="border-t border-mirage-800 py-1">
                    <MenuItem>
                        <button
                            className="group flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-medium text-naranja-500 transition-colors data-focus:bg-naranja-950/30 data-focus:text-naranja-400 cursor-pointer"
                            onClick={async () => {
                                await signOut()
                                redirect('/auth/login')
                            }}
                        >
                            <ArrowRightStartOnRectangleIcon className="size-5 transition-colors" />
                            Cerrar Sesión
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
}
