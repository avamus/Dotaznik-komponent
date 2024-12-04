// src/app/api/campaign/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const campaign = await prisma.campaign.create({
      data: {
        userId: data.userId || 'default',
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        campaignName: data.campaignName,
        targetingType: data.targetingType,
        leadsPerDay: data.leadsPerDay,
        googleSheetUrl: data.googleSheetUrl,
        webhookUrl: data.webhookUrl,
        states: {
          create: data.selectedStates?.map((state: string) => ({
            name: state,
            cities: data.selectedCities || []
          })) || []
        },
        zipCodes: {
          create: data.zipCodes?.map((code: string) => ({
            code
          })) || []
        }
      },
      include: {
        states: true,
        zipCodes: true
      }
    })

    return NextResponse.json(campaign)
  } catch (error) {
    console.error('Campaign creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create campaign' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    const campaigns = await prisma.campaign.findMany({
      where: {
        userId: userId || undefined
      },
      include: {
        states: true,
        zipCodes: true,
        leads: true
      }
    })

    return NextResponse.json(campaigns)
  } catch (error) {
    console.error('Campaign fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch campaigns' },
      { status: 500 }
    )
  }
}
