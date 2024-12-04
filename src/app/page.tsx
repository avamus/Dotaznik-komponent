"use client"

import "@/styles/globals.css";
import React, { useState, useMemo } from "react"
import { Map, Building2, MapPin, X, Check, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import LeadsPerDaySlider from '@/components/LeadsPerDaySlider'

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

const generateCities = (prefix: string) => {
  return Array.from({ length: 200 }, (_, i) => `${prefix} City ${i + 1}`)
}

const MOCK_CITIES: { [key: string]: string[] } = {}
US_STATES.forEach(state => {
  MOCK_CITIES[state] = generateCities(state)
})

interface FormState {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  campaignName: string
  targetingType: 'national' | 'state' | 'zipCode' | null
  selectedStates: string[]
  selectedCities: string[]
  zipCodes: string[]
  leadsPerDay: number
  googleSheetUrl: string
  webhookUrl: string
}

export default function Home() {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    campaignName: '',
    targetingType: null,
    selectedStates: [],
    selectedCities: [],
    zipCodes: [],
    leadsPerDay: 10,
    googleSheetUrl: '',
    webhookUrl: ''
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [testDataText, setTestDataText] = useState("Send test data");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleTargetingChange = (type: 'national' | 'state' | 'zipCode') => {
    setFormState(prev => ({
      ...prev,
      targetingType: prev.targetingType === type ? null : type,
      selectedStates: [],
      selectedCities: [],
      zipCodes: []
    }))
  }

  const handleStateChange = (state: string) => {
    setFormState(prev => {
      if (prev.selectedStates.includes(state)) {
        return {
          ...prev,
          selectedStates: prev.selectedStates.filter(s => s !== state),
          selectedCities: prev.selectedCities.filter(city => 
            !MOCK_CITIES[state].includes(city)
          )
        }
      } else if (prev.selectedStates.length < 5) {
        return {
          ...prev,
          selectedStates: [...prev.selectedStates, state],
          selectedCities: []
        }
      }
      return prev
    })
  }

  const handleCityChange = (city: string) => {
    setFormState(prev => {
      if (prev.selectedCities.includes(city)) {
        return {
          ...prev,
          selectedCities: prev.selectedCities.filter(c => c !== city)
        }
      } else if (prev.selectedCities.length < 10) {
        return {
          ...prev,
          selectedCities: [...prev.selectedCities, city]
        }
      }
      return prev
    })
  }

  const handleLeadsPerDayChange = (value: number) => {
    setFormState(prev => ({ ...prev, leadsPerDay: value }))
  }

  const availableCities = useMemo(() => 
    formState.selectedStates.length === 1
      ? MOCK_CITIES[formState.selectedStates[0]] || []
      : [],
    [formState.selectedStates]
  )

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(formState)
      }}>
        <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-black/50 border-[#EECC6E]/20 shadow-2xl backdrop-blur-sm font-manrope">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="firstName" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold mb-4">
                <span className="text-[#EECC6E]">* </span>First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleInputChange}
                className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white"
                placeholder="John"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-[#EECC6E] text-base sm:text-lg font-manrope font-semibold mb-4">
                <span className="text-[#EECC6E]">* </span>Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formState.lastName}
                onChange={handleInputChange}
                className="h-10 sm:h-12 bg-black/50 border-[#EECC6E]/20 text-white"
                placeholder="Smith"
              />
            </div>

            {/* Add the rest of your form inputs following the same pattern */}
            
            <Button 
              type="submit" 
              className="relative w-full h-14 overflow-hidden text-black font-manrope font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <div className="absolute inset
