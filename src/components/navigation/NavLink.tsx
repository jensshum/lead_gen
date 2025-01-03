import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
  >
    {children}
  </Link>
);