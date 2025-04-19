
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Award, 
  Globe, 
  BookOpen, 
  Users, 
  Lightbulb, 
  Calendar 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Programs = () => {
  const flagshipPrograms = [
    {
      title: "Youth Leadership Academy",
      description: "A comprehensive leadership development program that equips young people with the skills, knowledge, and networks to lead sustainable development initiatives.",
      icon: "/images/logo1.png",
      features: [
        "Six-month structured curriculum",
        "Mentorship from experienced leaders",
        "Practical project implementation",
        "Global networking opportunities"
      ],
      image: "/images/logo4.png",
      link: "/programs/leadership-academy"
    },
    {
      title: "SDG Innovation Challenge",
      description: "An annual competition that challenges youth to develop innovative solutions for specific Sustainable Development Goals in their communities.",
      icon: "/images/logo2.png",
      features: [
        "Seed funding for winning projects",
        "Technical support and mentorship",
        "Prototype development assistance",
        "Scaling opportunities for successful initiatives"
      ],
      image: "/images/logo5.png",
      link: "/programs/innovation-challenge"
    },
    {
      title: "Global Youth Forum",
      description: "An annual gathering bringing together youth leaders from across the UNYCC network to share experiences, learn from each other, and develop collaborative initiatives.",
      icon: "/images/logo3.png",
      features: [
        "High-level speakers and workshops",
        "Cross-cultural collaboration opportunities",
        "Policy development sessions",
        "Showcasing of successful local projects"
      ],
      image: "/images/logo6.png",
      link: "/programs/global-forum"
    }
  ];

  const educationPrograms = [
    {
      title: "SDG Academy",
      description: "Online courses and resources focused on building understanding of the SDGs and sustainable development principles.",
      icon: <BookOpen className="h-8 w-8 text-unblue" />
    },
    {
      title: "Peer Education Program",
      description: "Training youth to educate their peers on important sustainable development topics.",
      icon: <Users className="h-8 w-8 text-unblue" />
    },
    {
      title: "Sustainability in Schools",
      description: "Integrating sustainability into school curricula and campus operations.",
      icon: <BookOpen className="h-8 w-8 text-unblue" />
    }
  ];

  const actionPrograms = [
    {
      title: "Community Action Projects",
      description: "Local initiatives addressing specific community needs aligned with the SDGs.",
      icon: <Users className="h-8 w-8 text-unblue" />
    },
    {
      title: "Climate Action Program",
      description: "Youth-led initiatives focused specifically on climate change mitigation and adaptation.",
      icon: <Globe className="h-8 w-8 text-unblue" />
    },
    {
      title: "SDG Advocacy Campaign",
      description: "Awareness-raising and policy advocacy efforts led by youth at local and national levels.",
      icon: <Award className="h-8 w-8 text-unblue" />
    }
  ];

  const capacityPrograms = [
    {
      title: "Club Leadership Training",
      description: "Building the capacity of club leaders to effectively manage and grow their local clubs.",
      icon: <Award className="h-8 w-8 text-unblue" />
    },
    {
      title: "Project Management Bootcamp",
      description: "Practical training on planning, implementing, and evaluating SDG-focused projects.",
      icon: <Calendar className="h-8 w-8 text-unblue" />
    },
    {
      title: "Facilitator Development",
      description: "Training youth to facilitate workshops and educational activities within their communities.",
      icon: <Users className="h-8 w-8 text-unblue" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-unblue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs & Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the initiatives that are bringing the Sustainable Development Goals to life through youth action.
            </p>
          </div>
        </section>

        {/* Flagship Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flagship Programs</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our signature initiatives that have demonstrated significant impact and operate at a global scale.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {flagshipPrograms.map((program, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-64 md:h-80 object-contain rounded-lg shadow-md bg-white p-4"
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

        {/* Program Categories */}
        <section className="py-16 bg-ungray-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Program Areas</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                UNYCC implements a diverse range of programs across multiple focus areas, all designed to empower youth and advance the SDGs.
              </p>
            </div>

            <Tabs defaultValue="education" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="action">Action</TabsTrigger>
                <TabsTrigger value="capacity">Capacity Building</TabsTrigger>
              </TabsList>
              
              <TabsContent value="education" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-unblue">Education Programs</h3>
                <p className="text-gray-600 mb-8">
                  Our education programs build knowledge and awareness of sustainable development issues and solutions, equipping youth with the understanding they need to act effectively.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {educationPrograms.map((program, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="mb-4">
                        {program.icon}
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{program.title}</h4>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="action" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-unblue">Action Programs</h3>
                <p className="text-gray-600 mb-8">
                  Our action programs translate knowledge into tangible initiatives that address sustainable development challenges in communities around the world.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {actionPrograms.map((program, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="mb-4">
                        {program.icon}
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{program.title}</h4>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="capacity" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-unblue">Capacity Building Programs</h3>
                <p className="text-gray-600 mb-8">
                  Our capacity building programs develop the skills and capabilities of youth and youth organizations to lead and implement effective sustainable development initiatives.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {capacityPrograms.map((program, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="mb-4">
                        {program.icon}
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

        {/* Impact Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The collective achievements of UNYCC programs and projects around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-ungray-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-unblue mb-2">1,250+</div>
                <div className="text-xl font-semibold mb-1">Active Clubs</div>
                <p className="text-gray-600 text-sm">Worldwide</p>
              </div>
              
              <div className="bg-ungray-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-unblue mb-2">3,600+</div>
                <div className="text-xl font-semibold mb-1">Projects</div>
                <p className="text-gray-600 text-sm">Implemented</p>
              </div>
              
              <div className="bg-ungray-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-unblue mb-2">25,000+</div>
                <div className="text-xl font-semibold mb-1">Youth</div>
                <p className="text-gray-600 text-sm">Actively Engaged</p>
              </div>
              
              <div className="bg-ungray-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-unblue mb-2">75+</div>
                <div className="text-xl font-semibold mb-1">Countries</div>
                <p className="text-gray-600 text-sm">With UNYCC Presence</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/impact">View Detailed Impact Report</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="py-16 bg-unblue text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us in creating a more sustainable future through youth-led action. Start or join a club, or partner with UNYCC to support our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-unblue hover:bg-gray-100"
                asChild
              >
                <Link to="/join">Join UNYCC</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
