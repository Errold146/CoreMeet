import { Metadata } from "next";

import { generatePageTitle } from "@/src/shared/utils";
import { IASearch } from "@/src/features/ai/components";
import { Heading } from "@/src/shared/components/typography";

export const metadata: Metadata = {
    title: generatePageTitle('Asistente IA'),
    description: "Consulta al asistente de IA para navegar con mayor facilidad en nuestro sitio."
}

export default function IAPage() {
    return (
        <main className="py-16 max-w-4xl mx-auto">
            <Heading className="text-center">Asistente IA CoreMeet</Heading>

            <IASearch />
        </main>
    )
}
