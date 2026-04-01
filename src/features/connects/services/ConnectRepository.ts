import { eq } from "drizzle-orm";
import { format } from "date-fns";

import { db } from "@/src/db";
import { connect, connectLocations } from "@/src/db/schema";
import { InsertBasicConnect, InsertConnectLocation, InsertConnect, SelectConnect, FullConnect } from "../types";

export interface IConnectRepository {
    insert(data: InsertConnect): Promise<void>
    findUncommingByUserId(userId: string): Promise<SelectConnect[]>
    findById(connectId: string): Promise<SelectConnect | null>
    findFullById(connectId: string): Promise<FullConnect | null>
    update(connectId: string, data: Partial<InsertBasicConnect>): Promise<void>
    insertLocation(connectId: string, data: Omit<InsertConnectLocation, 'connectId' | 'id'>): Promise<void>
    deleteLocation(connectId: string): Promise<void>
    findUncomingByCommunity(communityId: string): Promise<SelectConnect[]>
    delete(connectId: string): Promise<void>
}

class ConnectRepository implements IConnectRepository {
    async insert(data: InsertConnect): Promise<void> {
        const [ insertedConnect ] = await db.insert(connect).values(data).returning()
        if ( !insertedConnect.virtual && data.location ) {
            await db.insert(connectLocations).values({
                connectId: insertedConnect.id,
                ...data.location
            })
        }
    }

    async findUncommingByUserId(userId: string): Promise<SelectConnect[]> {
        const today = format(new Date(), 'yyyy-MM-dd')

        const res = await db.query.connect.findMany({
            where: (connect, { eq, gte, and }) => and(
                eq(connect.createdBy, userId),
                gte(connect.date, today)
            ),
            orderBy: (connect, { asc }) => [asc(connect.date)]
        })

        return res
    }

    async findById(connectId: string): Promise<SelectConnect | null> {
        try {
            const res = await db.query.connect.findFirst({
                where: (connect, { eq }) => eq(connect.id, connectId),
                with: { location: true }
            })
            if (!res) return null
            return { ...res, location: res.location ?? undefined }
        } catch {
            return null
        }
    }

    async findFullById(connectId: string): Promise<FullConnect | null> {
        const res = await db.query.connect.findFirst({
            where: (connect, { eq }) => eq(connect.id, connectId),
            with: {
                location: true,
                category: true,
                community: true,
                createdBy: true
            }
        })

        return res ?? null
    }

    async update(connectId: string, data: Partial<InsertBasicConnect>): Promise<void> {
        await db.update(connect).set(data).where(eq(connect.id, connectId))
    }

    async insertLocation(connectId: string, data: Omit<InsertConnectLocation, 'connectId' | 'id'>): Promise<void> {
        const existing = await db.query.connectLocations.findFirst({
            where: (loc, { eq }) => eq(loc.connectId, connectId)
        })

        if (existing) {
            await db.update(connectLocations).set(data).where(eq(connectLocations.connectId, connectId))
        } else {
            await db.insert(connectLocations).values({
                connectId,
                placeName: data.placeName,
                address: data.address,
                city: data.city,
                country: data.country,
                lat: data.lat,
                lng: data.lng,
            })
        }
    }

    async deleteLocation(connectId: string): Promise<void> {
        await db.delete(connectLocations).where(eq(connectLocations.connectId, connectId))
    }

    async findUncomingByCommunity(communityId: string): Promise<SelectConnect[]> {
        const today = format(new Date(), 'yyyy-MM-dd')
        return db.query.connect.findMany({
            where: (connect, { eq, gte, and }) => and(
                eq(connect.communityId, communityId),
                gte(connect.date, today)
            ),
            orderBy: (connect, { asc }) => [asc(connect.date)],
            limit: 3
        })
    }

    async delete(connectId: string): Promise<void> {
        await db.delete(connect).where(eq(connect.id, connectId))
    }
}

export const connectRepository = new ConnectRepository()
