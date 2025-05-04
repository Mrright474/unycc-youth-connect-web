
import React from "react";

const GovernanceStructure = () => {
  return (
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
  );
};

export default GovernanceStructure;
