"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// Load your local font
const roboto = localFont({
  src: "../public/BruceForeverRegular-X3jd2.ttf",
  display: "swap",
  variable: "--font-roboto",
});

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ moved inside component

  return (
    <div className="md:bg-[#024f27]/60 bg-[#024f27]/60 md:border-t-2 md:border-[#00622b] backdrop-blur-sm shadow-2xl w-full h-14 md:rounded-3xl max-w-280 relative lg:top-5 flex items-center justify-between px-6 z-5000">
      {/* Left Logo */}
      <div className='flex items-center gap-3 '> 
      <Link href="/"> <div className="text-[#00FF84] text-2xl font-mono font-extrabold">
            Kl!kly
          </div></Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-mono text-gray-300">
          {[
            { href: "/", label: "Home" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/about", label: "About" },
           { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-white ${
                pathname === href ? "text-white" : "text-white/70"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden z-50 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop "Contact" Button */}
       
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[70%] md:w-[50%] bg-black/70 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white z-40"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl transition ${
                  pathname === href ? "text-[#58E877]" : "hover:text-[#58E877]"
                }`}
              >
                {label}
              </Link>
            ))}

            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
