import React from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface LeadsCalculatorProps {
  totalLeads: number;
  leadsPerDay: number;
  onTotalLeadsChange: (value: number) => void;
  onLeadsPerDayChange: (value: number) => void;
}

const LeadsCalculator: React.FC<LeadsCalculatorProps> = ({ 
  totalLeads, 
  leadsPerDay, 
  onTotalLeadsChange, 
  onLeadsPerDayChange 
}) => {
  const totalPrice = totalLeads * 5; // $5 per lead
  const deliveryDays = totalLeads > 0 ? Math.ceil(totalLeads / leadsPerDay) : 0;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label htmlFor="totalLeads" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold">
          How many leads do you want to receive?
        </Label>
        <div className="relative">
          <Input
            id="totalLeads"
            type="number"
            min="0"
            value={totalLeads || ''}
            onChange={(e) => onTotalLeadsChange(parseInt(e.target.value) || 0)}
            className="h-12 bg-black/50 border-[#EECC6E]/20 text-white pr-24"
            placeholder="Enter number of leads"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#EECC6E]">
            ${totalPrice}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold">
            Leads per day
          </Label>
          <span className="text-[#EECC6E] text-sm">
            ~{deliveryDays} days delivery
          </span>
        </div>
        <Slider
          value={[leadsPerDay]}
          min={1}
          max={100}
          step={1}
          onValueChange={([value]) => onLeadsPerDayChange(value)}
          className="py-4"
        />
        <div className="flex justify-between text-sm text-[#EECC6E]/70">
          <span>1 lead/day</span>
          <span>{leadsPerDay} leads/day</span>
          <span>100 leads/day</span>
        </div>
      </div>
    </div>
  );
};

export default LeadsCalculator;
