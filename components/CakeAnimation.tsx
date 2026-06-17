'use client';

import { motion } from 'framer-motion';

export default function CakeAnimation() {
  const candles = [0, 1, 2, 3, 4];

  return (
    <div className="flex flex-col items-center">
      {/* Cake Body */}
      <div className="relative">
        {/* Top Layer */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-48 h-20 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t-3xl shadow-lg relative"
        >
          {/* Frosting Detail */}
          <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-r from-pink-300 to-pink-400 opacity-50"></div>

          {/* Candles */}
          <div className="absolute -top-16 left-0 right-0 flex justify-center gap-6 px-4">
            {candles.map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                {/* Candle */}
                <div className="w-2 h-12 bg-yellow-100 rounded-full shadow-md"></div>
                {/* Flame */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                    filter: ['drop-shadow(0 0 2px orange)', 'drop-shadow(0 0 6px orange)', 'drop-shadow(0 0 2px orange)'],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-red-500 rounded-full"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-yellow-300 rounded-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Sprinkles */}
          <div className="absolute top-2 left-0 right-0 flex justify-around px-4">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                className="text-sm"
              >
                ✨
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Middle Layer */}
        <div className="w-56 h-8 bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-md"></div>

        {/* Bottom Layer */}
        <div className="w-64 h-12 bg-gradient-to-b from-orange-300 to-orange-400 rounded-b-3xl shadow-lg relative">
          {/* Layer Pattern */}
          <div className="absolute inset-0 flex items-center justify-around px-6 rounded-b-3xl">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                className="text-2xl"
              >
                🍓
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cake Plate */}
      <motion.div className="w-72 h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full shadow-lg mt-2"></motion.div>
    </div>
  );
}
