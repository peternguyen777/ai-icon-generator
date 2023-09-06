import clsx from "clsx";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="mb-24 mt-12 grid grid-cols-1 gap-12 px-8 sm:mt-24 sm:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl">Generate icons with a click of a button</h1>
        <p className="text-2xl">
          Use AI to generate icons in seconds instead of paying a designer and
          waiting for them to create them for you.
        </p>
        <Link
          href="/generate"
          className={clsx(buttonVariants({ variant: "default" }), "self-start")}
        >
          Generate your Icons
        </Link>
      </div>
      <Image
        src="/banner.png"
        alt="an image of a bunch of nice looking icons"
        width="400"
        height="300"
        className="order-first sm:-order-none"
      />
    </section>
  );
};

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Icon Generator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col">
        <HeroBanner />
      </main>
    </>
  );
};

export default HomePage;
