
import React from 'react';

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
      name: "Sarah Williams",
      title: "Global Outreach Coordinator",
      image: "https://images.unsplash.com/photo-1601931935821-5fbe71157695?q=80&w=200&auto=format&fit=crop",
      bio: "Connecting UNYCC with global partners and expanding our international network."
    },
    {
      name: "David Lee",
      title: "Youth Engagement Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      bio: "Designing innovative programs to engage and empower young change-makers."
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <p className="text-unblue mb-2">{member.title}</p>
              <p className="text-gray-600 px-4 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
