import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IndustrySelector } from '../components/demo/IndustrySelector';
import { RegionSelector } from '../components/demo/RegionSelector';
import { QuestionStep } from '../components/demo/QuestionStep';
import { ResultsView } from '../components/demo/ResultsView';
import { Disclaimer } from '../components/demo/Disclaimer';
import { customerQuestions } from '../data/questions';
import { generateMockLeads } from '../utils/mockData';

export const Demo = () => {
  const [step, setStep] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<LeadResult[]>([]);

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    setStep(1);
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setStep(2);
  };

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [customerQuestions[step - 2].id]: answer
    }));

    if (step === customerQuestions.length + 1) {
      setResults(generateMockLeads(selectedIndustry, selectedRegion));
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Disclaimer />
        <AnimatePresence mode="wait">
          {step === 0 && (
            <IndustrySelector onSelect={handleIndustrySelect} />
          )}
          {step === 1 && (
            <RegionSelector onSelect={handleRegionSelect} />
          )}
          {step > 1 && step <= customerQuestions.length + 1 && (
            <QuestionStep
              question={customerQuestions[step - 2]}
              onAnswer={handleAnswer}
            />
          )}
          {step > customerQuestions.length + 1 && (
            <ResultsView results={results} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};