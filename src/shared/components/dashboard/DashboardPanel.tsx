"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";

import { Logo, Spinner } from "../ui";
import UserMenu from "./UserMenu";
import MobileSidebar from "./MobileSidebar";
import NotificationsPanel from "./NotificationsPanel";
import DashboardNavigation from "./DashboardNavigation";
import { useSession } from "@/src/lib/auth-client";

export function DashboardPanel() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { data, isPending } = useSession()
    if ( isPending || !data ) return <Spinner centered />

    return (
        <>
            <Dialog
                open={sidebarOpen}
                onClose={setSidebarOpen}
                className="relative z-50 lg:hidden"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                <button
                                    type="button"
                                    onClick={() => setSidebarOpen(false)}
                                    className="-m-2.5 p-2.5"
                                >
                                    <span className="sr-only">
                                        Close sidebar
                                    </span>
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="size-6 text-white"
                                    />
                                </button>
                            </div>
                        </TransitionChild>
                        <MobileSidebar />
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-6 overflow-y-auto bg-linear-to-b from-mirage-950 via-mirage-900 to-mirage-950 border-r border-mirage-800 px-5 shadow-xl">
                    <div className="flex justify-center pt-6 w-full">
                        <div className="w-36 transform transition-transform duration-300 hover:scale-105">
                            <Link href={'/'} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                                <Logo />
                            </Link>
                        </div>
                    </div>
                    <div className="border-b border-mirage-800 pb-2"></div>
                    <DashboardNavigation />
                </div>
            </div>

            {/* Top Bar */}
            <div className="sticky top-0 z-40 flex justify-between items-center w-full px-5 py-4 bg-azul-950 backdrop-blur-md border-b border-mirage-700 shadow-lg lg:pl-72">
                <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden -m-2.5 p-2.5 text-mirage-400 hover:text-white hover:bg-mirage-800 rounded-lg transition-all duration-200"
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                <div className="flex-1 text-lg font-bold text-white lg:hidden ml-5 tracking-tight">
                    Menú de Navegación
                </div>

                <div className="flex items-center gap-3 ml-auto pr-4 sm:pr-6">
                    <NotificationsPanel />
                    <div className="w-px h-6 bg-mirage-800"></div>
                    <UserMenu userId={data.user.id} />
                </div>
            </div>
        </>
    );
}
