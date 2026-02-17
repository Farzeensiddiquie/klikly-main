"use client";
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import RobotCanvas from './RobotCanvas';
import localFont from 'next/font/local';
import BackgroundEffects from './BackgroundEffects';
import Stats from './Stats';
import Link from 'next/link';

// Load your local font
const roboto = localFont({
  src: '../public/BruceForeverRegular-X3jd2.ttf',
  display: 'swap',
  variable: '--font-roboto',
});

export default function Hero() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div id='hero' className="items-center text-white relative overflow-hidden">
      <BackgroundEffects />

      {/* Navbar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex items-center justify-center"
      >
        <NavBar />
      </motion.div>

      {/* Hero main content */}
      <div className="flex min-h-[90vh] mt-10 lg:mt-0 justify-center">
        <div className="lg:max-w-280 justify-center flex flex-col lg:flex-row items-center">

          {/* Left Text */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-120"
          >
            <p className={`text-white text-xl lg:text-start text-center lg:text-xl capitalize ${roboto.className}`}>
              Innovation isn’t coming
            </p>
            <p className={`text-[#7b807e] text-center md:text-start pt-4 ${roboto.className} text-sm`}>
              Klikly empowers brands through creativity, strategy and cutting-edge digital solutions.
            </p>
          </motion.div>

         
           
          
            <RobotCanvas/>
         

          {/* Right Text + Buttons */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:max-w-290 flex flex-col justify-center items-center"
          >
            <p className={`text-white text-center md:text-current text-xl lg:text-xl capitalize ${roboto.className}`}>
              we are building it.
            </p>

            <div className="flex gap-4 pt-6">
              <Link
                href="#projects"
                className="bg-[#20974c] text-xl  hover:bg-[#1ebe57] font-semibold  text-center text-[#ffff] w-[150px] h-[40px] p-1 rounded-full"
              >
                Our work
              </Link>
              <Link
                href="/contact"
                className="bg-[#091a10] text-center text-[#379b64] w-[180px] text-xl font-semibold border-t-2 border-b-1 border-b-[#113720] h-[40px] p-1 rounded-full"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="flex md:px-2 md:-translate-y-5 justify-center w-full items-center"
      >
        <Stats />
      </motion.div>
    </div>
  );
}
