import { type NextPage } from "next";
import Head from "next/head";
import { Collection } from "~/components/collection";
import { api } from "~/utils/api";

const CollectionPage: NextPage = () => {
  const icons = api.icons.getIcons.useQuery();

  if (!icons.data) return;

  return (
    <>
      <Head>
        <title>Your Icons</title>
        <meta name="description" content="Your icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Collection title={"Your icons"} icons={icons.data} />
    </>
  );
};

export default CollectionPage;
