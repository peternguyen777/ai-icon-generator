import React from "react";

export function Formgroup(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className="flex flex-col gap-1">
      {props.children}
    </div>
  );
}
