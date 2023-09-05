import { signIn, useSession } from "next-auth/react";
import { PrimaryLink } from "./primarylink";
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";

export const Header = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <nav className="container mx-auto flex h-16 items-center justify-between px-4">
      <PrimaryLink href="/" className="text-lg">
        Icon Generator
      </PrimaryLink>
      <ul className="flex gap-4">
        <li>
          <PrimaryLink href="/generate">Generate</PrimaryLink>
        </li>
        <li>
          <PrimaryLink href="/community">Community</PrimaryLink>
        </li>
      </ul>

      <ul className="flex gap-4">
        {isLoggedIn && <UserNav userData={session.data} />}
        {!isLoggedIn && (
          <li>
            <Button onClick={() => void signIn("google")}>Login</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
