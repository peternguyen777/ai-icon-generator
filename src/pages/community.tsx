import { type NextPage } from "next";
import Head from "next/head";
import { Collection } from "~/components/collection";
import { api } from "~/utils/api";

const CommunityPage: NextPage = () => {
  const icons = api.icons.getCommunityIcons.useQuery();

  if (!icons.data) return;

  return (
    <>
      <Head>
        <title>Community Icons</title>
        <meta name="description" content="Community icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Collection title={"Community icons"} icons={icons.data} />
    </>
  );
};

export default CommunityPage;
