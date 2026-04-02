import { CalendarDaysIcon } from "@heroicons/react/24/outline";

import { Heading } from "@/src/shared/components/typography"
import { connectService } from "../services/ConnectSevice"
import { PublicConnectCard } from "./PublicConnectCard"

export async function UncomingConnects() {

    const connects = await connectService.getUncoming()

    return (
        <main className="max-w-7xl mx-auto my-10 space-y-8 px-4 sm:px-6 lg:px-8">
            <Heading level={2} className="text-center">Próximos CoreConnects</Heading>

            {connects.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {connects.map(connect => <PublicConnectCard connect={connect} key={connect.id} />)}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                    <div className="bg-azul-100 rounded-full p-5">
                        <CalendarDaysIcon className="w-10 h-10 text-azul-400" />
                    </div>
                    <p className="text-lg font-semibold text-mirage-700">No hay CoreConnects próximos</p>
                    <p className="text-sm text-mirage-400 max-w-xs">
                        Aún no se han programado eventos. ¡Vuelve pronto o crea el tuyo propio!
                    </p>
                </div>
            )}
        </main>
    )
}
