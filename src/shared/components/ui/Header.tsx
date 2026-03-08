import Link from "next/link";
import { Logo } from "./Logo";
import { GuestNavigation } from "./GuestNavigation";

export function Header() {
    return (
        <header className="bg-azul-950">
            <div className="md:flex md:justify-between md:items-center max-w-7xl mx-auto px-5 lg:px-0">
                <div className="flex justify-center md:justify-start">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                </div>
                <GuestNavigation />
            </div>
        </header>
    )
}
