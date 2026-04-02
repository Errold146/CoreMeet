import { Logo } from "./Logo";
import { ShieldCheckIcon, CreditCardIcon } from "@heroicons/react/24/outline";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-azul-950 text-white mt-auto">
            {/* Franja superior decorativa */}
            <div className="h-1 bg-linear-to-r from-azul-600 via-naranja-500 to-azul-600" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                    {/* Columna 1 — Logo y descripción */}
                    <div className="flex flex-col gap-4">
                        <div className="w-28">
                            <Logo />
                        </div>
                        <p className="text-azul-200 text-sm leading-relaxed">
                            CoreMeet es tu espacio para conectar, colaborar y crecer junto a tu comunidad.
                        </p>
                        <p className="text-azul-400 text-xs">
                            Un producto de{" "}
                            <span className="text-naranja-400 font-semibold">MicroWeb-cr</span>
                        </p>
                    </div>

                    {/* Columna 2 — Aviso de seguridad */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <ShieldCheckIcon className="text-naranja-400 shrink-0 size-5" />
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                                Seguridad y confianza
                            </h3>
                        </div>
                        <div className="flex items-start gap-3 bg-azul-900/50 border border-azul-800 rounded-xl p-4">
                            <CreditCardIcon className="text-naranja-400 shrink-0 mt-0.5 size-5" />
                            <p className="text-azul-200 text-sm leading-relaxed">
                                <span className="text-white font-semibold">CoreMeet nunca solicitará</span> información
                                de tarjetas de crédito o débito. Si alguien lo hace en nuestro nombre, repórtalo de inmediato.
                            </p>
                        </div>
                    </div>

                    {/* Columna 3 — Sobre el proyecto */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                            Sobre CoreMeet
                        </h3>
                        <p className="text-azul-200 text-sm leading-relaxed">
                            CoreMeet es una plataforma desarrollada y mantenida por{" "}
                            <span className="text-naranja-400 font-semibold">MicroWeb-cr</span>,
                            empresa costarricense dedicada al desarrollo de soluciones web modernas.
                        </p>
                    </div>
                </div>

                {/* Separador */}
                <div className="border-t border-azul-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-azul-400">
                    <p suppressHydrationWarning>
                        &copy; {currentYear}{" "}
                        <span className="text-naranja-400 font-semibold">CoreMeet</span> — Todos los derechos reservados.
                    </p>
                    <p>
                        Desarrollado por{" "}
                        <span className="text-naranja-400 font-semibold">MicroWeb-cr</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
