CREATE TABLE "connects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"details" text NOT NULL,
	"available_seats" integer NOT NULL,
	"date" date NOT NULL,
	"time" time NOT NULL,
	"image" varchar(100) NOT NULL,
	"community_id" uuid NOT NULL,
	"category_id" uuid NOT NULL,
	"created_by" text NOT NULL,
	"virtual" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "connect_locations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"connect_id" uuid NOT NULL,
	"place_name" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"city" varchar(100) NOT NULL,
	"country" varchar(100) NOT NULL,
	"latitude" double precision NOT NULL,
	"longitude" double precision NOT NULL
);
--> statement-breakpoint
ALTER TABLE "connects" ADD CONSTRAINT "connects_community_id_communities_id_fk" FOREIGN KEY ("community_id") REFERENCES "public"."communities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "connects" ADD CONSTRAINT "connects_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "connect_locations" ADD CONSTRAINT "connect_locations_connect_id_connects_id_fk" FOREIGN KEY ("connect_id") REFERENCES "public"."connects"("id") ON DELETE cascade ON UPDATE no action;