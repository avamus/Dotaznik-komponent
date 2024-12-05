import { useState } from 'react';
import { submitLeadForm } from '@/lib/api';

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
  totalLeads: number;
  leadsPerDay: number;
  googleSheetUrl: string;
  webhookUrl: string;
}

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
  totalLeads: 0,
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

  const handleTotalLeadsChange = (value: number) => {
    setFormState(prev => ({ ...prev, totalLeads: Math.max(0, value) }));
  };

  const handleLeadsPerDayChange = (value: number) => {
    setFormState(prev => ({ ...prev, leadsPerDay: Math.max(1, Math.min(100, value)) }));
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

  const validateForm = (): ValidationError[] => {
    const errors: ValidationError[] = [];
    if (!formState.firstName) errors.push({ field: 'firstName', message: 'First name is required' });
    if (!formState.lastName) errors.push({ field: 'lastName', message: 'Last name is required' });
    if (!formState.email) errors.push({ field: 'email', message: 'Email is required' });
    if (!formState.phoneNumber) errors.push({ field: 'phoneNumber', message: 'Phone number is required' });
    if (!formState.campaignName) errors.push({ field: 'campaignName', message: 'Campaign name is required' });
    if (!formState.targetingType) errors.push({ field: 'targetingType', message: 'Please select a targeting type' });
    if (formState.totalLeads <= 0) errors.push({ field: 'totalLeads', message: 'Please enter the number of leads you want' });
    if (formState.leadsPerDay <= 0) errors.push({ field: 'leadsPerDay', message: 'Please set leads per day' });
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const totalPrice = formState.totalLeads * 5; // $5 per lead
      const deliveryDays = Math.ceil(formState.totalLeads / formState.leadsPerDay);
      
      await submitLeadForm({
        ...formState,
        totalPrice,
        deliveryDays
      });
      
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
    handleTotalLeadsChange,
    handleLeadsPerDayChange,
    handleTargetingChange,
    handleStateChange,
    handleCityChange,
    handleZipCodeChange,
    handleZipCodeAdd,
    handleZipCodeRemove,
    handleSubmit
  };
};
