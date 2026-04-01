import Link from "next/link";
import { ExclamationTriangleIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function CommunityNotFound() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                {/* Contenedor principal con efectos */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-azul-200">
                    {/* Gradientes decorativos animados */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-azul-300/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-naranja-300/30 to-transparent rounded-full blur-3xl animate-pulse"></div>

                    {/* Contenido */}
                    <div className="relative z-10 p-8 md:p-12">
                        {/* Icono principal con animación */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                {/* Círculo animado de fondo */}
                                <div className="absolute inset-0 bg-linear-to-r from-azul-400 to-naranja-400 rounded-full opacity-20 blur-md scale-110"></div>

                                {/* Icono */}
                                <div className="relative bg-linear-to-br from-azul-100 to-naranja-100 rounded-full p-6 shadow-lg">
                                    <ExclamationTriangleIcon className="w-16 h-16 text-azul-600 animate-bounce" />
                                </div>
                            </div>
                        </div>

                        {/* Título */}
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-azul-600 via-mirage-700 to-naranja-600 bg-clip-text text-transparent">
                            ¡Oops! CoreConnect o Categoría no encontrada
                        </h1>

                        {/* Descripción */}
                        <div className="text-center mb-8 space-y-2">
                            <p className="text-lg text-mirage-700 font-medium">
                                CoreConnect o Categoría que buscas no existe o ha sido eliminada
                            </p>
                            <p className="text-mirage-600">
                                Es posible que el enlace esté roto o que ya no tengas acceso a este CoreConnect.
                            </p>
                        </div>

                        {/* Código 404 decorativo */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-linear-to-r from-azul-50 to-naranja-50 px-6 py-3 rounded-2xl border-2 border-azul-200 shadow-inner">
                                <span className="text-6xl font-black bg-linear-to-r from-azul-600 to-naranja-600 bg-clip-text text-transparent">
                                    404
                                </span>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/dashboard/connects"
                                className="group flex items-center justify-center gap-3 bg-linear-to-r from-azul-500 to-azul-600 hover:from-azul-600 hover:to-azul-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <UsersIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Ver todas los CoreConnects</span>
                            </Link>

                            <Link
                                href="/dashboard"
                                className="group flex items-center justify-center gap-3 bg-white hover:bg-mirage-50 text-mirage-700 font-semibold px-6 py-3 rounded-xl border-2 border-mirage-300 hover:border-mirage-400 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Ir al Dashboard</span>
                            </Link>
                        </div>

                        {/* Mensaje adicional */}
                        <div className="mt-8 pt-6 border-t border-azul-100">
                            <p className="text-center text-sm text-mirage-500">
                                ¿Necesitas ayuda? Contacta con el administrador de tu organización
                            </p>
                        </div>
                    </div>

                    {/* Decoración inferior */}
                    <div className="h-2 bg-linear-to-r from-azul-400 via-naranja-400 to-azul-400"></div>
                </div>
            </div>
        </div>
    );
}
