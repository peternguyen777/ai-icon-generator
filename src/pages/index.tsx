import { TooltipProvider } from "@radix-ui/react-tooltip";
import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DownloadButton } from "~/components/download-button";
import { GenerateIconForm } from "~/components/generateIconForm/GenerateIconForm";
import { Spinner } from "~/components/icons/spinner";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export interface GeneratedImage {
  id: string;
  prompt: string | undefined;
  imageUrl: string;
}

const GenerateGallery = ({
  generatedImages,
}: {
  generatedImages: GeneratedImage[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {generatedImages.length > 0 && (
        <section className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <TooltipProvider>
            {generatedImages.map((image, index) => {
              return (
                <Tooltip key={image.imageUrl}>
                  <TooltipTrigger asChild>
                    <div
                      className="relative"
                      onMouseOver={() => setHoveredIndex(index)}
                      onMouseOut={() => setHoveredIndex(null)}
                    >
                      {hoveredIndex === index && (
                        <DownloadButton
                          fileName={image.id}
                          imageUrl={image.imageUrl}
                        />
                      )}
                      <Link href={image.imageUrl} target="_blank">
                        <Image
                          alt="an image of generated prompt"
                          src={image.imageUrl}
                          width={256}
                          height={256}
                          className="rounded-lg border"
                        />
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{image.prompt}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </section>
      )}
    </>
  );
};

const HomePage: NextPage = () => {
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <>
      <Head>
        <title>Icon Generator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-8 flex flex-col px-4 sm:px-8">
        <div className="grid lg:grid-cols-3 lg:gap-6">
          <Card className="min-h-[288px] w-full lg:col-span-1 lg:mr-8">
            {!isLoggedIn && (
              <>
                <CardHeader>
                  <CardTitle className="font-clash">
                    Generate an icon 🐶
                  </CardTitle>
                  <CardDescription>Login to begin prompting</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => void signIn("google")}>Login</Button>
                </CardContent>
              </>
            )}
            {isLoggedIn && (
              <>
                <CardHeader>
                  <CardTitle className="font-clash">
                    Generate an icon 🐶
                  </CardTitle>
                </CardHeader>
                <GenerateIconForm
                  setGeneratedImages={setGeneratedImages}
                  generatedImages={generatedImages}
                  setIsGenerating={setIsGenerating}
                />
              </>
            )}
          </Card>

          {isLoggedIn && (
            <Card
              className={`mt-8 ${
                generatedImages.length > 0 ? `flex` : `hidden lg:flex`
              } w-full flex-col lg:col-span-2 lg:mt-0`}
            >
              <>
                <CardHeader>
                  <CardTitle className="font-clash">Output</CardTitle>
                </CardHeader>
                {isGenerating && generatedImages.length === 0 ? (
                  <CardContent className="flex flex-grow flex-col items-center justify-center">
                    <div className="flex">
                      <Spinner />
                      <span className="font-clash text-xl font-semibold">
                        Please wait...
                      </span>
                    </div>
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
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
