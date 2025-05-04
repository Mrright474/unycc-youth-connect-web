
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructureHero from "@/components/structure/StructureHero";
import OrgOverview from "@/components/structure/OrgOverview";
import GovernanceStructure from "@/components/structure/GovernanceStructure";
import GlobalPresence from "@/components/structure/GlobalPresence";

const Structure = () => {
  // Additional effect to ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <StructureHero />
        <OrgOverview />
        <GovernanceStructure />
        <GlobalPresence />
      </main>
      <Footer />
    </div>
  );
};

export default Structure;
