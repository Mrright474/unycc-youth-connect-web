
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JoinOptions from "@/components/join/JoinOptions";
import IndividualForm from "@/components/join/IndividualForm";
import ClubForm from "@/components/join/ClubForm";
import PartnerForm from "@/components/join/PartnerForm";

const Join = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-unblue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join UNYCC</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Become part of our global movement and contribute to sustainable development in your community and beyond.
            </p>
          </div>
        </section>

        {/* Ways to Join */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ways to Get Involved</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're a student, educator, community leader, or organization, there's a place for you in the UNYCC community.
              </p>
            </div>

            <JoinOptions />
          </div>
        </section>

        {/* Application Forms Section */}
        <section className="py-12 bg-ungray-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Apply to Join UNYCC</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Select the option that best fits your interest and complete the application form.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
              <Tabs defaultValue="individual" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="individual" className="py-4">Individual Membership</TabsTrigger>
                  <TabsTrigger value="club" className="py-4">Start a Club</TabsTrigger>
                  <TabsTrigger value="partner" className="py-4">Partnership</TabsTrigger>
                </TabsList>
                
                <TabsContent value="individual" className="p-6">
                  <IndividualForm />
                </TabsContent>
                
                <TabsContent value="club" className="p-6">
                  <ClubForm />
                </TabsContent>
                
                <TabsContent value="partner" className="p-6">
                  <PartnerForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Join;
