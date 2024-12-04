import React from 'react'
import { X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from '@/lib/utils'

interface CitySelectorProps {
  selectedCities: string[]
  onCityChange: (city: string) => void
  onCityRemove: (city: string) => void
  availableCities: string[]
  maxCities?: number
  disabled?: boolean
  className?: string
}

const CitySelector: React.FC<CitySelectorProps> = ({
  selectedCities,
  onCityChange,
  onCityRemove,
  availableCities,
  maxCities = 10,
  disabled = false,
  className
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      {selectedCities.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => onCityRemove(city)}
              className="bg-[#EECC6E] text-black hover:bg-[#EECC6E]/90 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 transition-all duration-200"
            >
              {city}
              <X className="h-3 w-3" />
            </button>
          ))}
        </div>
      )}
      
      <Select onValueChange={onCityChange} disabled={disabled}>
        <SelectTrigger className="w-full bg-[#1F1F1F] border-[#EECC6E]/20 text-white h-12">
          <div className="flex justify-between items-center w-full">
            <SelectValue placeholder={disabled ? "Select a state first" : "Select cities"} />
            <span className="text-[#EECC6E]/70 text-sm">
              {selectedCities.length}/{maxCities}
            </span>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-[#1F1F1F] border-[#EECC6E]/20">
          <ScrollArea className="h-[200px]">
            {availableCities.map((city) => (
              <SelectItem
                key={city}
                value={city}
                disabled={selectedCities.length >= maxCities && !selectedCities.includes(city)}
                className={cn(
                  "text-white transition-colors duration-200 rounded-lg mx-1",
                  selectedCities.includes(city)
                    ? "bg-[#EECC6E] text-black"
                    : "hover:bg-[#EECC6E]/10"
                )}
              >
                {city}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  )
}

export default CitySelector
