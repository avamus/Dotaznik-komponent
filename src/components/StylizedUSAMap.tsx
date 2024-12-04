import React from 'react'

interface StylizedUSAMapProps {
  className?: string;
}

const StylizedUSAMap: React.FC<StylizedUSAMapProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 959 593" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M759 469l4 1-1 2h-2l-3 1v3h-2l-1-3h2l1-3 2-1zm-481-20l1 1 2-1h1v2l-1 1h-4l-1-2 2-1zm-30-11l3 2v1l-2 2h-4v-2l1-2 2-1zm-50-16v3l-2 2h-3l-2-2 1-2 2-1h4zm-92-256l1 2-2 2-2-2 1-2h2zm27-103l-2 1-1-1h3zm11 4l2-2 2 1v2h-2l-2-1"
      />
      {/* Note: You can add more path elements for a more detailed map */}
    </svg>
  )
}

export default StylizedUSAMap
