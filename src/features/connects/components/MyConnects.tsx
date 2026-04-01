import { requireAuth } from "@/src/lib/auth-server";
import { redirect } from "next/navigation";
import { connectService } from "../services/ConnectSevice";
import { ConnectCard } from "./ConnectCard";
import { NotConnects } from "./NotConnects";

export async function MyConnects() {
    const { session } = await requireAuth();
    if (!session) redirect("/auth/login");

    const connects = await connectService.getUncommingConnectsByUser(session.user);

    return connects.length > 0 ? (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-mirage-800">
                    Mis CoreConnects
                    <span className="ml-3 text-lg font-normal text-azul-600">
                        ({connects.length})
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connects.map((connect) => (
                    <ConnectCard key={connect.data.id} connect={connect} />
                ))}
            </div>
        </div>
    ) : (
        <NotConnects />
    );
}
