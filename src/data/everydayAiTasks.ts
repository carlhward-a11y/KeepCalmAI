import type { ChoiceOption, LessonStep } from '../types/journey';

const gentleCompare = ' You can try another option if you would like to compare, or continue when you are ready.';

const everydayChoiceFeedback: Record<string, Record<string, ChoiceOption>> = {
  'choose-task': {
    'Make a short list.': {
      label: 'Make a short list.',
      feedback: 'Good choice. Lists are a simple, low-pressure way to start using AI for everyday tasks.',
      promptPart: 'Make a short list'
    },
    'Turn messy thoughts into steps.': {
      label: 'Turn messy thoughts into steps.',
      feedback: 'Good choice. AI can help turn a jumble of thoughts into a calmer sequence.',
      promptPart: 'Turn messy thoughts into steps'
    },
    'Draft a short message.': {
      label: 'Draft a short message.',
      feedback: 'Good choice. Drafting a simple message is a practical way to use AI while staying in control of the final wording.',
      promptPart: 'Draft a short message'
    },
    'Make something easier to understand.': {
      label: 'Make something easier to understand.',
      feedback: 'Good choice. Asking for a simpler version is often one of the most useful everyday AI habits.',
      promptPart: 'Make something easier to understand'
    }
  },
  'compare-output': {
    'It gives a short, useful list with clear wording.': {
      label: 'It gives a short, useful list with clear wording.',
      isBest: true,
      feedback: 'Yes. A useful everyday answer is usually clear, short enough to use, and easy to act on.'
    },
    'It gives a very long answer with extra detail I did not ask for.': {
      label: 'It gives a very long answer with extra detail I did not ask for.',
      isBest: false,
      feedback: `This can still be useful, but it may create more work. You can ask AI to make it shorter or easier to scan.${gentleCompare}`
    },
    'It sounds confident but does not match what I asked.': {
      label: 'It sounds confident but does not match what I asked.',
      isBest: false,
      feedback: `This is a sign to ask again more clearly. Confident wording is not the same as a useful answer.${gentleCompare}`
    },
    'It gives one idea and no explanation.': {
      label: 'It gives one idea and no explanation.',
      isBest: false,
      feedback: `This may be enough for a small task, but if you need to understand the answer, ask for a brief reason or a second option.${gentleCompare}`
    }
  },
  'safety-check': {
    'Meal ideas using food I already have.': {
      label: 'Meal ideas using food I already have.',
      isBest: false,
      feedback: `This is usually low risk, although allergies, dietary needs and food safety still matter.${gentleCompare}`
    },
    'A friendly reminder message to a neighbour.': {
      label: 'A friendly reminder message to a neighbour.',
      isBest: false,
      feedback: `This is usually low risk. You should still check the tone and make sure it sounds like you.${gentleCompare}`
    },
    'Advice about whether to ignore a medical symptom.': {
      label: 'Advice about whether to ignore a medical symptom.',
      isBest: true,
      feedback: 'Yes. Anything medical should be checked carefully with a reliable source or a qualified professional.'
    },
    'A packing list for a weekend away.': {
      label: 'A packing list for a weekend away.',
      isBest: false,
      feedback: `This is usually low risk. You may only need to check personal details such as weather, medication or travel documents.${gentleCompare}`
    }
  },
  'confidence-check': {
    'I am still unsure.': {
      label: 'I am still unsure.',
      feedback: 'That is fine. You can repeat one small task, such as asking for a short list, until it feels more familiar.'
    },
    'I could try one simple task.': {
      label: 'I could try one simple task.',
      feedback: 'Good. One simple task is enough for now.'
    },
    'I can see how AI could save a little time.': {
      label: 'I can see how AI could save a little time.',
      feedback: 'Good. Everyday AI is most useful when it quietly removes a little friction.'
    },
    'I could show someone else one everyday prompt.': {
      label: 'I could show someone else one everyday prompt.',
      feedback: 'Excellent. Being able to show one small prompt is a strong sign that the skill is becoming practical.'
    }
  }
};

function withFeedback(stepId: string, labels: string[]): ChoiceOption[] {
  return labels.map((label) => everydayChoiceFeedback[stepId]?.[label] || { label });
}

