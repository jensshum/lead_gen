import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, DollarSign, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background-light to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <span className="text-primary font-semibold">For Web Developers & Agencies</span>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-8 mt-4">
            Find Better Leads.<br/>
            <span className="text-primary">In Less Time.</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Tired of wasting time begging businesses to let you make them a website? Find businesses INSTANTLY who NEED your website making skills, and close more deals!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold text-primary-dark">Hundreds of hours searching?</p>
              <p className="text-text-secondary">Find leads automatically</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold text-primary-dark">Bidding Wars?</p>
              <p className="text-text-secondary">No more racing to the bottom</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold text-primary-dark">Cold calls?</p>
              <p className="text-text-secondary">Only pre-qualified prospects</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <button 
            onClick={() => navigate('/demo')}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Try Now
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold border-2 border-primary hover:bg-background-light transition-colors"
          >
            Join the Waitlist
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-20"
      >
        {[
          {
            icon: <Target className="w-12 h-12" />,
            title: "Pre-Qualified Leads",
            description: "Connect with businesses actively seeking web development services, not tire kickers."
          },
          {
            icon: <DollarSign className="w-12 h-12" />,
            title: "Higher Project Values",
            description: "First-time website clients typically have bigger budgets and fewer pricing objections."
          },
          {
            icon: <Clock className="w-12 h-12" />,
            title: "Save Time Prospecting",
            description: "Focus on building websites, not searching for clients. We handle the prospecting."
          }
        ].map((feature, index) => (
          <div key={index} className="bg-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-primary mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-primary-dark">{feature.title}</h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};