import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const cardRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx }) => {
    const card = await ctx.db.query.cards.findFirst({
      orderBy: (cards, { desc }) => [desc(cards.createdAt)],
    });

    return card ?? null;
  }),
});
