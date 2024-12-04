import React from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: React.ReactNode
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading = false,
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <Button
      disabled={disabled || loading}
      className={cn(
        "relative",
        loading && "text-transparent",
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-5 w-5 animate-spin text-current" />
        </div>
      )}
      {children}
    </Button>
  )
}

export default LoadingButton
