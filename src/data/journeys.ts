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
    status: 'published',
    href: '/journeys/ai-without-overwhelm/'
  },
  {
    id: 'writing-better-prompts',
    title: 'Writing Better Prompts',
    collection: 'Prompt Skills',
    description: 'A calm second journey that teaches task, context, format and tone as a simple prompt structure.',
    estimatedTime: '18 minutes',
    difficulty: 'beginner',
    status: 'published',
    href: '/journeys/writing-better-prompts/'
  },
  {
    id: 'everyday-ai-tasks',
    title: 'Everyday AI Tasks',
    collection: 'Everyday AI',
    description: 'A calm beginner journey for using AI with simple daily lists, steps, messages and safer checking habits.',
    estimatedTime: '18 minutes',
    difficulty: 'beginner',
    status: 'published',
    href: '/journeys/everyday-ai-tasks/'
  },
  {
    id: 'checking-ai-answers',
    title: 'Checking AI Answers',
    collection: 'Safe Confidence',
    description: 'A calm beginner journey for checking AI answers before relying on important information.',
    estimatedTime: '18 minutes',
    difficulty: 'beginner',
    status: 'published',
    href: '/journeys/checking-ai-answers/'
  }
];
