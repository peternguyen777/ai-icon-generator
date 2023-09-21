import { useSession } from "next-auth/react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { PrimaryLink } from "./primarylink";
import { UserNavLoggedIn, UserNavLoggedOut } from "./user-nav";

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
          <h1 className="font-clash text-2xl font-semibold leading-none  lg:text-3xl">
            WoofAI
          </h1>
        </PrimaryLink>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {isLoggedIn ? (
            <UserNavLoggedIn userData={session.data} />
          ) : (
            <UserNavLoggedOut />
          )}
        </div>
      </div>
    </nav>
  );
};
