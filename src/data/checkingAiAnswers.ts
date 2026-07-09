import type { ChoiceOption, LessonStep } from '../types/journey';

const gentleCompare = ' You can try another option if you would like to compare, or continue when you are ready.';

const checkingFeedback: Record<string, Record<string, ChoiceOption>> = {
  'needs-checking-most': {
    'A recipe idea for using leftover vegetables.': {
      label: 'A recipe idea for using leftover vegetables.',
      isBest: false,
      feedback: `This is usually lower risk, although allergies, food safety and dietary needs still matter.${gentleCompare}`
    },
    'A short birthday message for a friend.': {
      label: 'A short birthday message for a friend.',
      isBest: false,
      feedback: `This is usually lower risk. You may edit the tone, but it does not usually need formal checking.${gentleCompare}`
    },
    'Advice about whether a chest pain symptom is serious.': {
      label: 'Advice about whether a chest pain symptom is serious.',
      isBest: true,
      feedback: 'Yes. Health and safety information should be checked with a reliable source or qualified professional before acting.'
    },
    'A packing list for a day out.': {
      label: 'A packing list for a day out.',
      isBest: false,
      feedback: `This is usually lower risk, though you may still check personal details such as weather, medication or travel documents.${gentleCompare}`
    }
  },
  'safest-next-action': {
    'Use the AI answer straight away because it sounds confident.': {
      label: 'Use the AI answer straight away because it sounds confident.',
      isBest: false,
      feedback: `Confidence in the wording is not the same as accuracy. A calm checking step is better before relying on it.${gentleCompare}`
    },
    'Ask AI for another answer and trust the second one.': {
      label: 'Ask AI for another answer and trust the second one.',
      isBest: false,
      feedback: `A second answer can help, but it is still AI. For important topics, check against a reliable source as well.${gentleCompare}`
    },
    'Check the key point against a reliable source before acting.': {
      label: 'Check the key point against a reliable source before acting.',
      isBest: true,
      feedback: 'Yes. This keeps AI useful while making sure important decisions are not based on one unchecked answer.'
    },
    'Ignore the answer completely because AI can be wrong.': {
      label: 'Ignore the answer completely because AI can be wrong.',
      isBest: false,
      feedback: `AI can still be useful as a starting point. The safer habit is to check important details rather than reject everything.${gentleCompare}`
    }
  },
  'better-follow-up': {
    'Are you sure?': {
      label: 'Are you sure?',
      isBest: false,
      feedback: `This may help a little, but it does not ask AI to show what might be uncertain or missing.${gentleCompare}`
    },
    'What might be uncertain, missing or worth checking in this answer?': {
      label: 'What might be uncertain, missing or worth checking in this answer?',
      isBest: true,
      feedback: 'Yes. This is a strong checking prompt because it asks AI to identify limits, gaps and things to verify.'
    },
    'Make the answer sound more confident.': {
      label: 'Make the answer sound more confident.',
      isBest: false,
      feedback: `This improves the tone, not the reliability. For checking, you want uncertainty and sources, not stronger wording.${gentleCompare}`
    },
    'Give me a longer answer.': {
      label: 'Give me a longer answer.',
      isBest: false,
      feedback: `More detail is not always more reliable. Ask what needs checking rather than only asking for length.${gentleCompare}`
    }
  },
  'trusted-source': {
    'A recognised official website or professional source for the topic.': {
      label: 'A recognised official website or professional source for the topic.',
      isBest: true,
      feedback: 'Yes. For important information, start with a source that is responsible for that topic.'
    },
    'A random social media comment.': {
      label: 'A random social media comment.',
      isBest: false,
      feedback: `This is not usually a reliable source. It may give opinions, but it should not be your main check for important information.${gentleCompare}`
    },
    'The AI answer itself, because it sounds well written.': {
      label: 'The AI answer itself, because it sounds well written.',
      isBest: false,
      feedback: `Clear writing can still be wrong. The AI answer is the thing you are checking, not the source that proves it.${gentleCompare}`
    },
    'The first search result without reading it.': {
      label: 'The first search result without reading it.',
      isBest: false,
      feedback: `A search result can be a starting point, but you still need to check who published it and whether it fits the question.${gentleCompare}`
    }
  },
  'final-authority': {
    'Asking for wording ideas for a thank-you message.': {
      label: 'Asking for wording ideas for a thank-you message.',
      isBest: false,
      feedback: `This is usually a reasonable use of AI. You still choose the final wording, but it is low risk.${gentleCompare}`
    },
    'Deciding whether a legal deadline applies to me.': {
      label: 'Deciding whether a legal deadline applies to me.',
      isBest: true,
      feedback: 'Yes. AI should not be the final authority for legal decisions. Use an appropriate official or professional source.'
    },
    'Creating a simple list of weekend jobs.': {
      label: 'Creating a simple list of weekend jobs.',
      isBest: false,
      feedback: `This is usually low risk. You can check whether the list is realistic, but it does not need the same level of authority.${gentleCompare}`
    },
    'Making a draft shopping list.': {
      label: 'Making a draft shopping list.',
      isBest: false,
      feedback: `This is usually low risk. You may still check allergies, budget or personal needs, but AI can help with the draft.${gentleCompare}`
    }
  },
  'confidence-check': {
    'I am still unsure.': {
      label: 'I am still unsure.',
      feedback: 'That is okay. Start with one habit: check important answers before acting on them.'
    },
    'I can spot when checking is needed.': {
      label: 'I can spot when checking is needed.',
      feedback: 'Good. Spotting when to check is the main habit this journey is building.'
    },
    'I can ask a checking follow-up.': {
      label: 'I can ask a checking follow-up.',
      feedback: 'Good. Asking what might be missing or uncertain is a practical way to slow down safely.'
    },
    'I know AI should not be the final authority for important decisions.': {
      label: 'I know AI should not be the final authority for important decisions.',
      feedback: 'Excellent. That is a calm and safe way to use AI with confidence.'
    }
  }
};

