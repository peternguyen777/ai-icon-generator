import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const iconsRouter = createTRPCRouter({
  getIcons: protectedProcedure.query(async ({ ctx }) => {
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
      take: 96,
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
  getCommunityIcons: publicProcedure.query(async ({ ctx }) => {
    const icons = await ctx.prisma.icon.findMany({
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
});
