// src/hooks/useIsMobile.ts
import { useState, useEffect } from 'react';

/**
 * Returns true if the viewport width is below the given breakpoint.
 * Default breakpoint is 768px.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener('resize', onResize);
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return isMobile;
}
