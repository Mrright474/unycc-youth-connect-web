
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlagshipProgram } from "@/data/programsData";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface FlagshipProgramsProps {
  programs: FlagshipProgram[];
}

const FlagshipPrograms = ({ programs }: FlagshipProgramsProps) => {
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Flagship Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our signature initiatives that have demonstrated significant impact and operate at a global scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2 relative">
                {!imagesLoaded[index] && (
                  <Skeleton className="w-full h-64 md:h-80 rounded-lg" />
                )}
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md bg-white"
                  loading={index === 0 ? "eager" : "lazy"}
                  onLoad={() => handleImageLoad(index)}
                  style={{ display: imagesLoaded[index] ? 'block' : 'none' }}
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-unblue/10 p-3 rounded-full mr-4">
                    <img 
                      src={program.icon} 
                      alt={`${program.title} icon`} 
                      className="h-10 w-10"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-unblue rounded-full mr-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="btn-primary" asChild>
                  <Link to={program.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipPrograms;
