ALTER TABLE "communities" RENAME COLUMN "image" TO "image_url";--> statement-breakpoint
ALTER TABLE "communities" ALTER COLUMN "image_url" TYPE varchar(255);
