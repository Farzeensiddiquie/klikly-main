import CTASection from "@/components/CTASection";
import FaqBackground from "@/components/FaqBackground";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectBackground from "@/components/ProjectBackground";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
export default function Home() {
  return (
    <>
    <Hero/>
    <Services/>
     <div className="relative min-h-screen">
      <ProjectBackground />
      <Projects />
    </div>
    <div className="relative ">
      <FaqBackground/>
       <Faqs/>
       </div>
   
    <CTASection/>
    <Footer/>
    </>
  );
}
