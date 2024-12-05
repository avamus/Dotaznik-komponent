import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Sparkles } from 'lucide-react'

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
  onLeadsPerDayChange,
}) => {
  const totalPrice = totalLeads * 5;
  const deliveryDays = leadsPerDay > 0 ? Math.ceil(totalLeads / leadsPerDay) : 0;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-[#EECC6E] text-lg font-bold flex items-center gap-2">
          <span className="text-[#EECC6E]">* </span>
          How many leads do you want to receive?
          <Sparkles className="h-4 w-4 text-[#EECC6E]" />
        </Label>
        <Input
          type="number"
          min="1"
          value={totalLeads}
          onChange={(e) => onTotalLeadsChange(parseInt(e.target.value) || 0)}
          className="h-12 text-center text-xl"
          placeholder="0"
        />
        <div className="text-center text-[#EECC6E] text-xl">
          {totalLeads} leads = ${totalPrice}
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-[#EECC6E] text-lg font-bold">
          <span className="text-[#EECC6E]">* </span>
          Adjust the amount of leads you receive per day
        </Label>
        <input
          type="range"
          min="1"
          max="100"
          value={leadsPerDay}
          onChange={(e) => onLeadsPerDayChange(parseInt(e.target.value))}
          className="w-full h-2 bg-[#EECC6E]/20 rounded-lg appearance-none cursor-pointer 
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#EECC6E]
            [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full 
            [&::-moz-range-thumb]:bg-[#EECC6E] [&::-moz-range-thumb]:border-0"
        />
        <div className="text-center text-[#EECC6E] text-lg">
          {leadsPerDay} leads per day = {deliveryDays} days
        </div>
      </div>
    </div>
  )
}

export default LeadsCalculator
