import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { UserNavLoggedIn, UserNavLoggedOut } from "./user-nav";

export const Header = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <nav className=" border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 lg:h-20 ">
        <Link className="flex items-center gap-4" href="/">
          <Image
            src="/shiba-inu.png"
            alt="pet icon logo"
            width={30}
            height={30}
          />
          <h2>WoofAI</h2>
        </Link>
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
