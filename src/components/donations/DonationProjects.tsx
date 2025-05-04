
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const projectsData = [
  {
    id: "youth-leadership",
    title: "Youth Leadership Academy",
    description: "Support our flagship program that trains young leaders in sustainable development principles and project management.",
    target: 25000,
    raised: 18750,
    image: "/lovable-uploads/b9724a5a-f8d4-471e-a536-e4f46205c521.png",
  },
  {
    id: "climate-action",
    title: "Climate Action Initiative",
    description: "Fund youth-led environmental projects addressing climate change in vulnerable communities.",
    target: 15000,
    raised: 9800,
    image: "/lovable-uploads/d40da04a-513a-4800-b4e2-56404f202a6a.png",
  },
  {
    id: "sdg-education",
    title: "SDG Education Program",
    description: "Help us develop educational materials on the Sustainable Development Goals for schools worldwide.",
    target: 10000,
    raised: 4200,
    image: "/lovable-uploads/24b0ae3b-a291-4b67-8d6d-4af0b0930366.png",
  },
];

const DonationProjects = () => {
  const { toast } = useToast();
  
  const handleDonateToProject = (projectId: string) => {
    // Here you would integrate with your payment processor
    // For now we'll just show a toast message
    toast({
      title: "Project Selected",
      description: "You're being redirected to the donation form for this project.",
    });
    
    // Scroll to donation form
    const donationSection = document.getElementById("donation-options");
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contribute directly to these ongoing initiatives or make a general donation to support our work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const percentRaised = (project.raised / project.target) * 100;
            
            return (
              <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">${project.raised.toLocaleString()} raised</span>
                      <span className="text-gray-600">of ${project.target.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-unblue rounded-full" 
                        style={{ width: `${percentRaised}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleDonateToProject(project.id)}
                    className="w-full bg-unblue hover:bg-unblue-dark"
                  >
                    Donate to This Project
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Can't decide which project to support? Make a general donation to help us allocate resources where they're needed most.
          </p>
          <a href="#donation-options">
            <Button className="bg-unblue hover:bg-unblue-dark">
              Make a General Donation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationProjects;
