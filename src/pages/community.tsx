import { type NextPage } from "next";
import Head from "next/head";
import { Collection } from "~/components/imagePreview/collection";
import { api } from "~/utils/api";

const CommunityPage: NextPage = () => {
  const { data, isLoading } = api.icons.getCommunityIcons.useQuery({
    size: 48,
  });

  return (
    <>
      <Head>
        <title>Community icons</title>
        <meta
          name="WoofAi AI powered dog icon generator"
          content="community icons page for dog icon generator app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-8 flex flex-col px-4 sm:my-12 sm:px-8">
        <div className="flex items-center justify-between">
          <h2>Community</h2>
        </div>
        <Collection data={data} isLoading={isLoading} />
      </main>
    </>
  );
};

export default CommunityPage;
