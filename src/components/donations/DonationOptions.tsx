
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import DonationAmountSelector from "./options/DonationAmountSelector";
import ContactDonationDialog from "./options/ContactDonationDialog";
import PaymentMethodInfo from "./options/PaymentMethodInfo";

const DonationOptions = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const handleAmountSelect = (amount: number | null) => {
    setSelectedAmount(amount);
    if (amount === null) {
      setCustomAmount("");
    }
  };

  return (
    <section id="donation-options" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Make a Donation</h2>
        
        <div className="max-w-3xl mx-auto bg-ungray-light p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">Choose Donation Amount</h3>
          
          <DonationAmountSelector 
            selectedAmount={selectedAmount}
            customAmount={customAmount}
            onAmountSelect={handleAmountSelect}
            onCustomAmountChange={setCustomAmount}
          />
          
          <div className="space-y-6 mt-6">
            <Button 
              onClick={() => setContactDialogOpen(true)} 
              className="w-full py-6 text-lg border-unblue text-unblue hover:bg-unblue/5"
            >
              <Mail className="mr-2" /> Contact Us to Donate
            </Button>
          </div>
          
          <PaymentMethodInfo />
        </div>
      </div>

      {/* Dialog */}
      <ContactDonationDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen} 
      />
    </section>
  );
};

export default DonationOptions;
