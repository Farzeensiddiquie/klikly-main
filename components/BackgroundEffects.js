"use client";
import React from "react";
import Image from 'next/image'

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 🌿 Green Glow Orbs */}
      <div
        className="absolute top-1 -left-20 w-[500px] h-[500px] md:top-0 sm:-left-40 sm:w-[800px] sm:h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #58E877 0%, rgba(88, 232, 119, 0.4) 30%, rgba(88, 232, 119, 0.1) 60%, transparent 80%)",
          filter: "blur(100px)",
        }}
      ></div>

      <div
        className="absolute bottom-30 -right-10 w-[600px] h-[600px] md:bottom-40 md:-right-20 md:w-[900px] md:h-[900px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, #58E877 0%, rgba(88, 232, 119, 0.4) 30%, rgba(88, 232, 119, 0.1) 60%, transparent 80%)",
          filter: "blur(100px)",
        }}
      ></div>

   
 {/* ✨ Star Dots */}
      {[
        { top: 100, left: 100 },
        { top: 200, left: 200, delay: 0.3 },
        { top: 250, right: 150, delay: 0.6 },
        { top: 320, left: 180, delay: 0.9 },
        { top: 150, right: 100, delay: 1.2 },
        { top: 250, left: 50, delay: 1.5 },
      ].map((dot, i) => (
        <div
          key={i}
          className="star-dot absolute z-[1]"
          style={{
            top: `${dot.top}px`,
            left: dot.left ? `${dot.left}px` : undefined,
            right: dot.right ? `${dot.right}px` : undefined,
            animationDelay: `${dot.delay || 0}s`,
          }}
        ></div>
      ))}



      {/* ☄️ Shooting Stars */}
      {[
        { left: 120, top: 180, src: "ccc879583b37f78db59ad96aeac358a2b9fce332" },
        { right: 80, top: 200, src: "2998cb06bacf425188a3f599f5ed80d93adff067" },
      ].map((star, i) => (
        <div
          key={i}
          className={`absolute shooting-star shooting-star-${i + 1}`}
          style={{
            left: star.left ? `${star.left}px` : undefined,
            right: star.right ? `${star.right}px` : undefined,
            top: `${star.top}px`,
          }}
        >
            <div
              className="w-[120px] h-[2px] origin-center md:w-[165px]"
              style={{ transform: "rotate(315deg)" }}
            >
              <Image
                src={`https://fxology.com/wp-content/themes/fxology-theme/assets/images/${star.src}.svg`}
                alt="dust"
                width={165}
                height={24}
                unoptimized
                className="w-full h-full"
              />
            </div>
        </div>
      ))}

      {/* 🌫️ Dust Particles */}
      <div className="hidden md:block absolute left-[57px] top-[585px] w-[1613.42px] h-[315.28px] opacity-30">
        <div className="relative w-full h-full">
          <Image
            src="https://fxology.com/wp-content/themes/fxology-theme/assets/images/6889d758653e645c96320df3bb608273fc84fb2e.svg"
            alt="dust"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>

     

     
    </div>
  );
}
