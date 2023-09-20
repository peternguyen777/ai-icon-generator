import { type NextPage } from "next";
import Head from "next/head";
import { Collection } from "~/components/collection";
import { api } from "~/utils/api";

const CommunityPage: NextPage = () => {
  const icons = api.icons.getCommunityIcons.useQuery();

  return (
    <>
      <Head>
        <title>Community Icons</title>
        <meta name="description" content="Community icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {icons.data && <Collection title={"Community icons"} data={icons.data} />}
    </>
  );
};

export default CommunityPage;
