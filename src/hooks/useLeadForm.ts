import { useState } from 'react';
import { validateForm, ValidationError } from '@/lib/validation';

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

const initialFormState: FormState = {
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
};

export const useLeadForm = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error for this field if it exists
    setErrors(prev => prev.filter(error => error.field !== name));
  };

  const handleTargetingChange = (type: 'national' | 'state' | 'zipCode') => {
    setFormState(prev => ({
      ...prev,
      targetingType: prev.targetingType === type ? null : type,
      selectedStates: [],
      selectedCities: [],
      zipCodes: []
    }));
  };

  const handleStateChange = (state: string) => {
    setFormState(prev => {
      if (prev.selectedStates.includes(state)) {
        return {
          ...prev,
          selectedStates: prev.selectedStates.filter(s => s !== state),
          selectedCities: prev.selectedCities.filter(city => 
            !city.startsWith(`${state} City`)
          )
        };
      } else if (prev.selectedStates.length < 5) {
        return {
          ...prev,
          selectedStates: [...prev.selectedStates, state],
          selectedCities: []
        };
      }
      return prev;
    });
  };

  const handleCityChange = (city: string) => {
    setFormState(prev => {
      if (prev.selectedCities.includes(city)) {
        return {
          ...prev,
          selectedCities: prev.selectedCities.filter(c => c !== city)
        };
      } else if (prev.selectedCities.length < 10) {
        return {
          ...prev,
          selectedCities: [...prev.selectedCities, city]
        };
      }
      return prev;
    });
  };

  const handleZipCodeChange = (index: number, value: string) => {
    const zipCode = value.replace(/\D/g, '').slice(0, 5);
    setFormState(prev => {
      const newZipCodes = [...prev.zipCodes];
      newZipCodes[index] = zipCode;
      return { ...prev, zipCodes: newZipCodes };
    });
  };

  const handleZipCodeAdd = () => {
    if (formState.zipCodes.length < 50) {
      setFormState(prev => ({
        ...prev,
        zipCodes: [...prev.zipCodes, '']
      }));
    }
  };

  const handleZipCodeRemove = (index: number) => {
    setFormState(prev => ({
      ...prev,
      zipCodes: prev.zipCodes.filter((_, i) => i !== index)
    }));
  };

  const handleZipCodePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const zipCodes = pastedText
      .replace(/[^0-9\n,\s]/g, '')
      .split(/[\n,\s]+/)
      .filter(code => /^\d{5}$/.test(code))
      .slice(0, 50);
    
    setFormState(prev => ({ ...prev, zipCodes }));
  };

  const handleLeadsPerDayChange = (value: number) => {
    setFormState(prev => ({ ...prev, leadsPerDay: value }));
  };

  const resetForm = () => {
    setFormState(initialFormState);
    setErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formState);
    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/campaign', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        const data = await response.json();
        resetForm();
        setShowSuccessDialog(true);
      } catch (error) {
        console.error('Form submission error:', error);
        setErrors([{ 
          field: 'submit', 
          message: 'Failed to submit form. Please try again.' 
        }]);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formState,
    errors,
    isSubmitting,
    showSuccessDialog,
    setShowSuccessDialog,
    handleInputChange,
    handleTargetingChange,
    handleStateChange,
    handleCityChange,
    handleZipCodeChange,
    handleZipCodeAdd,
    handleZipCodeRemove,
    handleZipCodePaste,
    handleLeadsPerDayChange,
    handleSubmit,
    resetForm
  };
};
