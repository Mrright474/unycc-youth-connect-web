
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Mail } from "lucide-react";
import DonationAmountSelector from "./options/DonationAmountSelector";
import ContactDonationDialog from "./options/ContactDonationDialog";
import PaymentDialog from "./options/PaymentDialog";
import SuccessDialog from "./options/SuccessDialog";
import PaymentMethodInfo from "./options/PaymentMethodInfo";

const DonationOptions = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleAmountSelect = (amount: number | null) => {
    setSelectedAmount(amount);
    if (amount === null) {
      setCustomAmount("");
    }
  };

  const getFinalAmount = () => {
    if (selectedAmount !== null) {
      return selectedAmount;
    }
    if (customAmount) {
      return parseFloat(customAmount);
    }
    return 0;
  };

  const handlePaymentClick = () => {
    const amount = getFinalAmount();
    if (!amount || amount < 1) {
      toast({
        title: "Invalid amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }
    setPaymentDialogOpen(true);
  };

  const handlePaymentSuccess = () => {
    setSuccessDialogOpen(true);
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
          
          <div className="space-y-6">
            <Button 
              onClick={handlePaymentClick} 
              className="w-full py-6 text-lg bg-unblue hover:bg-unblue-dark"
            >
              <CreditCard className="mr-2" /> Donate Now
            </Button>
            
            <div className="text-center">
              <span className="text-gray-500">or</span>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full py-6 text-lg border-unblue text-unblue hover:bg-unblue/5"
              onClick={() => setContactDialogOpen(true)}
            >
              <Mail className="mr-2" /> Contact Us to Donate
            </Button>
          </div>
          
          <PaymentMethodInfo />
        </div>
      </div>

      {/* Dialogs */}
      <ContactDonationDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen} 
      />
      
      <PaymentDialog 
        open={paymentDialogOpen} 
        onOpenChange={setPaymentDialogOpen}
        amount={getFinalAmount()}
        onSuccess={handlePaymentSuccess}
      />
      
      <SuccessDialog 
        open={successDialogOpen} 
        onOpenChange={setSuccessDialogOpen}
        amount={getFinalAmount()}
      />
    </section>
  );
};

export default DonationOptions;
