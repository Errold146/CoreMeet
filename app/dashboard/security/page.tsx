import { Metadata } from "next";
import { redirect } from "next/navigation";

import { requireAuth } from "@/src/lib/auth-server";
import { generatePageTitle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/components/typography";
import { ActiveSessionsList, ChangePasswordForm } from "@/src/features/auth";

const title: string = "Ajustes y Seguridad"

export const metadata: Metadata = {
    title: generatePageTitle(title),
    description: `Aqui puedes administrar tus: ${title}`
}

export default async function SecurityPage() {

    const { session } = await requireAuth()
    if ( !session ) redirect('/auth/login');

    return (
        <>
            <Heading>{title}</Heading>

            <ChangePasswordForm />
            <ActiveSessionsList />
        </>
    )
}
