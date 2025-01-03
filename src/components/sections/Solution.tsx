import React from 'react';
import { motion } from 'framer-motion';
import { Target, Filter, Zap } from 'lucide-react';

export const Solution = () => (
  <div className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Find Your Ideal Clients, Faster
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: <Target className="w-6 h-6 text-primary" />,
                title: "Targeted Lead Discovery",
                description: "Our AI identifies businesses actively seeking web design services"
              },
              {
                icon: <Filter className="w-6 h-6 text-primary" />,
                title: "Smart Filtering",
                description: "Filter leads by budget, industry, and project requirements"
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "Quick Connection",
                description: "Direct contact with decision-makers ready to start their project"
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-xl"
        >
          {/* Image placeholder */}
          <div className="absolute inset-0 bg-white-100 flex items-center justify-center">
            <img src="../../../src/assets/compy.png" alt="compy"/>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);