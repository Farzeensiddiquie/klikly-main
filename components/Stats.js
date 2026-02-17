"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: 50, label: "Total Clients", suffix: "+" },
    { value: 100, label: "Satisfied Clients", suffix: "%" },
    { value: 100, label: "Total Projects", suffix: "+" },
  ];

  return (
    <div className="lg:max-w-280 w-full flex justify-center py-8 bg-gradient-to-b from-black/2 via-[#051d13] to-black/2">
      <div className="w-full max-w-280 flex items-center md:items-stretch justify-between">
        {stats.map((item, index) => (
          <StatItem
            key={index}
            item={item}
            delay={index * 0.3}
            border={index !== 0}
          />
        ))}
      </div>
    </div>
  );
}

function StatItem({ item, delay, border }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col justify-center items-center md:min-w-[90px] w-full text-center px-5 h-28 md:h-32 font-serif text-sm md:text-xl ${
        border
          ? "border-l-2 [border-image:linear-gradient(to_bottom,_black,_#2e7450,_black)_1]"
          : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <p className="text-lg md:text-2xl font-mono font-semibold">
        {isInView ? <CountUp end={item.value} /> : 0}
        {item.suffix}
      </p>
      <p className="text-gray-400 font-mono">{item.label}</p>
    </motion.div>
  );
}

// CountUp component using requestAnimationFrame
function CountUp({ end, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // ~60fps
    let frame;

    function update() {
      start += increment;
      if (start >= end) {
        setCount(end);
        cancelAnimationFrame(frame);
      } else {
        setCount(Math.ceil(start));
        frame = requestAnimationFrame(update);
      }
    }

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return <>{count}</>;
}
