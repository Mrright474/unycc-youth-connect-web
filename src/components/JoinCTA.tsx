
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, Building, School } from "lucide-react";

const JoinCTA = () => {
  return (
    <section className="py-16 bg-ungray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved with UNYCC</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our global network of youth-led clubs and communities working towards sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="mb-4 bg-unblue/10 p-4 rounded-full">
              <UserPlus className="h-8 w-8 text-unblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Join as a Member</h3>
            <p className="text-gray-600 mb-4">
              Become a member of the UNYCC community and participate in local and global initiatives.
            </p>
            <Button className="mt-auto btn-secondary" asChild>
              <Link to="/join">Join Now</Link>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="mb-4 bg-unblue/10 p-4 rounded-full">
              <School className="h-8 w-8 text-unblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Start a School Club</h3>
            <p className="text-gray-600 mb-4">
              Establish a UNYCC club at your school or university and lead SDG initiatives on campus.
            </p>
            <Button className="mt-auto btn-secondary" asChild>
              <Link to="/join/school">Start a Club</Link>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="mb-4 bg-unblue/10 p-4 rounded-full">
              <Building className="h-8 w-8 text-unblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Partnership</h3>
            <p className="text-gray-600 mb-4">
              Partner with UNYCC as a community organization, government entity, or corporate sponsor.
            </p>
            <Button className="mt-auto btn-secondary" asChild>
              <Link to="/join/partner">Partner With Us</Link>
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-primary" asChild>
            <Link to="/join">Explore All Ways to Join</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
