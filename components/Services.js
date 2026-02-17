"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CircularCursor from "./CursorComponent";

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const [hover, setHover] = useState(false);

  const services = [
    {
      title: "Brand Identity & Logo Design",
      desc: "Create cohesive, memorable brand identities that make you stand out.",
      gradient:
        "bg-[radial-gradient(circle_at_top_right,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
      image: "/images/icon1.png",
    },
    {
      title: "Web UI/UX Design",
      desc: "Design intuitive, conversion-driven websites your customers will love.",
      gradient:
        "bg-[radial-gradient(circle_at_bottom_left,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
      image: "/images/icon2.png",
    },
    {
      title: "Video Editing & Animation",
      desc: "Bring your brand to life with engaging visuals and animations.",
      gradient:
        "bg-[radial-gradient(circle_at_top_right,_#06572e_0%,_rgba(4,28,17,0.4)_47%),linear-gradient(135deg,_rgba(4,28,0,0.8)_0%,_#070e0a_100%)]",
      image: "/images/icon3.png",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-20 bg-black text-white text-center overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-14"
      >
        Services We Provide
      </motion.h2>

      {/* Cards Container */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-20 max-w-7xl"
      >
        <CircularCursor text="Our Services" visible={hover} />

        {services.map((service, i) => (
          
            <motion.div
              custom={i}
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative w-72 sm:w-80 h-80 p-[1px] rounded-2xl bg-gradient-to-r from-[#092e1b] to-[#1f7e4f] hover:scale-105 transition-transform duration-500"
            >
              <div
                className={`w-full h-full rounded-2xl flex flex-col items-center p-6 ${service.gradient}`}
              >
                <h3 className="text-lg md:text-xl font-medium mb-3 group-hover:text-[#2bb673] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-mono text-sm md:text-[13px] leading-relaxed max-w-xs">
                  {service.desc}
                </p>
                <Image
                  src={service.image}
                  alt="image"
                  width={150}
                  height={150}
                  className="mt-7 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          
        ))}
      </div>
    </section>
  );
}
