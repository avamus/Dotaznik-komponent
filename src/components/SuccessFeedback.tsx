import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface SuccessFeedbackProps {
  open: boolean;
  onClose: () => void;
}

const SuccessFeedback: React.FC<SuccessFeedbackProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border-[#EECC6E]/20">
        <div className="flex flex-col items-center gap-4 p-6">
          <div className="rounded-full bg-[#EECC6E]/10 p-3">
            <CheckCircle2 className="h-12 w-12 text-[#EECC6E]" />
          </div>
          <h2 className="text-2xl font-bold text-[#EECC6E]">Success!</h2>
          <p className="text-center text-gray-300">
            Your lead generation campaign has been successfully set up. You'll start receiving leads according to your specifications.
          </p>
          <div className="mt-4 space-y-2">
            <Button
              onClick={onClose}
              className="w-full bg-[#EECC6E] text-black hover:bg-[#EECC6E]/90"
            >
              Got it
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SuccessFeedback
