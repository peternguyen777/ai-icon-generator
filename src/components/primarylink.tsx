import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

export const PrimaryLink = (
  props: LinkProps & { children: ReactNode; className?: string }
) => {
  const { className, ...propsWithoutClassName } = props;
  return (
    <Link
      {...propsWithoutClassName}
      className={clsx(
        "text-sm font-medium transition-colors hover:text-primary",
        className
      )}
    >
      {props.children}
    </Link>
  );
};
