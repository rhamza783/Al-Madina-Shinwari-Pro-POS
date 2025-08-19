import { useState, useEffect } from 'react';
const MOBILE_BREAKPOINT = 768;
export const useScreenSize = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > MOBILE_BREAKPOINT);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > MOBILE_BREAKPOINT);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { isDesktop };
};
