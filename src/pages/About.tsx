import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Users, Award, Handshake, UserPlus, Calendar } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Globe className="h-8 w-8 text-unblue" />,
      title: "Global Citizenship",
      description: "We foster a sense of global citizenship and responsibility among youth."
    },
    {
      icon: <Users className="h-8 w-8 text-unblue" />,
      title: "Youth Empowerment",
      description: "We believe in the power of young people to create meaningful change."
    },
    {
      icon: <Award className="h-8 w-8 text-unblue" />,
      title: "Excellence",
      description: "We strive for excellence in all our programs and initiatives."
    },
    {
      icon: <Handshake className="h-8 w-8 text-unblue" />,
      title: "Collaboration",
      description: "We work together across borders and sectors to achieve common goals."
    },
    {
      icon: <UserPlus className="h-8 w-8 text-unblue" />,
      title: "Inclusivity",
      description: "We embrace diversity and ensure that all voices are heard."
    },
    {
      icon: <Calendar className="h-8 w-8 text-unblue" />,
      title: "Sustainability",
      description: "We commit to sustainable practices and long-term impact."
    }
  ];

  const team = [
    {
      name: "Ben Kazigo Luweru",
      title: "Founder & Global President",
      image: "/lovable-uploads/416b4060-7352-4b3e-b1be-69e4a5819481.png",
      bio: "A visionary youth leader from Uganda, driving global sustainable development through innovative youth engagement."
    },
    {
      name: "Ellah Philp",
      title: "Co-Founder & Deputy President",
      image: "/lovable-uploads/1a1e9f70-9631-455f-b4bd-329317acc947.png",
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-unblue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About UNYCC</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn about our mission, vision, and the people who make UNYCC a global force for sustainable development.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-unblue">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  To empower youth globally to drive local action for the Sustainable Development Goals through a network of clubs and communities.
                </p>
                <p className="text-lg text-gray-700">
                  UNYCC aims to create a world where young people are at the forefront of sustainable development, equipped with the knowledge, skills, and resources to create positive change in their communities and beyond.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-unblue">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-4">
                  A world where youth are active global citizens, leading sustainable development efforts at all levels.
                </p>
                <p className="text-lg text-gray-700">
                  We envision a future where every young person has the opportunity to contribute to the SDGs, where youth-led initiatives are supported and celebrated, and where intergenerational collaboration creates lasting positive impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-ungray-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The core principles that guide our work and define our organization's culture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4 bg-unblue/10 p-3 rounded-full inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
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

        {/* History Timeline */}
        <section className="py-16 bg-ungray-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The story of UNYCC's growth from a small initiative to a global movement.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-unblue"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
                  <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">2016</h3>
                    <p className="text-gray-600">UNYCC founded with the first club established at the University of Global Studies.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
                  <div className="ml-8 md:ml-auto md:w-5/12 md:pl-8">
                    <h3 className="text-xl font-semibold mb-2">2018</h3>
                    <p className="text-gray-600">Expansion to 15 countries with the launch of our first global youth leadership summit.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
                  <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">2020</h3>
                    <p className="text-gray-600">Launch of virtual programs during the global pandemic, reaching 50 countries.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
                  <div className="ml-8 md:ml-auto md:w-5/12 md:pl-8">
                    <h3 className="text-xl font-semibold mb-2">2023</h3>
                    <p className="text-gray-600">Recognition by the United Nations for youth-led climate action projects.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
                  <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">Today</h3>
                    <p className="text-gray-600">Operating in over 75 countries with thousands of active members driving local and global change.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
