import Image from "next/image";
import Link from "next/link";
import type { RouterOutputs } from "~/utils/api";
import { DownloadButton } from "./download-button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

type IconData = RouterOutputs["icons"]["getIcons"];

interface CollectionProps {
  title: string;
  data: IconData;
}

const BUCKET_NAME = "ai-icon-generator2";

export const Collection = ({ title, data }: CollectionProps) => {
  return (
    <main className="container mx-auto my-12 flex min-h-screen flex-col px-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {data.map((icon) => {
          const imageUrl = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
          return (
            <HoverCard key={icon.id}>
              <HoverCardTrigger asChild>
                <div className="relative">
                  <DownloadButton fileName={icon.id} imageUrl={imageUrl} />
                  <Link href={imageUrl} target="_blank">
                    <Image
                      src={imageUrl}
                      className="w-full rounded-lg"
                      height="128"
                      width="128"
                      alt={icon.prompt ?? "an image of an icon"}
                    />
                  </Link>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src={icon.User?.image ?? undefined} />
                    <AvatarFallback />
                  </Avatar>
                  <div className="space-y-1">
                    {icon.User?.name && (
                      <h4 className="text-sm font-semibold">
                        {icon.User.name}
                      </h4>
                    )}
                    {icon.prompt && (
                      <p className="text-sm">Prompt: {icon.prompt}</p>
                    )}
                    {icon.colour && (
                      <p className="text-sm">Colour: {icon.colour}</p>
                    )}
                    {icon.style && (
                      <p className="text-sm">Style: {icon.style}</p>
                    )}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </main>
  );
};
