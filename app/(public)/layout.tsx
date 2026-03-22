import { Header } from "@/src/shared/components/ui/Header";

export default function PublicLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <Header />

            {children}
        </>
    )
}
