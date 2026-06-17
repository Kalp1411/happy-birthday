'use client';

import { motion } from 'framer-motion';
import { useClientOnly } from '@/hooks/useClientOnly';

export default function DecorativeStars() {
  const isClient = useClientOnly();

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          className="absolute text-4xl"
          style={{
            left: `${((i * 5) % 100)}%`,
            top: `${((i * 7) % 100)}%`,
          }}
        >
          ⭐
        </motion.div>
      ))}
    </div>
  );
}
