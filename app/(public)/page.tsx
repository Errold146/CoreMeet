import { Metadata } from "next";
import { Hero } from "@/components/ui";

export const metadata: Metadata = {
    title: "CoreMeet - Inicio",
    description: "Página principal de CoreMeet"
}

export default function Home() {
    return (
        <>

            <Hero />
        </>
    );
}
