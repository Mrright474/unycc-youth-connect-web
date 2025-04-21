
import React from 'react';

const MissionVision = () => {
  return (
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
  );
};

export default MissionVision;
