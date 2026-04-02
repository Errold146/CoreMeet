import { TagIcon } from "@heroicons/react/24/outline";

import { Heading } from "@/src/shared/components/typography";
import { categoryService } from "../services/CategoryService";
import { CategoryCard } from "./CategoryCard";

export async function CategoryList() {

    const categories = await categoryService.getAllCategories()

    return (
        <section className="max-w-7xl mx-auto my-16 space-y-8 px-4 sm:px-6 lg:px-8">
            <Heading level={2} className="text-center">Explora por Categoría</Heading>

            {categories.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {categories.map((cat, i) => (
                        <CategoryCard category={cat} index={i} key={cat.id} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                    <div className="bg-azul-100 rounded-full p-5">
                        <TagIcon className="w-10 h-10 text-azul-400" />
                    </div>
                    <p className="text-lg font-semibold text-mirage-700">No hay categorías disponibles</p>
                    <p className="text-sm text-mirage-400 max-w-xs">
                        Pronto habrá categorías para que puedas explorar CoreConnects por tema.
                    </p>
                </div>
            )}
        </section>
    );
}
