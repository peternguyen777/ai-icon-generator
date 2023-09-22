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
    .input(z.object({ size: z.number() }))
    .query(async ({ ctx, input }) => {
      const icons = await ctx.prisma.icon.findMany({
        take: input.size,
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
  getIconsByIds: publicProcedure
    .input(z.object({ imageIds: z.array(z.string()) }))
    .query(async ({ ctx, input }) => {
      const icons = await ctx.prisma.icon.findMany({
        where: {
          id: { in: input.imageIds },
        },
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
});
