"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CircularCursor({ text = "FAQS", visible }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{
            left: position.x,
            top: position.y,
          }}
          className="bg-[#0a1c12]/50 border border-[#1f3a29]  fixed pointer-events-none z-50 w-15 h-15 rounded-full  flex items-center justify-center text-[#00FF84] font-bold text-sm transform -translate-x-1/2 -translate-y-1/2"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
