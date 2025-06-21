
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JoinOptions from "@/components/join/JoinOptions";
import IndividualForm from "@/components/join/IndividualForm";
import ClubForm from "@/components/join/ClubForm";
import PartnerForm from "@/components/join/PartnerForm";
import { Handshake } from "lucide-react";

const Join = () => {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      {/* Watermark Logo */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/ff7fc504-d57f-4296-9405-802d4ebb657b.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'min(40%, 300px)',
        }}
      />
      
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="flex-grow w-full">
          {/* Hero Section */}
          <section className="bg-unblue text-white py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Join UNYCC</h1>
              <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                Become part of our global movement and contribute to sustainable development in your community and beyond.
              </p>
            </div>
          </section>

          {/* Ways to Join */}
          <section className="py-8 sm:py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ways to Get Involved</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Whether you're a student, educator, community leader, or organization, there's a place for you in the UNYCC community.
                </p>
              </div>

              <JoinOptions />
            </div>
          </section>

          {/* Application Forms Section */}
          <section className="py-8 sm:py-12 lg:py-16 bg-ungray-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Apply to Join UNYCC</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Select the option that best fits your interest and complete the application form.
                </p>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
                <Tabs defaultValue="individual" className="w-full">
                  <TabsList className="w-full grid grid-cols-1 sm:grid-cols-3">
                    <TabsTrigger value="individual" className="py-3 sm:py-4 text-sm sm:text-base">Individual Membership</TabsTrigger>
                    <TabsTrigger value="club" className="py-3 sm:py-4 text-sm sm:text-base">Start a Club</TabsTrigger>
                    <TabsTrigger value="partner" className="py-3 sm:py-4 text-sm sm:text-base">Partnership</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="individual" className="p-4 sm:p-6">
                    <IndividualForm />
                  </TabsContent>
                  
                  <TabsContent value="club" className="p-4 sm:p-6">
                    <ClubForm />
                  </TabsContent>
                  
                  <TabsContent value="partner" className="p-4 sm:p-6">
                    <PartnerForm />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Join;
