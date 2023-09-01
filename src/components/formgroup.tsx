import React from "react";

export const FormGroup = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className="flex flex-col gap-1">
      {props.children}
    </div>
  );
};