export const everydayAiTasks: LessonStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to Everyday AI Tasks',
    time: 'About 30 seconds',
    body: [
      'This journey helps you use AI for small everyday tasks.',
      'The aim is not to do anything impressive. The aim is to make one simple task feel easier.'
    ],
    whyItMatters: 'AI becomes less abstract when it helps with something ordinary and low pressure.',
    actionTitle: 'Start with one small aim',
    actionSteps: [
      'Think of a simple everyday task.',
      'Keep it low risk.',
      'Continue when you are ready to try one practical use.'
    ],
    readyToContinue: 'Continue when you are ready to begin.',
    takeaway: 'Everyday AI starts with small useful tasks.'
  },
  {
    id: 'choose-task',
    title: 'Choose a simple task',
    time: 'About 1 minute',
    body: [
      'Start with a task that does not need private or sensitive information.',
      'A list, a plan, a draft message or a simpler explanation is enough.'
    ],
    whyItMatters: 'Low-risk tasks let you practise without adding worry or pressure.',
    actionTitle: 'Choose one task type',
    actionSteps: [
      'Read the options below.',
      'Choose one task that feels useful today.',
      'You can change your mind later.'
    ],
    choices: withFeedback('choose-task', [
      'Make a short list.',
      'Turn messy thoughts into steps.',
      'Draft a short message.',
      'Make something easier to understand.'
    ]),
    readyToContinue: 'Continue when you have chosen one everyday task type.',
    takeaway: 'The best first task is simple and safe.'
  },
  {
    id: 'short-list',
    title: 'Ask for a short list',
    time: 'About 1 minute',
    body: [
      'Lists are a useful everyday starting point.',
      'They can help with shopping, packing, planning or remembering options.'
    ],
    whyItMatters: 'A short list is easy to check and easy to use.',
    actionTitle: 'Copy or adapt this prompt',
    actionSteps: [
      'Open your AI assistant.',
      'Copy or type the prompt below.',
      'Read the answer once.'
    ],
    examplePrompt: 'Make a short list of five simple things I could do to prepare for tomorrow morning. Keep it practical and easy to scan.',
    readyToContinue: 'Continue when you have tried or read the list prompt.',
    takeaway: 'A short list can make a task feel more manageable.'
  },
  {
    id: 'messy-thoughts',
    title: 'Turn messy thoughts into steps',
    time: 'About 2 minutes',
    body: [
      'AI can help when your thoughts are scattered.',
      'You can give it a rough sentence and ask for simple steps.'
    ],
    whyItMatters: 'Turning thoughts into steps can reduce cognitive load and make it easier to start.',
    actionTitle: 'Try a step-making prompt',
    actionSteps: [
      'Copy or adapt the prompt below.',
      'Use a low-risk task only.',
      'Check whether the steps feel realistic.'
    ],
    examplePrompt: 'I need to tidy my desk but feel a bit stuck. Turn this into five small steps I can do one at a time.',
    readyToContinue: 'Continue when you have seen how AI can turn a thought into steps.',
    takeaway: 'AI can help create a starting point when a task feels messy.'
  },
  {
    id: 'draft-message',
    title: 'Draft a short message',
    time: 'About 2 minutes',
    body: [
      'AI can help you start a message, but you stay in control of the final wording.',
      'Use made-up or low-risk details for practice.'
    ],
    whyItMatters: 'Drafting removes the blank-page feeling while still letting you edit the message yourself.',
    actionTitle: 'Draft a simple message',
    actionSteps: [
      'Copy or adapt the prompt below.',
      'Read the draft.',
      'Change anything that does not sound like you.'
    ],
    examplePrompt: 'Draft a short, friendly message to a neighbour asking if they could let me know when a parcel arrives. Keep it polite and no more than four sentences.',
    readyToContinue: 'Continue when you have read or adapted the message prompt.',
    takeaway: 'AI can help you start, but the final message is yours.'
  },
  {
    id: 'simpler-version',
    title: 'Ask for a simpler version',
    time: 'About 1 minute',
    body: [
      'If an answer is too long or unclear, ask for a simpler version.',
      'This is a useful everyday habit.'
    ],
    whyItMatters: 'You do not have to accept an answer that feels too much. You can ask AI to reduce the load.',
    actionTitle: 'Use a simplifying prompt',
    actionSteps: [
      'Use this after any AI answer.',
      'Read the simpler version.',
      'Decide whether it is easier to use.'
    ],
    examplePrompt: 'Make that simpler, shorter and easier to act on.',
    readyToContinue: 'Continue when you understand how to ask for a simpler version.',
    takeaway: 'You can ask AI to make an answer easier.'
  },
  {
    id: 'compare-output',
    title: 'What makes an answer useful?',
    time: 'About 1 minute',
    body: [
      'Not every AI answer is equally useful.',
      'For everyday tasks, useful usually means clear, short enough and relevant to what you asked.'
    ],
    whyItMatters: 'Knowing what useful looks like helps you judge the answer calmly.',
    actionTitle: 'Choose the most useful answer type',
    actionSteps: [
      'Read the options below.',
      'Choose the answer type that would be most useful for an everyday task.',
      'Read the guidance after your choice.'
    ],
    choices: withFeedback('compare-output', [
      'It gives a short, useful list with clear wording.',
      'It gives a very long answer with extra detail I did not ask for.',
      'It sounds confident but does not match what I asked.',
      'It gives one idea and no explanation.'
    ]),
    readyToContinue: 'Continue when you can recognise a useful everyday answer.',
    takeaway: 'Useful answers are clear, relevant and easy to act on.'
  },
  {
    id: 'safety-check',
    title: 'Check before relying on it',
    time: 'About 1 minute',
    body: [
      'Everyday AI can be helpful, but some answers still need checking.',
      'Be especially careful with health, money, legal, safety or confidential information.'
    ],
    whyItMatters: 'Safe habits keep AI useful without making it feel frightening.',
    actionTitle: 'Choose the task that needs most care',
    actionSteps: [
      'Read the options below.',
      'Choose the one that should not be relied on without checking.',
      'Notice why it matters.'
    ],
    choices: withFeedback('safety-check', [
      'Meal ideas using food I already have.',
      'A friendly reminder message to a neighbour.',
      'Advice about whether to ignore a medical symptom.',
      'A packing list for a weekend away.'
    ]),
    readyToContinue: 'Continue when the checking habit feels clear.',
    takeaway: 'The more important the outcome, the more carefully you should check.'
  },
  {
    id: 'useful-prompt',
    title: 'Save one useful prompt',
    time: 'About 1 minute',
    body: [
      'It can help to keep one everyday prompt you might use again.',
      'You do not need to save everything. One useful prompt is enough.'
    ],
    whyItMatters: 'Saving a prompt turns a practice step into something reusable.',
    actionTitle: 'Choose a prompt to keep',
    actionSteps: [
      'Choose one prompt from this journey that felt useful.',
      'Copy it somewhere safe, or save it to your notebook if the option is available.',
      'Keep it simple.'
    ],
    examplePrompt: 'Turn this task into five small steps I can do one at a time. Keep the steps simple and realistic.',
    readyToContinue: 'Continue when you have chosen one prompt you may use again.',
    takeaway: 'One reusable prompt is better than trying to remember everything.'
  },
  {
    id: 'reflection',
    title: 'A short reflection',
    time: 'About 1 minute',
    body: [
      'This is a good point to notice what felt useful.',
      'You can use the optional reflection box below if you want to save one thought.'
    ],
    whyItMatters: 'Reflection helps the learning settle without turning it into a test.',
    actionTitle: 'Notice one useful thing',
    actionSteps: [
      'Think of one task where AI could help a little.',
      'Write a short note if you want to keep it.',
      'Leave it blank if you prefer to continue.'
    ],
    readyToContinue: 'Continue when you have noticed one useful everyday task.',
    takeaway: 'A small useful idea is enough.'
  },
  {
    id: 'confidence-check',
    title: 'How does everyday AI feel now?',
    time: 'About 1 minute',
    body: [
      'This is not a test.',
      'Choose the option that best describes how everyday AI feels now.'
    ],
    whyItMatters: 'Confidence grows when you can recognise small changes in how a task feels.',
    actionTitle: 'Choose where you are now',
    actionSteps: [
      'Read the options below.',
      'Choose the one that fits best.',
      'Any answer is fine.'
    ],
    choices: withFeedback('confidence-check', [
      'I am still unsure.',
      'I could try one simple task.',
      'I can see how AI could save a little time.',
      'I could show someone else one everyday prompt.'
    ]),
    readyToContinue: 'Continue when you have selected your current confidence level.',
    takeaway: 'Confidence can start with one everyday task.'
  },
  {
    id: 'one-next-action',
    title: 'Choose one next action',
    time: 'About 1 minute',
    body: [
      'The best next step is small.',
      'Choose one everyday task where AI could help you this week.'
    ],
    whyItMatters: 'A realistic next action helps the learning continue outside the journey.',
    actionTitle: 'Pick one simple action',
    actionSteps: [
      'Choose one low-risk task.',
      'Use one prompt from this journey.',
      'Check the answer before relying on it.'
    ],
    choices: [
      'Ask for a short list.',
      'Turn a task into steps.',
      'Draft a short message.',
      'Ask for a simpler version of something.'
    ],
    readyToContinue: 'Continue when you have chosen one small next action.',
    takeaway: 'One small repeat is enough to build momentum.'
  },
  {
    id: 'complete',
    title: 'Journey complete',
    time: 'About 45 seconds',
    body: [
      'You have completed Everyday AI Tasks.',
      'You have practised using AI for lists, steps, short messages, simpler answers and safe checking.'
    ],
    whyItMatters: 'Ending with a clear summary helps the learner leave with confidence rather than more pressure.',
    actionTitle: 'Finish calmly',
    actionSteps: [
      'Notice that you completed the journey.',
      'Use one everyday prompt when it feels useful.',
      'Keep checking anything important.'
    ],
    readyToContinue: 'Finish when you are ready to close this journey.',
    takeaway: 'Small everyday tasks are a good way to build AI confidence.'
  }
];
