import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, CheckCircle, Filter, Calendar } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Filter className="w-8 h-8 text-blue-600" />,
      title: "Smart Lead Filtering",
      description: "Set your ideal project size, industry, and location to only see relevant opportunities."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Decision Maker Contact",
      description: "Get direct contact information for business owners and decision makers."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Opportunity Timing",
      description: "Identify businesses actively planning their digital transformation."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Verified Businesses",
      description: "Every lead is verified to ensure they're legitimate and actively operating."
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Web Developers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop wasting time on unqualified leads. Our platform helps you find businesses ready to invest in their online presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};