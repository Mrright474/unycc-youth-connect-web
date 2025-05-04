
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CreditCard, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const donationAmounts = [10, 25, 50, 100, 250, 500];

const DonationOptions = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Here you would integrate with a payment processor like Stripe
    // For now we'll just show a success message
    toast({
      title: "Thank you for your generosity!",
      description: `Your donation of $${amount} will help us make a difference.`,
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your interest in donating. Our team will contact you soon.",
      });
      setIsSubmitting(false);
      setContactDialogOpen(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <section id="donation-options" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Make a Donation</h2>
        
        <div className="max-w-3xl mx-auto bg-ungray-light p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">Choose Donation Amount</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {donationAmounts.map(amount => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`py-3 px-4 rounded-md border transition-colors ${
                  selectedAmount === amount 
                    ? "bg-unblue text-white border-unblue" 
                    : "bg-white border-gray-300 hover:border-unblue"
                }`}
              >
                ${amount}
              </button>
            ))}
            <div 
              className={`py-3 px-4 rounded-md border transition-colors col-span-2 md:col-span-3 flex items-center ${
                selectedAmount === null 
                  ? "bg-unblue/5 border-unblue" 
                  : "bg-white border-gray-300 hover:border-unblue"
              }`}
              onClick={() => handleAmountSelect(null)}
            >
              <span className="mr-2">Custom:</span>
              <Input 
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAmountSelect(null);
                }}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-6"
              />
            </div>
          </div>
          
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
          
          <p className="mt-6 text-sm text-gray-500 text-center">
            Your donation is tax-deductible where applicable. You will receive a receipt for your records.
          </p>
        </div>
      </div>

      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Contact Us About Donating</DialogTitle>
            <DialogDescription>
              Fill out this form and our team will reach out to discuss donation options.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleContactSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Let us know how you'd like to contribute"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y min-h-[100px]"
              ></textarea>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DonationOptions;
