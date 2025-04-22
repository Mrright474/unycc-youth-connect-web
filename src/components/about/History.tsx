
import React from 'react';

const History = () => {
  return (
    <section className="py-16 bg-ungray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The story of UNYCC's growth from its founding to a global movement.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-unblue"></div>
          
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
              <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Early 2023</h3>
                <p className="text-gray-600">UNYCC was founded with a vision to empower youth for sustainable development.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
              <div className="ml-8 md:ml-auto md:w-5/12 md:pl-8">
                <h3 className="text-xl font-semibold mb-2">Mid 2023</h3>
                <p className="text-gray-600">Establishment of core leadership team and initial organizational structure.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
              <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Late 2023</h3>
                <p className="text-gray-600">Launch of first initiatives and programs focused on youth empowerment.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
              <div className="ml-8 md:ml-auto md:w-5/12 md:pl-8">
                <h3 className="text-xl font-semibold mb-2">Early 2024</h3>
                <p className="text-gray-600">Expansion of operations and development of international partnerships.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-unblue rounded-full"></div>
              <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-5/12 md:pr-8 md:text-right">
                <h3 className="text-xl font-semibold mb-2">Present</h3>
                <p className="text-gray-600">Growing impact with ongoing projects and initiatives for sustainable development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
