
import { Program } from "@/data/programsData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface ProgramCategoriesProps {
  educationPrograms: Program[];
  actionPrograms: Program[];
  capacityPrograms: Program[];
}

const ProgramCategories = ({ 
  educationPrograms, 
  actionPrograms, 
  capacityPrograms 
}: ProgramCategoriesProps) => {
  const [activeTab, setActiveTab] = useState("education");
  
  const tabBackgrounds = {
    education: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
    action: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    capacity: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <section 
      className="py-16 bg-ungray-light"
      style={{
        backgroundImage: `linear-gradient(rgba(241, 241, 241, 0.9), rgba(241, 241, 241, 0.9)), url(${tabBackgrounds[activeTab as keyof typeof tabBackgrounds]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Program Areas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            UNYCC implements a diverse range of programs across multiple focus areas, all designed to empower youth and advance the SDGs.
          </p>
        </div>

        <Tabs 
          defaultValue="education" 
          className="max-w-4xl mx-auto"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="action">Action</TabsTrigger>
            <TabsTrigger value="capacity">Capacity Building</TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-unblue">Education Programs</h3>
            <p className="text-gray-600 mb-8">
              Our education programs build knowledge and awareness of sustainable development issues and solutions, equipping youth with the understanding they need to act effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationPrograms.map((program, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <img src={program.icon} alt={`${program.title} icon`} className="h-12 w-12" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{program.title}</h4>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="action" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-unblue">Action Programs</h3>
            <p className="text-gray-600 mb-8">
              Our action programs translate knowledge into tangible initiatives that address sustainable development challenges in communities around the world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {actionPrograms.map((program, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <img src={program.icon} alt={`${program.title} icon`} className="h-12 w-12" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{program.title}</h4>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="capacity" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-unblue">Capacity Building Programs</h3>
            <p className="text-gray-600 mb-8">
              Our capacity building programs develop the skills and capabilities of youth and youth organizations to lead and implement effective sustainable development initiatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capacityPrograms.map((program, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <img src={program.icon} alt={`${program.title} icon`} className="h-12 w-12" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{program.title}</h4>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramCategories;
