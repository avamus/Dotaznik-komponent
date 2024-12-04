export interface ValidationError {
  field: string;
  message: string;
}

export const validateForm = (formData: any): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Required fields
  if (!formData.firstName.trim()) {
    errors.push({ field: 'firstName', message: 'First name is required' });
  }

  if (!formData.lastName.trim()) {
    errors.push({ field: 'lastName', message: 'Last name is required' });
  }

  if (!formData.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  if (!formData.phoneNumber.trim()) {
    errors.push({ field: 'phoneNumber', message: 'Phone number is required' });
  } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phoneNumber)) {
    errors.push({ field: 'phoneNumber', message: 'Invalid phone number format' });
  }

  if (!formData.campaignName.trim()) {
    errors.push({ field: 'campaignName', message: 'Campaign name is required' });
  }

  // Targeting validation
  if (!formData.targetingType) {
    errors.push({ field: 'targetingType', message: 'Please select a targeting type' });
  } else {
    switch (formData.targetingType) {
      case 'state':
        if (formData.selectedStates.length === 0) {
          errors.push({ field: 'selectedStates', message: 'Please select at least one state' });
        }
        break;
      case 'zipCode':
        if (formData.zipCodes.length === 0) {
          errors.push({ field: 'zipCodes', message: 'Please add at least one ZIP code' });
        } else {
          const invalidZips = formData.zipCodes.filter((zip: string) => !/^\d{5}$/.test(zip));
          if (invalidZips.length > 0) {
            errors.push({ field: 'zipCodes', message: 'All ZIP codes must be 5 digits' });
          }
        }
        break;
    }
  }

  // Google Sheet URL validation
  if (!formData.googleSheetUrl.trim()) {
    errors.push({ field: 'googleSheetUrl', message: 'Google Sheet URL is required' });
  } else if (!formData.googleSheetUrl.includes('docs.google.com/spreadsheets')) {
    errors.push({ field: 'googleSheetUrl', message: 'Invalid Google Sheet URL' });
  }

  return errors;
};
