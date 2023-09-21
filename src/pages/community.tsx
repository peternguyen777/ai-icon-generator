import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Collection } from "~/components/imagePreview/collection";
import { api } from "~/utils/api";
import { getTotalPages } from "./collection";
import { PaginationBar } from "~/components/imagePreview/pagination-bar";

const CommunityPage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const iconsCount = api.icons.getTotalCommunityIcons.useQuery();
  const totalPages = getTotalPages(iconsCount.data);
  const icons = api.icons.getCommunityIcons.useQuery({ page: currentPage });

  return (
    <>
      <Head>
        <title>Community Icons</title>
        <meta name="description" content="Community icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-8 flex min-h-screen flex-col px-4 sm:my-12 sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="scroll-m-20 font-clash text-2xl font-medium tracking-tight lg:text-4xl">
            Community icons
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

export default CommunityPage;
