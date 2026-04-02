
import { cache } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";

import { generatePageTitle } from "@/src/shared/utils";
import { profileService } from "@/src/features/profile/services/ProfileService";
import { ProfileCard, ProfileCommunityCard } from "@/src/features/profile/components";

const getProfileDetailsCache = cache(async (id: string) => {
    return await profileService.getProfileDetails(id)
})

export async function generateMetadata({params}: PageProps<'/profile/[id]'>): Promise<Metadata> {
    const { id } = await params

    const profile = await getProfileDetailsCache(id)

    return {
        title: generatePageTitle(`Perfil de: ${profile?.name}`),
        description: `Estas visitando el perfil del usuario ${profile?.name}`,
        openGraph: {
            title: `Conectate con: ${profile?.name} y explora las preferencias de los CoreCommunities y/o CoreConnects`,
            siteName: "CoreMeet",
            images: [
                {
                    url: profile?.image ?? `${process.env.APP_URL}/default.jpg`,
                    width: 800,
                    height: 500,
                    alt: `Imagen del Usuario: ${profile?.name}`,
                },
            ],
            locale: "es-ES",
            type: "website",
        },
    }
}

export default async function ProfilePage({params}: PageProps<'/profile/[id]'>) {
    const { id } = await params
    const profile = await getProfileDetailsCache(id)
    if (!profile) notFound();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Tarjeta hero del usuario */}
            <ProfileCard profile={profile} />

            {/* Sección de CoreCommunities */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-azul-100 rounded-xl">
                        <BuildingLibraryIcon className="w-6 h-6 text-azul-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-mirage-900">CoreCommunities</h2>
                        <p className="text-sm text-mirage-500">Comunidades creadas por {profile.name}</p>
                    </div>
                </div>

                {profile.createdCommunities.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {profile.createdCommunities.map((community) => (
                            <ProfileCommunityCard key={community.id} community={community} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border-2 border-dashed border-azul-200 text-center space-y-3">
                        <BuildingLibraryIcon className="w-12 h-12 text-azul-300" />
                        <p className="text-mirage-600 font-medium">
                            Este usuario aún no ha creado ninguna CoreCommunity
                        </p>
                    </div>
                )}
            </section>
        </main>
    )
}

