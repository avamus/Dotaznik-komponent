import React from 'react'
import { Label } from "@/components/ui/label"
import { Sparkles } from 'lucide-react'
import { cn } from "@/lib/utils"

interface LeadsPerDaySliderProps {
  value: number
  onChange: (value: number) => void
  textSize?: 'sm' | 'base' | 'lg' | 'xl'
}

const LeadsPerDaySlider: React.FC<LeadsPerDaySliderProps> = ({
  value,
  onChange,
  textSize = "base"
}) => {
  return (
    <div className="space-y-2">
      <Label className={cn(
        "text-[#EECC6E] font-manrope font-bold tracking-tight mb-3 flex items-center gap-2",
        {
          'text-sm': textSize === 'sm',
          'text-base': textSize === 'base',
          'text-lg': textSize === 'lg',
          'text-xl': textSize === 'xl',
        }
      )}>
        <span className="text-[#EECC6E]">* </span>
        Leads per day
        <Sparkles className="h-4 w-4 text-[#EECC6E]" />
      </Label>
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-[#EECC6E]/20 rounded-lg appearance-none cursor-pointer 
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-[#EECC6E] 
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-[#EECC6E] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 
          [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
      />
      <div className="flex justify-between text-xs text-[#EECC6E]/70">
        <span>1</span>
        <span>{value} leads/day</span>
        <span>100</span>
      </div>
    </div>
  )
}

export default LeadsPerDaySlider
