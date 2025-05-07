
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CreditCard, Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const donationAmounts = [10, 25, 50, 100, 250, 500];

const paymentSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  cardNumber: z.string().min(16, "Invalid card number").max(19),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date (MM/YY)"),
  cvv: z.string().min(3, "Invalid CVV").max(4),
  paymentMethod: z.enum(["credit", "debit", "paypal"]),
  billingAddress: z.string().min(5, "Billing address is required"),
  zipCode: z.string().min(3, "Zip code is required"),
});

const DonationOptions = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  
  // Contact form state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      paymentMethod: "credit",
      billingAddress: "",
      zipCode: "",
    },
  });

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

  const onSubmitPayment = (data: z.infer<typeof paymentSchema>) => {
    setProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessingPayment(false);
      setPaymentDialogOpen(false);
      setSuccessDialogOpen(true);
      form.reset();
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    form.setValue("cardNumber", formatCardNumber(value));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    form.setValue("expiryDate", value);
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
          
          <div className="mt-8 border-t pt-6">
            <h4 className="font-medium text-center mb-4">Secure Payment Methods</h4>
            <div className="flex justify-center space-x-4">
              <img src="/lovable-uploads/1ddde308-f2d4-42ba-be9d-a316584451ce.png" alt="Visa" className="h-8" />
              <img src="/lovable-uploads/c92a3883-002f-45f5-bd97-eb9f61d67882.png" alt="Mastercard" className="h-8" />
              <img src="/lovable-uploads/e15edb8c-48c2-4da5-8bae-b8b5b88ce0fc.png" alt="PayPal" className="h-8" />
            </div>
          </div>
          
          <p className="mt-6 text-sm text-gray-500 text-center">
            Your donation is tax-deductible where applicable. You will receive a receipt for your records.
          </p>
        </div>
      </div>

      {/* Contact Dialog */}
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
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</Label>
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
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</Label>
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

      {/* Payment Dialog */}
      <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Complete Your Donation</DialogTitle>
            <DialogDescription>
              You're donating ${getFinalAmount()}. Please enter your payment details below.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitPayment)} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="credit" />
                          </FormControl>
                          <FormLabel className="font-normal">Credit Card</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="debit" />
                          </FormControl>
                          <FormLabel className="font-normal">Debit Card</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="paypal" />
                          </FormControl>
                          <FormLabel className="font-normal">PayPal</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="1234 5678 9012 3456" 
                        value={field.value}
                        onChange={handleCardNumberChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiry Date</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="MM/YY" 
                          value={field.value}
                          onChange={handleExpiryDateChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="123" 
                          maxLength={4}
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            form.setValue("cvv", value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="billingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Billing Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St, City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip/Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="12345" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4">
                <Button type="submit" className="w-full" disabled={processingPayment}>
                  {processingPayment ? "Processing..." : "Complete Donation"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Thank You for Your Donation!</h3>
            <p className="text-center text-gray-600 mb-4">
              Your donation of ${getFinalAmount()} has been processed successfully. A receipt has been sent to your email.
            </p>
            <Button 
              onClick={() => setSuccessDialogOpen(false)}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DonationOptions;
