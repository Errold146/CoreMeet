import Link from "next/link";
import Image from "next/image";
import { InferSelectModel } from "drizzle-orm";
import { TagIcon } from "@heroicons/react/24/outline";

import { category } from "@/src/db/schema";

type SelectCategory = InferSelectModel<typeof category>

interface CategoryCardProps {
    category: SelectCategory
    index?: number
}

// Paleta de gradientes rotativos para el fallback
const GRADIENTS = [
    "from-azul-700 via-azul-800 to-azul-950",
    "from-naranja-600 via-naranja-800 to-azul-950",
    "from-mirage-600 via-mirage-800 to-azul-950",
    "from-azul-500 via-mirage-700 to-azul-950",
    "from-naranja-500 via-mirage-700 to-azul-950",
]

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
    const hasValidImage = !!category.imageUrl
    const imageSrc = category.imageUrl?.startsWith("http") || category.imageUrl?.startsWith("/")
        ? category.imageUrl
        : `/${category.imageUrl}`
    const gradient = GRADIENTS[index % GRADIENTS.length]

    return (
        <Link
            href={`/categories/${category.id}`}
            className="group relative w-full aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-azul-200 hover:border-naranja-400 cursor-pointer block"
        >
            {hasValidImage ? (
                <>
                    <Image
                        src={imageSrc}
                        alt={category.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    {/* Overlay sobre imagen */}
                    <div className="absolute inset-0 bg-linear-to-t from-azul-950/80 via-azul-950/20 to-transparent group-hover:from-azul-950/90 transition-all duration-300" />
                </>
            ) : (
                /* Fallback con gradiente + ícono centrado */
                <div className={`absolute inset-0 bg-linear-to-br ${gradient} flex flex-col items-center justify-center gap-3 p-4 group-hover:brightness-110 transition-all duration-300`}>
                    <div className="bg-white/10 group-hover:bg-white/20 rounded-full p-4 transition-colors duration-300">
                        <TagIcon className="w-8 h-8 text-naranja-300" />
                    </div>
                    <span className="text-white font-bold text-sm text-center leading-snug line-clamp-2 group-hover:text-naranja-200 transition-colors px-2">
                        {category.name}
                    </span>
                </div>
            )}

            {/* Nombre sobre imagen (solo cuando hay imagen) */}
            {hasValidImage && (
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2">
                    <TagIcon className="w-4 h-4 text-naranja-400 shrink-0" />
                    <span className="text-white font-bold text-sm leading-tight line-clamp-2 group-hover:text-naranja-300 transition-colors">
                        {category.name}
                    </span>
                </div>
            )}
        </Link>
    )
}