function withFeedback(stepId: string, labels: string[]): ChoiceOption[] {
  return labels.map((label) => checkingFeedback[stepId]?.[label] || { label });
}

export const checkingAiAnswers: LessonStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to Checking AI Answers',
    time: 'About 30 seconds',
    body: [
      'This journey helps you check AI answers calmly before relying on them.',
      'The aim is not to be frightened of AI. The aim is to build a simple checking habit.'
    ],
    whyItMatters: 'AI is more useful when you know how to use it with calm judgement.',
    actionTitle: 'Start with a calm rule',
    actionSteps: [
      'Use AI as a helpful starting point.',
      'Check important information before acting on it.',
      'Continue when that balance feels clear enough.'
    ],
    readyToContinue: 'Continue when you are ready to build a checking habit.',
    takeaway: 'Helpful does not always mean ready to rely on.'
  },
  {
    id: 'confident-but-wrong',
    title: 'AI can sound confident and still be wrong',
    time: 'About 1 minute',
    body: [
      'AI answers can sound polished, certain and well organised.',
      'That does not always mean they are accurate, complete or up to date.'
    ],
    whyItMatters: 'This keeps expectations realistic without making AI feel unsafe for every task.',
    actionTitle: 'Notice the difference',
    actionSteps: [
      'Confident wording is about how an answer sounds.',
      'Accuracy is about whether the answer is correct.',
      'The two are not the same thing.'
    ],
    readyToContinue: 'Continue when the difference between confidence and accuracy feels clear.',
    takeaway: 'A confident answer can still need checking.'
  },
  {
    id: 'needs-checking-most',
    title: 'Which answer needs checking most?',
    time: 'About 1 minute',
    body: [
      'Some AI answers are low risk. Others should be checked carefully before you act.',
      'The more important the outcome, the more important the check.'
    ],
    whyItMatters: 'This helps you decide where to spend your checking effort.',
    actionTitle: 'Choose the answer that needs most care',
    actionSteps: [
      'Read the options below.',
      'Choose the one that most clearly needs checking.',
      'Read the guidance after your choice.'
    ],
    choices: withFeedback('needs-checking-most', [
      'A recipe idea for using leftover vegetables.',
      'A short birthday message for a friend.',
      'Advice about whether a chest pain symptom is serious.',
      'A packing list for a day out.'
    ]),
    readyToContinue: 'Continue when you can see which answer needs checking most.',
    takeaway: 'Health, money, legal, safety and personal decisions need extra care.'
  },
  {
    id: 'checking-categories',
    title: 'The five areas to check carefully',
    time: 'About 1 minute',
    body: [
      'Be especially careful with health, money, legal, safety and important personal decisions.',
      'AI can help you understand questions to ask, but it should not be the final authority in these areas.'
    ],
    whyItMatters: 'A short list of checking categories makes safe use easier to remember.',
    actionTitle: 'Remember the checking list',
    actionSteps: [
      'Health.',
      'Money and legal matters.',
      'Safety, confidential or important personal decisions.'
    ],
    readyToContinue: 'Continue when the checking list feels clear enough.',
    takeaway: 'Important decisions need reliable sources, not just a fluent answer.'
  },
  {
    id: 'ask-uncertain',
    title: 'Ask what might be uncertain',
    time: 'About 1 minute',
    body: [
      'You can ask AI to help you check its own answer.',
      'This does not prove the answer is correct, but it can highlight what needs a closer look.'
    ],
    whyItMatters: 'A checking follow-up slows the process down and makes gaps easier to notice.',
    actionTitle: 'Use a checking prompt',
    actionSteps: [
      'Copy or adapt the prompt below.',
      'Use it after an AI answer.',
      'Treat the response as a list of things to verify.'
    ],
    examplePrompt: 'What might be uncertain, missing or worth checking in this answer?',
    readyToContinue: 'Continue when you understand how this follow-up can help.',
    takeaway: 'A good checking prompt asks about uncertainty and missing information.'
  },
  {
    id: 'better-follow-up',
    title: 'Which follow-up improves checking?',
    time: 'About 1 minute',
    body: [
      'Some follow-up prompts make checking easier.',
      'The most useful ones ask about uncertainty, missing context and what should be verified.'
    ],
    whyItMatters: 'The right follow-up helps you avoid relying on confident wording alone.',
    actionTitle: 'Choose the strongest checking prompt',
    actionSteps: [
      'Read the options below.',
      'Choose the prompt that would help you check an answer more carefully.',
      'Read the feedback after your choice.'
    ],
    choices: withFeedback('better-follow-up', [
      'Are you sure?',
      'What might be uncertain, missing or worth checking in this answer?',
      'Make the answer sound more confident.',
      'Give me a longer answer.'
    ]),
    readyToContinue: 'Continue when the checking prompt makes sense.',
    takeaway: 'Ask for uncertainty, not just confidence.'
  },
  {
    id: 'trusted-source',
    title: 'Choose a reliable source',
    time: 'About 1 minute',
    body: [
      'A reliable source depends on the topic.',
      'For important information, look for official, professional or clearly accountable sources.'
    ],
    whyItMatters: 'Checking only helps if the source is more reliable than the answer you are checking.',
    actionTitle: 'Choose the source you would trust most',
    actionSteps: [
      'Read the options below.',
      'Choose the best source for checking an important answer.',
      'Read the guidance after your choice.'
    ],
    choices: withFeedback('trusted-source', [
      'A recognised official website or professional source for the topic.',
      'A random social media comment.',
      'The AI answer itself, because it sounds well written.',
      'The first search result without reading it.'
    ]),
    readyToContinue: 'Continue when you can identify a more reliable source.',
    takeaway: 'Check important answers against accountable sources.'
  },
  {
    id: 'compare-against-source',
    title: 'Compare against a trusted source',
    time: 'About 2 minutes',
    body: [
      'When accuracy matters, compare the key claim against a trusted source.',
      'You do not have to check every word. Start with the most important point.'
    ],
    whyItMatters: 'This makes checking practical rather than overwhelming.',
    actionTitle: 'Use a simple comparison process',
    actionSteps: [
      'Identify the main claim in the AI answer.',
      'Find a reliable source for that topic.',
      'Check whether the key point matches.'
    ],
    readyToContinue: 'Continue when the three-step comparison process feels clear.',
    takeaway: 'Check the key claim first.'
  },
  {
    id: 'safest-next-action',
    title: 'What is the safest next action?',
    time: 'About 1 minute',
    body: [
      'When an answer matters, pause before acting.',
      'A calm pause gives you time to check the key point.'
    ],
    whyItMatters: 'This builds confidence without rushing important decisions.',
    actionTitle: 'Choose the safest next action',
    actionSteps: [
      'Read the options below.',
      'Choose the safest action after receiving an important AI answer.',
      'Read the feedback after your choice.'
    ],
    choices: withFeedback('safest-next-action', [
      'Use the AI answer straight away because it sounds confident.',
      'Ask AI for another answer and trust the second one.',
      'Check the key point against a reliable source before acting.',
      'Ignore the answer completely because AI can be wrong.'
    ]),
    readyToContinue: 'Continue when the safest next action feels clear.',
    takeaway: 'Pause, check, then decide.'
  },
  {
    id: 'not-final-authority',
    title: 'Know when AI is not the final authority',
    time: 'About 1 minute',
    body: [
      'AI can help you prepare questions, understand plain-language explanations and organise information.',
      'For important decisions, the final authority should be a reliable source, policy, professional or responsible organisation.'
    ],
    whyItMatters: 'This keeps AI in the right role: useful support, not a replacement for judgement.',
    actionTitle: 'Choose where AI should not be final',
    actionSteps: [
      'Read the options below.',
      'Choose the situation where AI should not be the final authority.',
      'Read the feedback after your choice.'
    ],
    choices: withFeedback('final-authority', [
      'Asking for wording ideas for a thank-you message.',
      'Deciding whether a legal deadline applies to me.',
      'Creating a simple list of weekend jobs.',
      'Making a draft shopping list.'
    ]),
    readyToContinue: 'Continue when you understand where AI should not be final authority.',
    takeaway: 'Use AI to support important decisions, not to make them alone.'
  },
  {
    id: 'checking-reflection',
    title: 'A short checking reflection',
    time: 'About 1 minute',
    body: [
      'This is a good moment to choose one checking habit to keep.',
      'You can use the optional reflection box below if you want to save one thought.'
    ],
    whyItMatters: 'A simple personal rule makes checking easier to repeat later.',
    actionTitle: 'Choose one habit',
    actionSteps: [
      'Think of one checking habit that feels useful.',
      'Write a short note if you want to keep it.',
      'Leave it blank if you prefer to continue.'
    ],
    readyToContinue: 'Continue when you have noticed one checking habit you might use.',
    takeaway: 'A calm checking habit is enough.'
  },
  {
    id: 'confidence-check',
    title: 'How does checking feel now?',
    time: 'About 1 minute',
    body: [
      'This is not a test.',
      'Choose the option that best describes how checking AI answers feels now.'
    ],
    whyItMatters: 'Confidence grows when checking feels like a useful habit rather than a barrier.',
    actionTitle: 'Choose where you are now',
    actionSteps: [
      'Read the options below.',
      'Choose the one that fits best.',
      'Any answer is fine.'
    ],
    choices: withFeedback('confidence-check', [
      'I am still unsure.',
      'I can spot when checking is needed.',
      'I can ask a checking follow-up.',
      'I know AI should not be the final authority for important decisions.'
    ]),
    readyToContinue: 'Continue when you have selected your current confidence level.',
    takeaway: 'Checking is a confidence habit, not a failure habit.'
  },
  {
    id: 'complete',
    title: 'Journey complete',
    time: 'About 45 seconds',
    body: [
      'You have completed Checking AI Answers.',
      'You have practised spotting when to check, asking better follow-up questions and using reliable sources for important information.'
    ],
    whyItMatters: 'Ending calmly reinforces the point: safe AI use is about judgement, not fear.',
    actionTitle: 'Finish calmly',
    actionSteps: [
      'Use AI as a starting point.',
      'Check important answers before acting.',
      'Keep the checking habit simple.'
    ],
    readyToContinue: 'Finish when you are ready to close this journey.',
    takeaway: 'Calm checking makes AI safer and more useful.'
  }
];
