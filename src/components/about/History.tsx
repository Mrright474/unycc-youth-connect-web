
import React from 'react';

const History = () => {
  return (
    <section className="py-16 bg-ungray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The story of UNYCC's growth from a small initiative to a global movement.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-unblue"></div>
          
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
  );
};

export default History;
