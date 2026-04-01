import { and, count, eq } from "drizzle-orm";

import { db } from "@/src/db";
import { connectAttendees } from "@/src/db/schema";
import { SelectConnectAttendeeWithUser } from "../types";

export interface IConnectAttendeesRepository {
    isUserAttending(userId: string, connectId: string): Promise<boolean>
    insert(userId: string, connectId: string): Promise<void>
    remove(userId: string, connectId: string): Promise<void>
    findAttendeesCount(connectId: string): Promise<number>
    findAttendeesByConnectId(connectId: string): Promise<SelectConnectAttendeeWithUser[]>
}

class ConnectAttendeesRepository implements IConnectAttendeesRepository {

    async isUserAttending(userId: string, connectId: string): Promise<boolean> {
        const res = await db.query.connectAttendees.findFirst({
            where: (connectAttendees, {eq, and}) => and(
                eq(connectAttendees.connectId, connectId),
                eq(connectAttendees.userId, userId)
            )
        })

        return !!res
    }

    async insert(userId: string, connectId: string): Promise<void> {
        await db.insert(connectAttendees).values({userId, connectId})
    }

    async remove(userId: string, connectId: string): Promise<void> {
        await db.delete(connectAttendees).where(
            and(
                eq(connectAttendees.userId, userId),
                eq(connectAttendees.connectId, connectId),
            )
        )
    }

    async findAttendeesCount(connectId: string): Promise<number> {
        const [ res ] = await db.select({total: count()}).from(connectAttendees).where(eq(connectAttendees.connectId, connectId))
        return res.total
    }

    async findAttendeesByConnectId(connectId: string): Promise<SelectConnectAttendeeWithUser[]> {
        const res = await db.query.connectAttendees.findMany({
            where: (connectAttendees, { eq }) => eq(connectAttendees.connectId, connectId),
            with: {
                user: {
                    columns: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        })

        return res
    }
}

export const connectAttendeesRepository = new ConnectAttendeesRepository()
