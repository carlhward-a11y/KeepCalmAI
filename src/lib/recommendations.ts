import { getLearnerProfile } from './learnerProfile';

export interface Recommendation {
  title: string;
  text: string;
  href: string;
  cta: string;
}

export function getNextRecommendation(): Recommendation {
  const profile = getLearnerProfile();
  const first = profile.journeys['ai-without-overwhelm'];
  const prompts = profile.journeys['writing-better-prompts'];

  if (!first?.complete) {
    return {
      title: 'AI Without Overwhelm',
      text: 'Start here before moving into prompt skills.',
      href: '/journeys/ai-without-overwhelm/',
      cta: 'Open first journey'
    };
  }

  if (!prompts?.complete) {
    return {
      title: 'Writing Better Prompts',
      text: 'Build on the first journey by learning a simple prompt structure.',
      href: '/journeys/writing-better-prompts/',
      cta: 'Open next journey'
    };
  }

  return {
    title: 'Everyday AI Tasks',
    text: 'Coming next: using AI for simple daily planning, notes and explanations.',
    href: '/journeys/',
    cta: 'Coming soon'
  };
}

export function getConfidenceLabel(): { title: string; text: string } {
  const profile = getLearnerProfile();
  const first = profile.journeys['ai-without-overwhelm'];
  const prompts = profile.journeys['writing-better-prompts'];

  if (prompts?.complete) {
    return {
      title: 'Two journeys complete',
      text: 'You have completed the foundations and prompt skills journeys.'
    };
  }

  if (first?.complete) {
    return {
      title: 'Foundation complete',
      text: 'You have completed the first confidence-building journey.'
    };
  }

  if ((first?.currentStep || 0) > 20) {
    return {
      title: 'Growing steadily',
      text: 'You have already completed more than half of the first journey.'
    };
  }

  if ((first?.currentStep || 0) > 0) {
    return {
      title: 'In progress',
      text: 'You have started. That is the most important step.'
    };
  }

  return {
    title: 'Starting gently',
    text: 'Confidence grows through repeated small steps.'
  };
}
