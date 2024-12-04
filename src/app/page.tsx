"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LeadsPerDaySlider from '@/components/LeadsPerDaySlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-black/50 border-[#EECC6E]/20 shadow-2xl backdrop-blur-sm font-manrope">
        <CardHeader>
          <CardTitle className="text-[#EECC6E]">Lead Form</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Form content will go here */}
        </CardContent>
      </Card>
    </div>
  )
}
