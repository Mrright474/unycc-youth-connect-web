
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, MapPin, Building, School, Users } from "lucide-react";

const Structure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-unblue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Structure</h1>
            <p className="text-xl max-w-3xl mx-auto">
              UNYCC operates through a multi-tiered structure that connects global vision with local action.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Global to Local Approach</h2>
              <p className="text-lg text-gray-700">
                The UNYCC structure is designed to enable effective coordination across all levels while empowering local youth leadership. Our organizational model ensures that global strategies translate into meaningful local action.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto py-8">
              {/* Vertical line connecting all levels */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-unblue"></div>
              
              {/* Global Level */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-unblue rounded-full flex items-center justify-center">
                  <Globe className="text-white h-8 w-8" />
                </div>
                <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                  <h3 className="text-2xl font-semibold mb-2 mt-10">Global Leadership</h3>
                  <p className="text-gray-600">
                    The International Secretariat provides strategic direction, develops resources, and coordinates global initiatives. Led by a diverse board of youth representatives from different regions.
                  </p>
                </div>
              </div>
              
              {/* National Level */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-unblue rounded-full flex items-center justify-center">
                  <MapPin className="text-white h-8 w-8" />
                </div>
                <div className="ml-8 md:ml-auto md:w-5/12 md:pl-8">
                  <h3 className="text-2xl font-semibold mb-2 mt-10">National Chapters</h3>
                  <p className="text-gray-600">
                    Each country has a National Chapter that coordinates activities, liaises with government and partners, and supports districts and clubs within the country.
                  </p>
                </div>
              </div>
              
              {/* District Level */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-unblue rounded-full flex items-center justify-center">
                  <Building className="text-white h-8 w-8" />
                </div>
                <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                  <h3 className="text-2xl font-semibold mb-2 mt-10">District Networks</h3>
                  <p className="text-gray-600">
                    Districts bring together multiple clubs in a geographic area, facilitating collaboration, resource sharing, and regional initiatives.
                  </p>
                </div>
              </div>
              
              {/* Community Level */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-unblue rounded-full flex items-center justify-center">
                  <Users className="text-white h-8 w-8" />
                </div>
                <div className="ml-8 md:ml-auto md:w-5/12 md:pl-8">
                  <h3 className="text-2xl font-semibold mb-2 mt-10">Community Hubs</h3>
                  <p className="text-gray-600">
                    Community Hubs coordinate clubs within a community, working with local authorities and partners to implement SDG-focused projects.
                  </p>
                </div>
              </div>
              
              {/* Club Level */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-unblue rounded-full flex items-center justify-center">
                  <School className="text-white h-8 w-8" />
                </div>
                <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                  <h3 className="text-2xl font-semibold mb-2 mt-10">Local Clubs</h3>
                  <p className="text-gray-600">
                    The foundation of UNYCC, clubs operate in schools, universities, and community spaces, engaging youth directly in learning and action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-16 bg-ungray-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Governance Structure</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our inclusive governance model ensures youth leadership at every level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-unblue">Global Board</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Youth representatives elected from each region</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Adult advisors with expertise in sustainable development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Executive Committee responsible for strategic decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Youth-majority voting structure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-unblue">National Committees</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Elected youth leadership team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Representative structure from different districts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Advisory board of relevant stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>National Secretariat providing operational support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-unblue">District and Community Coordination</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>District coordinators elected by club representatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Community facilitators supporting local implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Regular coordination meetings and knowledge sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Focus on local adaptation of global strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-unblue">Club Leadership</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Democratically elected executive committee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Project teams focused on specific SDGs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Adult advisor providing guidance and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-unblue rounded-full mr-2 mt-1"></span>
                    <span>Youth-led decision making and implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UNYCC Programs Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                UNYCC operates in over 75 countries across six continents, with thousands of clubs driving local action.
              </p>
            </div>

            <div className="bg-unblue/5 p-8 rounded-lg max-w-5xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center bg-unblue/10">
                  <p className="text-center text-gray-600">
                    [Interactive map showing UNYCC's global presence would be displayed here]
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold text-unblue text-2xl">Africa</h4>
                  <p className="text-gray-600">19 Countries</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-unblue text-2xl">Americas</h4>
                  <p className="text-gray-600">15 Countries</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-unblue text-2xl">Asia-Pacific</h4>
                  <p className="text-gray-600">24 Countries</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-unblue text-2xl">Europe</h4>
                  <p className="text-gray-600">17 Countries</p>
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

export default Structure;
