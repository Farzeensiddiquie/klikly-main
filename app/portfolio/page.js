"use client";
import BackgroundEffects from '@/components/BackgroundEffects'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

function AnimatedCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      const delay = index * 0.15 + 0.2;
      controls.start("visible", { delay });
    }
  }, [inView, controls, index]);

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`group flex flex-col md:flex-row items-center gap-6 bg-[#0a1c12]/30 border border-[#1f3a29]/50 rounded-2xl overflow-hidden p-5 md:p-7 backdrop-blur-sm hover:shadow-lg hover:shadow-[#01ff85]/10 transition-all duration-500 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-5 text-white w-full md:w-[55%]">
        <span className="text-sm text-[#01ff83] font-semibold bg-[#01ff83]/10 px-3 py-1 rounded-full w-fit">
          {project.label}
        </span>
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm bg-[#06180f]/50 text-gray-300 px-4 py-1.5 rounded-full border border-[#2e7450]/40"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#01ff83] hover:text-[#17ff95] transition-colors font-medium"
        >
          {project.buttonText}
          <div className="w-6 h-6 flex justify-center items-center bg-[#01ff83] text-[#0f1a11] rounded-full group-hover:translate-x-1 transition-transform duration-300">
            <ChevronRight size={18} />
          </div>
        </Link>
      </div>

      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="relative w-full md:w-[45%] aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
        />
      </motion.div>
     
    </motion.div>
    
  );
}

export default function Portfolio() {
const projects = [
    {
      id: 1,
      label: "Branding",
      title: "Brand Identity Design",
      description:
        "Brand identity design for City Cash and Carry, including logo, color scheme, and website.",
      tags: ["Photoshop", "Figma", "Illustraotor"],
      image: "/portfolio/portfolio1.jpg",
      buttonText: "View Project",
      link: "https://www.behance.net/gallery/219783089/Brand-Guideline-Cash-Carry-Logo-Mart-logo-Design",
    },
    {
      id: 2,
      label: "Logo Design",
      title: "Bilal Logo Design",
      description:
        "Bilal Logo Arabic Calligraphy Design, showcasing a blend of traditional calligraphy with modern aesthetics.",
      tags: ["Photoshop", "Figma", "Illustraotor"],
      image: "/portfolio/portfolio2.jpg",
      buttonText: "View Project",
      link: "https://www.behance.net/gallery/203923091/Bilal-Logo-Arabic-Calligraphy",
    },
    {
      id: 3,
      label: "AI posters",
      title: "AI poster | Typography poster",
      description:
        "A collection of AI-generated posters that explore the intersection  design, featuring bold typography and futuristic aesthetics.",
      tags: ["Generative Ai", "Chat gpt", "Gemini AI"],
      image: "/portfolio/portfolio3.jpg",
      buttonText: "View Project",
      link: "https://www.behance.net/gallery/226794453/AI-poster-Typography-poster-AI-Aesthetics-post",
    },
    {
      id: 4,
      label: "Logo Design",
      title: "Kangaroo Luxury Cars Logo Design",
      description:
        "Kangaroo Luxury Cars Logo Design, a sleek and modern logo that captures the essence of luxury and performance in the automotive industry.",
      tags: ["Photoshop", "Illustrator"],
      image: "/portfolio/portfolio4.jpg",
      buttonText: "View Project",
      link: "https://www.behance.net/gallery/169799693/Kangaroo-Luxury-Cars-Logo-Design",
    },
    {
      id: 5,
      label: "Brand Guideline",
      title: "Felt Quality",
      description:
        "Brand guidelines for Felt Quality, a premium brand focused on sustainable and eco-friendly products.",
      tags: ["Photoshop", "Illustrator", "InDesign"],
      image: "/portfolio/portfolio5.png",
      buttonText: "View Project",
      link: "https://www.behance.net/gallery/228616805/Brand-Guideline",
    },
    {
      id: 6,
      label: "Logo Design",
      title: "Warm Wave | Logo Design | Fashion Logo",
      description:
        "A sleek logo design for Warm Wave, a fashion brand that emphasizes warmth and comfort in its aesthetic.",
      tags: ["Photoshop", "Illustrator"],
      image: "/portfolio/portfolio6.png",
      buttonText: "View Project",
      link: "https://www.behance.net/gallery/214337415/Warm-Wave-Logo-Design-Fashion-Logo",
    }

   
  ];
  
  return (
    <>
      <div className="relative flex flex-col min-h-screen mb-10 text-white overflow-hidden ">

      
        <BackgroundEffects />

        <div className="flex justify-center mb-10">
          <NavBar />
        </div>

<div className="flex flex-col justify-center items-center">
  <h2 className="text-4xl font-extrabold font-mono text-center mb-10">
    Our Work
  </h2>

  {/* ✅ Responsive Grid */}
  <div className="w-full max-w-6xl mx-auto px-4 space-y-8">
    {projects.map((project, index) => (
      <AnimatedCard key={project.id} project={project} index={index} />
    ))}
  </div>
</div>
      </div>

      
      <CTASection />
      <Footer />
    </>
  );
}
