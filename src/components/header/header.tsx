import { signIn, useSession } from "next-auth/react";
import { PrimaryLink } from "./primarylink";
import { Button } from "../ui/button";
import { UserNav } from "./user-nav";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export const Header = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <nav className=" border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 lg:h-20 ">
        <PrimaryLink className="flex items-center gap-4" href="/">
          <Image
            src="/shiba-inu.png"
            alt="pet icon logo"
            width={30}
            height={30}
          />
          <h1 className="hidden font-clash text-2xl font-semibold leading-none sm:flex lg:text-3xl">
            Woofr
          </h1>
        </PrimaryLink>

        <div className="flex items-center gap-4">
          <PrimaryLink href="/community" className="text-lg">
            Community
          </PrimaryLink>
          <ModeToggle />
          {isLoggedIn && <UserNav userData={session.data} />}
          {!isLoggedIn && (
            <Button onClick={() => void signIn("google")}>Login</Button>
          )}
        </div>
      </div>
    </nav>
  );
};
