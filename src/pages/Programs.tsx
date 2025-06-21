
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
    </div>
  );
};

export default Programs;
