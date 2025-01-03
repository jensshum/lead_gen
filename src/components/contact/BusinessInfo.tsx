import React from 'react';

interface Props {
  businessInfo: {
    name: string;
    company: string;
  };
  onChange: (info: { name: string; company: string }) => void;
}

export const BusinessInfo: React.FC<Props> = ({ businessInfo, onChange }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-primary-dark">Your Business Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          value={businessInfo.name}
          onChange={(e) => onChange({ ...businessInfo, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="John Smith"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          value={businessInfo.company}
          onChange={(e) => onChange({ ...businessInfo, company: e.target.value })}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Web Design Pro"
        />
      </div>
    </div>
  </div>
);