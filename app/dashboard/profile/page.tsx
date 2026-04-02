import { Metadata } from "next";

import { generatePageTitle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/components/typography";
import { ProfileForm } from "@/src/features/profile/components";
import { requireAuth } from "@/src/lib/auth-server";
import { redirect } from "next/navigation";

const title: string = "Administra tu perfil"

export const metadata: Metadata = {
    title: generatePageTitle(title),
    description: "Aqui puedes administrar, editar tu perfil de usuario."
}

export default async function AdminProfilePage() {

    const { session } = await requireAuth()
    if ( !session ) redirect('/auth/login');

    return (
        <>
            <Heading>{title}</Heading>

            <ProfileForm
                user={session.user}
            />
        </>
    )
}
