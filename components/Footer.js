"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 md:px-12 flex flex-col items-center text-gray-300 text-sm">
      {/* Top Section */}
      <div className="flex  flex-col md:flex-row items-center justify-between lg:max-w-280 w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="text-[#00FF84] font-extrabold text-2xl tracking-widest">
            Kl!kly
          </div>
        </div>

        {/* Center Nav */}
        <nav className="flex gap-6 text-gray-400 text-sm font-medium mb-4 md:mb-0">
          <Link href="/" className="hover:text-[#00FF84] transition">Home</Link>
          <Link href="/about" className="hover:text-[#00FF84] transition">About</Link>
          <Link href="/portfolio" className="hover:text-[#00FF84] transition">Work</Link>
          <Link href="/contact" className="hover:text-[#00FF84] transition">Contact</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#00FF84]/10 hover:border-[#00FF84]/40 transition">
              <FaTwitter className="text-[#00FF84] text-lg" />
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#00FF84]/10 hover:border-[#00FF84]/40 transition">
              <FaInstagram className="text-[#00FF84] text-lg" />
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#00FF84]/10 hover:border-[#00FF84]/40 transition">
              <FaLinkedinIn className="text-[#00FF84] text-lg" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: new lines */}
      <div className="max-w-280 w-full flex flex-col md:flex-row md:justify-between items-center mt-6 gap-1">
        <p className="text-gray-400 text-xs md:text-sm">
          © 2025 Kl!kly. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs md:text-sm">
          Serving Clients Worldwide
        </p>
      </div>
    </footer>
  );
}
