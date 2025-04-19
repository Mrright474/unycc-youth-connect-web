
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import JoinCTA from "@/components/JoinCTA";
import ProgramsPreview from "@/components/ProgramsPreview";
import Stats from "@/components/Stats";
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
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
