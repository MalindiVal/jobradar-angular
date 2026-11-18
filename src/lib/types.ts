// Identique à la version Next.js : un type TypeScript n'a rien de spécifique au framework.
export type Offer = {
  id: number;
  title: string;
  company: string;
  location: string;
  match_score: number;
  source: string;
  source_url: string;
  match_explanation: string;
  status: string;
};
