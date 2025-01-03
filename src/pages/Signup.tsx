import React, { useState } from 'react';
import { AuthCard } from '../components/auth/AuthCard';
import { AuthInput } from '../components/auth/AuthInput';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    // Split full name into first and last name
    const [firstName = '', lastName = ''] = name.split(' ');

    const formData = {
      firstName,
      lastName,
      company: 'Waitlist Signup',
      email,
      source: 'Waitlist Form',
      services: 'Interested in Platform'
    };

    try {
      const response = await fetch('https://jksxi9057b.execute-api.us-west-2.amazonaws.com/dev/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center px-4">
      <AuthCard title="Sign Up">
        <p className="text-gray-600 text-center mb-6">
          Join the waitlist
        </p>
        
        {status === 'success' && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            Thanks for signing up! We'll be in touch soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            Sorry, something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <AuthInput
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
          <AuthInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Get notified'}
          </button>
        </form>
      </AuthCard>
    </div>
  );
};