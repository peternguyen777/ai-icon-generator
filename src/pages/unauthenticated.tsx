import Head from "next/head";

const Unauthenticated = () => {
  return (
    <>
      <Head>
        <title>WoofAi - Unauthenticated</title>
        <meta
          name="WoofAi AI powered dog icon generator"
          content="unauthenticated page for dog icon generator app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-grow items-center justify-center py-10">
        <h4 className="text-center">Please login to access this page</h4>
      </main>
    </>
  );
};

export default Unauthenticated;
