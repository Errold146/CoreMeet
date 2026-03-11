import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const spaceGroptesk = Space_Grotesk({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "CoreMeet",
	description: "CoreMeet es una red social empresarial diseñada para conectar equipos, departamentos y comunidades internas dentro de una organización. Permite crear reuniones por departamento, encuentros globales entre colaboradores y espacios comunitarios para fomentar la comunicación y la colaboración. Desarrollada con Next.js, combina escalabilidad, rendimiento y una experiencia de usuario moderna.",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="es" suppressHydrationWarning className="h-full">
			<body
				className={`${spaceGroptesk.className} h-full bg-mirage-50`}
			>
				{children}
                <Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
