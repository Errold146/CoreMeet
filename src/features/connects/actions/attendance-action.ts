"use server"

import { rateLimit } from "@/src/lib/limiter";
import { getClientIp } from "@/src/shared/utils/ip";
import { requireAuth } from "@/src/lib/auth-server";
import { connectAttendeesService } from "../services/ConnectAttendeesService";
import { getMinutesDiffFromNow } from "@/src/shared/utils";

export async function toggleAttendanceAction(connectId: string, canConfirm: boolean) {

    const ip = await getClientIp()
    const { success, reset } = await rateLimit.limit(ip)

    if ( !success ) {
        return {
            error: `Límite Alcanzado. Espera ${getMinutesDiffFromNow(reset)} minutos e intenta de nuevo.`,
            success: '',
            newPermissions: {
                canConfirm,
                canCancel: !canConfirm
            }
        }
    }

    const { session } = await requireAuth()
    if ( !session ) throw new Error('Usuario no Autenticado.');

    return await connectAttendeesService.toggleAttendance(connectId, session.user)
}
