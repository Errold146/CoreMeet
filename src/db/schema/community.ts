import { pgTable, text, timestamp, uuid, varchar, primaryKey, foreignKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./auth-schema";
import { connect } from "./connects";

export const community = pgTable('communities', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', {length: 255}).notNull(),
    description: text('description').notNull(),
    imageUrl: varchar('image_url', {length: 255}).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    createdBy: text('created_by').notNull(),
})

export const communityMembers = pgTable('community_members', {
    communityId: uuid('community_id').notNull(),
    userId: text('user_id').notNull(),
    joinedAt: timestamp('joined_at').defaultNow()
}, (table) => ({
    pk: primaryKey({ columns: [table.communityId, table.userId] }),
    communityFk: foreignKey({
        columns: [table.communityId],
        foreignColumns: [community.id],
    }).onDelete('cascade'),
    userFk: foreignKey({
        columns: [table.userId],
        foreignColumns: [users.id],
    }).onDelete('cascade'),
}))

// Relations
export const communityRelations = relations(community, ({ one, many }) => ({
    members: many(communityMembers),
    connects: many(connect),
    createdBy: one(users, {
        fields: [community.createdBy],
        references: [users.id],
    }),
}))

export const communityMembersRelations = relations(communityMembers, ({ one }) => ({
    community: one(community, {
        fields: [communityMembers.communityId],
        references: [community.id]
    }),
    user: one(users, {
        fields: [communityMembers.userId],
        references: [users.id]
    })
}))
