
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/programs/ProgramsHero";
import FlagshipPrograms from "@/components/programs/FlagshipPrograms";
import ProgramCategories from "@/components/programs/ProgramCategories";
import ImpactMetrics from "@/components/programs/ImpactMetrics";
import GetInvolved from "@/components/programs/GetInvolved";
import { 
  flagshipPrograms, 
  educationPrograms, 
  actionPrograms, 
  capacityPrograms 
} from "@/data/programsData";

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProgramsHero />
        <FlagshipPrograms programs={flagshipPrograms} />
        <ProgramCategories 
          educationPrograms={educationPrograms}
          actionPrograms={actionPrograms}
          capacityPrograms={capacityPrograms}
        />
        <ImpactMetrics />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
