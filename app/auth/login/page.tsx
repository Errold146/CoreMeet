import { Metadata } from "next";
import { Heading } from "@/components/typography";
import { generatePageTitle } from "@/src/shared/utils";
import { LoginForm } from "@/src/features/auth";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle("Iniciar Sesión"),
    description: "Inicia sesión en CoreMeet y comienza a crear CoreCommunities y CoreConnects"
};

export default function LoginPage() {
    return (
        <>
            <Heading>Iniciar Sesión</Heading>
            <LoginForm />

            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/register"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline">Crear Cuenta</Link>
                <Link href={"/auth/forgot-password"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline">Olvide mi Contraseña</Link>
            </nav>
        </>
    );
}
