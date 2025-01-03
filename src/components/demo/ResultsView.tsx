import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LeadResult } from '../../types/demo';

interface Props {
  results: LeadResult[];
}

export const ResultsView: React.FC<Props> = ({ results }) => {
  const navigate = useNavigate();
  
  const downloadCsv = () => {
    const headers = ['Business Name', 'Industry', 'Location', 'Employee Count', 'Revenue'];
    const csvContent = [
      headers.join(','),
      ...results.map(result => 
        Object.values(result).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primary-dark">Your Potential Leads</h2>
        <div className="flex gap-4">
          <button
            onClick={downloadCsv}
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-primary text-primary rounded-lg hover:bg-background-light transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CSV
          </button>
          <button
            onClick={() => navigate('/contact-leads', { state: { leads: results } })}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Leads Now
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-background-light">
              <th className="p-4 text-left">Business Name</th>
              <th className="p-4 text-left">Industry</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Employee Count</th>
              <th className="p-4 text-left">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <motion.tr
                key={result.businessName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-background-light"
              >
                <td className="p-4">{result.businessName}</td>
                <td className="p-4">{result.industry}</td>
                <td className="p-4">{result.location}</td>
                <td className="p-4">{result.employeeCount}</td>
                <td className="p-4">{result.revenue}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};