import { useEffect, useState } from 'react';

/**
 * Custom hook to ensure component only renders on client after hydration
 * Prevents hydration mismatches
 */
export function useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
