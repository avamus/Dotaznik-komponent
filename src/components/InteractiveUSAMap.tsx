import React from 'react'
import { cn } from '@/lib/utils'

interface InteractiveUSAMapProps {
  selectedStates: string[]
  onStateClick: (state: string) => void
  className?: string
}

const InteractiveUSAMap: React.FC<InteractiveUSAMapProps> = ({
  selectedStates,
  onStateClick,
  className
}) => {
  return (
    <div className={cn("relative w-full aspect-[1.618/1]", className)}>
      <svg 
        viewBox="0 0 959 593"
        className="w-full h-full"
      >
        {/* Example state - You'll need to add paths for all states */}
        <path
          id="california"
          d="M144.7 382.3l3.4-0.7 1.5-1 0.8-2 2.5-0.3 1.6-1.6 0.8-2.2 1.5-1 0.7-2.2-0.4-3.2 1.6-1.6 2.4 0.4 1.6-0.7 1.2-1.8 1.2-0.7 2-2.8 2.8-0.2 1.6-1.6 0.8-2.2 2.4-0.4 0.4-1 1.6-0.7 2.4 0.4 2.8-0.2 3.6 0.6 2.8-0.2 4 0.8 3.6 0.6 4 0.8 3.2 1.2 4.8 1.4 4 0.8 4.4 1.8 4.8 1.4 4.4 1.8 4.8 1.4 4.4 1.8 4.8 1.4 4.4 1.8 4.8 1.4 4.4 1.8z"
          className={cn(
            "cursor-pointer transition-colors duration-200",
            selectedStates.includes('California')
              ? "fill-[#EECC6E] stroke-white"
              : "fill-[#EECC6E]/20 stroke-[#EECC6E]/20 hover:fill-[#EECC6E]/40"
          )}
          onClick={() => onStateClick('California')}
        />
        {/* Add more state paths here */}
      </svg>
    </div>
  )
}

export default InteractiveUSAMap
