import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import OpenAI from "openai";
import { env } from "~/env.mjs";
import { b64image } from "~/data/b64image";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: env.ACCESS_KEY_ID,
    secretAccessKey: env.SECRET_ACCESS_KEY,
  },
});

const openai = new OpenAI({
  apiKey: env.DALLE_API_KEY,
});

const BUCKET_NAME = "ai-icon-generator2";

async function generateIcon(prompt: string, numberOfIcons = 1) {
  if (env.MOCK_DALLE === "true") {
    return new Array<string>(numberOfIcons).fill(b64image);
  } else {
    const response = await openai.images.generate({
      prompt,
      n: numberOfIcons,
      size: "512x512",
      response_format: "b64_json",
    });
    return response.data?.map((result) => result.b64_json ?? "");
  }
}

export const generateRouter = createTRPCRouter({
  generateIcon: protectedProcedure
    .input(
      z.object({
        breed: z.string(),
        prompt: z.string(),
        colour: z.string(),
        style: z.string(),
        numberOfIcons: z.number().int().min(1).max(10),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { count } = await ctx.prisma.user.updateMany({
        where: {
          id: ctx.session.user.id,
          credits: {
            gte: input.numberOfIcons,
          },
        },
        data: {
          credits: {
            decrement: input.numberOfIcons,
          },
        },
      });

      if (count <= 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You do not have enough credits",
        });
      }

      const finalPrompt = `A ${input.breed} dog ${input.prompt}. Icon in ${input.style} style, ${input.colour} tint, happy mood, high-quality, dramatic lighting.`;

      try {
        const base64EncodedImages = await generateIcon(
          finalPrompt,
          input.numberOfIcons
        );

        const createdIcons = await Promise.all(
          base64EncodedImages.map(async (image) => {
            const icon = await ctx.prisma.icon.create({
              data: {
                breed: input.breed,
                prompt: input.prompt,
                userId: ctx.session.user.id,
                colour: input.colour,
                style: input.style,
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

            await s3
              .putObject({
                Bucket: BUCKET_NAME,
                Body: Buffer.from(image, "base64"),
                Key: icon.id,
                ContentEncoding: "base64",
                ContentType: "image/png",
              })
              .promise();

            return icon;
          })
        );

        return createdIcons.map((icon) => icon);
      } catch (error) {
        await ctx.prisma.user.update({
          where: {
            id: ctx.session.user.id,
          },
          data: {
            credits: {
              increment: input.numberOfIcons,
            },
          },
        });
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Image generation failed",
        });
      }
    }),
});
