import { FormState } from '@/hooks/useLeadForm'

export const submitLeadForm = async (formData: FormState) => {
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    return await response.json()
  } catch (error) {
    console.error('Form submission error:', error)
    throw error
  }
}

export const testWebhook = async (webhookUrl: string) => {
  try {
    const response = await fetch('/api/test-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ webhookUrl }),
    })

    if (!response.ok) {
      throw new Error('Failed to test webhook')
    }

    return await response.json()
  } catch (error) {
    console.error('Webhook test error:', error)
    throw error
  }
}
