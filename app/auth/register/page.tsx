import { Metadata } from "next";

import { Heading } from "@/components/typography";
import { RegisterForm } from "@/src/features/auth";
import { generatePageTitle } from "@/src/shared/utils";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle('Crear Cuenta'),
    description: "Crear una cuenta en CoreMeet y comienza a crear CoreCommunities y CoreConnects"
};

export default async function RegisterPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
    const { redirect } = await searchParams;
    return (
        <>
            <Heading>Crear Cuenta</Heading>
            <RegisterForm redirectTo={redirect} />

            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/login"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline" target="_blank" rel="noopener noreferrer">Iniciar Sesión</Link>
                <Link href={"/auth/forgot-password"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline" target="_blank" rel="noopener noreferrer">Olvide mi Contraseña</Link>
            </nav>
        </>
    );
}
