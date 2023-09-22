import Image from "next/image";
import { useState } from "react";
import type { GeneratedImages } from "~/pages/generate";
import { DownloadButton } from "./download-button";
import { DialogContentImage } from "./image-dialog";
import { Dialog, DialogTrigger } from "../ui/dialog";

const BUCKET_NAME = "ai-icon-generator2";

export const Collection = ({ data }: { data: GeneratedImages }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4 md:grid-cols-6">
      {data.map((icon, index) => {
        const fileName = `${icon.breed} ${icon.prompt}`;
        const imageUrl = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
        return (
          <div
            className="relative"
            onMouseOver={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={icon.id}
          >
            {hoveredIndex === index && (
              <DownloadButton fileName={fileName} imageUrl={imageUrl} />
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Image
                  src={imageUrl}
                  className="w-full cursor-pointer rounded-lg"
                  height="128"
                  width="128"
                  quality={100}
                  alt="an ai generated dog icon"
                />
              </DialogTrigger>
              <DialogContentImage icon={icon} imageUrl={imageUrl} />
            </Dialog>
          </div>
        );
      })}
    </div>
  );
};
