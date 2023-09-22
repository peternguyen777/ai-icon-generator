import Image from "next/image";
import { api } from "~/utils/api";

const BUCKET_NAME = "ai-icon-generator2";

const MarqueeImages = () => {
  const marqueeImages = api.icons.getCommunityIcons.useQuery({ size: 16 });

  if (!marqueeImages.data) return;

  return marqueeImages.data.map((icon) => {
    const imageUrl = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
    return (
      <>
        <Image
          key={icon.id}
          className="mx-2 rounded-lg border"
          height={192}
          width={192}
          src={imageUrl}
          alt={icon.breed}
        />
      </>
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
