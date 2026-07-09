export interface ChoiceOption {
  label: string;
  feedback?: string;
  isBest?: boolean;
  promptPart?: string;
}

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
}
