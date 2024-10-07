import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `cardvault_${name}`);

export const cards = createTable(
  "cards",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    image: text("image").notNull(),
    code: text("code").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    set: text("set").default("ARC").notNull(),
  },
  (cards) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(cards.code),
    };
  },
);
