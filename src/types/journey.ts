export interface ChoiceOption {
  label: string;
  feedback?: string;
  isBest?: boolean;
  promptPart?: string;
}

export type JourneyStepType =
  | 'welcome'
  | 'orientation'
  | 'learn'
  | 'try'
  | 'prompt'
  | 'choice'
  | 'reflection'
  | 'safety'
  | 'confidence'
  | 'summary'
  | 'complete';

export interface LessonStep {
  id: string;
  title: string;
  time: string;
  body: string[];
  whyItMatters: string;
  actionTitle: string;
  actionSteps: string[];
  choices?: Array<string | ChoiceOption>;
  examplePrompt?: string;
  readyToContinue: string;
  takeaway: string;
  type?: JourneyStepType;
  reflectionPrompt?: string;
  progressLabel?: string;
  completionMessage?: string;
  nextButtonLabel?: string;
}
