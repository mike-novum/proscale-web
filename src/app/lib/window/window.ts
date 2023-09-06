import { useEffect, useMemo, useState } from 'react';

import type { WindowState } from './type';
import { mobileWidth } from './constants';

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
