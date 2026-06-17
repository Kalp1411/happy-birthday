'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BirthdayCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer perspective"
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ transformStyle: 'preserve-3d' as any }}
    >
      <div
        className={`w-72 h-72 bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center transform transition-all ${
          isFlipped ? 'bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400' : ''
        }`}
        style={{ backfaceVisibility: 'hidden' } as any}
      >
        {!isFlipped ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-7xl mb-4">🎂</div>
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">
              Happy Birthday!
            </h2>
            <p className="text-white text-lg drop-shadow-md mb-2">
              Wishing you a day filled with joy and laughter
            </p>
            <p className="text-sm text-white drop-shadow-md italic">
              Click to flip the card
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-4">
              Make Your Wish!
            </h2>
            <p className="text-white text-base drop-shadow-md mb-2">
              May all your dreams come true
            </p>
            <p className="text-sm text-white drop-shadow-md italic">
              Click again for more wishes
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
