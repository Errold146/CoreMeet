"use client";

import { useSession } from "@/src/lib/auth-client";
import { UserNavigation } from "./UserNavigation";
import { GuestNavigation } from "./GuestNavigation";

export function NavWrapper() {
    const { data: session, isPending } = useSession();

    if (isPending) return null;

    return session ? <UserNavigation /> : <GuestNavigation />;
}
