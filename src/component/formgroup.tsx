import React from "react";

function Formgroup(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className="flex flex-col gap-1">
      {props.children}
    </div>
  );
}

export default Formgroup;
