export interface JourneySummary {
  id: string;
  title: string;
  collection: string;
  description: string;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'draft' | 'published';
  href: string;
}

export const journeys: JourneySummary[] = [
  {
    id: 'ai-without-overwhelm',
    title: 'AI Without Overwhelm',
    collection: 'Foundations',
    description: 'A calm first journey for people who want to understand AI one small step at a time.',
    estimatedTime: '30 minutes',
    difficulty: 'beginner',
    status: 'draft',
    href: '/journeys/ai-without-overwhelm/'
  }
];
