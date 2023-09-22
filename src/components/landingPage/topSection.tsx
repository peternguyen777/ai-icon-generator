import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const TopSection = () => {
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
      <Button
        className="mt-8 cursor-pointer rounded-full"
        onClick={loginRedirectHandler}
      >
        Generate your icons today
      </Button>
    </section>
  );
};

export default TopSection;
