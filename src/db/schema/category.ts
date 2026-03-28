import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const category = pgTable('categories', {
    id: uuid('id').primaryKey().defaultRandom(),
    slug: varchar('slug', {length: 50}).notNull(),
    name: varchar('name', {length: 60}).notNull(),
    imageUrl: varchar('image_url', {length: 200}).notNull(),
})
