import React from 'react';
import { Hero } from '../components/Hero';
import { Challenges } from '../components/sections/Challenges';
import { Solution } from '../components/sections/Solution';
import { Features } from '../components/Features';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Challenges />
      <Solution />
      <Features />
      <CTA />
    </div>
  );
};