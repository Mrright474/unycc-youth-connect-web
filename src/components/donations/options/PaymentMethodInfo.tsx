
import { ShieldCheck, Lock } from "lucide-react";

const PaymentMethodInfo = () => {
  return (
    <>
      <div className="mt-8 border-t pt-6">
        <h4 className="font-medium text-center mb-4">Secure Payment Methods</h4>
        
        {/* Payment method logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <img src="/lovable-uploads/1ddde308-f2d4-42ba-be9d-a316584451ce.png" alt="Visa" className="h-8 hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/c92a3883-002f-45f5-bd97-eb9f61d67882.png" alt="Mastercard" className="h-8 hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/e15edb8c-48c2-4da5-8bae-b8b5b88ce0fc.png" alt="PayPal" className="h-8 hover:scale-105 transition-transform" />
          <div className="flex items-center justify-center h-8 px-3 bg-gray-100 rounded-md text-sm font-medium">
            Apple Pay
          </div>
          <div className="flex items-center justify-center h-8 px-3 bg-gray-100 rounded-md text-sm font-medium">
            Google Pay
          </div>
        </div>
        
        {/* Security badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
            <span>SSL Secure Donation</span>
          </div>
          <div className="flex items-center">
            <Lock className="h-5 w-5 text-green-600 mr-2" />
            <span>256-bit Encryption</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md mt-4">
        <p className="text-sm text-gray-600 text-center">
          Your donation is tax-deductible where applicable. You will receive a receipt for your records.
          All payments are securely processed through our payment partners.
        </p>
      </div>
    </>
  );
};

export default PaymentMethodInfo;
