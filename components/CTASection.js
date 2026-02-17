"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  // Make Link motion-enabled
  const MotionLink = motion.create(Link);

  return (
    <section className="cta mb-30 relative overflow-hidden max-w-280 rounded-3xl bg-[#04130C]/20 py-20 px-6 flex items-center justify-center mx-auto border border-[#1f3a29]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#07321F" />
              <stop offset="100%" stopColor="#063A24" />
            </linearGradient>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative text-center w-full"
      >
        <h2 className="text-white font-mono text-2xl font-semibold mb-4 leading-tight">
          Curious how branding can <br />
          Elevate your business?
        </h2>

        <p className="text-gray-300 text-sm mb-8">
          Let’s talk! Book a free consultation and discover how <span className="text-sm text-green-400 font-bold font-mono"> Kl!kly </span><br /> can grow
          your brand.
        </p>

        <MotionLink
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-[#00FF84] text-[#002707] text-sm font-bold px-5 py-2 rounded-full shadow-lg transition-colors duration-300 hover:bg-[#00e076]"
        >
          Book A call
        </MotionLink>
      </motion.div>
    </section>
  );
}
