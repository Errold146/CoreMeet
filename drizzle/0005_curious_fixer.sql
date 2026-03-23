CREATE TABLE "notifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"actor_name" varchar(80) NOT NULL,
	"messagee" varchar(100) NOT NULL,
	"target" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"read" boolean DEFAULT false
);
--> statement-breakpoint
ALTER TABLE "community_members" ADD CONSTRAINT "community_members_community_id_user_id_pk" PRIMARY KEY("community_id","user_id");