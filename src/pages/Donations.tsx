
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationHero from "@/components/donations/DonationHero";
import DonationOptions from "@/components/donations/DonationOptions";
import DonationProjects from "@/components/donations/DonationProjects";
import DonationFAQ from "@/components/donations/DonationFAQ";
import DonationImpact from "@/components/donations/DonationImpact";

const Donations = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DonationHero />
        <DonationOptions />
        <DonationImpact />
        <DonationProjects />
        <DonationFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Donations;
