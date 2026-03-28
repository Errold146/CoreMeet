import { pgTable, uuid, varchar, text, boolean, time, date, integer, doublePrecision } from "drizzle-orm/pg-core";
import { users } from "./auth-schema";
import { community } from "./community";

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
});

export const connectLocations = pgTable("connect_locations", {
    id: uuid("id").primaryKey().defaultRandom(),
    connectId: uuid("connect_id").notNull().references(() => connect.id, { onDelete: "cascade" }),
    placeName: varchar("place_name", { length: 255 }).notNull(),
    address: varchar("address", { length: 255 }).notNull(),
    city: varchar("city", { length: 100 }).notNull(),
    country: varchar("country", { length: 100 }).notNull(),
    lat: doublePrecision("latitude").notNull(),
    lng: doublePrecision("longitude").notNull(),
});
