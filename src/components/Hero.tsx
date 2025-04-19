
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Users, Flag } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-unblue to-unblue-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              United Nations Youth <span className="text-ungray-light">Clubs & Communities</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering youth globally to drive local action for the Sustainable Development Goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-unblue hover:bg-ungray-light font-medium" asChild>
                <Link to="/join">Join UNYCC</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                <Globe className="mb-3 text-ungray-light" size={36} />
                <h3 className="font-semibold mb-1">Global Network</h3>
                <p className="text-sm text-white/80">Connecting youth across countries</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                <Users className="mb-3 text-ungray-light" size={36} />
                <h3 className="font-semibold mb-1">Local Action</h3>
                <p className="text-sm text-white/80">Driving community-based projects</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                <Flag className="mb-3 text-ungray-light" size={36} />
                <h3 className="font-semibold mb-1">SDG Focused</h3>
                <p className="text-sm text-white/80">Aligned with UN sustainable goals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                <Users className="mb-3 text-ungray-light" size={36} />
                <h3 className="font-semibold mb-1">Youth Led</h3>
                <p className="text-sm text-white/80">Building future leaders today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
