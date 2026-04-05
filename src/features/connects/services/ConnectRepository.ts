import { eq, or, ilike, and, gte, lte, inArray } from "drizzle-orm";
import { format } from "date-fns";

import { db } from "@/src/db";
import { category, connect, connectLocations } from "@/src/db/schema";
import { InsertBasicConnect, InsertConnectLocation, InsertConnect, SelectConnect, FullConnect } from "../types";

export interface IConnectRepository {
    insert(data: InsertConnect): Promise<void>
    findUncommingByUserId(userId: string): Promise<SelectConnect[]>
    findUncoming(): Promise<SelectConnect[]>
    findById(connectId: string): Promise<SelectConnect | null>
    findFullById(connectId: string): Promise<FullConnect | null>
    update(connectId: string, data: Partial<InsertBasicConnect>): Promise<void>
    insertLocation(connectId: string, data: Omit<InsertConnectLocation, 'connectId' | 'id'>): Promise<void>
    deleteLocation(connectId: string): Promise<void>
    findUncomingByCommunity(communityId: string): Promise<SelectConnect[]>
    findUncomingByCategory(categoryId: string): Promise<SelectConnect[]>
    delete(connectId: string): Promise<void>
    search(query: string): Promise<SelectConnect[]>
    searchEnriched(query: string): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null }>>
    findUpcomingEnriched(limit?: number): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null }>>
    findByCategoryNameEnriched(categoryName: string): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null }>>
    findByLocationEnriched(location: string): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null; city: string | null; country: string | null }>>
    findByDateRangeEnriched(startDate: string, endDate: string): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null; city: string | null; country: string | null }>>
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

    async findUncoming(): Promise<SelectConnect[]> {
        const now = new Date()
        const nowDate = format(now, 'yyyy-MM-dd')
        const nowTime = format(now, 'HH:mm')

        const res = await db.query.connect.findMany({
            where: (connect, { or, gt, and, eq }) => or(
                gt(connect.date, nowDate),
                and(
                    eq(connect.date, nowDate),
                    gt(connect.time, nowTime)
                )
            ),
            orderBy: (connect, { asc }) => [asc(connect.date), asc(connect.time)]
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

    async findUncomingByCategory(categoryId: string): Promise<SelectConnect[]> {
        const now = new Date()
        const nowDate = format(now, 'yyyy-MM-dd')
        const nowTime = format(now, 'HH:mm')

        return db.query.connect.findMany({
            where: (connect, { eq, and, or, gt }) => and(
                eq(connect.categoryId, categoryId),
                or(
                    gt(connect.date, nowDate),
                    and(
                        eq(connect.date, nowDate),
                        gt(connect.time, nowTime)
                    )
                )
            ),
            orderBy: (connect, { asc }) => [asc(connect.date), asc(connect.time)]
        })
    }

    async delete(connectId: string): Promise<void> {
        await db.delete(connect).where(eq(connect.id, connectId))
    }

    async search(query: string): Promise<SelectConnect[]> {
        const today = format(new Date(), 'yyyy-MM-dd')
        return db.query.connect.findMany({
            where: (c, { and, gte }) => and(
                gte(c.date, today),
                or(
                    ilike(c.title, `%${query}%`),
                    ilike(c.details, `%${query}%`)
                )
            ),
            orderBy: (c, { asc }) => [asc(c.date), asc(c.time)]
        })
    }

    async searchEnriched(query: string): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null }>> {
        const today = format(new Date(), 'yyyy-MM-dd')
        const results = await db.query.connect.findMany({
            where: (c, { and, gte }) => and(
                gte(c.date, today),
                or(
                    ilike(c.title, `%${query}%`),
                    ilike(c.details, `%${query}%`)
                )
            ),
            with: { category: true, community: true, createdBy: true },
            orderBy: (c, { asc }) => [asc(c.date), asc(c.time)]
        })
        return results.map(({ category, community, createdBy, ...c }) => ({
            ...c,
            createdBy: (createdBy as { id: string }).id,
            categoryName: (category as { name: string }).name,
            communityName: (community as { name: string }).name,
            organizerName: (createdBy as { name: string }).name,
            organizerImage: (createdBy as { image: string | null }).image ?? null,
        }))
    }

    async findUpcomingEnriched(limit = 5): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null }>> {
        const now = new Date()
        const nowDate = format(now, 'yyyy-MM-dd')
        const nowTime = format(now, 'HH:mm')
        const results = await db.query.connect.findMany({
            where: (c, { or, gt, and, eq }) => or(
                gt(c.date, nowDate),
                and(eq(c.date, nowDate), gt(c.time, nowTime))
            ),
            with: { category: true, community: true, createdBy: true },
            orderBy: (c, { asc }) => [asc(c.date), asc(c.time)],
            limit
        })
        return results.map(({ category, community, createdBy, ...c }) => ({
            ...c,
            createdBy: (createdBy as { id: string }).id,
            categoryName: (category as { name: string }).name,
            communityName: (community as { name: string }).name,
            organizerName: (createdBy as { name: string }).name,
            organizerImage: (createdBy as { image: string | null }).image ?? null,
        }))
    }

    async findByCategoryNameEnriched(categoryName: string): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null }>> {
        const today = format(new Date(), 'yyyy-MM-dd')

        // Buscar categorías cuyo nombre coincida (case-insensitive)
        const matchingCategories = await db.query.category.findMany({
            where: (cat, { ilike }) => ilike(cat.name, `%${categoryName}%`)
        })

        if (matchingCategories.length === 0) return []

        const categoryIds = matchingCategories.map(c => c.id)

        const results = await db.query.connect.findMany({
            where: (c, { and, gte, inArray }) => and(
                gte(c.date, today),
                inArray(c.categoryId, categoryIds)
            ),
            with: { category: true, community: true, createdBy: true },
            orderBy: (c, { asc }) => [asc(c.date), asc(c.time)]
        })

        return results.map(({ category, community, createdBy, ...c }) => ({
            ...c,
            createdBy: (createdBy as { id: string }).id,
            categoryName: (category as { name: string }).name,
            communityName: (community as { name: string }).name,
            organizerName: (createdBy as { name: string }).name,
            organizerImage: (createdBy as { image: string | null }).image ?? null,
        }))
    }

    async findByLocationEnriched(location: string): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null; city: string | null; country: string | null }>> {
        const today = format(new Date(), 'yyyy-MM-dd')

        // Buscar los connectIds cuya ubicación coincida con la ciudad o país
        const matchingLocations = await db.query.connectLocations.findMany({
            where: (loc) => or(
                ilike(loc.city, `%${location}%`),
                ilike(loc.country, `%${location}%`)
            )
        })

        if (matchingLocations.length === 0) return []

        const connectIds = matchingLocations.map(l => l.connectId)

        const results = await db.query.connect.findMany({
            where: (c) => and(
                gte(c.date, today),
                inArray(c.id, connectIds)
            ),
            with: { category: true, community: true, createdBy: true, location: true },
            orderBy: (c, { asc }) => [asc(c.date), asc(c.time)]
        })

        return results.map(({ category, community, createdBy, location: loc, ...c }) => ({
            ...c,
            createdBy: (createdBy as { id: string }).id,
            categoryName: (category as { name: string }).name,
            communityName: (community as { name: string }).name,
            organizerName: (createdBy as { name: string }).name,
            organizerImage: (createdBy as { image: string | null }).image ?? null,
            city: loc?.city ?? null,
            country: loc?.country ?? null,
        }))
    }

    async findByDateRangeEnriched(startDate: string, endDate: string): Promise<Array<SelectConnect & { categoryName: string; communityName: string; organizerName: string; organizerImage: string | null; city: string | null; country: string | null }>> {
        const results = await db.query.connect.findMany({
            where: (c) => and(
                gte(c.date, startDate),
                lte(c.date, endDate)
            ),
            with: { category: true, community: true, createdBy: true, location: true },
            orderBy: (c, { asc }) => [asc(c.date), asc(c.time)]
        })

        return results.map(({ category, community, createdBy, location: loc, ...c }) => ({
            ...c,
            createdBy: (createdBy as { id: string }).id,
            categoryName: (category as { name: string }).name,
            communityName: (community as { name: string }).name,
            organizerName: (createdBy as { name: string }).name,
            organizerImage: (createdBy as { image: string | null }).image ?? null,
            city: loc?.city ?? null,
            country: loc?.country ?? null,
        }))
    }
}

export const connectRepository = new ConnectRepository()
