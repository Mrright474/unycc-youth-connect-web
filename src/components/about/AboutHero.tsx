
import { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const AboutHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <section className="relative bg-unblue text-white py-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {!imageLoaded && <Skeleton className="w-full h-full bg-gray-800" />}
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop" 
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-40"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
          fetchPriority="high"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About UNYCC</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Learn about our mission, vision, and the people who make UNYCC a global force for sustainable development.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
