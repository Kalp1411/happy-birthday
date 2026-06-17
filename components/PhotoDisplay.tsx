'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function PhotoDisplay() {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.35 }}
      className="mb-8 relative"
    >
      {/* Photo Frame Container */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Outer Glow Effect */}
        <motion.div
          animate={{ boxShadow: ['0 0 20px rgba(255,255,255,0.3)', '0 0 40px rgba(255,255,255,0.6)', '0 0 20px rgba(255,255,255,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-3xl"
        ></motion.div>

        {/* Photo Frame with Border */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-3xl p-4 shadow-2xl">
          {/* Inner Photo Container */}
          <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl overflow-hidden flex items-center justify-center border-4 border-white relative">
            {!imageError ? (
              <div className="relative w-full h-full">
                <Image
                  src="/birthday-photo.webp"
                  alt="Birthday Person"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  onError={() => setImageError(true)}
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center px-4 py-8">
                <div className="text-6xl mb-4 animate-bounce">📸</div>
                <p className="text-xl font-semibold text-purple-600 mb-3">
                  Add Your Photo!
                </p>
                <div className="text-sm text-purple-500 space-y-2">
                  <p className="font-medium">Replace the image:</p>
                  <p className="font-mono bg-white bg-opacity-50 px-3 py-2 rounded">
                    /public/birthday-photo.jpg
                  </p>
                  <p className="text-xs mt-2">Supports: JPG, PNG, WebP</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating Decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-4 -right-4 text-4xl"
        >
          🎁
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-4 -left-4 text-4xl"
        >
          🎀
        </motion.div>

        {/* Corner Ribbons */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-3 left-3 text-2xl"
        >
          ⭐
        </motion.div>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="absolute top-3 right-3 text-2xl"
        >
          ✨
        </motion.div>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-3 left-3 text-2xl"
        >
          💝
        </motion.div>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          className="absolute bottom-3 right-3 text-2xl"
        >
          🎊
        </motion.div>
      </div>
    </motion.div>
  );
}
