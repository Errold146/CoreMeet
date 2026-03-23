import { requireAuth } from "@/lib/auth-server";
import { notificationService } from "@/src/features/notifications/services";

export async function GET() {

    const { session } = await requireAuth()
    if ( !session ) return new Response(JSON.stringify(0));

    const notifications = await notificationService.getUnreadCount(session.user.id)
    return new Response(JSON.stringify(notifications), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
