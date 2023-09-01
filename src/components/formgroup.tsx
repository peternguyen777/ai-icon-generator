import React from "react";

export const Formgroup = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className="flex flex-col gap-1">
      {props.children}
    </div>
  );
};
