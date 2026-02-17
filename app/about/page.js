"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundEffects from "@/components/BackgroundEffects";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Stats from "@/components/Stats";
import Image from "next/image";
import OwnerCard from "@/components/OwnerCard";


export default function About() {
  // Reusable motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <>
      <div className="min-h-[100vh] w-full relative overflow-hidden text-white">
        <BackgroundEffects />

        {/* Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <NavBar />
        </motion.div>

        {/* About Content */}
        <div className="flex flex-col items-center gap-5 w-full justify-center mt-16 md:mt-24 mb-16 px-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.25, delayChildren: 0.3 },
              },
            }}
            className="max-w-280 text-center space-y-8 overflow-hidden"
          >
            {/* Heading */}
            <motion.p
              variants={fadeUp}
              className="font-mono font-bold text-3xl md:text-4xl"
            >
              About Us
            </motion.p>

            {/* Part 1 */}
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-lg leading-relaxed text-gray-300"
            >
              At{" "}
              <span className="text-green-400 font-semibold font-mono">Kl!kly</span>, creativity meets motion.
              We’re a forward-thinking digital agency built for brands that dare to stand out.
              From sleek interfaces to immersive animations, we transform ideas into living, breathing
              digital experiences. Every pixel, every transition, every glow — crafted to connect emotion
              with interaction.
            </motion.p>

            {/* Image Between */}
            <motion.div
              variants={scaleIn}
              className="relative w-full h-[320px] md:h-[550px] overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src="/images/about.jpg"
                alt="Klikly Agency Team"
                fill
                className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </motion.div>

            {/* Part 2 */}
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-lg leading-relaxed text-gray-300"
            >
              Our team blends{" "}
              <span className="text-green-400 font-semibold">design, development,</span> and{" "}
              <span className="text-green-400 font-semibold">motion</span> to shape digital stories that move people.
              Whether it’s a website, app, or brand experience, we approach every project with passion, precision,
              and purpose. At Klikly, we don’t just build —{" "}
              <span className="text-green-400 font-semibold">we make ideas click.</span>
            </motion.p>
            <Stats />
            <OwnerCard/>
            
          </motion.div>

            
         
        </div>
      </div>

      {/* CTA + Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <CTASection />
        <Footer />
      </motion.div>
    </>
  );
}
