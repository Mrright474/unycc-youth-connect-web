
import { ShieldCheck, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PaymentMethodInfo = () => {
  return (
    <>
      <div className="mt-8 border-t pt-6">
        <h4 className="font-medium text-center mb-4">Contact Us to Donate</h4>
        
        <div className="flex flex-col items-center gap-4 mb-6">
          <p className="text-center text-gray-700">
            Thank you for your interest in supporting our mission. To make a donation, 
            please contact our donation team directly using one of the methods below.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-unblue mr-2" />
              <span>unitednationsyouthclubsunycc@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-unblue mr-2" />
              <span>+256 744 552 195</span>
            </div>
          </div>
          
          <Link to="/contact" className="mt-2">
            <Button variant="outline" className="border-unblue text-unblue hover:bg-unblue/5">
              Contact Us For Donation Details
            </Button>
          </Link>
        </div>
        
        {/* Security info */}
        <div className="flex justify-center items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
            <span>Safe & Secure Donation Process</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md mt-4">
        <p className="text-sm text-gray-600 text-center">
          Your donation is tax-deductible where applicable. You will receive a receipt for your records.
          Our team will guide you through the donation process.
        </p>
      </div>
    </>
  );
};

export default PaymentMethodInfo;
