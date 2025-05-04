
import { ArrowRight } from "lucide-react";

const DonationHero = () => {
  return (
    <section className="bg-unblue text-white py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Your contribution helps empower youth leaders around the world to drive sustainable change 
          and address the most pressing global challenges.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a 
            href="#donation-options" 
            className="bg-white text-unblue hover:bg-ungray-light px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
          >
            Donate Now <ArrowRight size={20} />
          </a>
          <a 
            href="#projects" 
            className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationHero;
