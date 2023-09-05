import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

export const PrimaryLink = (props: LinkProps & { children: ReactNode }) => {
  return (
    <Link
      {...props}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {props.children}
    </Link>
  );
};
