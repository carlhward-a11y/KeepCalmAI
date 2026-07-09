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
  const everyday = profile.journeys['everyday-ai-tasks'];
  const checking = profile.journeys['checking-ai-answers'];

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

  if (!everyday?.complete) {
    return {
      title: 'Everyday AI Tasks',
      text: 'Use AI for simple daily lists, steps, messages and safer checking habits.',
      href: '/journeys/everyday-ai-tasks/',
      cta: 'Open next journey'
    };
  }

  if (!checking?.complete) {
    return {
      title: 'Checking AI Answers',
      text: 'Build calm habits for checking important AI answers before relying on them.',
      href: '/journeys/checking-ai-answers/',
      cta: 'Open next journey'
    };
  }

  return {
    title: 'Review your notebook',
    text: 'You have completed the current journeys. Review your saved prompts and reflections, or repeat a journey when it would be useful.',
    href: '/notebook/',
    cta: 'Open notebook'
  };
}

export function getConfidenceLabel(): { title: string; text: string } {
  const profile = getLearnerProfile();
  const first = profile.journeys['ai-without-overwhelm'];
  const prompts = profile.journeys['writing-better-prompts'];
  const everyday = profile.journeys['everyday-ai-tasks'];
  const checking = profile.journeys['checking-ai-answers'];

  if (checking?.complete) {
    return {
      title: 'Four journeys complete',
      text: 'You have completed the current beginner journey set.'
    };
  }

  if (everyday?.complete) {
    return {
      title: 'Three journeys complete',
      text: 'You have completed the first three beginner journeys.'
    };
  }

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
