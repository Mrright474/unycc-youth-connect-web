
import React from 'react';
import { Pen, Briefcase, Gavel } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Ben Kazigo Luweru",
      title: "Founder & Global President",
      image: "/lovable-uploads/e15edb8c-48c2-4da5-8bae-b8b5b88ce0fc.png",
      bio: "A visionary youth leader from Uganda, driving global sustainable development through innovative youth engagement."
    },
    {
      name: "Ellah Philp",
      title: "Co-Founder & Deputy President",
      image: "/lovable-uploads/c92a3883-002f-45f5-bd97-eb9f61d67882.png",
      bio: "A passionate advocate from Sudan, committed to empowering youth and creating meaningful social change."
    },
    {
      name: "Bakasumba Arnest",
      title: "Secretary General",
      image: "/lovable-uploads/71de3a9f-b354-4926-8c9a-a4d45433d8ce.png",
      bio: "Dedicated leader from Uganda managing organizational operations and documentation.",
      icon: Pen
    },
    {
      name: "Laura Muwanguzi",
      title: "Director of Partnerships & Outreach",
      image: "/lovable-uploads/9be39adb-395c-4a89-b163-3d842cf95a09.png",
      bio: "Strategic partnership builder from Uganda fostering global collaborations for youth development.",
      icon: Briefcase
    },
    {
      name: "Buule Paul",
      title: "Head Legal Team",
      image: "/lovable-uploads/04289bb7-af35-4c17-a18e-988bc4921c86.png",
      bio: "Legal expert from Uganda ensuring compliance and providing strategic legal guidance.",
      icon: Gavel
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who lead UNYCC's global efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full shadow-lg transition-transform transform group-hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                {member.icon && <member.icon className="w-4 h-4 text-unblue" />}
                <p className="text-unblue">{member.title}</p>
              </div>
              <p className="text-gray-600 px-4 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
