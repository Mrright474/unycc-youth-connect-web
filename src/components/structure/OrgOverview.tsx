
import React from "react";
import { Globe, MapPin, Building, School, Users } from "lucide-react";

const OrgOverview = () => {
  return (
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
  );
};

export default OrgOverview;
