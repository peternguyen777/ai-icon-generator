import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

export const PrimaryLinkButton = (
  props: LinkProps & { children: ReactNode; className?: string }
) => {
  const { className, ...propsWithoutClassName } = props;

  return (
    <Link
      {...propsWithoutClassName}
      className={clsx(
        "self rounded bg-blue-400 px-4 py-2 hover:bg-blue-500",
        className ?? ""
      )}
    >
      {props.children}
    </Link>
  );
};
