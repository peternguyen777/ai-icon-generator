import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import Link from "next/link";

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
    <section className="container flex flex-col items-center px-4 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
      <Link href="/community">
        <p className="animate-bounce rounded-full bg-secondary px-6 py-3 text-center text-sm">
          🦮🐕 Say hello to our new friends! 🐩🐕‍🦺
        </p>
      </Link>
      <h1 className="mt-10 bg-gradient-to-bl from-primary to-primary/50 bg-clip-text text-center text-transparent">
        Paws, Click, Create:
      </h1>
      <h1 className="mb-6 text-center">Icon Magic Unleashed!</h1>
      <h4 className="text-center">
        Create your own AI dogs & connect with other dog owners around the
        world.
      </h4>
      <Button
        className="mt-8 cursor-pointer rounded-full transition-transform duration-200 hover:scale-110"
        onClick={loginRedirectHandler}
      >
        Generate your icons today
      </Button>
    </section>
  );
};

export default TopSection;
