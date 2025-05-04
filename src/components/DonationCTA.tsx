
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DonationCTAProps {
  variant?: "default" | "compact";
  className?: string;
}

const DonationCTA = ({ variant = "default", className = "" }: DonationCTAProps) => {
  if (variant === "compact") {
    return (
      <div className={`bg-unblue/10 p-6 rounded-lg ${className}`}>
        <h3 className="text-xl font-semibold mb-2">Support Our Mission</h3>
        <p className="text-gray-600 mb-4">
          Help us empower youth to create sustainable change.
        </p>
        <Link to="/donations">
          <Button className="w-full bg-unblue hover:bg-unblue-dark">
            Donate Now
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <section className={`bg-unblue py-12 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Support Youth-Led Change Around the World
        </h2>
        <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
          Your contribution helps us empower young leaders and build sustainable communities.
        </p>
        <Link to="/donations">
          <Button className="bg-white text-unblue hover:bg-ungray-light px-8 py-6 text-lg font-medium">
            Make a Donation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default DonationCTA;
