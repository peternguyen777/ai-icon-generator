import Stripe from "stripe";
import { env } from "~/env.mjs";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: "2023-08-16" });

export const checkoutRouter = createTRPCRouter({
  createCheckout: protectedProcedure.mutation(async ({ ctx }) => {
    return stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      metadata: {
        userId: ctx.session.user.id,
      },
      line_items: [{ price: env.PRICE_ID, quantity: 1 }],
      mode: "payment",
      success_url: env.HOST_NAME,
      cancel_url: env.HOST_NAME,
    });
  }),
});
