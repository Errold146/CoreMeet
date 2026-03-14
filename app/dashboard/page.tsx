import { Metadata } from "next";
import { redirect } from "next/navigation";

import { requireAuth } from "@/lib/auth-server";
import { Heading } from "@/components/typography";
import { generatePageTitle } from "@/src/shared/utils";

export const metadata: Metadata = {
    title: generatePageTitle('Dashboard'),
    description: 'Administra tu perfil, crea comunidades y reuniones.'
}

export default async function DashboardPage() {

    const { isAuth } = await requireAuth()
    if ( !isAuth ) redirect('/auth/login');

    return (
        <>
            <Heading>Panel de Administración</Heading>
        </>
    )
}
