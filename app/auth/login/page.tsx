import { Metadata } from "next";
import { Heading } from "@/components/typography";
import { generatePageTitle } from "@/src/shared/utils";
import { LoginForm } from "@/src/features/auth";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle("Iniciar Sesión"),
    description: "Inicia sesión en CoreMeet y comienza a crear CoreCommunities y CoreConnects"
};

export default async function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
    const { redirect } = await searchParams;
    return (
        <>
            <Heading>Iniciar Sesión</Heading>
            <LoginForm redirectTo={redirect} />

            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/register"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline" target="_blank" rel="noopener noreferrer">Crear Cuenta</Link>
                <Link href={"/auth/forgot-password"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline" target="_blank" rel="noopener noreferrer">Olvide mi Contraseña</Link>
            </nav>
        </>
    );
}
