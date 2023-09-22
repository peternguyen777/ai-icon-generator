import Image from "next/image";
import { api } from "~/utils/api";
import { Badge } from "../ui/badge";
import { capitalizeString } from "~/lib/utils";

const BUCKET_NAME = "ai-icon-generator2";

const MarqueeImages = () => {
  const marqueeImages = api.icons.getCommunityIcons.useQuery({ size: 12 });

  if (!marqueeImages.data) return;

  return marqueeImages.data.map((icon) => {
    const imageUrl = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
    return (
      <div
        key={icon.id}
        className="mx-2 h-[192px] w-[192px] cursor-pointer rounded-lg border"
      >
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
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-16">
        <MarqueeImages />
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-16">
        <MarqueeImages />
      </div>
    </div>
  );
};

export default MarqueeBanner;
