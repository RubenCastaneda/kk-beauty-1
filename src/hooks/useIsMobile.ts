// src/hooks/useIsMobile.ts
import { useState, useEffect } from 'react';

/**
 * Returns true if the window.innerWidth is strictly less than `breakpointPx`.
 * Default `breakpointPx` is 576px.
 */
export function useIsMobile(breakpointPx = 576) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpointPx : false,
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpointPx);
    }
    window.addEventListener('resize', handleResize);
    // Also run once on mount in case the initial width changed since hydration
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpointPx]);

  return isMobile;
}
