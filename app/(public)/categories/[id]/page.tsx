
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CalendarDaysIcon, TagIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import { generatePageTitle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/components/typography";
import { connectService } from "@/src/features/connects/services/ConnectSevice";
import { categoryService } from "@/src/features/connects/services/CategoryService";
import { PublicConnectCard } from "@/src/features/connects/components/PublicConnectCard";

interface CategoryPageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { id } = await params
    const category = await categoryService.getCategoryById(id)
    return {
        title: generatePageTitle(category.name),
        description: `Explora los próximos CoreConnects de la categoría ${category.name}`
    }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { id } = await params

    const [category, connects] = await Promise.all([
        categoryService.getCategoryById(id),
        connectService.getUncomingByCategory(id)
    ])

    const imageSrc = category.imageUrl?.startsWith("http") || category.imageUrl?.startsWith("/")
        ? category.imageUrl
        : `/${category.imageUrl}`

    return (
        <>
            {/* Hero de la categoría */}
            <section className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={category.name}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-azul-950/90 via-azul-950/40 to-transparent" />

                {/* Botón volver */}
                <Link
                    href="/"
                    className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-azul-950/70 hover:bg-azul-950/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200 shadow-lg cursor-pointer"
                >
                    <ArrowLeftIcon className="w-3.5 h-3.5" />
                    Volver al inicio
                </Link>

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 gap-3">
                    <div className="flex items-center gap-2 bg-naranja-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        <TagIcon className="w-3.5 h-3.5" />
                        Categoría
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white text-center drop-shadow-lg uppercase">
                        {category.name}
                    </h1>
                </div>
            </section>

            {/* Listado de connects */}
            <section className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8 space-y-8">
                <Heading level={2} className="text-center">
                    Próximos CoreConnects — {category.name}
                </Heading>

                {connects.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {connects.map(connect => (
                            <PublicConnectCard connect={connect} key={connect.id} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                        <div className="bg-azul-100 rounded-full p-5">
                            <CalendarDaysIcon className="w-10 h-10 text-azul-400" />
                        </div>
                        <p className="text-lg font-semibold text-mirage-700">
                            No hay CoreConnects próximos en esta categoría
                        </p>
                        <p className="text-sm text-mirage-400 max-w-xs">
                            Aún no hay eventos programados para <span className="font-semibold text-mirage-600">{category.name}</span>. ¡Vuelve pronto!
                        </p>
                    </div>
                )}
            </section>
        </>
    )
}
