import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.outerWidth);
    
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};
