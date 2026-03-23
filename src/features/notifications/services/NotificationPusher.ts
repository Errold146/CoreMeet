import { pusher } from "@/src/lib/pusher";
import { SelectNotification } from "../types";

export interface InotificationPublisher {
    notify(notification: SelectNotification): Promise<void>
}

class NotificationPusher implements InotificationPublisher {
    async notify(notification: SelectNotification): Promise<void> {
        await pusher.trigger(
            `notifications-channel-${notification.userId}`,
            'new-notification',
            notification
        )
    }
}

export const notificationPusher = new NotificationPusher()
