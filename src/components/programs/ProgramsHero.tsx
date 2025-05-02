
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProgramsHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <section 
      className="relative bg-unblue text-white py-20 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {!imageLoaded && <Skeleton className="w-full h-full bg-gray-800" />}
        <img 
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop" 
          alt="Young people collaborating"
          className="w-full h-full object-cover object-center opacity-30"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Programs & Projects
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover how UNYCC is empowering youth to take action on the Sustainable Development Goals through innovative programs and initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-unblue hover:bg-gray-100"
              asChild
            >
              <Link to="#flagship-programs">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/join">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
