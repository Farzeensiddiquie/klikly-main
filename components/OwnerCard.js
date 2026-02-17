"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OwnerCard() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-10 lg:gap-20">

        {/* Left Gradient Card Animation */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto md:mx-0 p-[1px] rounded-2xl w-[342px] bg-gradient-to-r from-[#056435] to-[#020202]"
        >
          <div className="bg-gradient-to-r from-[#064124] to-[#060606] rounded-2xl p-5">
            
            {/* Image Container MUST be relative for fill */}
            <div className="relative flex items-end rounded-lg h-[300px] w-[300px] overflow-hidden bg-gradient-to-br from-[#056435] to-[#020202]">
              <Image
                src={"/images/ceo.png"}
                alt="Owner Image"
                fill
                className="w-full bottom-0 height-auto object-cover object-bottom"
              />
            </div>

          </div>
        </motion.div>

        {/* Right Text Section Animation */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 text-center md:text-start md:max-w-[500px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl font-bold font-mono"
          >
            Our Vision-Message <br /> From Founder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm md:text-lg leading-relaxed text-gray-300"
          >
            At <span className="text-green-400 font-semibold">Kl!kly</span>, we aim to
            drive innovation by blending technology with user insights, creating
            impactful solutions that foster growth and elevate brands. Thank you for
            joining us on this journey.
          </motion.p>
        </motion.div>

      </div>
    </div>
  );
}
