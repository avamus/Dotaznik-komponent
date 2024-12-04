import React from 'react'
import { Input } from "@/components/ui/input"
import { MinusCircle, PlusCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ZipCodeInputProps {
  zipCodes: string[]
  onChange: (index: number, value: string) => void
  onAdd: () => void
  onRemove: (index: number) => void
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void
  maxZipCodes?: number
  className?: string
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = ({
  zipCodes,
  onChange,
  onAdd,
  onRemove,
  onPaste,
  maxZipCodes = 50,
  className
}) => {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4", className)}>
      {zipCodes.map((zipCode, index) => (
        <div key={index} className="relative">
          <Input
            type="text"
            value={zipCode}
            onChange={(e) => onChange(index, e.target.value)}
            onPaste={onPaste}
            className="bg-black/50 border-[#EECC6E]/20 text-white text-lg h-12 text-center font-manrope"
            maxLength={5}
            placeholder="00000"
          />
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#EECC6E] hover:text-[#EECC6E]/80"
          >
            <MinusCircle className="h-6 w-6" />
          </button>
        </div>
      ))}
      {zipCodes.length < maxZipCodes && (
        <button
          type="button"
          onClick={onAdd}
          className="bg-black/50 border-2 border-dashed border-[#EECC6E]/20 text-[#EECC6E] h-12 rounded-md flex items-center justify-center hover:bg-[#EECC6E]/10 transition-colors"
        >
          <PlusCircle className="h-8 w-8" />
        </button>
      )}
    </div>
  )
}

export default ZipCodeInput
