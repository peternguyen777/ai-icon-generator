import { type NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GenerateIconForm } from "~/components/generateIconForm/GenerateIconForm";
import { Spinner } from "~/components/icons/spinner";
import { DownloadButton } from "~/components/imagePreview/download-button";
import { DialogContentImage } from "~/components/imagePreview/image-dialog";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Dialog, DialogTrigger } from "~/components/ui/dialog";
import { ScrollArea } from "~/components/ui/scroll-area";
import type { RouterOutputs } from "~/utils/api";

export type GeneratedImages = RouterOutputs["generate"]["generateIcon"];

const BUCKET_NAME = "ai-icon-generator2";

const GenerateGallery = ({
  generatedImages,
}: {
  generatedImages: GeneratedImages;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {generatedImages.length > 0 && (
        <section className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {generatedImages.map((icon, index) => {
            const imageUrl = `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
            return (
              <div
                className="relative"
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
                key={icon.id}
              >
                {hoveredIndex === index && (
                  <DownloadButton fileName={icon.id} imageUrl={imageUrl} />
                )}
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      alt="an image of generated prompt"
                      src={imageUrl}
                      width={256}
                      height={256}
                      className="cursor-pointer rounded-lg border"
                    />
                  </DialogTrigger>
                  <DialogContentImage icon={icon} imageUrl={imageUrl} />
                </Dialog>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

const GeneratePage: NextPage = () => {
  const [generatedImages, setGeneratedImages] = useState<GeneratedImages>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const { resolvedTheme } = useTheme();

  return (
    <>
      <Head>
        <title>WoofAi - Generate icon</title>
        <meta
          name="WoofAi AI powered dog icon generator"
          content="generate page for dog icon generator app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-8 flex flex-col px-4 sm:px-8">
        <div className="grid lg:grid-cols-3 lg:gap-6">
          <Card className="min-h-[288px] w-full lg:col-span-1 lg:mr-8">
            <CardHeader>
              <CardTitle>Generate an icon</CardTitle>
            </CardHeader>
            <GenerateIconForm
              setGeneratedImages={setGeneratedImages}
              generatedImages={generatedImages}
              setIsGenerating={setIsGenerating}
            />
          </Card>

          <Card
            className={`mt-8 ${
              generatedImages.length > 0 ? `flex` : `hidden lg:flex`
            } w-full flex-col lg:col-span-2 lg:mt-0`}
          >
            <>
              <CardHeader>
                <CardTitle>Output</CardTitle>
              </CardHeader>
              {isGenerating && generatedImages.length === 0 ? (
                <CardContent className="flex flex-grow flex-col items-center justify-center">
                  <div className="flex items-center">
                    <Spinner />
                    <h4 className="">Please wait...</h4>
                  </div>
                </CardContent>
              ) : generatedImages.length === 0 ? (
                <CardContent className="flex flex-grow flex-col items-center justify-center">
                  <Image
                    src="/emptygallery-light.png"
                    alt="empty gallery"
                    width={192}
                    height={192}
                    className={`${
                      resolvedTheme === "dark" ? `invert` : `invert-0`
                    }`}
                  />
                  <h4 className="mt-6">
                    Enter a prompt to start generating...
                  </h4>
                </CardContent>
              ) : (
                <ScrollArea className="h-[656px] pb-8">
                  <CardContent className="flex-grow">
                    <GenerateGallery generatedImages={generatedImages} />
                  </CardContent>
                </ScrollArea>
              )}
            </>
            <CardFooter className=" justify-end">
              <Link
                className={buttonVariants({ variant: "default" })}
                href="/collection"
              >
                My collection
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
};

export default GeneratePage;
