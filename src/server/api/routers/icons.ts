import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const iconsRouter = createTRPCRouter({
  getIcons: protectedProcedure
    .input(z.object({ page: z.number().min(1) }))
    .query(async ({ ctx, input }) => {
      const icons = await ctx.prisma.icon.findMany({
        where: {
          userId: ctx.session.user.id,
        },
        orderBy: [
          {
            createdAt: "desc",
          },
          { id: "desc" },
        ],
        skip: (input.page - 1) * 48,
        take: 48,
        include: {
          User: {
            select: {
              image: true,
              name: true,
            },
          },
        },
      });

      return icons;
    }),
  getTotalIcons: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.icon.count({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  getCommunityIcons: publicProcedure
    .input(z.object({ page: z.number().min(1) }))
    .query(async ({ ctx, input }) => {
      const icons = await ctx.prisma.icon.findMany({
        skip: (input.page - 1) * 48,
        take: 48,
        orderBy: [
          {
            createdAt: "desc",
          },
          { id: "desc" },
        ],
        include: {
          User: {
            select: {
              image: true,
              name: true,
            },
          },
        },
      });

      return icons;
    }),
  getTotalCommunityIcons: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.icon.count();
  }),
});
