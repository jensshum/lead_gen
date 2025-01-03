import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import { AuthButtons } from './AuthButtons';
import { Logo } from '../Logo';

export const Navbar = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/demo">Demo</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
        <div className="hidden md:block">
          <AuthButtons />
        </div>
      </div>
    </div>
  </nav>
);