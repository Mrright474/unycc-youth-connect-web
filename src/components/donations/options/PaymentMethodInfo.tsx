
const PaymentMethodInfo = () => {
  return (
    <>
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
    </>
  );
};

export default PaymentMethodInfo;
