'use client';

import { useState, useRef } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { FaMusic, FaVolumeMute, FaGift } from 'react-icons/fa';
import BirthdayCard from '@/components/BirthdayCard';
import PhotoDisplay from '@/components/PhotoDisplay';
import FloatingBalloons from '@/components/FloatingBalloons';
import ParticleEffect from '@/components/ParticleEffect';
import DecorativeStars from '@/components/DecorativeStars';
import CakeAnimation from '@/components/CakeAnimation';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const windowSize = useWindowSize();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMusicToggle = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
      {/* Confetti Animation */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      {/* Floating Balloons */}
      <FloatingBalloons />

      {/* Particle Effect Background */}
      <ParticleEffect />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Main Title Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
            🎉 HAPPY BIRTHDAY 🎉
          </h1>
          <p className="text-2xl md:text-3xl text-white drop-shadow-md font-semibold">
            Make A Wish! ✨
          </p>
        </motion.div>

        {/* Photo Display */}
        <PhotoDisplay />

        {/* Birthday Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <BirthdayCard />
        </motion.div>

        {/* Cake Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <CakeAnimation />
        </motion.div>

        {/* Interactive Message */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mb-8"
        >
          <p className="text-xl md:text-2xl text-white drop-shadow-md font-medium">
            🎂 Blow out the candles! 🕯️
          </p>
        </motion.div>

        {/* Control Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-4 mt-8 flex-wrap justify-center"
        >
          {/* Music Toggle Button */}
          <button
            onClick={handleMusicToggle}
            className="px-8 py-3 bg-white rounded-full text-purple-600 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            {isMusicPlaying ? <FaVolumeMute /> : <FaMusic />}
            {isMusicPlaying ? 'Mute' : 'Play Music'}
          </button>

          {/* Confetti Toggle */}
          <button
            onClick={() => setShowConfetti(!showConfetti)}
            className="px-8 py-3 bg-white rounded-full text-pink-600 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <FaGift />
            {showConfetti ? 'Stop' : 'Start'} Confetti
          </button>
        </motion.div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/birthday-music.mp3"
        loop
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }}
      />

      {/* Decorative Stars */}
      <DecorativeStars />
    </main>
  );
}
