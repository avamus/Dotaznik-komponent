export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  campaignName: string;
  targetingType: 'national' | 'state' | 'zipCode' | null;
  selectedStates: string[];
  selectedCities: string[];
  zipCodes: string[];
  leadsPerDay: number;
  googleSheetUrl: string;
  webhookUrl: string;
}

export const submitLeadForm = async (formData: FormState) => {
  try {
    const response = await fetch('https://hook.us1.make.com/m8e32fignfe63ecom7ig5rnk6qjfwwsf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

export const testWebhook = async (webhookUrl: string) => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: true }),
    });

    if (!response.ok) {
      throw new Error('Failed to test webhook');
    }

    return { success: true };
  } catch (error) {
    console.error('Webhook test error:', error);
    throw error;
  }
};
