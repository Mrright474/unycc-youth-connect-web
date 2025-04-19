
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Users, 
  Award, 
  Handshake 
} from "lucide-react";

const HomeAbout = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-unblue" />,
      title: "Global Movement",
      description: "We connect youth from all corners of the world, building a network of change-makers."
    },
    {
      icon: <Users className="h-8 w-8 text-unblue" />,
      title: "Youth-Led Governance",
      description: "Our model empowers youth to lead from national to local levels, developing leadership skills."
    },
    {
      icon: <Award className="h-8 w-8 text-unblue" />,
      title: "SDG Focused",
      description: "All our activities are aligned with and contribute to the Sustainable Development Goals."
    },
    {
      icon: <Handshake className="h-8 w-8 text-unblue" />,
      title: "Collaborative Approach",
      description: "We partner with governments, NGOs, businesses, and educational institutions."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            UNYCC is a global youth movement aimed at localizing and achieving the Sustainable Development Goals (SDGs) by establishing youth-led clubs and community structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-ungray-light p-6 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-white p-3 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="btn-primary" asChild>
            <Link to="/about">Learn More About UNYCC</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
