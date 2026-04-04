import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CalendarIcon, ClockIcon, TagIcon, UsersIcon, VideoCameraIcon, TicketIcon } from "@heroicons/react/24/outline";

import { requireAuth } from "@/src/lib/auth-server";
import { Heading } from "@/src/shared/components/typography";
import { displayDate, generatePageTitle } from "@/src/shared/utils";
import { connectService } from "@/src/features/connects/services/ConnectSevice";
import { AttendanceToggleButton, DynamicConnectLocation, OrganizerCard } from "@/src/features/connects/components";

export async function generateMetadata({params}: PageProps<"/connects/[id]">): Promise<Metadata> {
    const { id } = await params;
    const connect = await connectService.getConnectById(id);

    return {
        title: generatePageTitle(connect.title),
        description: connect.details,
        openGraph: {
            title: `Quedas cordialmente invitado (a) al CoreConnect: ${connect.title}`,
            siteName: "CoreMeet",
            images: [
                {
                    url: connect.image,
                    width: 800,
                    height: 500,
                    alt: `Imagen del CoreConnect: ${connect.title}`,
                },
            ],
            locale: "es-ES",
            type: "website",
        },
    };
}

export default async function ConnectPage(props: PageProps<"/connects/[id]">) {

    const { session } = await requireAuth()
    const { id } = await props.params
    const connect = await connectService.getConnectWithDetails(id, session?.user)
    if ( connect.context.isPastConnect ) throw new Error('CoreConnect no disponible.');

    const { virtual: isVirtual, location } = connect.data

    return (
        <>
            {/* Hero Banner */}
            <div className="relative bg-linear-to-br from-azul-500 via-mirage-600 to-naranja-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-naranja-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-azul-400/20 rounded-full blur-3xl animate-pulse" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Heading className="text-white drop-shadow-lg text-center mb-10">
                        {connect.data.title}
                    </Heading>
                </div>
            </div>

            {/* Contenido Principal */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start -mt-10">

                    {/* Imagen + Descripción */}
                    <section className="lg:col-span-2 space-y-6">
                        <div className="relative z-20 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-azul-100">
                            {/* Imagen */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-mirage-900/30 z-10" />
                                <Image
                                    src={connect.data.image}
                                    alt={`Imagen del CoreConnect: ${connect.data.title}`}
                                    width={800}
                                    height={500}
                                    className="w-full object-cover max-h-96"
                                    priority
                                />
                            </div>

                            {/* Descripción */}
                            <div className="px-8 py-7">
                                <h2 className="text-xl font-black bg-linear-to-r from-azul-600 to-mirage-700 bg-clip-text text-transparent mb-4">
                                    Acerca de este CoreConnect
                                </h2>
                                <p className="text-mirage-700 text-lg leading-relaxed">
                                    {connect.data.details}
                                </p>
                            </div>

                            <div className="h-1.5 bg-linear-to-r from-azul-400 via-mirage-400 to-naranja-400" />
                        </div>

                        {/* Acciones */}
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-mirage-100">
                            <div className="bg-linear-to-r from-mirage-600 to-mirage-700 px-6 py-4">
                                <h3 className="text-white font-bold text-center text-lg">Acciones</h3>
                            </div>

                            <div className="p-6 flex flex-wrap gap-3 justify-center">
                                <Link
                                    href={`/categories/${connect.data.categoryId}`}
                                    className="inline-flex items-center gap-2 bg-mirage-100 hover:bg-mirage-400 text-mirage-600 hover:text-mirage-50 border border-mirage-300 text-sm font-semibold px-4 py-2 rounded-full transition-color duration-200"
                                                                                  >
                                    <TagIcon className="w-4 h-4" />
                                    {connect.data.category.name}
                                </Link>
                                <Link
                                    href={`/communities/${connect.data.communityId}`}
                                    className="inline-flex items-center gap-2 bg-mirage-100 hover:bg-mirage-400 text-mirage-600 hover:text-mirage-50 border border-mirage-300 text-sm font-semibold px-4 py-2 rounded-full transition-color duration-200"
                                                                                  >
                                    <UsersIcon className="w-4 h-4" />
                                    {connect.data.community.name}
                                </Link>

                                {!session?.user && (
                                    <div className="w-full mt-1 p-4 rounded-2xl bg-linear-to-r from-azul-50 to-naranja-50 border border-azul-200 flex flex-col items-center gap-3 text-center">
                                        <p className="text-sm font-semibold text-mirage-700">
                                            ¿Quieres confirmar tu asistencia a este CoreConnect?
                                        </p>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            <Link
                                                href={`/auth/login?redirect=${encodeURIComponent(`/connects/${id}`)}`}
                                                className="inline-flex items-center gap-1.5 bg-azul-600 hover:bg-azul-700 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors duration-200 shadow-md shadow-azul-200"
                                                                                                                      >
                                                Iniciar Sesión
                                            </Link>
                                            <Link
                                                href={`/auth/register?redirect=${encodeURIComponent(`/connects/${id}`)}`}
                                                className="inline-flex items-center gap-1.5 bg-white hover:bg-naranja-50 text-naranja-600 hover:text-naranja-700 border border-naranja-300 text-sm font-bold px-5 py-2 rounded-full transition-colors duration-200 shadow-sm"
                                                                                                                      >
                                                Crear Cuenta
                                            </Link>
                                        </div>
                                    </div>
                                )}
                                {connect.permissions && !connect.context.isAdmin && (
                                    connect.permissions.canConfirm || connect.permissions.canCancel
                                        ? <AttendanceToggleButton
                                            connectId={connect.data.id}
                                            permissions={connect.permissions}
                                        />
                                        : !connect.context.isAttending && (
                                            <div className="w-full mt-1 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3">
                                                <TicketIcon className="w-5 h-5 text-red-500 shrink-0" />
                                                <p className="text-sm font-semibold text-red-700">
                                                    Sin cupos disponibles para este CoreConnect.
                                                </p>
                                            </div>
                                        )
                                )}
                            </div>

                            <div className="h-1.5 bg-linear-to-r from-mirage-400 via-azul-400 to-mirage-400" />
                        </div>
                    </section>

                    {/* Aside */}
                    <aside className="lg:col-span-1 space-y-5 lg:sticky lg:top-8">

                        {/* Info del evento */}
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-azul-100">
                            <div className="bg-linear-to-r from-azul-500 to-azul-600 px-6 py-4">
                                <h3 className="text-white font-bold text-center text-lg">Información</h3>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-azul-50 rounded-xl border border-azul-100">
                                    <div className="bg-azul-100 rounded-lg p-2">
                                        <CalendarIcon className="w-5 h-5 text-azul-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-mirage-500 font-medium">Fecha</p>
                                        <p className="font-bold text-mirage-800">{displayDate(connect.data.date)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-naranja-50 rounded-xl border border-naranja-100">
                                    <div className="bg-naranja-100 rounded-lg p-2">
                                        <ClockIcon className="w-5 h-5 text-naranja-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-mirage-500 font-medium">Hora</p>
                                        <p className="font-bold text-mirage-800">{connect.data.time} horas</p>
                                    </div>
                                </div>

                                {(() => {
                                    const remaining = connect.data.availableSeats - connect.attendanceCount
                                    const isFull = remaining <= 0
                                    return (
                                        <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                                            isFull
                                                ? 'bg-red-50 border-red-100'
                                                : remaining <= 5
                                                    ? 'bg-naranja-50 border-naranja-200'
                                                    : 'bg-emerald-50 border-emerald-100'
                                        }`}>
                                            <div className={`rounded-lg p-2 ${
                                                isFull ? 'bg-red-100' : remaining <= 5 ? 'bg-naranja-100' : 'bg-emerald-100'
                                            }`}>
                                                <TicketIcon className={`w-5 h-5 ${
                                                    isFull ? 'text-red-600' : remaining <= 5 ? 'text-naranja-600' : 'text-emerald-600'
                                                }`} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-mirage-500 font-medium">Cupos disponibles</p>
                                                <p className={`font-bold ${
                                                    isFull ? 'text-red-600' : remaining <= 5 ? 'text-naranja-600' : 'text-emerald-700'
                                                }`}>
                                                    {isFull ? 'Sin cupos' : `${remaining} de ${connect.data.availableSeats}`}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })()}
                            </div>

                            <div className="h-1.5 bg-linear-to-r from-azul-400 via-naranja-400 to-azul-400" />
                        </div>

                        {/* Virtual / Ubicación */}
                        {isVirtual ? (
                            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-naranja-200">
                                <div className="bg-linear-to-r from-naranja-500 to-naranja-600 px-6 py-4">
                                    <h3 className="text-white font-bold text-center text-lg flex items-center justify-center gap-2">
                                        <VideoCameraIcon className="w-5 h-5" />
                                        Evento Virtual
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-center text-mirage-600 text-sm mb-3">Enlace de la reunión:</p>
                                    <a
                                        href={connect.data.meetingUrl ?? '#'}
                                                                                                  className="block text-center text-azul-600 hover:text-azul-800 hover:underline text-sm font-medium break-all"
                                    >
                                        {connect.data.meetingUrl}
                                    </a>
                                </div>
                                <div className="h-1.5 bg-linear-to-r from-naranja-400 via-azul-400 to-naranja-400" />
                            </div>
                        ) : location && (
                            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-mirage-100">
                                <DynamicConnectLocation
                                    address={location.address}
                                    lat={location.lat}
                                    lng={location.lng}
                                    placeName={location.placeName}
                                />
                            </div>
                        )}

                        {/* Organizador */}
                        <OrganizerCard organizer={connect.data.createdBy} />
                    </aside>
                </div>
            </main>
        </>
    );
}
