import React from 'react';
import { Send } from 'lucide-react';

interface Props {
  method: string;
  disabled: boolean;
}

export const SendButton: React.FC<Props> = ({ method, disabled }) => (
  <button
    disabled={disabled}
    className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
      disabled
        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
        : 'bg-primary text-white hover:bg-primary-dark'
    }`}
  >
    <Send className="w-5 h-5" />
    {method === 'email' ? 'Send Emails' : `Send ${method} Messages`}
  </button>
);