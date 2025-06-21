
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import TeamSection from "@/components/about/TeamSection";
import History from "@/components/about/History";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      {/* Watermark Logo */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/ff7fc504-d57f-4296-9405-802d4ebb657b.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'min(40%, 300px)',
        }}
      />
      
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="flex-grow w-full">
          <AboutHero />
          <MissionVision />
          <Values />
          <TeamSection />
          <History />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
