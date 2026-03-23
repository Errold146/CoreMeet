import { boolean, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const notification = pgTable('notifications', {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: text('user_id').notNull(),
    actorName: varchar('actor_name', {length: 80}).notNull(),
    message: varchar('messagee', {length: 100}).notNull(),
    target: varchar('target', {length: 100}).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    read: boolean().default(false)
})
