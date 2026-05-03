import { Metadata } from "next";

import { Hero } from "@/components/ui";
import { generatePageTitle } from "@/src/shared/utils";
import { FeatureCommunities } from "@/src/features/communities";
import { CategoryList, UncomingConnects } from "@/src/features/connects/components";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: generatePageTitle("Inicio"),
    description: "Página principal de CoreMeet"
}

export default async function Home() {

    return (
        <>

            <Hero />

            <UncomingConnects />

            <FeatureCommunities />

            <CategoryList />
        </>
    );
}
