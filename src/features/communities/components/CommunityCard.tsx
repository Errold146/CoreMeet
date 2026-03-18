import Link from "next/link";
import Image from "next/image";
import { CommunityWithPermissions } from "../types/community.types";
import { PencilSquareIcon, TrashIcon, UsersIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface CommunityCardProps {
    community: CommunityWithPermissions
}

export function CommunityCard({ community }: CommunityCardProps) {
    const { data, context, permissions } = community;

    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-azul-200 hover:border-azul-400">
            {/* Imagen de la comunidad */}
            <div className="relative h-48 w-full overflow-hidden bg-azul-100">
                <Image
                    src={data.imageUrl}
                    alt={data.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={false}
                />
                {context.isAdmin && (
                    <div className="absolute top-4 right-4 bg-naranja-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ADMIN
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-mirage-800 mb-3 group-hover:text-azul-600 transition-colors">
                    {data.name}
                </h3>

                <p className="text-mirage-600 mb-4 line-clamp-2">
                    {data.description}
                </p>

                {data.createdAt && (
                    <p className="text-sm text-mirage-500 mb-4">
                        Creada el {new Date(data.createdAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                )}

                {/* Acciones */}
                <div className="flex flex-col gap-2 mt-6">
                    <Link
                        href={`/dashboard/communities/${data.id}` as any}
                        className="w-full flex items-center justify-center gap-2 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                    >
                        <ArrowRightCircleIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        <span>Ver Detalles</span>
                    </Link>

                    {permissions.canViewMembers && (
                        <Link
                            href={`/dashboard/communities/${data.id}/members` as any}
                            className="w-full flex items-center justify-center gap-2 bg-mirage-200 text-mirage-800 hover:text-mirage-50 hover:bg-mirage-500 border border-mirage-400 hover:border-mirage-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                        >
                            <UsersIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                            <span>Miembros</span>
                        </Link>
                    )}

                    {permissions.canEdit && (
                        <Link
                            href={`/dashboard/communities/${data.id}/edit`}
                            className="w-full flex items-center justify-center gap-2 bg-naranja-200 text-naranja-800 hover:text-naranja-50 hover:bg-naranja-500 border border-naranja-400 hover:border-naranja-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                        >
                            <PencilSquareIcon className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                            <span>Editar</span>
                        </Link>
                    )}

                    {permissions.canDelete && (
                        <button
                            className="w-full flex items-center justify-center gap-2 bg-red-200 text-red-800 hover:text-red-50 hover:bg-red-500 border border-red-400 hover:border-red-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                        >
                            <TrashIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                            <span>Eliminar</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
