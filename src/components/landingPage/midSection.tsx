import {
  Bot,
  ChevronRightSquare,
  Palette,
  PawPrint,
  PenTool,
  Settings,
  Settings2,
} from "lucide-react";
import Image from "next/image";
import useResponsiveImage from "~/hooks/useResponsiveImage";
import { capitalizeString } from "~/lib/utils";
import type { GeneratedImages } from "~/pages/generate";
import { AttributeCard } from "../imagePreview/image-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const SampleImage = ({ image }: { image: GeneratedImages[number] }) => {
  const imageWidth = useResponsiveImage();

  return (
    <Card className="rounded-lg shadow-md lg:col-span-2">
      <CardHeader>
        {image.User?.name && (
          <CardTitle>
            {`${image.User.name}'s ${capitalizeString(image.breed)} `}
          </CardTitle>
        )}
      </CardHeader>
      <CardContent>
        <div>
          <Image
            src={`https://ai-icon-generator2.s3.ap-southeast-2.amazonaws.com/${image.id}`}
            alt="an ai generated dog icon"
            width={imageWidth}
            height={imageWidth}
            className="mx-auto rounded-lg border"
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <AttributeCard
            title={"Dog Breed"}
            content={image.breed}
            icon={<PawPrint className="h-4 w-4 text-muted-foreground" />}
          />
          <AttributeCard
            title={"Prompt"}
            content={image.prompt}
            icon={
              <ChevronRightSquare className="h-4 w-4 text-muted-foreground" />
            }
          />
          <AttributeCard
            title={"Style"}
            content={image.style}
            icon={<PenTool className="h-4 w-4 text-muted-foreground" />}
          />
          <AttributeCard
            title={"Colour"}
            content={image.colour}
            icon={<Palette className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const MidSection = ({ image }: { image: GeneratedImages[number] }) => {
  return (
    <section className="sm:px-8s container flex flex-col items-center px-4">
      <h2 className="text-center">Powerful Features for Icon Creation</h2>
      <div className="my-10 max-w-5xl lg:grid lg:grid-cols-3 lg:gap-24">
        <SampleImage image={image} />
        <div className="mt-16 space-y-10 lg:col-span-1 lg:my-auto">
          <div>
            <Bot height={30} width={30} />
            <h4 className="mb-4 mt-1">AI Powered:</h4>
            <p>
              Create truly unique dog icons every time with OpenAI&apos;s
              DALL-E2 technology, guaranteeing one-of-a-kind designs for your
              projects.
            </p>
          </div>
          <div>
            <Settings2 height={30} width={30} />
            <h4 className="mb-4 mt-1">Customization:</h4>
            <p>
              Customize your dog icons effortlessly with our intuitive tools,
              allowing you to adjust colors, styles, and actions.
            </p>
          </div>
          <div>
            <Settings height={30} width={30} />
            <h4 className="mb-4 mt-1">High-Quality Output</h4>
            <p>
              Download your dog icons in high-resolution PNGs for websites or
              share links with your friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidSection;
