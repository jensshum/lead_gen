export interface Industry {
  id: string;
  name: string;
  category: string;
}

export interface CustomerPreference {
  id: string;
  question: string;
  options: string[];
}

export interface LeadResult {
  businessName: string;
  industry: string;
  location: string;
  employeeCount: string;
  revenue: string;
}