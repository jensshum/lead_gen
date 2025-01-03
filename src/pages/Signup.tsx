import React, { useState } from 'react';
import { AuthCard } from '../components/auth/AuthCard';
import { AuthInput } from '../components/auth/AuthInput';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup logic here
    console.log('Waitlist Signup:', { name, email });
  };

  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center px-4">
      <AuthCard title="Sign Up">
        <p className="text-gray-600 text-center mb-6">
          Join the waitlist
        </p>
        <form onSubmit={handleSubmit}>
          <AuthInput
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <AuthInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors mt-6"
          >
            Get notified
          </button>
        </form>
      </AuthCard>
    </div>
  );
};