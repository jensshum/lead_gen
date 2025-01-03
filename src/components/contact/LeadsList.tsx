import React from 'react';
import type { LeadResult } from '../../types/demo';

interface Props {
  leads: LeadResult[];
}

export const LeadsList: React.FC<Props> = ({ leads }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-primary-dark">Selected Leads</h2>
    <div className="space-y-2">
      {leads.map((lead) => (
        <div
          key={lead.businessName}
          className="p-4 bg-white rounded-lg border border-gray-200"
        >
          <h3 className="font-semibold">{lead.businessName}</h3>
          <p className="text-sm text-gray-600">{lead.industry} • {lead.location}</p>
        </div>
      ))}
    </div>
  </div>
);