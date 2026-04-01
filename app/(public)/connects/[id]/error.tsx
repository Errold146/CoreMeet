"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CalendarDaysIcon, ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ConnectDetailError({ error, reset }: ErrorProps) {

    useEffect(() => {
        console.error("[CoreConnect Detail]", error);
    }, [error]);

    const isUnavailable = error.message === "CoreConnect no disponible.";

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">

                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-azul-200">

                    {/* Gradientes decorativos */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-azul-300/30 to-transparent rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-naranja-300/20 to-transparent rounded-full blur-3xl animate-pulse" />

                    {/* Contenido */}
                    <div className="relative z-10 p-8 md:p-12">

                        {/* Icono principal */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-r from-azul-400 to-mirage-500 rounded-full opacity-20 blur-md scale-110" />
                                <div className="relative bg-linear-to-br from-azul-100 to-mirage-100 rounded-full p-6 shadow-lg">
                                    <CalendarDaysIcon className="w-16 h-16 text-azul-600 animate-bounce" />
                                </div>
                            </div>
                        </div>

                        {/* Título */}
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-azul-600 via-mirage-600 to-naranja-500 bg-clip-text text-transparent">
                            {isUnavailable ? "CoreConnect no disponible" : "Algo salió mal"}
                        </h1>

                        {/* Descripción */}
                        <div className="text-center mb-8 space-y-2">
                            <p className="text-lg text-mirage-700 font-medium">
                                {isUnavailable
                                    ? "Este CoreConnect ya no está disponible"
                                    : "Ocurrió un error inesperado al cargar el CoreConnect"}
                            </p>
                            <p className="text-mirage-600">
                                {isUnavailable
                                    ? "Es posible que el evento haya finalizado o haya sido cancelado."
                                    : "Por favor intenta de nuevo o explora otros CoreConnects."}
                            </p>
                        </div>

                        {/* Badge */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-linear-to-r from-azul-50 to-mirage-50 px-6 py-3 rounded-2xl border-2 border-azul-200 shadow-inner">
                                <span className="text-4xl font-black bg-linear-to-r from-azul-600 to-naranja-500 bg-clip-text text-transparent">
                                    {isUnavailable ? "410" : "500"}
                                </span>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={"/connects" as any}
                                className="group flex items-center justify-center gap-3 bg-linear-to-r from-azul-500 to-azul-600 hover:from-azul-600 hover:to-azul-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span>Ver CoreConnects</span>
                            </Link>

                            {!isUnavailable && (
                                <button
                                    onClick={reset}
                                    className="group flex items-center justify-center gap-3 bg-linear-to-r from-naranja-500 to-naranja-600 hover:from-naranja-600 hover:to-naranja-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <span>Intentar de nuevo</span>
                                </button>
                            )}

                            <Link
                                href="/"
                                className="group flex items-center justify-center gap-3 bg-white hover:bg-mirage-50 text-mirage-700 font-semibold px-6 py-3 rounded-xl border-2 border-mirage-300 hover:border-mirage-400 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Ir al Inicio</span>
                            </Link>
                        </div>

                        {/* Pie */}
                        <div className="mt-8 pt-6 border-t border-azul-100">
                            <p className="text-center text-sm text-mirage-500">
                                ¿Crees que esto es un error? Contacta con el administrador de tu organización
                            </p>
                        </div>
                    </div>

                    {/* Barra inferior decorativa */}
                    <div className="h-2 bg-linear-to-r from-azul-400 via-mirage-400 to-naranja-400" />
                </div>

            </div>
        </div>
    );
}
