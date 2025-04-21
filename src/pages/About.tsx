
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <MissionVision />
        <Values />
        <TeamSection />
        <History />
      </main>
      <Footer />
    </div>
  );
};

export default About;
