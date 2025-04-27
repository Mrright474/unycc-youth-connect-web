
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProgramsPreview = () => {
  const programs = [
    {
      title: "Youth Leadership Academy",
      description: "A comprehensive training program that equips young leaders with the skills to drive sustainable change in their communities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      link: "/programs/leadership-academy"
    },
    {
      title: "SDG Innovation Challenge",
      description: "An annual competition that challenges youth to develop innovative solutions addressing specific SDG targets.",
      image: "/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png",
      link: "/programs/innovation-challenge"
    },
    {
      title: "Community Action Projects",
      description: "Grassroots initiatives led by UNYCC clubs to implement sustainable development projects at the local level.",
      image: "https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=800&auto=format&fit=crop",
      link: "/programs/action-projects"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs & Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our initiatives that are making a tangible impact on sustainable development across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link 
                  to={program.link}
                  className="text-unblue hover:text-unblue-dark font-medium flex items-center"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-primary" asChild>
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
