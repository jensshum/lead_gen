const businessNames = [
  'Sunrise Solutions', 'Peak Performance', 'Blue Harbor', 'Golden Gate',
  'Silver Lining', 'Green Valley', 'Mountain View', 'Coastal Breeze',
  'Urban Edge', 'River Rock'
];

export const generateMockLeads = (
  industry: string,
  region: string,
  count: number = 10
): Array<{
  businessName: string;
  industry: string;
  location: string;
  employeeCount: string;
  revenue: string;
}> => {
  return Array.from({ length: count }, () => ({
    businessName: businessNames[Math.floor(Math.random() * businessNames.length)],
    industry,
    location: region,
    employeeCount: `${Math.floor(Math.random() * 100) + 1}`,
    revenue: `$${Math.floor(Math.random() * 9) + 1}M`
  }));
};