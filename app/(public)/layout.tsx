import { Header } from "@/components/ui";

export default function PublicLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <Header />

            {children}
        </>
    )
}
