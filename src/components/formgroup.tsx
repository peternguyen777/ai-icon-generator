import clsx from "clsx";
import React from "react";

export const FormGroup = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className={clsx("flex flex-col gap-1", props.className)}>
      {props.children}
    </div>
  );
};
