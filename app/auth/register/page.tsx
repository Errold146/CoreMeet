import { Metadata } from "next";

import { Heading } from "@/components/typography";
import { RegisterForm } from "@/src/features/auth";
import { generatePageTitle } from "@/src/shared/utils";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle('Crear Cuenta'),
    description: "Crear una cuenta en CoreMeet y comienza a crear CoreCommunities y CoreConnects"
};

export default function RegisterPage() {
    return (
        <>
            <Heading>Crear Cuenta</Heading>
            <RegisterForm />

            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/login"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline">Iniciar Sesión</Link>
                <Link href={"/auth/forgot-password"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline">Olvide mi Contraseña</Link>
            </nav>
        </>
    );
}
