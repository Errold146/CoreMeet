"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

import { useCoreCommunityStore } from "../stores/community.store";
import { DeleteCommunityForm } from "./DeleteCommunityForm";

export function DeleteCommunityModal() {

    const { open, setOpen, community, setCommunity } = useCoreCommunityStore()

    return (
        <Dialog
            open={open}
            onClose={() => {
                setOpen(false)
                setCommunity(null)
            }}
            className="relative z-50"
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-mirage-900/80 backdrop-blur-sm transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-2xl bg-white border-2 border-red-200 px-6 pt-6 pb-6 text-center shadow-2xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="flex flex-col items-center">
                            <div className="flex size-14 items-center justify-center rounded-full bg-red-100 border-2 border-red-300 mb-4">
                                <ExclamationTriangleIcon
                                    aria-hidden="true"
                                    className="size-7 text-red-600"
                                />
                            </div>
                            <div className="w-full">
                                <DialogTitle
                                    as="h3"
                                    className="text-xl font-bold text-mirage-900 mb-3"
                                >
                                    Eliminar Comunidad
                                </DialogTitle>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                                    <p className="text-sm font-semibold text-red-800">
                                        {community?.name}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-mirage-700 text-sm leading-relaxed">
                                        ¿Confirmas que deseas eliminar esta comunidad?
                                        <span className="font-semibold text-red-600"> Esta acción es irreversible</span> y
                                        no se podrá recuperar la información.
                                    </p>

                                    <DeleteCommunityForm />
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
