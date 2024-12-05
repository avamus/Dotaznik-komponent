// src/app/page.tsx
"use client"

import React from 'react'
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
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLeadForm } from '@/hooks/useLeadForm'
import ErrorMessage from '@/components/ui/error-message'
import LeadsCalculator from '@/components/LeadsCalculator'
import Image from "next/image"

const US_STATES: string[] = [
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
];

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
    handleTotalLeadsChange,
    handleSubmit,
    isSubmitting
  } = useLeadForm();

  const getError = (field: string) => errors.find(error => error.field === field)?.message;

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <form onSubmit={handleSubmit}>
        <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-black/50 border-[#EECC6E]/20 shadow-2xl backdrop-blur-sm font-manrope">
          <CardHeader>
            <CardTitle className="text-[#EECC6E]">Lead Generation Form</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
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

              <div>
                <Label htmlFor="email">
                  <span className="text-[#EECC6E]">* </span>Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="john@example.com"
                />
                <ErrorMessage message={getError('email')} />
              </div>

              <div>
                <Label htmlFor="phoneNumber">
                  <span className="text-[#EECC6E]">* </span>Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formState.phoneNumber}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="(555) 123-4567"
                />
                <ErrorMessage message={getError('phoneNumber')} />
              </div>
            </div>

            <div>
              <Label htmlFor="campaignName">
                <span className="text-[#EECC6E]">* </span>Campaign Name
              </Label>
              <Input
                id="campaignName"
                name="campaignName"
                value={formState.campaignName}
                onChange={handleInputChange}
                className="h-12"
                placeholder="My Campaign"
              />
              <ErrorMessage message={getError('campaignName')} />
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-bold">
                <span className="text-[#EECC6E]">* </span>Targeting Type
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => handleTargetingChange('national')}
                  className={`p-6 border-2 rounded-xl transition-colors ${
                    formState.targetingType === 'national'
                      ? 'border-[#EECC6E] bg-[#EECC6E]/10'
                      : 'border-[#EECC6E]/20 hover:border-[#EECC6E]/50'
                  }`}
                >
                  <Map className="h-8 w-8 text-[#EECC6E] mb-4" />
                  <h3 className="text-[#EECC6E] text-lg font-bold mb-2">National</h3>
                  <p className="text-sm text-[#EECC6E]/70">Target entire United States</p>
                </button>

                <button
                  type="button"
                  onClick={() => handleTargetingChange('state')}
                  className={`p-6 border-2 rounded-xl transition-colors ${
                    formState.targetingType === 'state'
                      ? 'border-[#EECC6E] bg-[#EECC6E]/10'
                      : 'border-[#EECC6E]/20 hover:border-[#EECC6E]/50'
                  }`}
                >
                  <Building2 className="h-8 w-8 text-[#EECC6E] mb-4" />
                  <h3 className="text-[#EECC6E] text-lg font-bold mb-2">States</h3>
                  <p className="text-sm text-[#EECC6E]/70">Select specific states</p>
                </button>

                <button
                  type="button"
                  onClick={() => handleTargetingChange('zipCode')}
                  className={`p-6 border-2 rounded-xl transition-colors ${
                    formState.targetingType === 'zipCode'
                      ? 'border-[#EECC6E] bg-[#EECC6E]/10'
                      : 'border-[#EECC6E]/20 hover:border-[#EECC6E]/50'
                  }`}
                >
                  <MapPin className="h-8 w-8 text-[#EECC6E] mb-4" />
                  <h3 className="text-[#EECC6E] text-lg font-bold mb-2">ZIP Codes</h3>
                  <p className="text-sm text-[#EECC6E]/70">Target specific ZIP codes</p>
                </button>
              </div>
            </div>

            {formState.targetingType === 'state' && (
              <div className="space-y-4">
                <Label>
                  <span className="text-[#EECC6E]">* </span>Select States
                </Label>
                <Select onValueChange={handleStateChange}>
                  <SelectTrigger className="w-full h-12 bg-black/50 border-[#EECC6E]/20">
                    <SelectValue placeholder="Select states (max 5)" />
                  </SelectTrigger>
                  <SelectContent>
                    <ScrollArea className="h-[200px]">
                      {US_STATES.map(state => (
                        <SelectItem
                          key={state}
                          value={state}
                          disabled={formState.selectedStates.length >= 5 && !formState.selectedStates.includes(state)}
                        >
                          {state}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-4">
  <Label className="text-lg font-bold">
    <span className="text-[#EECC6E]">* </span>Leads per Day
  </Label>
  <div className="bg-black/50 border-2 border-[#EECC6E]/20 rounded-xl p-6">
    <LeadsCalculator
  totalLeads={formState.totalLeads}
  leadsPerDay={formState.leadsPerDay}
  onTotalLeadsChange={handleTotalLeadsChange}
  onLeadsPerDayChange={handleLeadsPerDayChange}
/>
  </div>
</div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-[#EECC6E] to-[#F7DFA4] text-black font-bold"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Form'}
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
