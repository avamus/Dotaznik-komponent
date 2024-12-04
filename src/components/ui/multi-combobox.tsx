"use client"
import * as React from "react"
import { Check, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface MultiComboboxProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  maxItems?: number
}

export function MultiCombobox({
  options = [],
  selected = [],
  onChange,
  placeholder = "Select...",
  maxItems = Infinity
}: MultiComboboxProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchText, setSearchText] = React.useState("")

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchText.toLowerCase())
  )

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(item => item !== value))
    } else if (selected.length < maxItems) {
      onChange([...selected, value])
    }
    setSearchText("")
  }

  const handleRemove = (value: string) => {
    onChange(selected.filter(item => item !== value))
  }

  return (
    <div className="flex flex-col gap-2 relative">
      <div>
        <Button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="w-full justify-between text-left font-normal"
        >
          {selected.length === 0 ? placeholder : `${selected.length} selected`}
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border rounded-md shadow-lg z-50">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-2 border rounded-md bg-background"
            />
          </div>
          <ScrollArea className="h-64">
            <div className="p-2">
              {filteredOptions.length === 0 && (
                <div className="py-6 text-center text-sm">No results found.</div>
              )}
              {filteredOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "flex items-center w-full p-2 text-left rounded-md hover:bg-accent",
                    selected.includes(option) && "bg-accent"
                  )}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.includes(option) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
              <button
                className="ml-1 hover:bg-accent rounded-full p-0.5"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemove(item)
                }}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {item}</span>
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
