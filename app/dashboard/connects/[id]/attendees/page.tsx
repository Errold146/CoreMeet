import { Metadata } from "next";
import { redirect } from "next/navigation";
import { UserGroupIcon } from "@heroicons/react/24/outline";

import { requireAuth } from "@/src/lib/auth-server";
import { generatePageTitle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/components/typography";
import { connectService } from "@/src/features/connects/services/ConnectSevice";

export async function generateMetadata({params}: PageProps<"/dashboard/connects/[id]/attendees">): Promise<Metadata> {
    const { id } = await params;
    const connect = await connectService.getConnectById(id);

    return {
        title: generatePageTitle(`Asistentes: ${connect.title}`),
        description: connect.details,
    };
}

function getInitials(name: string) {
    return name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
}

const AVATAR_COLORS = [
    "bg-azul-500 text-azul-50",
    "bg-naranja-500 text-naranja-50",
    "bg-mirage-700 text-mirage-50",
    "bg-azul-700 text-azul-50",
    "bg-naranja-700 text-naranja-50",
];

export default async function ConnectAttendeesPage({params}: PageProps<"/dashboard/connects/[id]/attendees">) {
    const { session } = await requireAuth();
    if (!session) redirect("/auth/login");

    const { id } = await params;
    const { connect, attendees } = await connectService.getConnectAttendees(id, session.user);

    return (
        <>
            <Heading>Asistentes CoreConnect: {connect.title}</Heading>

            <div className="mx-auto max-w-2xl mt-10">
                {/* Contador */}
                <div className="flex items-center gap-3 mb-6 px-1">
                    <span className="inline-flex items-center gap-2 bg-azul-100 text-azul-800 text-sm font-semibold px-4 py-1.5 rounded-full border border-azul-300">
                        <UserGroupIcon className="w-4 h-4" />
                        {attendees.length} {attendees.length === 1 ? "asistente" : "asistentes"}
                    </span>
                </div>

                {attendees.length ? (
                    <ul
                        role="list"
                        className="rounded-2xl overflow-hidden border border-mirage-200 shadow-xl divide-y divide-mirage-100"
                    >
                        {attendees.map(({ user }, index) => (
                            <li
                                key={user.id}
                                className="flex items-center gap-4 px-6 py-4 bg-white hover:bg-azul-50 transition-colors duration-150 group"
                            >
                                {/* Avatar */}
                                <div
                                    className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shadow-md ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
                                    aria-hidden="true"
                                >
                                    {getInitials(user.name)}
                                </div>

                                {/* Info */}
                                <div className="min-w-0 flex-1">
                                    <p className="font-bold text-mirage-950 group-hover:text-azul-700 transition-colors duration-150 truncate">
                                        {user.name}
                                    </p>
                                    <p className="text-mirage-500 text-sm truncate">
                                        {user.email}
                                    </p>
                                </div>

                                {/* Número de orden */}
                                <span className="shrink-0 text-xs font-semibold text-mirage-400">
                                    #{index + 1}
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-mirage-300 bg-mirage-50 py-20 px-8 text-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-azul-100 text-azul-500 shadow-inner">
                            <UserGroupIcon className="w-8 h-8" />
                        </div>
                        <p className="text-xl font-bold text-mirage-800">
                            Aún no hay asistentes
                        </p>
                        <p className="text-mirage-500 text-sm max-w-xs">
                            Cuando alguien confirme su asistencia a este CoreConnect, aparecerá aquí.
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
