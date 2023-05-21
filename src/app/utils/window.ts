import { useEffect, useMemo, useState } from 'react';

type WindowState = {
  width: number;
  height: number;
  isMobile: boolean;
  isDesktop: boolean;
};

const mobileWidth = 1024;

export const useWindowSize = (): WindowState => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  // Resizing of window
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = useMemo(
    () => width !== undefined && width <= mobileWidth,
    [width]
  );
  const isDesktop = useMemo(
    () => width !== undefined && width > mobileWidth,
    [width]
  );

  return {
    width,
    height,
    isMobile,
    isDesktop,
  };
};
