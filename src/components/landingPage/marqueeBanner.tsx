import Image from "next/image";
import { capitalizeString } from "~/lib/utils";
import type { GeneratedImages } from "~/pages/generate";
import { api } from "~/utils/api";
import { Badge } from "../ui/badge";

const BUCKET_NAME = "ai-icon-generator2";

const MarqueeImages = ({ data }: { data: GeneratedImages }) => {
  return (
    <>
      {data.map((icon) => {
        const imageUrl = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
        return (
          <div
            key={icon.id}
            className="mx-2 h-[192px] w-[192px] rounded-lg border transition-transform duration-200 hover:scale-105"
          >
            <Image
              height={192}
              width={192}
              src={imageUrl}
              alt={icon.breed}
              className="rounded-lg"
              priority
            />
            <Badge variant="secondary" className="mt-2">
              {capitalizeString(icon.breed)}
            </Badge>
          </div>
        );
      })}
    </>
  );
};

const MarqueeBanner = () => {
  const marqueeImages = api.icons.getIconsByIds.useQuery({
    imageIds: [
      "clmu9wox10023q5wq2igs8ako",
      "clmu9hgp0001tq5wqv0i08heh",
      "clmspx0pv000htlv76bw8gdlf",
      "clmt64d910001tlqdbw7f2utd",
      "clmu9g7yy001pq5wqidgn2uj8",
      "clmstm24g0029tlv7zshfce48",
      "clmsud05f003dtlv7nksr3bqq",
      "clmtd3kbp0005js08n45vmmi3",
      "clmspu8wy0007tlv7yx27sv0n",
      "clmuqr2kr000dq5xo72028k6d",
      "clmsuul0l003jtlv7mlx87p3m",
    ],
  });

  if (!marqueeImages.data) return null;

  return (
    <div className="relative flex overflow-x-hidden">
      <div className="flex animate-marquee whitespace-nowrap pb-16">
        <MarqueeImages data={marqueeImages.data} />
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap pb-16">
        <MarqueeImages data={marqueeImages.data} />
      </div>
    </div>
  );
};

export default MarqueeBanner;
