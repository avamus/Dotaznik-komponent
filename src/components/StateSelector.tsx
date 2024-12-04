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

interface StateSelectorProps {
  selectedStates: string[]
  onStateChange: (state: string) => void
  onStateRemove: (state: string) => void
  availableStates: string[]
  maxStates?: number
  className?: string
}

const StateSelector: React.FC<StateSelectorProps> = ({
  selectedStates,
  onStateChange,
  onStateRemove,
  availableStates,
  maxStates = 5,
  className
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      {selectedStates.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedStates.map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => onStateRemove(state)}
              className="bg-[#EECC6E] text-black hover:bg-[#EECC6E]/90 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 transition-all duration-200"
            >
              {state}
              <X className="h-3 w-3" />
            </button>
          ))}
        </div>
      )}
      
      <Select onValueChange={onStateChange}>
        <SelectTrigger className="w-full bg-[#1F1F1F] border-[#EECC6E]/20 text-white">
          <div className="flex justify-between items-center w-full">
            <SelectValue placeholder="Select State(s)" />
            <span className="text-[#EECC6E]/70 text-sm">
              {selectedStates.length}/{maxStates}
            </span>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-[#1F1F1F] border-[#EECC6E]/20">
          <ScrollArea className="h-[200px]">
            {availableStates.map((state) => (
              <SelectItem
                key={state}
                value={state}
                disabled={selectedStates.length >= maxStates && !selectedStates.includes(state)}
                className={cn(
                  "text-white transition-colors duration-200 rounded-lg mx-1",
                  selectedStates.includes(state)
                    ? "bg-[#EECC6E] text-black"
                    : "hover:bg-[#EECC6E]/10"
                )}
              >
                {state}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  )
}

export default StateSelector
