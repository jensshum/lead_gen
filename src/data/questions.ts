export const customerQuestions = [
  {
    id: 'location',
    question: 'Where are your ideal customers located?',
    options: ['Urban areas', 'Suburban areas', 'Rural areas', 'Multiple regions']
  },
  {
    id: 'size',
    question: 'What size businesses are you targeting?',
    options: ['Small (1-10 employees)', 'Medium (11-50 employees)', 'Large (50+ employees)']
  },
  {
    id: 'revenue',
    question: 'What is the preferred annual revenue range?',
    options: ['Under $500K', '$500K-$1M', '$1M-$5M', 'Over $5M']
  }
] as const;