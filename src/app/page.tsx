"use client"

import React from 'react'
import { Map, Building2, MapPin, X, Check, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLeadForm } from '@/hooks/useLeadForm'
import ErrorMessage from '@/components/ui/error-message'
import LoadingButton from '@/components/ui/loading-button'
import StateSelector from '@/components/StateSelector'
import CitySelector from '@/components/CitySelector'
import ZipCodeInput from '@/components/ZipCodeInput'
import LeadsPerDaySlider from '@/components/LeadsPerDaySlider'
import Image from "next/image"

const US_STATES = [/* ...your states array... */]

export default function Home() {
  const {
    formState,
    errors,
    handleInputChange,
    handleTargetingChange,
    handleStateChange,
    handleCityChange,
    handleZipCodeChange,
    handleZipCodeAdd,
    handleZipCodeRemove,
    handleLeadsPerDayChange,
    handleSubmit,
    isSubmitting
  } = useLeadForm();

  const getError = (field: string) => 
    errors.find(error => error.field === field)?.message;

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <form onSubmit={handleSubmit}>
        <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-black/50 border-[#EECC6E]/20 shadow-2xl backdrop-blur-sm font-manrope">
          <CardHeader>
            <CardTitle className="text-[#EECC6E]">Lead Generation Form</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">
                  <span className="text-[#EECC6E]">* </span>First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="John"
                />
                <ErrorMessage message={getError('firstName')} />
              </div>
              
              <div>
                <Label htmlFor="lastName">
                  <span className="text-[#EECC6E]">* </span>Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="Smith"
                />
                <ErrorMessage message={getError('lastName')} />
              </div>
              
              {/* Add more form fields following the same pattern */}
            </div>

            {/* Targeting Section */}
            <div className="space-y-4">
              <Label className="text-xl font-bold">
                <span className="text-[#EECC6E]">* </span>Targeting Options
              </Label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Add targeting buttons */}
              </div>

              {formState.targetingType === 'state' && (
                <StateSelector
                  selectedStates={formState.selectedStates}
                  onStateChange={handleStateChange}
                  onStateRemove={handleStateChange}
                  availableStates={US_STATES}
                />
              )}

              {formState.targetingType === 'zipCode' && (
                <ZipCodeInput
                  zipCodes={formState.zipCodes}
                  onChange={handleZipCodeChange}
                  onAdd={handleZipCodeAdd}
                  onRemove={handleZipCodeRemove}
                  onPaste={() => {}} // Add paste handler
                />
              )}
            </div>

            {/* Leads Per Day Slider */}
            <LeadsPerDaySlider
              value={formState.leadsPerDay}
              onChange={handleLeadsPerDayChange}
            />

            {/* Submit Button */}
            <LoadingButton
              type="submit"
              loading={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-[#EECC6E] to-[#F7DFA4]"
            >
              Order Now
            </LoadingButton>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
