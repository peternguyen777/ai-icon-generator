import { type NextPage } from "next";
import Head from "next/head";
import { Collection } from "~/components/collection";
import { api } from "~/utils/api";

const CollectionPage: NextPage = () => {
  const icons = api.icons.getIcons.useQuery();

  return (
    <>
      <Head>
        <title>Your Icons</title>
        <meta name="description" content="Your icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {icons.data && <Collection title={"Your icons"} data={icons.data} />}
    </>
  );
};

export default CollectionPage;
