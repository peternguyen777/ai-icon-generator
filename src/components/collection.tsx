import Image from "next/image";
import Link from "next/link";
import type { RouterOutputs } from "~/utils/api";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import { Download } from "lucide-react";

type IconData = RouterOutputs["icons"]["getIcons"];

interface CollectionProps {
  title: string;
  data: IconData;
}

const BUCKET_NAME = "ai-icon-generator2";

export function forceDownload(blobUrl: string, filename: string) {
  const a = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export const Collection = ({ title, data }: CollectionProps) => {
  return (
    <main className="container mx-auto my-12 flex min-h-screen flex-col px-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {data.map((icon) => (
          <HoverCard key={icon.id}>
            <HoverCardTrigger asChild>
              <div className="relative">
                <button
                  className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/50 shadow-sm transition-all hover:scale-105 active:scale-95"
                  onClick={() => {
                    const image = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
                    fetch(image, {
                      headers: new Headers({
                        Origin: location.origin,
                      }),
                      mode: "cors",
                    })
                      .then((response) => response.blob())
                      .then((blob) => {
                        const blobUrl = window.URL.createObjectURL(blob);
                        forceDownload(blobUrl, `${icon.id}.png`);
                      })
                      .catch((e) => console.error(e));
                  }}
                >
                  <Download className="h-5 w-5 text-gray-500" />
                </button>
                <Link
                  href={`https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`}
                  target="_blank"
                >
                  <Image
                    src={`https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`}
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
                    <h4 className="text-sm font-semibold">{icon.User.name}</h4>
                  )}
                  {icon.prompt && (
                    <p className="text-sm">Prompt: {icon.prompt}</p>
                  )}
                  {icon.colour && (
                    <p className="text-sm">Colour: {icon.colour}</p>
                  )}
                  {icon.style && <p className="text-sm">Style: {icon.style}</p>}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </main>
  );
};
