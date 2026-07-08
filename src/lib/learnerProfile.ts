export interface LearningDNA {
  understandingAI: number;
  promptSkills: number;
  safetyAwareness: number;
  confidence: number;
  prefersBullets: boolean;
  needsReassurance: boolean;
}

export interface JourneyProgress {
  currentStep: number;
  complete: boolean;
  answers: Record<string, unknown>;
}

export interface NotebookEntry {
  id: string;
  type: 'prompt' | 'reflection' | 'note' | 'achievement';
  title: string;
  content: string;
  createdAt: string;
  journeyId?: string;
  stepId?: string;
}

export interface PromptWorkspace {
  task?: string;
  context?: string;
  format?: string;
  tone?: string;
  generatedPrompt?: string;
}

export interface AccessibilityProfile {
  dyslexia: boolean;
  adhd: boolean;
  screenReader: boolean;
  lowVision: boolean;
  cognitiveFatigue: boolean;
  technologyAnxiety: boolean;
}

export interface LearnerProfile {
  version: 1;
  onboarding: {
    goal?: string;
    confidence?: string;
    platform?: string;
  };
  learningDNA: LearningDNA;
  accessibility: AccessibilityProfile;
  journeys: Record<string, JourneyProgress>;
  promptWorkspace: PromptWorkspace;
  notebook: NotebookEntry[];
}

const STORAGE_KEY = 'keepcalmai:learner-profile';

export const defaultLearnerProfile: LearnerProfile = {
  version: 1,
  onboarding: {},
  learningDNA: {
    understandingAI: 1,
    promptSkills: 1,
    safetyAwareness: 1,
    confidence: 1,
    prefersBullets: false,
    needsReassurance: true
  },
  accessibility: {
    dyslexia: false,
    adhd: false,
    screenReader: false,
    lowVision: false,
    cognitiveFatigue: false,
    technologyAnxiety: true
  },
  journeys: {},
  promptWorkspace: {},
  notebook: []
};

function hasWindow() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getLearnerProfile(): LearnerProfile {
  if (!hasWindow()) return defaultLearnerProfile;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return migrateLegacyProfile(defaultLearnerProfile);

  try {
    const parsed = JSON.parse(raw) as Partial<LearnerProfile>;
    return migrateLegacyProfile({
      ...defaultLearnerProfile,
      ...parsed,
      onboarding: {
        ...defaultLearnerProfile.onboarding,
        ...parsed.onboarding
      },
      learningDNA: {
        ...defaultLearnerProfile.learningDNA,
        ...parsed.learningDNA
      },
      accessibility: {
        ...defaultLearnerProfile.accessibility,
        ...parsed.accessibility
      },
      journeys: {
        ...defaultLearnerProfile.journeys,
        ...parsed.journeys
      },
      promptWorkspace: {
        ...defaultLearnerProfile.promptWorkspace,
        ...parsed.promptWorkspace
      },
      notebook: parsed.notebook || []
    });
  } catch {
    return migrateLegacyProfile(defaultLearnerProfile);
  }
}

export function saveLearnerProfile(profile: LearnerProfile): LearnerProfile {
  if (hasWindow()) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }
  return profile;
}

export function updateLearnerProfile(updater: (profile: LearnerProfile) => LearnerProfile): LearnerProfile {
  const profile = getLearnerProfile();
  return saveLearnerProfile(updater(profile));
}

export function getJourneyProgress(journeyId: string): JourneyProgress {
  const profile = getLearnerProfile();
  return profile.journeys[journeyId] || { currentStep: 0, complete: false, answers: {} };
}

export function updateJourneyProgress(journeyId: string, progress: Partial<JourneyProgress>): LearnerProfile {
  return updateLearnerProfile((profile) => ({
    ...profile,
    journeys: {
      ...profile.journeys,
      [journeyId]: {
        ...(profile.journeys[journeyId] || { currentStep: 0, complete: false, answers: {} }),
        ...progress
      }
    }
  }));
}

export function addNotebookEntry(entry: Omit<NotebookEntry, 'id' | 'createdAt'>): LearnerProfile {
  return updateLearnerProfile((profile) => ({
    ...profile,
    notebook: [
      {
        ...entry,
        id: `entry-${Date.now()}`,
        createdAt: new Date().toISOString()
      },
      ...profile.notebook
    ].slice(0, 100)
  }));
}

export function updatePromptWorkspace(workspace: Partial<PromptWorkspace>): LearnerProfile {
  return updateLearnerProfile((profile) => ({
    ...profile,
    promptWorkspace: {
      ...profile.promptWorkspace,
      ...workspace
    }
  }));
}

export function migrateLegacyProfile(profile: LearnerProfile): LearnerProfile {
  if (!hasWindow()) return profile;

  const legacyOnboarding = JSON.parse(window.localStorage.getItem('keepcalmai:onboarding') || '{}');
  const journeyIds = ['ai-without-overwhelm', 'writing-better-prompts'];
  const journeys = { ...profile.journeys };

  journeyIds.forEach((journeyId) => {
    const currentStep = Number(window.localStorage.getItem(`keepcalmai:${journeyId}:current-step`) || journeys[journeyId]?.currentStep || 0);
    const complete = window.localStorage.getItem(`keepcalmai:${journeyId}:complete`) === 'true' || journeys[journeyId]?.complete || false;
    const answers = JSON.parse(window.localStorage.getItem(`keepcalmai:${journeyId}:answers`) || JSON.stringify(journeys[journeyId]?.answers || {}));
    journeys[journeyId] = { currentStep, complete, answers };
  });

  const migrated = {
    ...profile,
    onboarding: {
      ...profile.onboarding,
      ...legacyOnboarding
    },
    journeys
  };

  saveLearnerProfile(migrated);
  return migrated;
}
