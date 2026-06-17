import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Custom hook to get window size without hydration mismatch
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1024, // Default size to match server
    height: 768,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Set actual window size after hydration
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...windowSize, isClient };
}
