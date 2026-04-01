CREATE TABLE "connect_attendees" (
	"connect_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "connect_attendees" ADD CONSTRAINT "connect_attendees_connect_id_connects_id_fk" FOREIGN KEY ("connect_id") REFERENCES "public"."connects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "connect_attendees" ADD CONSTRAINT "connect_attendees_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;