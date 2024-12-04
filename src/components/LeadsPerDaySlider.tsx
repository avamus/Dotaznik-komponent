// src/components/LeadsPerDaySlider.tsx
import React from 'react'
import { Label } from "@/components/ui/label"
import { Sparkles } from 'lucide-react'

interface LeadsPerDaySliderProps {
  value: number
  onChange: (value: number) => void
  textSize?: string
}

const LeadsPerDaySlider: React.FC<LeadsPerDaySliderProps> = ({
  value,
  onChange,
  textSize = "base"
}) => {
  // Calculate price ($5 per lead)
  const price = value * 5;

  return (
    <div className="space-y-2">
      <Label className={`text-[#EECC6E] text-${textSize} font-manrope font-bold tracking-tight mb-3 flex items-center gap-2`}>
        <span className="text-[#EECC6E]">* </span>
        How many leads do you want to receive?
        <Sparkles className="h-4 w-4 text-[#EECC6E]" />
      </Label>
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-[#EECC6E]/20 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-[#EECC6E]/70">
        <span>1</span>
        <span>{value} leads/day = ${price}</span>
        <span>100</span>
      </div>
      <p className="text-xs text-[#EECC6E]/70 text-center">
        Price: $5 per lead
      </p>
    </div>
  )
}

export default LeadsPerDaySlider
