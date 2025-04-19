
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ImpactMetrics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The collective achievements of UNYCC programs and projects around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-ungray-light p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-unblue mb-2">1,250+</div>
            <div className="text-xl font-semibold mb-1">Active Clubs</div>
            <p className="text-gray-600 text-sm">Worldwide</p>
          </div>
          
          <div className="bg-ungray-light p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-unblue mb-2">3,600+</div>
            <div className="text-xl font-semibold mb-1">Projects</div>
            <p className="text-gray-600 text-sm">Implemented</p>
          </div>
          
          <div className="bg-ungray-light p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-unblue mb-2">25,000+</div>
            <div className="text-xl font-semibold mb-1">Youth</div>
            <p className="text-gray-600 text-sm">Actively Engaged</p>
          </div>
          
          <div className="bg-ungray-light p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-unblue mb-2">75+</div>
            <div className="text-xl font-semibold mb-1">Countries</div>
            <p className="text-gray-600 text-sm">With UNYCC Presence</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="btn-primary" asChild>
            <Link to="/impact">View Detailed Impact Report</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
