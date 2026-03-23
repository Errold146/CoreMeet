import { Metadata } from "next";
import { redirect } from "next/navigation";

import { requireAuth } from "@/src/lib/auth-server";
import { generatePageTitle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/components/typography";
import { NotificationList } from "@/src/features/notifications/components";
import { notificationService } from "@/src/features/notifications/services";

const title = 'Tus Notificaciones'

export const metadata: Metadata = {
    title: generatePageTitle(title),
    description: 'Mira y administra tus notificaciones'
}

export default async function NotificationsPage() {

    const { session } = await requireAuth()
    if ( !session ) redirect('/auth/login');

    const notifications = await notificationService.getUserNotifications(session.user.id)
    await notificationService.clearNotifications(session.user.id)

    return (
        <>
            <Heading>{title}</Heading>
            <NotificationList notifications={notifications} />
        </>
    )
}
