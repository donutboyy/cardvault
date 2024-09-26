CREATE TABLE IF NOT EXISTS "cardvault_cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL,
	"code" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "cardvault_cards" USING btree ("code");