import Link from "next/link";

import { Logo } from "./Logo";
import { requireAuth } from "@/lib/auth-server";
import { UserNavigation } from "./UserNavigation";
import { GuestNavigation } from "./GuestNavigation";

export async function Header() {

    const { isAuth } = await requireAuth()

    return (
        <header className="bg-azul-950">
            <div className="md:flex md:justify-between md:items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-center md:justify-start">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                </div>
                {isAuth ? <UserNavigation /> : <GuestNavigation />}
            </div>
        </header>
    )
}
