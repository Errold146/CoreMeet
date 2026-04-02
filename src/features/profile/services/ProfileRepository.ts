import { eq } from "drizzle-orm";

import { db } from "@/src/db";
import { User } from "../../auth";
import { FullProfile } from "../types";
import { users } from "@/src/db/schema";


export interface IProfileRepository {
    findById(userId: string): Promise<User>
    findFullProfileById(userId: string): Promise<FullProfile | undefined>
}

class ProfileRepository implements IProfileRepository {

    async findById(userId: string): Promise<User> {
        const [ user ] = await db.select().from(users).where(eq(users.id, userId)).limit(1)
        return user
    }

    async findFullProfileById(userId: string): Promise<FullProfile | undefined> {
        const user = await db.query.users.findFirst({
            where: (u, { eq }) => eq(u.id, userId),
        });

        if (!user) return undefined;

        const createdCommunities = await db.query.community.findMany({
            where: (c, { eq }) => eq(c.createdBy, userId),
            with: {
                connects: true,
            },
        });

        return { ...user, createdCommunities } as FullProfile;
    }
}

export const profileRepository = new ProfileRepository()
