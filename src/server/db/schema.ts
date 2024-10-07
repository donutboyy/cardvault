import { pgTableCreator, text, uuid } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `cardvault_${name}`);

export const cards = createTable("cards", {
  uuid: uuid("uuid").notNull().primaryKey().defaultRandom(),
  cardIdentifier: text("cardIdentifier")
    .default("defaultCardIdentifier")
    .notNull(),
  defaultImage: text("defaultImage").default("defaultDefaultImage").notNull(),
  name: text("name").default("defaultName").notNull(),
  specialImage: text("specialImage").default("defaultSpecialImage").notNull(),
  typeText: text("typeText").default("defaultTypeText").notNull(),
});
