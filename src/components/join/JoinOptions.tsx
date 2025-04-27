import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Users, Lightbulb } from "lucide-react";

const JoinOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="p-6">
        <Handshake className="w-10 h-10 text-unblue mb-4" />
        <h3 className="text-xl font-semibold mb-2">Individual Membership</h3>
        <p className="text-gray-600 mb-4">
          Connect with like-minded individuals, access exclusive resources, and participate in UNYCC events and initiatives.
        </p>
        <Button variant="secondary">Learn More</Button>
      </Card>

      <Card className="p-6">
        <Users className="w-10 h-10 text-unblue mb-4" />
        <h3 className="text-xl font-semibold mb-2">Start a Club</h3>
        <p className="text-gray-600 mb-4">
          Establish a UNYCC chapter at your school or in your community and lead local sustainability projects.
        </p>
        <Button variant="secondary">Get Started</Button>
      </Card>

      <Card className="p-6">
        <img
          src="/lovable-uploads/sdg-innovation.jpg"
          alt="SDG Innovation Challenge"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">SDG Innovation Challenge</h3>
        <p className="text-gray-600 mb-4">
          Join our global challenge to create innovative solutions for the Sustainable Development Goals. Work with peers worldwide to make a real impact.
        </p>
        <Button variant="secondary">Participate</Button>
      </Card>
      
      <Card className="p-6">
        <Lightbulb className="w-10 h-10 text-unblue mb-4" />
        <h3 className="text-xl font-semibold mb-2">Partnership</h3>
        <p className="text-gray-600 mb-4">
          Collaborate with UNYCC to amplify your organization's impact and support our mission of empowering youth for sustainable development.
        </p>
        <Button variant="secondary">Explore Partnership</Button>
      </Card>
    </div>
  );
};

export default JoinOptions;
