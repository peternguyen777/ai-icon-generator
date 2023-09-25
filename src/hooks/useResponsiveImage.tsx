import { useEffect, useState } from "react";

const useResponsiveImage = () => {
  const hasWindow = typeof window !== "undefined";

  const width = hasWindow ? window.innerWidth : null;

  const [imageWidth, setImageWidth] = useState(
    width && width < 1024 ? 256 : 320
  );

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1024) {
        setImageWidth(256);
      } else {
        setImageWidth(320);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return imageWidth;
};

export default useResponsiveImage;
