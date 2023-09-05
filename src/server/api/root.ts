import { createTRPCRouter } from "~/server/api/trpc";
import { generateRouter } from "./routers/generate";
import { checkoutRouter } from "./routers/checkout";
import { exampleRouter } from "./routers/example";
import { iconsRouter } from "./routers/icons";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  generate: generateRouter,
  checkout: checkoutRouter,
  icons: iconsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
