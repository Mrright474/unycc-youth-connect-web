
import React from 'react';
import { Globe, Users, Award, Handshake, UserPlus, Calendar } from "lucide-react";

const Values = () => {
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

  return (
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
  );
};

export default Values;
