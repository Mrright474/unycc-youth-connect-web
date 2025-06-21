
import { useEffect } from "react";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import JoinCTA from "@/components/JoinCTA";
import ProgramsPreview from "@/components/ProgramsPreview";
import Stats from "@/components/Stats";
import DonationCTA from "@/components/DonationCTA";
import NewsSection from "@/components/news/NewsSection";
import EventsSection from "@/components/events/EventsSection";
import NewsletterSignup from "@/components/newsletter/NewsletterSignup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Watermark Logo */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/ff7fc504-d57f-4296-9405-802d4ebb657b.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '40%',
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <HomeAbout />
          <Stats />
          <ProgramsPreview />
          <NewsSection />
          <EventsSection />
          <DonationCTA />
          <div className="py-16 bg-ungray-light">
            <div className="container mx-auto px-4 md:px-6">
              <NewsletterSignup />
            </div>
          </div>
          <JoinCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
