// src/components/ui/error-message.tsx
import React from 'react'
import { cn } from "@/lib/utils"
import { AlertCircle } from 'lucide-react'

interface ErrorMessageProps {
  message?: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className }) => {
  if (!message) return null;

  return (
    <div className={cn("flex items-center gap-2 text-red-500 text-sm mt-1", className)}>
      <AlertCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
