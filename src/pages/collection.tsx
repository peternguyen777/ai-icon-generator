import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Collection } from "~/components/collection";
import { PaginationBar } from "~/components/pagination-bar";
import { api } from "~/utils/api";

const PAGE_SIZE = 48;

const CollectionPage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const iconsCount = api.icons.getTotalIcons.useQuery();
  const totalPages = getTotalPages(iconsCount.data);
  const icons = api.icons.getIcons.useQuery({ page: currentPage });

  return (
    <>
      <Head>
        <title>Your Icons</title>
        <meta name="description" content="Your icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-8 flex min-h-screen flex-col px-4 sm:my-12 sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="scroll-m-20 font-clash text-2xl font-medium tracking-tight lg:text-4xl">
            Your icons
          </h1>
          {totalPages > 0 && (
            <PaginationBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )}
        </div>
        {icons.data && <Collection data={icons.data} />}
      </main>
    </>
  );
};

export const getTotalPages = (numberOfIcons: number | undefined) => {
  if (!numberOfIcons) return 0;

  return Math.ceil(numberOfIcons / PAGE_SIZE);
};

export default CollectionPage;
