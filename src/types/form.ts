export type TargetingType = 'national' | 'state' | 'zipCode'

export interface FormState {
  targetingType: TargetingType | null
  selectedStates: string[]
  selectedCities: string[]
  zipCodes: string[]
  leadsPerDay: number
}

export interface LocationFormProps {
  onSubmit: (data: FormState) => void
}

