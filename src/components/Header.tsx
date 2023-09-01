import { signIn, signOut, useSession } from "next-auth/react";
import { PrimaryLink } from "./PrimaryLink";
import { Button } from "./Button";

export const Header = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <header className="container mx-auto flex h-16 items-center justify-between px-4 dark:bg-gray-800">
      <PrimaryLink href="/">Icon Generator</PrimaryLink>
      <ul>
        <li>
          <PrimaryLink href="/generator">Generate</PrimaryLink>
        </li>
      </ul>
      <ul>
        {isLoggedIn && (
          <Button
            variant="secondary"
            onClick={() => {
              signOut().catch(console.error);
            }}
          >
            Logout
          </Button>
        )}
        {!isLoggedIn && (
          <Button
            onClick={() => {
              signIn().catch(console.error);
            }}
          >
            Login
          </Button>
        )}
      </ul>
    </header>
  );
};
