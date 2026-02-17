"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const controls = useAnimation();
  const router = useRouter();

  // Rotate glow ring
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  // Smooth 0→100 count with dynamic timing
  useEffect(() => {
    const totalDuration = 3000; // 3 seconds (faster for better UX)
    const steps = 100;
    const timePerStep = totalDuration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setIsVisible(false), 600);
        }, 200);
      }
    }, timePerStep);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1, scale: fadeOut ? 0.95 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden"
    >
      {/* Green glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.15),transparent_70%)] blur-3xl"></div>

      {/* Circular rotating loader */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        <motion.div animate={controls} className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[6px] border-gray-800" />
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-green-400 shadow-[0_0_25px_#00ff88]" />
        </motion.div>

        <div className="text-5xl font-bold text-green-400 drop-shadow-[0_0_15px_#00ff88] select-none">
          {progress}%
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-32 text-lg tracking-widest text-gray-400"
      >
        LOADING...
      </motion.div>
    </motion.div>
  );
}
