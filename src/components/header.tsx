import { signIn, signOut, useSession } from "next-auth/react";
import { PrimaryLink } from "./primarylink";
import { Button } from "./button";
import { useBuyCredits } from "~/hooks/useBuyCredits";

export const Header = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;
  const { buyCredits } = useBuyCredits();

  return (
    <header className="container mx-auto flex h-16 items-center justify-between px-4 dark:bg-gray-800">
      <PrimaryLink href="/">Icon Generator</PrimaryLink>
      <ul className="flex gap-4">
        <li>
          <PrimaryLink href="/generate">Generate</PrimaryLink>
        </li>
        {isLoggedIn && (
          <li>
            <PrimaryLink href="/collection">Collection</PrimaryLink>
          </li>
        )}
      </ul>
      <ul className="flex gap-4">
        {isLoggedIn && (
          <>
            <li>
              <Button
                onClick={() => {
                  buyCredits().catch(console.error);
                }}
              >
                Buy Credits
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                onClick={() => {
                  signOut().catch(console.error);
                }}
              >
                Logout
              </Button>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <Button
              onClick={() => {
                signIn().catch(console.error);
              }}
            >
              Login
            </Button>
          </li>
        )}
      </ul>
    </header>
  );
};
