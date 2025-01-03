import React from 'react';
import { Shuffle } from 'lucide-react';
import { messageTemplates } from '../../data/messageTemplates';

interface Props {
  value: string;
  businessInfo: {
    name: string;
    company: string;
  };
  onTemplateSelect: (template: string) => void;
}

export const MessageTemplate: React.FC<Props> = ({ 
  value, 
  businessInfo,
  onTemplateSelect
}) => {
  const shuffleTemplate = () => {
    const randomIndex = Math.floor(Math.random() * messageTemplates.length);
    const template = messageTemplates[randomIndex].content;
    const populatedTemplate = template
      .replace(/\{your_name\}/g, businessInfo.name)
      .replace(/\{your_company\}/g, businessInfo.company);
    onTemplateSelect(populatedTemplate);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-primary-dark">Message Template</h2>
        <button
          onClick={shuffleTemplate}
          className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-primary text-primary rounded-lg hover:bg-background-light transition-colors"
        >
          <Shuffle className="w-4 h-4" />
          Shuffle Template
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onTemplateSelect(e.target.value)}
        className="w-full h-64 p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
      />
    </div>
  );
};