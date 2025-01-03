import React from 'react';
import { Mail, Instagram, Facebook } from 'lucide-react';

interface Props {
  selected: string;
  onSelect: (method: 'email' | 'instagram' | 'facebook') => void;
}

export const ContactMethod: React.FC<Props> = ({ selected, onSelect }) => {
  const methods = [
    { id: 'email', icon: Mail, label: 'Email' },
    { id: 'instagram', icon: Instagram, label: 'Instagram' },
    { id: 'facebook', icon: Facebook, label: 'Facebook' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-primary-dark">Contact Method</h2>
      <div className="flex gap-4">
        {methods.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onSelect(id as 'email' | 'instagram' | 'facebook')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
              selected === id
                ? 'border-primary bg-primary text-white'
                : 'border-gray-200 hover:border-primary'
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};