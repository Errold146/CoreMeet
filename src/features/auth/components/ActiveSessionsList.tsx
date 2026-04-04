import { ComputerDesktopIcon, DevicePhoneMobileIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

import { formatUserAgent } from "@/src/shared/utils";
import { authService } from "../services/AuthService";
import { RevokeSessionButton } from "./RevokeSessionButton";
import { Heading } from "@/src/shared/components/typography";

function getDeviceIcon(userAgent: string) {
    const ua = userAgent.toLowerCase();
    if (ua.includes("mobile") || ua.includes("android") || ua.includes("iphone")) {
        return <DevicePhoneMobileIcon className="size-6 text-azul-500" />;
    }
    if (ua.includes("mozilla") || ua.includes("chrome") || ua.includes("safari")) {
        return <ComputerDesktopIcon className="size-6 text-azul-500" />;
    }
    return <GlobeAltIcon className="size-6 text-azul-500" />;
}

export async function ActiveSessionsList() {

    const [sessions, currentSession] = await Promise.all([
        authService.getSessions(),
        authService.getCurrentSession()
    ])

    const isCurrentDevice = (sessionId: string) => sessionId === currentSession?.session.id

    return (
        <>
            <Heading level={3} className="text-center mt-20">Sesiones Activas</Heading>

            <div className="mt-6 flex flex-col gap-3">
                {sessions.map(session => {
                    const current = isCurrentDevice(session.id);
                    return (
                        <div
                            key={session.id}
                            className={`group flex items-center gap-4 rounded-2xl border-2 p-5 shadow-sm transition-all duration-300 hover:shadow-lg ${
                                current
                                    ? "border-naranja-400 bg-naranja-50 hover:border-naranja-500"
                                    : "border-mirage-200 bg-white hover:border-azul-300"
                            }`}
                        >
                            {/* Icono del dispositivo */}
                            <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${
                                current ? "bg-naranja-100" : "bg-azul-50"
                            }`}>
                                {getDeviceIcon(session.userAgent ?? "")}
                            </div>

                            {/* Info */}
                            <div className="min-w-0 flex-1">
                                <p className="truncate font-semibold text-mirage-800">
                                    {formatUserAgent(session.userAgent!)}
                                </p>
                                <p className="mt-0.5 text-xs text-mirage-400">
                                    Última actividad:{" "}
                                    {new Date(session.updatedAt).toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>

                            {/* Badge dispositivo actual */}
                            {current ? (
                                <span className="shrink-0 rounded-full bg-naranja-500 px-3 py-1 text-xs font-bold text-white shadow">
                                    Este dispositivo
                                </span>
                            ) : (
                                <RevokeSessionButton token={session.token} />
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    )
}
