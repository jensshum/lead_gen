import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactMethod } from '../components/contact/ContactMethod';
import { MessageTemplate } from '../components/contact/MessageTemplate';
import { BusinessInfo } from '../components/contact/BusinessInfo';
import { LeadsList } from '../components/contact/LeadsList';
import { SocialAccountLink } from '../components/contact/SocialAccountLink';
import { SendButton } from '../components/contact/SendButton';
import { Disclaimer } from '../components/demo/Disclaimer';
import { messageTemplates } from '../data/messageTemplates';
import type { LeadResult } from '../types/demo';

export const ContactLeads = () => {
  const location = useLocation();
  const leads = location.state?.leads as LeadResult[];
  const [selectedMethod, setSelectedMethod] = useState<'email' | 'instagram' | 'facebook'>('email');
  const [businessInfo, setBusinessInfo] = useState({ name: '', company: '' });
  const [messageTemplate, setMessageTemplate] = useState(messageTemplates[0].content);
  const [accountLinked, setAccountLinked] = useState(false);

  const handleTemplateChange = (template: string) => {
    const populatedTemplate = template
      .replace(/\{your_name\}/g, businessInfo.name)
      .replace(/\{your_company\}/g, businessInfo.company);
    setMessageTemplate(populatedTemplate);
  };

  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Disclaimer />
        <h1 className="text-3xl font-bold text-primary-dark mb-8">Contact Leads</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <LeadsList leads={leads} />
          </div>
          
          <div className="space-y-6">
            <ContactMethod 
              selected={selectedMethod} 
              onSelect={setSelectedMethod} 
            />

            <BusinessInfo
              businessInfo={businessInfo}
              onChange={setBusinessInfo}
            />
            
            <MessageTemplate 
              value={messageTemplate}
              businessInfo={businessInfo}
              onTemplateSelect={handleTemplateChange}
            />
            
            {selectedMethod !== 'email' && (
              <SocialAccountLink
                platform={selectedMethod}
                isLinked={accountLinked}
                onLink={() => setAccountLinked(true)}
              />
            )}
            
            <SendButton 
              method={selectedMethod}
              disabled={
                !messageTemplate || 
                !businessInfo.name || 
                !businessInfo.company || 
                (!accountLinked && selectedMethod !== 'email')
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};