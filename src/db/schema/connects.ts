import { pgTable, uuid, varchar, text, boolean, time, date, integer, doublePrecision, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./auth-schema";
import { community } from "./community";
import { category } from "./category";

export const connect = pgTable("connects", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }).notNull(),
    details: text("details").notNull(),
    availableSeats: integer("available_seats").notNull(),
    date: date("date", { mode: "string" }).notNull(),
    time: time("time").notNull(),
    image: varchar("image", { length: 100 }).notNull(),
    communityId: uuid("community_id").references(() => community.id, { onDelete: "cascade" }).notNull(),
    categoryId: uuid("category_id").notNull(),
    createdBy: text("created_by").references(() => users.id, { onDelete: "cascade" }).notNull(),
    virtual: boolean("virtual").default(false).notNull(),
    meetingUrl: text("meeting_url"),
})

export const connectLocations = pgTable("connect_locations", {
    id: uuid("id").primaryKey().defaultRandom(),
    connectId: uuid("connect_id").notNull().references(() => connect.id, { onDelete: "cascade" }),
    placeName: varchar("place_name", { length: 255 }).notNull(),
    address: varchar("address", { length: 255 }).notNull(),
    city: varchar("city", { length: 100 }).notNull(),
    country: varchar("country", { length: 100 }).notNull(),
    lat: doublePrecision("latitude").notNull(),
    lng: doublePrecision("longitude").notNull(),
})

export const connectAttendees = pgTable('connect_attendees', {
    connectId: uuid("connect_id").notNull().references(() => connect.id, { onDelete: "cascade" }),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').defaultNow().notNull()
})

export const connectRelations = relations(connect, ({ one }) => ({
    location: one(connectLocations),
    category: one(category, {
        fields: [connect.categoryId],
        references: [category.id],
    }),
    community: one(community, {
        fields: [connect.communityId],
        references: [community.id],
    }),
    createdBy: one(users, {
        fields: [connect.createdBy],
        references: [users.id],
    }),
}))

export const connectLocationsRelations = relations(connectLocations, ({ one }) => ({
    connect: one(connect, {
        fields: [connectLocations.connectId],
        references: [connect.id],
    }),
}))

export const connectAttendeesRelations = relations(connectAttendees, ({ one }) => ({
    user: one(users, {
        fields: [connectAttendees.userId],
        references: [users.id],
    }),
    connect: one(connect, {
        fields: [connectAttendees.connectId],
        references: [connect.id],
    }),
}))
