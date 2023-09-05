import { createTRPCRouter } from "~/server/api/trpc";
import { checkoutRouter } from "./routers/checkout";
import { generateRouter } from "./routers/generate";
import { iconsRouter } from "./routers/icons";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  generate: generateRouter,
  checkout: checkoutRouter,
  icons: iconsRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
