import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface Props {
  onSelect: (region: string) => void;
}

export const RegionSelector: React.FC<Props> = ({ onSelect }) => {
  const [region, setRegion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (region.trim()) {
      onSelect(region);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-primary-dark text-center">
        Select Your Target Region
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Enter any U.S. location (city, state, or region) where you'd like to find leads
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="e.g., San Francisco, California, Northeast"
            className="w-full px-4 py-3 pl-12 border-2 border-background-light rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <button
          type="submit"
          disabled={!region.trim()}
          className={`w-full mt-4 py-3 rounded-lg font-medium transition-colors ${
            region.trim()
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Find Leads in This Region
        </button>
      </form>
    </motion.div>
  );
};