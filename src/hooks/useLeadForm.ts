import { useState } from 'react';
import { validateForm, ValidationError } from '@/lib/validation';

interface FormState {
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

interface UseLeadFormReturn {
  formState: FormState;
  errors: ValidationError[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTargetingChange: (type: 'national' | 'state' | 'zipCode') => void;
  handleStateChange: (state: string) => void;
  handleCityChange: (city: string) => void;
  handleZipCodeChange: (index: number, value: string) => void;
  handleZipCodeAdd: () => void;
  handleZipCodeRemove: (index: number) => void;
  handleLeadsPerDayChange: (value: number) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
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

export const useLeadForm = (): UseLeadFormReturn => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const newSelectedStates = prev.selectedStates.includes(state)
        ? prev.selectedStates.filter(s => s !== state)
        : [...prev.selectedStates, state].slice(0, 5);
      
      return {
        ...prev,
        selectedStates: newSelectedStates,
        selectedCities: []
      };
    });
  };

  const handleCityChange = (city: string) => {
    setFormState(prev => {
      const newSelectedCities = prev.selectedCities.includes(city)
        ? prev.selectedCities.filter(c => c !== city)
        : [...prev.selectedCities, city].slice(0, 10);
      
      return {
        ...prev,
        selectedCities: newSelectedCities
      };
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
    setFormState(prev => ({
      ...prev,
      zipCodes: [...prev.zipCodes, '']
    }));
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
    const validationErrors = validateForm(formState);
    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      setIsSubmitting(true);
      try {
        // Add your API call here
        console.log('Form submitted:', formState);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
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
    handleSubmit,
    isSubmitting
  };
};
