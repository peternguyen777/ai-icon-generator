import Image from "next/image";
import { capitalizeString } from "~/lib/utils";
import type { GeneratedImages } from "~/pages/generate";
import { api } from "~/utils/api";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import type { Dispatch, SetStateAction } from "react";

const BUCKET_NAME = "ai-icon-generator2";

const MarqueeImages = ({
  data,
  isLoading,
  image,
  setImage,
}: {
  data?: GeneratedImages;
  isLoading: boolean;
  image: GeneratedImages[number];
  setImage: Dispatch<SetStateAction<GeneratedImages[number]>>;
}) => {
  if (isLoading)
    return (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="mx-2">
            <Skeleton className="h-[192px] w-[192px] rounded-lg" />
            <Skeleton className="mt-2 h-[22px] w-[60px] rounded-full" />
          </div>
        ))}
      </>
    );

  return (
    <>
      {data?.map((icon) => {
        const imageUrl = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
        return (
          <div
            key={icon.id}
            className={`mx-2 w-[192px] cursor-pointer transition-transform duration-200 hover:scale-105 `}
          >
            <Image
              height={192}
              width={192}
              src={imageUrl}
              alt={icon.breed}
              className={`rounded-lg ${
                icon.id === image.id
                  ? `outline outline-[3px] outline-offset-4 outline-primary`
                  : `border`
              }`}
              onClick={() => setImage(icon)}
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

const MarqueeBanner = ({
  image,
  setImage,
}: {
  image: GeneratedImages[number];
  setImage: Dispatch<SetStateAction<GeneratedImages[number]>>;
}) => {
  const { data, isLoading } = api.icons.getIconsByIds.useQuery({
    imageIds: [
      "clmywpunf0005lb08prxt47ni",
      "clmu9wox10023q5wq2igs8ako",
      "clmu9hgp0001tq5wqv0i08heh",
      "clmt64d910001tlqdbw7f2utd",
      "clmu9g7yy001pq5wqidgn2uj8",
      "clmstm24g0029tlv7zshfce48",
      "clmsud05f003dtlv7nksr3bqq",
      "clmx9bgur0001mk08lnpv9jb1",
      "clmtd3kbp0005js08n45vmmi3",
      "clmspu8wy0007tlv7yx27sv0n",
      "clmuqr2kr000dq5xo72028k6d",
      "clmsuul0l003jtlv7mlx87p3m",
    ],
  });

  return (
    <div className="relative flex overflow-x-hidden">
      <div className="flex animate-marquee whitespace-nowrap pb-16 pt-4">
        <MarqueeImages
          isLoading={isLoading}
          data={data}
          image={image}
          setImage={setImage}
        />
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap pb-16 pt-4">
        <MarqueeImages
          isLoading={isLoading}
          data={data}
          image={image}
          setImage={setImage}
        />
      </div>
    </div>
  );
};

export default MarqueeBanner;
