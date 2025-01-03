import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Disclaimer = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-center"
    >
      <p className="text-gray-700 mb-4">
        This product is not yet fully built out. This is just a demo. Join the waitlist to be notified of when the product is ready.
      </p>
      <button
        onClick={() => navigate('/signup')}
        className="text-primary hover:text-primary-dark font-semibold transition-colors"
      >
        Notify Me →
      </button>
    </motion.div>
  );
};