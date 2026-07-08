import { getLearnerProfile, updatePromptWorkspace, addNotebookEntry } from './learnerProfile';

export function buildPromptFromWorkspace(): string {
  const { promptWorkspace } = getLearnerProfile();
  const parts = [
    promptWorkspace.task,
    promptWorkspace.context,
    promptWorkspace.format,
    promptWorkspace.tone
  ].filter(Boolean);

  return parts.join(' ').trim();
}

export function setPromptPart(part: 'task' | 'context' | 'format' | 'tone', value: string) {
  const profile = updatePromptWorkspace({ [part]: value });
  const generatedPrompt = buildPromptFromWorkspace();
  updatePromptWorkspace({ generatedPrompt });
  return profile;
}

export function saveCurrentPromptToNotebook(journeyId?: string, stepId?: string) {
  const prompt = buildPromptFromWorkspace();
  if (!prompt) return getLearnerProfile();

  return addNotebookEntry({
    type: 'prompt',
    title: 'Saved prompt',
    content: prompt,
    journeyId,
    stepId
  });
}

export function clearPromptWorkspace() {
  return updatePromptWorkspace({
    task: undefined,
    context: undefined,
    format: undefined,
    tone: undefined,
    generatedPrompt: undefined
  });
}
