
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface DonationAmountSelectorProps {
  selectedAmount: number | null;
  customAmount: string;
  onAmountSelect: (amount: number | null) => void;
  onCustomAmountChange: (amount: string) => void;
}

const donationAmounts = [10, 25, 50, 100, 250, 500];

const DonationAmountSelector = ({
  selectedAmount,
  customAmount,
  onAmountSelect,
  onCustomAmountChange,
}: DonationAmountSelectorProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {donationAmounts.map(amount => (
        <button
          key={amount}
          onClick={() => onAmountSelect(amount)}
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
        onClick={() => onAmountSelect(null)}
      >
        <span className="mr-2">Custom:</span>
        <Input 
          type="number"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(e) => onCustomAmountChange(e.target.value)}
          onClick={(e) => {
            e.stopPropagation();
            onAmountSelect(null);
          }}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-6"
        />
      </div>
    </div>
  );
};

export default DonationAmountSelector;
