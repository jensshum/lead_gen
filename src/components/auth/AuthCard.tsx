import React from 'react';
import { motion } from 'framer-motion';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
  >
    <h2 className="text-2xl font-bold text-primary-dark mb-6 text-center">{title}</h2>
    {children}
  </motion.div>
);