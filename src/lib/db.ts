import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const createCampaign = async (data: any) => {
  return prisma.campaign.create({
    data: {
      userId: data.userId,
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
        create: data.selectedStates.map((state: string) => ({
          name: state,
          cities: data.selectedCities
        }))
      },
      zipCodes: {
        create: data.zipCodes.map((code: string) => ({
          code
        }))
      }
    },
    include: {
      states: true,
      zipCodes: true
    }
  })
}

export const getCampaign = async (id: string) => {
  return prisma.campaign.findUnique({
    where: { id },
    include: {
      states: true,
      zipCodes: true,
      leads: true
    }
  })
}
