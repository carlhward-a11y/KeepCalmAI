import type { LessonStep } from '../types/journey';

export const writingBetterPrompts: LessonStep[] = [
  {
    id: 'welcome',
    title: 'Welcome back',
    time: 'About 30 seconds',
    body: [
      'This journey helps you write clearer prompts.',
      'You will not learn complicated prompt engineering. You will learn a simple way to ask for what you need.'
    ],
    whyItMatters: 'Better prompts usually produce more useful answers, but they do not need to be technical or perfect.',
    actionTitle: 'Start with one aim',
    actionSteps: [
      'Think of one thing you might ask your AI assistant to help with.',
      'Keep it small and practical.',
      'Continue when you have one task in mind.'
    ],
    readyToContinue: 'Continue when you have one simple task in mind.',
    takeaway: 'A better prompt starts with a clear aim.'
  },
  {
    id: 'prompt-is-instruction',
    title: 'A prompt is an instruction',
    time: 'About 1 minute',
    body: [
      'A prompt is simply the message you give to your AI assistant.',
      'It can be a question, a request, a draft instruction or a follow-up.'
    ],
    whyItMatters: 'This keeps prompts approachable. You are not writing code. You are giving a clear instruction.',
    actionTitle: 'Choose the closest description',
    actionSteps: [
      'Read the choices below.',
      'Choose the one that best describes a prompt.',
      'Read the guidance that appears after your choice.'
    ],
    choices: [
      {
        label: 'A prompt is an instruction or question.',
        isBest: true,
        feedback: 'Yes. This is the best answer. A prompt is simply the instruction or question you give to AI.'
      },
      {
        label: 'A prompt is a password.',
        isBest: false,
        feedback: 'Not quite. A password lets you into an account. A prompt is the message or instruction you give to AI once you are using it.'
      },
      {
        label: 'A prompt is always technical code.',
        isBest: false,
        feedback: 'Not quite. A prompt can be plain English. You do not need to write code to use AI well.'
      },
      {
        label: 'A prompt is a file attachment.',
        isBest: false,
        feedback: 'Not quite. You can sometimes attach files to AI tools, but the prompt is the instruction or question you give.'
      }
    ],
    readyToContinue: 'Continue when the meaning of prompt feels clear enough.',
    takeaway: 'A prompt is your instruction to AI.'
  },
  {
    id: 'four-part-prompt',
    title: 'The four-part prompt',
    time: 'About 1 minute',
    body: [
      'A useful prompt often has four parts: task, context, format and tone.',
      'You do not always need all four, but they are a helpful checklist.'
    ],
    whyItMatters: 'This gives you a simple structure when you are not sure what to write.',
    actionTitle: 'Remember the four parts',
    actionSteps: [
      'Task: what do you want?',
      'Context: what should AI know?',
      'Format and tone: how should the answer be presented?'
    ],
    readyToContinue: 'Continue when the four-part idea feels clear enough.',
    takeaway: 'Task, context, format and tone make prompts clearer.'
  },
  {
    id: 'task',
    title: 'Part 1: task',
    time: 'About 1 minute',
    body: [
      'The task tells your AI assistant what you want it to do.',
      'For example: explain, summarise, draft, compare, plan or rewrite.'
    ],
    whyItMatters: 'If the task is vague, the answer may be vague too.',
    actionTitle: 'Choose a task word',
    actionSteps: [
      'Pick one task word from the options below.',
      'Choose the one most useful for your own situation.',
      'This choice will help build your prompt later.'
    ],
    choices: [
      { label: 'Explain', feedback: 'Good choice. Explain is useful when you want to understand something more clearly.', promptPart: 'Explain' },
      { label: 'Summarise', feedback: 'Good choice. Summarise is useful when you have too much information and want the main points.', promptPart: 'Summarise' },
      { label: 'Draft', feedback: 'Good choice. Draft is useful when you want AI to help you start a message or document.', promptPart: 'Draft' },
      { label: 'Plan', feedback: 'Good choice. Plan is useful when you want steps, options or a structure.', promptPart: 'Plan' }
    ],
    readyToContinue: 'Continue when you have chosen one task word.',
    takeaway: 'Start by saying what you want AI to do.'
  },
  {
    id: 'context',
    title: 'Part 2: context',
    time: 'About 1 minute',
    body: [
      'Context gives your AI assistant useful background.',
      'It might include who the message is for, what the situation is, or what you are trying to achieve.'
    ],
    whyItMatters: 'Context helps AI avoid guessing. A little background can make the answer much more relevant.',
    actionTitle: 'Choose a context',
    actionSteps: [
      'Choose one context option below.',
      'This is only a practice context.',
      'It will help build your prompt later.'
    ],
    choices: [
      { label: 'for someone who is new to the topic', feedback: 'Good. This tells AI to pitch the answer at beginner level.', promptPart: 'for someone who is new to the topic' },
      { label: 'for a colleague at work', feedback: 'Good. This gives AI a workplace audience and helps shape the wording.', promptPart: 'for a colleague at work' },
      { label: 'for a short everyday task', feedback: 'Good. This keeps the answer practical and low pressure.', promptPart: 'for a short everyday task' },
      { label: 'for me to act on later', feedback: 'Good. This gives AI a clear purpose and makes the result easier to use later.', promptPart: 'for me to act on later' }
    ],
    readyToContinue: 'Continue when you have chosen one piece of context.',
    takeaway: 'A little context helps AI give a better answer.'
  },
  {
    id: 'format',
    title: 'Part 3: format',
    time: 'About 1 minute',
    body: [
      'Format tells AI what shape the answer should take.',
      'You can ask for bullets, a short paragraph, a table, a checklist or a step-by-step guide.'
    ],
    whyItMatters: 'The right format can make an answer easier to use and less overwhelming.',
    actionTitle: 'Choose a format',
    actionSteps: [
      'Look at the formats below.',
      'Choose the one you would find easiest to use.',
      'This will become part of your prompt.'
    ],
    choices: [
      { label: 'Bullet points', feedback: 'Good. Bullet points are useful when you want something easy to scan.', promptPart: 'Use bullet points.' },
      { label: 'Short paragraph', feedback: 'Good. A short paragraph is useful when you want something more natural to read.', promptPart: 'Use one short paragraph.' },
      { label: 'Checklist', feedback: 'Good. A checklist is useful when you need practical actions.', promptPart: 'Make it a checklist.' },
      { label: 'Step-by-step guide', feedback: 'Good. Step-by-step is useful when you want a process to follow.', promptPart: 'Make it step by step.' }
    ],
    readyToContinue: 'Continue when you have chosen a preferred format.',
    takeaway: 'You can ask AI to present information in a useful shape.'
  },
  {
    id: 'tone',
    title: 'Part 4: tone',
    time: 'About 1 minute',
    body: [
      'Tone tells AI how the answer should sound.',
      'For example: friendly, professional, reassuring, plain English or concise.'
    ],
    whyItMatters: 'Tone matters when AI is helping you write something for another person.',
    actionTitle: 'Choose a tone',
    actionSteps: [
      'Think about who will read the output.',
      'Choose a tone from the options below.',
      'This will also become part of your prompt.'
    ],
    choices: [
      { label: 'Friendly', feedback: 'Good. Friendly works well for informal messages and approachable explanations.', promptPart: 'Keep the tone friendly.' },
      { label: 'Professional', feedback: 'Good. Professional works well for work messages and formal situations.', promptPart: 'Keep the tone professional.' },
      { label: 'Reassuring', feedback: 'Good. Reassuring works well when someone may feel unsure or anxious.', promptPart: 'Keep the tone reassuring.' },
      { label: 'Plain English', feedback: 'Good. Plain English helps keep the answer clear and accessible.', promptPart: 'Use plain English.' }
    ],
    readyToContinue: 'Continue when you have chosen a tone.',
    takeaway: 'You can tell AI how the answer should sound.'
  },
  {
    id: 'build-prompt',
    title: 'Build a prompt',
    time: 'About 2 minutes',
    body: [
      'Now we will put the four parts together.',
      'If you made choices in the previous steps, you should see a prompt beginning to form below.'
    ],
    whyItMatters: 'This turns separate choices into something practical you can use.',
    actionTitle: 'Review your prompt so far',
    actionSteps: [
      'Read the prompt summary if it appears.',
      'Notice how the choices created a clearer instruction.',
      'Use the model prompt below if you want another example.'
    ],
    examplePrompt: 'Draft a short, professional email to a colleague asking to rearrange a meeting. Keep it friendly and no more than five sentences.',
    readyToContinue: 'Continue when you can see how the four parts combine.',
    takeaway: 'A useful prompt gives AI enough direction to help.'
  },
  {
    id: 'compare-vague-clear',
    title: 'Compare vague and clear',
    time: 'About 1 minute',
    body: [
      'A vague prompt often leaves too much for AI to guess.',
      'A clearer prompt gives the task, context and preferred style.'
    ],
    whyItMatters: 'Comparison helps you recognise what makes a prompt easier for AI to answer well.',
    actionTitle: 'Choose the clearer prompt',
    actionSteps: [
      'Read the options below.',
      'Choose the prompt that gives clearer direction.',
      'Read the guidance that appears after your choice.'
    ],
    choices: [
      { label: 'Write something for work.', isBest: false, feedback: 'This is a start, but it is still quite vague. AI does not know what kind of work writing you need, who it is for, or how it should sound.' },
      { label: 'Draft a short professional message to my team about a changed meeting time.', isBest: true, feedback: 'Yes. This is the strongest option because it includes the task, audience, topic and tone.' },
      { label: 'Make it better.', isBest: false, feedback: 'This is too vague on its own. AI needs to know what “better” means, such as shorter, clearer, friendlier or more professional.' },
      { label: 'Help please.', isBest: false, feedback: 'This does not give AI enough direction. A useful prompt says what help you need.' }
    ],
    readyToContinue: 'Continue when the clearer prompt makes sense.',
    takeaway: 'Specific prompts usually get more useful answers.'
  },
  {
    id: 'follow-up-prompts',
    title: 'Follow-up prompts',
    time: 'About 1 minute',
    body: [
      'You can improve an answer by asking a follow-up prompt.',
      'This is often easier than trying to make the first prompt perfect.'
    ],
    whyItMatters: 'Follow-ups keep the process calm. You can shape the answer after you see it.',
    actionTitle: 'Try a follow-up',
    actionSteps: [
      'Use the prompt below after any AI answer.',
      'Notice how it changes the response.',
      'Decide whether the answer became easier to use.'
    ],
    examplePrompt: 'Make that clearer, shorter and easier to act on.',
    readyToContinue: 'Continue when you have tried or understood the follow-up prompt.',
    takeaway: 'You can improve an answer after it appears.'
  },
  {
    id: 'ask-for-options',
    title: 'Ask for options',
    time: 'About 1 minute',
    body: [
      'Sometimes it helps to ask AI for several options rather than one answer.',
      'This is useful when writing messages, planning tasks or choosing wording.'
    ],
    whyItMatters: 'Options give you choice and keep you in control.',
    actionTitle: 'Ask for three versions',
    actionSteps: [
      'Use the prompt below.',
      'Read the options.',
      'Choose the one closest to your own voice.'
    ],
    examplePrompt: 'Give me three different versions: one friendly, one professional and one very concise.',
    readyToContinue: 'Continue when you understand how asking for options can help.',
    takeaway: 'You do not have to accept the first version.'
  },
  {
    id: 'keep-your-voice',
    title: 'Keep your own voice',
    time: 'About 1 minute',
    body: [
      'AI can make writing too polished or too generic.',
      'You can ask it to keep your natural wording and only improve clarity.'
    ],
    whyItMatters: 'AI should support your voice, not replace it.',
    actionTitle: 'Use a voice-preserving prompt',
    actionSteps: [
      'Copy or adapt the prompt below.',
      'Use it when you want help improving something you have written.',
      'Check that the final wording still sounds like you.'
    ],
    examplePrompt: 'Improve this for clarity, but keep my natural wording and tone. Do not make it sound overly polished.',
    readyToContinue: 'Continue when you have read the voice-preserving prompt.',
    takeaway: 'You can ask AI to preserve your style.'
  },
  {
    id: 'prompt-safety',
    title: 'Prompt safely',
    time: 'About 1 minute',
    body: [
      'Be careful about what you paste into AI tools.',
      'Avoid sharing sensitive personal, client, financial, medical or confidential workplace information unless you know the tool is approved for that use.'
    ],
    whyItMatters: 'Good prompting includes good judgement about privacy and confidentiality.',
    actionTitle: 'Choose what needs care',
    actionSteps: [
      'Read the options below.',
      'Choose the one that should not be pasted into a public AI tool without approval.',
      'Read the guidance that appears after your choice.'
    ],
    choices: [
      { label: 'A made-up practice email.', isBest: false, feedback: 'This is usually low risk because it is made up. It is useful for practice.' },
      { label: 'A generic shopping list.', isBest: false, feedback: 'This is usually low risk because it does not contain sensitive personal or work information.' },
      { label: 'A client report with personal details.', isBest: true, feedback: 'Yes. This needs most care. Personal, client or confidential details should not be pasted into an AI tool unless that tool is approved for that use.' },
      { label: 'A public recipe.', isBest: false, feedback: 'This is usually low risk because the information is public and not personal.' }
    ],
    readyToContinue: 'Continue when the privacy point feels clear.',
    takeaway: 'Do not paste sensitive information into AI without knowing it is appropriate.'
  },
  {
    id: 'personal-prompt',
    title: 'Write your own prompt',
    time: 'About 2 minutes',
    body: [
      'Now write one prompt for something real but low risk.',
      'Use the four-part structure: task, context, format and tone. If you made earlier choices, your prompt so far will appear below.'
    ],
    whyItMatters: 'The skill becomes useful when you apply it to your own task.',
    actionTitle: 'Create your prompt',
    actionSteps: [
      'Use the prompt summary if it appears.',
      'Change any part that does not fit your real task.',
      'Ask one follow-up if the first answer is not quite right.'
    ],
    examplePrompt: 'Help me create a simple checklist for tidying my workspace. Keep it friendly, practical and no more than eight bullet points.',
    readyToContinue: 'Continue when you have written or adapted one prompt.',
    takeaway: 'A prompt is a starting point. It can be improved afterwards.'
  },
  {
    id: 'confidence-check',
    title: 'Confidence check',
    time: 'About 1 minute',
    body: [
      'This is not a test.',
      'Notice whether prompts feel a little easier to write now.'
    ],
    whyItMatters: 'Confidence grows when you can recognise progress, even if the skill is still new.',
    actionTitle: 'Choose where you are now',
    actionSteps: [
      'Select the option that fits best.',
      'Be honest rather than optimistic.',
      'Any answer is fine.'
    ],
    choices: [
      { label: 'I am still unsure.', feedback: 'That is fine. Repeat the four-part pattern: task, context, format and tone. You do not need to remember everything at once.' },
      { label: 'I understand the four-part structure.', feedback: 'Good. Understanding the structure is a strong first step.' },
      { label: 'I can write a simple prompt.', feedback: 'Good. A simple prompt is exactly what we are aiming for.' },
      { label: 'I could help someone else improve a prompt.', feedback: 'Excellent. Explaining it to someone else is a sign that the pattern is becoming familiar.' }
    ],
    readyToContinue: 'Continue when you have selected your current confidence level.',
    takeaway: 'Prompt confidence grows through practice.'
  },
  {
    id: 'summary',
    title: 'What you now know',
    time: 'About 1 minute',
    body: [
      'You now have a simple structure for better prompts: task, context, format and tone.',
      'You also know that follow-ups can improve an answer after it appears.'
    ],
    whyItMatters: 'A short summary helps you leave with a usable pattern rather than a long list to remember.',
    actionTitle: 'Choose one habit to keep',
    actionSteps: [
      'Read the options below.',
      'Choose one habit to use next time.',
      'Keep it simple.'
    ],
    choices: [
      { label: 'I will say the task clearly.', feedback: 'Good habit. A clear task gives AI a clear direction.' },
      { label: 'I will add a little context.', feedback: 'Good habit. Context helps AI avoid guessing.' },
      { label: 'I will ask for a useful format.', feedback: 'Good habit. Format can make an answer easier to use.' },
      { label: 'I will use follow-up prompts.', feedback: 'Good habit. Follow-ups are often where the answer becomes genuinely useful.' }
    ],
    readyToContinue: 'Continue when you have selected one habit to keep.',
    takeaway: 'Better prompts are clear, not complicated.'
  },
  {
    id: 'complete',
    title: 'Journey complete',
    time: 'About 45 seconds',
    body: [
      'You have completed Writing Better Prompts.',
      'You now have a calm structure for asking AI for clearer, more useful help.'
    ],
    whyItMatters: 'The aim is practical confidence. One better prompt can make AI feel much more useful.',
    actionTitle: 'Use it once this week',
    actionSteps: [
      'Choose one low-risk task.',
      'Write a prompt using task, context, format and tone.',
      'Ask one follow-up if the first answer is not quite right.'
    ],
    readyToContinue: 'Finish when you are ready to close this journey.',
    takeaway: 'Clear prompts help AI help you.'
  }
];
