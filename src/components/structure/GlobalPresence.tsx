
import React from "react";

const GlobalPresence = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            UNYCC operates in over 75 countries across six continents, with thousands of clubs driving local action.
          </p>
        </div>

        <div className="bg-unblue/5 p-8 rounded-lg max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-unblue text-2xl mb-2">Africa</h4>
              <p className="text-gray-600 mb-4">19 Countries</p>
              <p className="text-sm text-gray-500">Including Kenya, Nigeria, South Africa, Ghana, and Morocco</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-unblue text-2xl mb-2">Americas</h4>
              <p className="text-gray-600 mb-4">15 Countries</p>
              <p className="text-sm text-gray-500">Including USA, Canada, Brazil, Mexico, and Argentina</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-unblue text-2xl mb-2">Asia-Pacific</h4>
              <p className="text-gray-600 mb-4">24 Countries</p>
              <p className="text-sm text-gray-500">Including India, China, Japan, Australia, and Indonesia</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-unblue text-2xl mb-2">Europe</h4>
              <p className="text-gray-600 mb-4">17 Countries</p>
              <p className="text-sm text-gray-500">Including UK, Germany, France, Spain, and Italy</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg font-medium text-gray-700">
              Our growing network continues to expand, bringing youth together to address the world's most pressing challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
