import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";

const BUCKET_NAME = "ai-icon-generator2";

const CollectionPage: NextPage = () => {
  const icons = api.icons.getIcons.useQuery();

  return (
    <>
      <Head>
        <title>Your Icons</title>
        <meta name="description" content="Your icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-24 flex min-h-screen flex-col px-8">
        <h1 className="text-4xl">Your icons</h1>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {icons.data?.map((icon) => (
            <li key={icon.id}>
              <Image
                src={`https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`}
                height="128"
                width="128"
                alt={icon.prompt ?? "an image of an icon"}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default CollectionPage;
