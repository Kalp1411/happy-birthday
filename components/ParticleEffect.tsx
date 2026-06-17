'use client';

import { motion } from 'framer-motion';
import { useClientOnly } from '@/hooks/useClientOnly';

// Generate particles with a seed to ensure consistency
const generateParticles = () => {
  return [...Array(30)].map((_, i) => {
    // Use index-based seeding instead of pure random for consistency
    const randomX = ((i * 7) % 100);
    const randomY = ((i * 13) % 100);
    const randomDuration = 4 + ((i * 0.6) % 6);
    const randomSize = 2 + ((i * 0.3) % 4);

    return { randomX, randomY, randomDuration, randomSize };
  });
};

const particles = generateParticles();

export default function ParticleEffect() {
  const isClient = useClientOnly();

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.randomSize,
            height: particle.randomSize,
            left: `${particle.randomX}%`,
            top: `${particle.randomY}%`,
            opacity: 0.4,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.randomDuration,
            repeat: Infinity,
            repeatType: 'loop',
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
