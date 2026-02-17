"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import CircularCursor from "./CursorComponent";

const faqData = [
  {
    question: "What technologies do you use for web development?",
    answer:
      "I primarily use React, Next.js, Tailwind CSS, Framer Motion, and GSAP for smooth animations and responsive design.",
  },
  {
    question: "Do you build mobile applications?",
    answer:
      "Yes! I work with React Native and Firebase to create performant, cross-platform mobile apps.",
  },
  {
    question: "Can you create 3D visuals for websites?",
    answer:
      "Absolutely! I use React Three Fiber along with Drei and GSAP to integrate 3D models and animations into websites.",
  },
  {
    question: "Do you offer backend services?",
    answer:
      "Yes, I use Node.js, Express.js, and Firebase for backend development including APIs, authentication, and database management.",
  },
   {
    question: "Do you build mobile applications?",
    answer:
      "Yes! I work with React Native and Firebase to create performant, cross-platform mobile apps.",
  },
   {
    question: "Do you build mobile applications?",
    answer:
      "Yes! I work with React Native and Firebase to create performant, cross-platform mobile apps.",
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);
const [hover, setHover] = useState(false);
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full z-100 py-20 flex flex-col items-center bg-gradient-to-b from-black/10 via-[#051d13]/60 to-black/10 ">
           

      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white tracking-wide text-center">
        Frequently Asked Questions
      </h2>

      <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-full max-w-280 flex flex-col gap-1">
         <CircularCursor text="FAQS" visible={hover} />
        {faqData.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <motion.div
              key={index}
              layout
              initial={false}
              className="bg-[#0a1c12]/60 border border-[#1f3a29] rounded-2xl backdrop-blur-sm overflow-hidden"
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
            >
              {/* Question button */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left text-base md:text-lg text-white font-medium  transition-colors duration-200"
              >
                {faq.question}
                <span className="ml-2 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0f2a1b]">
                  {isOpen ? (
                    <Minus size={18} className="text-[#01ff83]" />
                  ) : (
                    <Plus size={18} className="text-[#01ff83]" />
                  )}
                </span>
              </button>

              {/* Content wrapper with smooth animation */}
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-5 md:px-6 pb-5 md:pb-6 text-gray-300 text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
