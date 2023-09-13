import type { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import { api } from "~/utils/api";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function UserNav({ userData }: { userData: Session }) {
  const { buyCredits } = useBuyCredits();

  const credits = api.user.getCredits.useQuery();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={userData.user.image ?? ""} alt="@shadcn" />
            <AvatarFallback>PN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {userData.user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userData.user.email}
            </p>
          </div>
          <p className="mt-4 text-xs leading-none text-muted-foreground">
            {credits.data} Credits remaining
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              buyCredits().catch(console.error);
            }}
          >
            Buy credits
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/collection">My Collection</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut().catch(console.error);
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
