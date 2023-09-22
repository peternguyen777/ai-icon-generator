import { type NextPage } from "next";
import Head from "next/head";
// import MarqueeBanner from "~/components/landingPage/marqueeBanner";
import TopSection from "~/components/landingPage/topSection";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>WoofAi - Dog Icon Generator</title>
        <meta
          name="WoofAi AI powered dog icon generator"
          content="landing page for dog icon generator app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopSection />
        {/* <MarqueeBanner /> */}
      </main>
    </>
  );
};

export default HomePage;
