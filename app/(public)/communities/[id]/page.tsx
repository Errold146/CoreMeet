import Image from "next/image";
import { Metadata } from "next";

import { Heading } from "@/components/typography";
import { generatePageTitle, pluralize } from "@/src/shared/utils";
import { getServerSession } from "@/src/lib/auth-server";
import { CommunityActionsPanel, communityService, UpcomingCommunityConnects } from "@/src/features/communities";
import { OrganizerCard } from "@/src/features/connects/components";

export async function generateMetadata(props: PageProps<"/communities/[id]">): Promise<Metadata> {
    const { id } = await props.params;
    const session = await getServerSession();
    const community = await communityService.getCoreCommunityDetails(id, session?.user);

    if (!community) {
        return {
            title: "Comunidad no encontrada",
            description: "La comunidad que buscas no existe o no está disponible."
        };
    }

    const { name, description, imageUrl } = community.data!

    return {
        title: generatePageTitle(name),
        description: description || `Únete a ${name} en Core Meet`,
        openGraph: {
            title: name,
            description: description || `Únete a ${name} en Core Meet`,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: name,
                }
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: name,
            description: description || `Únete a ${name} en Core Meet`,
            images: [imageUrl],
        },
    };
}

export default async function CoreCommunitiesPage( props: PageProps<"/communities/[id]"> ) {

    const { id } = await props.params;
    const session = await getServerSession();
    const community = await communityService.getCoreCommunityDetails(id, session?.user);

    return (
        <>
            {/* Hero Banner con gradiente */}
            <div className="relative bg-linear-to-br from-azul-500 via-mirage-600 to-naranja-500 overflow-hidden">
                {/* Efectos decorativos de fondo */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-naranja-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-azul-400/20 rounded-full blur-3xl animate-pulse"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {community?.permissions && (
                        <div className="mb-8">
                            <CommunityActionsPanel permissions={community?.permissions} communityId={community.data.id} />
                        </div>
                    )}
                </div>
            </div>

            {/* Contenido Principal */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start -mt-20">
                    {/* Información de la Comunidad */}
                    <div className="lg:col-span-2">
                        <div className="relative z-20 bg-white rounded-3xl shadow-2xl overflow-visible border-2 border-azul-100">
                            {/* Cabecera de la tarjeta con gradiente sutil */}
                            <div className="bg-linear-to-r from-azul-50 to-naranja-50 px-8 py-6 pt-8 rounded-t-3xl">
                                {/* Imagen de la comunidad con decoración */}
                                <div className="flex justify-center -mt-32 mb-8">
                                    <div className="relative">
                                        {/* Resplandor decorativo animado */}
                                        <div className="absolute inset-0 bg-linear-to-r from-azul-400 to-naranja-400 rounded-3xl opacity-20 blur-2xl scale-110 animate-pulse"></div>

                                        {/* Contenedor de la imagen - Cuadrado redondeado */}
                                        <div className="relative w-72 h-72 rounded-3xl overflow-hidden border-8 border-white shadow-2xl ring-4 ring-azul-200">
                                            <Image
                                                src={community?.data?.imageUrl!}
                                                alt={`Imagen CoreCommunity: ${community?.data?.name}`}
                                                width={900}
                                                height={900}
                                                className="object-cover w-full h-full"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Nombre de la comunidad */}
                                <Heading className="text-center bg-linear-to-r from-azul-600 via-mirage-700 to-naranja-600 bg-clip-text text-transparent">
                                    {community?.data?.name}
                                </Heading>
                            </div>

                            {/* Descripción y estadísticas */}
                            <div className="px-8 py-6 space-y-6">
                                {/* Descripción */}
                                <div className="text-center">
                                    <p className="text-mirage-700 text-lg leading-relaxed">
                                        {community?.data?.description}
                                    </p>
                                </div>

                                {/* Estadísticas */}
                                <div className="flex justify-center">
                                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-azul-100 to-naranja-100 px-6 py-3 rounded-full border-2 border-azul-200 shadow-md">
                                        <div className="w-2 h-2 bg-azul-500 rounded-full animate-pulse"></div>
                                        <span className="text-mirage-800 font-bold text-lg">
                                            {community?.membersCount} {pluralize('Miembro', community?.membersCount!)}
                                        </span>
                                    </div>
                                </div>

                                {/* Decoración inferior */}
                                <div className="flex justify-center gap-2 pt-4">
                                    <div className="w-2 h-2 bg-azul-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-mirage-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-naranja-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel de Administrador */}
                    <div className="lg:col-span-1 lg:sticky lg:top-8">
                        <OrganizerCard organizer={community!.data.admin} />
                    </div>
                </div>

                {/* Sección de Próximos CoreConnects */}
                <div className="mt-16">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-azul-100">
                        {/* Cabecera de la sección */}
                        <div className="bg-linear-to-r from-azul-500 to-naranja-500 px-8 py-6">
                            <h2 className="text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
                                <div className="w-1.5 h-8 bg-white rounded-full"></div>
                                Próximos CoreConnects
                                <div className="w-1.5 h-8 bg-white rounded-full"></div>
                            </h2>
                        </div>

                        {/* Contenido de los eventos */}
                        <div className="p-8 min-h-75">
                            <div className="flex flex-col items-center justify-center h-full space-y-4">
                                <UpcomingCommunityConnects communityId={id} />
                            </div>
                        </div>

                        {/* Decoración inferior de la tarjeta */}
                        <div className="h-2 bg-linear-to-r from-azul-500 via-mirage-500 to-naranja-500"></div>
                    </div>
                </div>
            </main>
        </>
    );
}
