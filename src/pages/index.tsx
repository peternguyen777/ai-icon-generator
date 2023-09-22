import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/button";

const HomePage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  const loginRedirectHandler = async () => {
    if (session.data) {
      await router.push("/generate");
    } else {
      await signIn("google", { callbackUrl: "/generate" });
    }
  };

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
      <main className="flex flex-col">
        <section className="container flex flex-col items-center px-4 pt-20 sm:px-8">
          <p className="rounded-full bg-secondary px-6 py-2 text-center">
            🐾 Millions of icons already generated 🦮🐕🐩🐕‍🦺
          </p>
          <h1 className="mb-6 mt-10 text-center">
            Paws, Click, Create:
            <br /> Icon Magic Unleashed!
          </h1>

          <h4 className="text-center">
            Create your own AI dogs & connect with other dog owners around the
            world.
          </h4>

          <Button className="mt-8 rounded-full" onClick={loginRedirectHandler}>
            Generate your icons today
          </Button>
        </section>
        {/* <section className="overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap py-12 ">
            <span className="mx-4 text-4xl">Marquee Item 1</span>
            <span className="mx-4 text-4xl">Marquee Item 2</span>
            <span className="mx-4 text-4xl">Marquee Item 3</span>
            <span className="mx-4 text-4xl">Marquee Item 4</span>
            <span className="mx-4 text-4xl">Marquee Item 5</span>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default HomePage;
