
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <section className="py-16 bg-unblue text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join us in creating a more sustainable future through youth-led action. Start or join a club, or partner with UNYCC to support our programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-unblue hover:bg-gray-100"
            asChild
          >
            <Link to="/join">Join UNYCC</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
