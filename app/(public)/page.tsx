import { Metadata } from "next";

import { Hero } from "@/components/ui";
import { generatePageTitle } from "@/src/shared/utils";

export const metadata: Metadata = {
    title: generatePageTitle("Inicio"),
    description: "Página principal de CoreMeet"
}

export default async function Home() {

    return (
        <>

            <Hero />
        </>
    );
}
