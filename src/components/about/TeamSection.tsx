
import React from 'react';
import { Pen, Briefcase, Gavel, Megaphone, FileText, GraduationCap, Globe, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      name: "Katamba Collins Mark",
      title: "Director of Programs",
      image: "/lovable-uploads/0d9ebeb9-54ff-4596-b10d-bf179af48bda.png",
      bio: "Dynamic program leader coordinating UNYCC's initiatives and ensuring their effective implementation across regions.",
      icon: GraduationCap
    },
    {
      name: "Nassuna Husinah",
      title: "Global Director for Youth Empowerment and Cultural Diplomacy",
      image: "/lovable-uploads/e3323111-e096-4beb-8c42-420645213ae8.png",
      bio: "Healthcare professional and founder of the Husinah Hope Foundation, dedicated to mentoring and educating young people while fostering community involvement to help them achieve their maximum potential.",
      icon: Heart
    },
    {
      name: "Israel Mbabazi",
      title: "PR Officer & Linguist",
      image: "/lovable-uploads/069cd76e-8d9a-4e04-80dc-bd539303abdb.png",
      bio: "Multilingual communications professional from Congo with proficiency in 5 languages, leading UNYCC's international public relations efforts.",
      icon: Globe
    },
    {
      name: "Buule Paul",
      title: "Head Legal Team",
      image: "/lovable-uploads/04289bb7-af35-4c17-a18e-988bc4921c86.png",
      bio: "Legal expert from Uganda ensuring compliance and providing strategic legal guidance.",
      icon: Gavel
    },
    {
      name: "Lwasa Abdul Bast",
      title: "Director of Communications & Brand Manager",
      image: "/lovable-uploads/b9724a5a-f8d4-471e-a536-e4f46205c521.png",
      bio: "Strategic communications professional leading UNYCC's brand development and media engagement initiatives.",
      icon: Megaphone
    },
    {
      name: "Akoragye Osbert",
      title: "Publications Officer",
      image: "/lovable-uploads/d40da04a-513a-4800-b4e2-56404f202a6a.png",
      bio: "Communications specialist from Uganda responsible for managing UNYCC's publications and digital content strategy.",
      icon: FileText
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
                <div className="w-full h-full">
                  <AspectRatio ratio={1} className="w-full h-full">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover ${
                        member.title === "Global Director for Youth Empowerment and Cultural Diplomacy" ||
                        member.title === "Director of Programs"
                          ? "object-top scale-110"
                          : member.title === "PR Officer & Linguist"
                            ? "object-center scale-125"  
                            : "object-center"
                      }`}
                      priority={
                        member.title === "Director of Programs" || 
                        member.title === "PR Officer & Linguist" || 
                        member.title === "Global Director for Youth Empowerment and Cultural Diplomacy"
                      }
                      skeletonClassName="w-full h-full rounded-full"
                    />
                  </AspectRatio>
                </div>
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
