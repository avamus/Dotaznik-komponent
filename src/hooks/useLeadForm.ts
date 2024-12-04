import { useState } from 'react';
import { FormState, submitLeadForm } from '@/lib/api';

interface ValidationError {
  field: string;
  message: string;
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
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
          selectedCities: []
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

  const handleLeadsPerDayChange = (value: number) => {
    setFormState(prev => ({ ...prev, leadsPerDay: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitLeadForm(formState);
      setFormState(initialFormState);
      // You might want to add some success feedback here
    } catch (error) {
      setErrors([{ field: 'submit', message: 'Failed to submit form' }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formState,
    errors,
    isSubmitting,
    handleInputChange,
    handleTargetingChange,
    handleStateChange,
    handleCityChange,
    handleZipCodeChange,
    handleZipCodeAdd,
    handleZipCodeRemove,
    handleLeadsPerDayChange,
    handleSubmit
  };
};
