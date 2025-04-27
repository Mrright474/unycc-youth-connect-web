
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LearnMore = () => {
  const { slug } = useParams();
  
  // Define content based on slug
  const pageContent: Record<string, {
    title: string;
    description: string;
    image: string;
    content: string[];
  }> = {
    'school': {
      title: 'School Club Program',
      description: 'Our school club program helps students establish UNYCC chapters at their educational institutions, providing resources, training, and support for youth-led sustainability initiatives.',
      image: '/lovable-uploads/416b4060-7352-4b3e-b1be-69e4a5819481.png',
      content: [
        "School clubs are an integral part of UNYCC's mission to empower young people globally.",
        "Members receive training in leadership, project management, and SDG implementation.",
        "Clubs organize awareness campaigns, sustainability projects, and community outreach.",
        "Network with other UNYCC clubs globally for knowledge sharing and collaboration."
      ]
    },
    'partner': {
      title: 'Partnership Program',
      description: 'UNYCC actively seeks collaborations with organizations, governments, and businesses to amplify our impact on sustainable development.',
      image: '/lovable-uploads/5834fedb-aa6c-421b-91b8-d17a45eb3374.png',
      content: [
        "Partners gain access to UNYCC's global youth network and innovative SDG solutions.",
        "Collaborative projects amplify impact through shared resources and expertise.",
        "Partners receive recognition through UNYCC's communication channels and events.",
        "Long-term partnerships focus on achieving measurable progress on SDG targets."
      ]
    },
    'leadership-academy': {
      title: 'Youth Leadership Academy',
      description: 'A comprehensive training program that equips young leaders with the skills to drive sustainable change in their communities.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
      content: [
        "Intensive leadership development through online and in-person training modules.",
        "Mentorship from established leaders in sustainability and development.",
        "Practical project implementation with support from UNYCC resources.",
        "Certification and ongoing professional development opportunities."
      ]
    },
    'innovation-challenge': {
      title: 'SDG Innovation Challenge',
      description: 'An annual competition that challenges youth to develop innovative solutions addressing specific SDG targets.',
      image: '/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png',
      content: [
        "Competitive process for identifying groundbreaking youth-led solutions.",
        "Expert mentorship and resources for finalist teams.",
        "Seed funding for winning projects to move from concept to implementation.",
        "Global showcase of innovations through UNYCC's partner network."
      ]
    },
    'action-projects': {
      title: 'Community Action Projects',
      description: 'Grassroots initiatives led by UNYCC clubs to implement sustainable development projects at the local level.',
      image: 'https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=800&auto=format&fit=crop',
      content: [
        "Localized interventions addressing community-specific SDG challenges.",
        "Youth-led planning, implementation, and evaluation of projects.",
        "Collaboration with local stakeholders and community members.",
        "Knowledge sharing across the global UNYCC network to scale successful models."
      ]
    }
  };
  
  // Default content for unknown slugs
  const defaultContent = {
    title: 'Program Details',
    description: 'Detailed information about this program is coming soon.',
    image: '/placeholder.svg',
    content: [
      'We are currently developing comprehensive information about this program.',
      'Please check back soon for updates.',
      'Contact us if you have specific questions about this initiative.'
    ]
  };
  
  const content = slug && slug in pageContent ? pageContent[slug] : defaultContent;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-unblue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <img 
                  src={content.image} 
                  alt={content.title} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4">About This Program</h2>
                <div className="space-y-4">
                  {content.content.map((paragraph, i) => (
                    <p key={i} className="text-gray-700">{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild className="mr-4">
                    <Link to="/join">Join Now</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
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

export default LearnMore;
