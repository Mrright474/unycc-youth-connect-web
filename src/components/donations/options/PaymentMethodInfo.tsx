
import { ShieldCheck, Lock, CreditCard, DollarSign, Check, CreditCardIcon } from "lucide-react";

const PaymentMethodInfo = () => {
  return (
    <>
      <div className="mt-8 border-t pt-6">
        <h4 className="font-medium text-center mb-4">Secure Payment Methods</h4>
        
        {/* Payment method logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          {/* Using Lucide icons for payment methods for better representation */}
          <div className="flex items-center justify-center h-10 px-4 bg-blue-600 rounded-md text-white font-medium hover:bg-blue-700 transition-colors">
            <CreditCard className="h-5 w-5 mr-2" />
            <span>Credit Card</span>
          </div>
          <div className="flex items-center justify-center h-10 px-4 bg-[#0070E0] rounded-md text-white font-medium hover:bg-[#005BBF] transition-colors">
            <CreditCardIcon className="h-5 w-5 mr-2" />
            <span>PayPal</span>
          </div>
          <div className="flex items-center justify-center h-10 px-4 bg-black rounded-md text-white font-medium hover:bg-gray-800 transition-colors">
            <DollarSign className="h-5 w-5 mr-2" />
            <span>Express Checkout</span>
          </div>
          <div className="flex items-center justify-center h-10 px-4 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
            <Check className="h-5 w-5 mr-2" />
            Apple Pay
          </div>
          <div className="flex items-center justify-center h-10 px-4 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
            <Check className="h-5 w-5 mr-2" />
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
