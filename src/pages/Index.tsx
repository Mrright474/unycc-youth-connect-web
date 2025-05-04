
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import JoinCTA from "@/components/JoinCTA";
import ProgramsPreview from "@/components/ProgramsPreview";
import Stats from "@/components/Stats";
import DonationCTA from "@/components/DonationCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HomeAbout />
        <Stats />
        <ProgramsPreview />
        <DonationCTA />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
