import React, { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const responsiveContext = createContext<boolean | undefined>(undefined);

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const ResponsiveProvider = ({ children }: Props) => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width != undefined && windowSize.width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  return (
    <responsiveContext.Provider value={isMobile}>
      {children}
    </responsiveContext.Provider>
  );
};
export { responsiveContext, ResponsiveProvider };
