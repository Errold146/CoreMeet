import { and, count, eq } from "drizzle-orm";

import { db } from "@/src/db";
import { notification } from "@/src/db/schema";
import { InsertNotification, SelectNotification } from "../types";

export interface INotificationRepository {
    create(data: InsertNotification): Promise<SelectNotification>
    getUnreadCount(userId: string): Promise<number>
    findByUserId(userId: string): Promise<SelectNotification[]>
    delete(userId: string): Promise<void>
}

class NotificationRepository implements INotificationRepository {

    async create(data: InsertNotification): Promise<SelectNotification> {
        const [res] = await db.insert(notification).values(data).returning()
        return res
    }

    async getUnreadCount(userId: string): Promise<number> {
        const res = await db.select({count: count()}).from(notification).where(
            and(
                eq(notification.userId, userId),
                eq(notification.read, false)
            )
        )

        return res[0].count
    }

    async findByUserId(userId: string): Promise<SelectNotification[]> {
        const res = await db.query.notification.findMany({
            where: (notification, { eq, and }) => and(
                eq(notification.userId, userId),
                eq(notification.read, false)
            ),
            limit: 10,
            orderBy: (notification, { desc }) => [desc(notification.createdAt)]
        })

        return res
    }

    async delete(userId: string): Promise<void> {
        await db.delete(notification).where(eq(notification.userId, userId))
    }
}

export const notificationRepository = new NotificationRepository()
