ALTER TABLE "cardvault_cards" RENAME COLUMN "image" TO "defaultImage";--> statement-breakpoint
DROP INDEX IF EXISTS "unique_idx";--> statement-breakpoint
ALTER TABLE "cardvault_cards" ALTER COLUMN "name" SET DEFAULT 'defaultName';--> statement-breakpoint
ALTER TABLE "cardvault_cards" ALTER COLUMN "defaultImage" SET DEFAULT 'defaultDefaultImage';--> statement-breakpoint
ALTER TABLE "cardvault_cards" DROP COLUMN IF EXISTS "id";--> statement-breakpoint
ALTER TABLE "cardvault_cards" ADD COLUMN "uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL;--> statement-breakpoint
ALTER TABLE "cardvault_cards" ADD COLUMN "cardIdentifier" text DEFAULT 'defaultCardIdentifier' NOT NULL;--> statement-breakpoint
ALTER TABLE "cardvault_cards" ADD COLUMN "specialImage" text DEFAULT 'defaultSpecialImage' NOT NULL;--> statement-breakpoint
ALTER TABLE "cardvault_cards" ADD COLUMN "typeText" text DEFAULT 'defaultTypeText' NOT NULL;--> statement-breakpoint
ALTER TABLE "cardvault_cards" DROP COLUMN IF EXISTS "code";--> statement-breakpoint
ALTER TABLE "cardvault_cards" DROP COLUMN IF EXISTS "createdAt";
