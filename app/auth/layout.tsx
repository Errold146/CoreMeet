import Link from "next/link";
import { Logo } from "@/components/ui";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex justify-center items-center pt-5">
                <Link href="/" className="w-32 -mb-20">
                    <Logo />
                </Link>
            </div>
            <main className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">{children}</main>
        </>
    );
}
