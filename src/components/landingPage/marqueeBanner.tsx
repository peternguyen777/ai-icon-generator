import Image from "next/image";
import { capitalizeString } from "~/lib/utils";
import type { GeneratedImages } from "~/pages/generate";
import { api } from "~/utils/api";
import { Badge } from "../ui/badge";

const BUCKET_NAME = "ai-icon-generator2";

const MarqueeImages = ({ data }: { data: GeneratedImages }) => {
  return data.map((icon) => {
    const imageUrl = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
    return (
      <div key={icon.id} className="mx-2 h-[192px] w-[192px] rounded-lg border">
        <Image
          height={192}
          width={192}
          src={imageUrl}
          alt={icon.breed}
          className="rounded-lg"
        />
        <Badge variant="secondary" className="mt-2">
          {capitalizeString(icon.breed)}
        </Badge>
      </div>
    );
  });
};

const MarqueeBanner = () => {
  const marqueeImages = api.icons.getCommunityIcons.useQuery({ size: 12 });

  if (!marqueeImages.data) return null;

  return (
    <div className="relative flex overflow-x-hidden">
      <div className="flex animate-marquee whitespace-nowrap pb-16 pt-16 sm:pt-20">
        <MarqueeImages data={marqueeImages.data} />
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap pb-16 pt-16 sm:pt-20">
        <MarqueeImages data={marqueeImages.data} />
      </div>
    </div>
  );
};

export default MarqueeBanner;
