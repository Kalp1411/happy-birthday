'use client';

import { motion } from 'framer-motion';
import { useClientOnly } from '@/hooks/useClientOnly';

const balloonColors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-yellow-400',
  'bg-green-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-orange-500',
  'bg-indigo-500',
];

// Generate balloon positions using index-based seeding
const generateBalloonPositions = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const height = typeof window !== 'undefined' ? window.innerHeight : 1000;

  return [...Array(15)].map((_, i) => ({
    initialX: ((i * 67) % width),
    color: balloonColors[i % balloonColors.length],
    delay: i * 0.2,
  }));
};

export default function FloatingBalloons() {
  const isClient = useClientOnly();

  if (!isClient) {
    return null;
  }

  const balloons = generateBalloonPositions();
  const height = typeof window !== 'undefined' ? window.innerHeight : 1000;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon, i) => (
        <motion.div
          key={i}
          className={`absolute w-12 h-16 ${balloon.color} rounded-full opacity-80 shadow-lg`}
          initial={{
            x: balloon.initialX,
            y: height + 50,
          }}
          animate={{
            y: -100,
            x: Math.sin(i) * 100,
            rotate: 360,
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: 'loop',
            delay: balloon.delay,
          }}
        >
          {/* Balloon String */}
          <div className="absolute left-1/2 top-full w-0.5 h-16 bg-gray-400 transform -translate-x-1/2"></div>
        </motion.div>
      ))}
    </div>
  );
}
