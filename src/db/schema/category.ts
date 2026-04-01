import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { connect } from "./connects";

export const category = pgTable('categories', {
    id: uuid('id').primaryKey().defaultRandom(),
    slug: varchar('slug', {length: 50}).notNull(),
    name: varchar('name', {length: 60}).notNull(),
    imageUrl: varchar('image_url', {length: 200}).notNull(),
})

export const categoryRelations = relations(category, ({ many }) => ({
    connects: many(connect),
}))
