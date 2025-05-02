
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/programs/ProgramsHero";
import FlagshipPrograms from "@/components/programs/FlagshipPrograms";
import ProgramCategories from "@/components/programs/ProgramCategories";
import ImpactMetrics from "@/components/programs/ImpactMetrics";
import GetInvolved from "@/components/programs/GetInvolved";
import SuccessStories from "@/components/programs/SuccessStories";
import { 
  flagshipPrograms, 
  educationPrograms, 
  actionPrograms, 
  capacityPrograms 
} from "@/data/programsData";
import { useEffect } from "react";

const Programs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProgramsHero />
        <div id="flagship-programs">
          <FlagshipPrograms programs={flagshipPrograms} />
        </div>
        <ProgramCategories 
          educationPrograms={educationPrograms}
          actionPrograms={actionPrograms}
          capacityPrograms={capacityPrograms}
        />
        <ImpactMetrics />
        <SuccessStories />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
