"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ShieldExclamationIcon, ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function EditConnectError({ error, reset }: ErrorProps) {

    useEffect(() => {
        console.error("[EditCoreConnect]", error);
    }, [error]);

    const isAccessDenied = error.message === "Acceso Denegado.";

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">

                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-naranja-200">

                    {/* Gradientes decorativos */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-naranja-300/30 to-transparent rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-azul-300/20 to-transparent rounded-full blur-3xl animate-pulse" />

                    {/* Contenido */}
                    <div className="relative z-10 p-8 md:p-12">

                        {/* Icono principal */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-r from-naranja-400 to-naranja-600 rounded-full opacity-20 blur-md scale-110" />
                                <div className="relative bg-linear-to-br from-naranja-100 to-naranja-200 rounded-full p-6 shadow-lg">
                                    <ShieldExclamationIcon className="w-16 h-16 text-naranja-600 animate-bounce" />
                                </div>
                            </div>
                        </div>

                        {/* Título */}
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-naranja-600 via-naranja-500 to-azul-600 bg-clip-text text-transparent">
                            {isAccessDenied ? "Acceso Denegado" : "Algo salió mal"}
                        </h1>

                        {/* Descripción */}
                        <div className="text-center mb-8 space-y-2">
                            <p className="text-lg text-mirage-700 font-medium">
                                {isAccessDenied
                                    ? "No tienes permisos para ver este CoreConnect"
                                    : "Ocurrió un error inesperado al cargar la página"}
                            </p>
                            <p className="text-mirage-600">
                                {isAccessDenied
                                    ? "Solo el administrador del CoreConnect puede realizar cambios en él."
                                    : "Por favor intenta de nuevo o regresa a la lista de CoreConnects."}
                            </p>
                        </div>

                        {/* Badge de error */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-linear-to-r from-naranja-50 to-azul-50 px-6 py-3 rounded-2xl border-2 border-naranja-200 shadow-inner">
                                <span className="text-4xl font-black bg-linear-to-r from-naranja-600 to-azul-600 bg-clip-text text-transparent">
                                    {isAccessDenied ? "403" : "500"}
                                </span>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/dashboard/connects"
                                className="group flex items-center justify-center gap-3 bg-linear-to-r from-naranja-500 to-naranja-600 hover:from-naranja-600 hover:to-naranja-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                                                      >
                                <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span>Ver CoreConnects</span>
                            </Link>

                            {!isAccessDenied && (
                                <button
                                    onClick={reset}
                                    className="group flex items-center justify-center gap-3 bg-linear-to-r from-azul-500 to-azul-600 hover:from-azul-600 hover:to-azul-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <span>Intentar de nuevo</span>
                                </button>
                            )}

                            <Link
                                href="/dashboard"
                                className="group flex items-center justify-center gap-3 bg-white hover:bg-mirage-50 text-mirage-700 font-semibold px-6 py-3 rounded-xl border-2 border-mirage-300 hover:border-mirage-400 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                                                      >
                                <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Ir al Dashboard</span>
                            </Link>
                        </div>

                        {/* Pie */}
                        <div className="mt-8 pt-6 border-t border-naranja-100">
                            <p className="text-center text-sm text-mirage-500">
                                ¿Crees que esto es un error? Contacta con el administrador de tu organización
                            </p>
                        </div>
                    </div>

                    {/* Barra inferior decorativa */}
                    <div className="h-2 bg-linear-to-r from-naranja-400 via-azul-400 to-naranja-400" />
                </div>

            </div>
        </div>
    );
}
