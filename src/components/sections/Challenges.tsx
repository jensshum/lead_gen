import React from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, DollarSign, Users } from 'lucide-react';

const challenges = [
  {
    icon: <Search />,
    title: "Finding Quality Leads",
    description: "Hours spent searching directories and social media for potential clients"
  },
  {
    icon: <Clock />,
    title: "Time-Consuming Outreach",
    description: "Endless cold emails and messages with low response rates"
  },
  {
    icon: <DollarSign />,
    title: "Price Competition",
    description: "Competing against low-cost alternatives and freelance marketplaces"
  },
  {
    icon: <Users />,
    title: "Wrong Prospects",
    description: "Wasting time on leads who aren't ready to invest in professional web design"
  }
];

export const Challenges = () => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Common Lead Generation Challenges
        </h2>
        <p className="text-xl text-gray-600">
          Web designers face these obstacles daily. We're here to help overcome them.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="text-primary mb-4 w-8 h-8">{challenge.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
            <p className="text-gray-600">{challenge.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);