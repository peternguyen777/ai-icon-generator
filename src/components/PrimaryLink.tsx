import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";

export const PrimaryLink = (props: LinkProps & { children: ReactNode }) => {
  return (
    <Link {...props} className="hover:text-cyan-500">
      {props.children}
    </Link>
  );
};
