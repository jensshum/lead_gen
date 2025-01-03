import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      <button 
        onClick={() => navigate('/signup')}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
      >
        Sign up
      </button>
    </div>
  );
};