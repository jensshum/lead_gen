import React from 'react';
import { motion } from 'framer-motion';
import { CustomerPreference } from '../../types/demo';

interface Props {
  question: CustomerPreference;
  onAnswer: (answer: string) => void;
}

export const QuestionStep: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-primary-dark">{question.question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={option}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onAnswer(option)}
            className="p-4 bg-background rounded-lg border-2 border-background-light hover:border-primary transition-colors"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};