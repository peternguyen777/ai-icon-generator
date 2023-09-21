import { signIn, useSession } from "next-auth/react";
import { PrimaryLink } from "./primarylink";
import { Button } from "../ui/button";
import { UserNav } from "./user-nav";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <PrimaryLink href="/" className="text-lg">
          Icon Generator
        </PrimaryLink>

        <PrimaryLink href="/community">Community</PrimaryLink>

        <ul className="flex items-center gap-4">
          <ModeToggle />
          {isLoggedIn && <UserNav userData={session.data} />}
          {!isLoggedIn && (
            <li>
              <Button onClick={() => void signIn("google")}>Login</Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
