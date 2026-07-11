import type { ChoiceOption, LessonStep } from '../types/journey';

const tryAnotherOption = ' Try another option if you would like to compare, or continue when you are ready.';

const choiceFeedback: Record<string, Record<string, ChoiceOption>> = {
  'read-answer': {
    'It made sense.': {
      label: 'It made sense.',
      isBest: true,
      feedback: 'Good. If the first answer made sense, you can treat that as a useful start. You can still ask a follow-up if you want it shorter, simpler or more practical.'
    },
    'It partly made sense.': {
      label: 'It partly made sense.',
      isBest: false,
      feedback: `That is a very normal response. A partly clear answer is a good reason to ask AI to explain it again in simpler words.${tryAnotherOption}`
    },
    'It was too technical.': {
      label: 'It was too technical.',
      isBest: false,
      feedback: `That is useful to notice. If an answer feels too technical, you can ask for plain English or a simple example.${tryAnotherOption}`
    },
    'I am not sure yet.': {
      label: 'I am not sure yet.',
      isBest: false,
      feedback: `That is fine. You do not have to judge the answer straight away. The next steps will show how to shape it gently.${tryAnotherOption}`
    }
  },
  'did-it-surprise-you': {
    'Yes, it was easier than expected.': {
      label: 'Yes, it was easier than expected.',
      isBest: true,
      feedback: 'Good. Noticing that it felt easier than expected can be an early confidence step.'
    },
    'A little.': {
      label: 'A little.',
      isBest: true,
      feedback: 'Good. A small shift still counts. Confidence often grows in small, practical moments.'
    },
    'Not really.': {
      label: 'Not really.',
      isBest: false,
      feedback: `That is okay. The aim is not to be impressed. The aim is to understand what AI can and cannot help with.${tryAnotherOption}`
    },
    'I am still unsure.': {
      label: 'I am still unsure.',
      isBest: false,
      feedback: `That is a valid place to be. Keep going one step at a time and use the guidance rather than trying to feel confident immediately.${tryAnotherOption}`
    }
  },
  'notice-improvement': {
    'Making it shorter helped most.': {
      label: 'Making it shorter helped most.',
      isBest: true,
      feedback: 'Good. Asking for a shorter answer is a practical way to reduce overwhelm.'
    },
    'Making it simpler helped most.': {
      label: 'Making it simpler helped most.',
      isBest: true,
      feedback: 'Good. Asking for simpler wording is a useful skill, especially when a topic feels new.'
    },
    'Asking for an example helped most.': {
      label: 'Asking for an example helped most.',
      isBest: true,
      feedback: 'Good. Examples often make abstract explanations easier to understand and use.'
    },
    'I am still working it out.': {
      label: 'I am still working it out.',
      isBest: false,
      feedback: `That is fine. You are still learning the pattern. The useful point is that you can ask AI to change its answer.${tryAnotherOption}`
    }
  },
  'compare-prompts': {
    'Help me write something.': {
      label: 'Help me write something.',
      isBest: false,
      feedback: `This is a start, but it leaves AI guessing what you want, who it is for and how it should sound.${tryAnotherOption}`
    },
    'Help me write a short, friendly note to a neighbour about a parcel delivery.': {
      label: 'Help me write a short, friendly note to a neighbour about a parcel delivery.',
      isBest: true,
      feedback: 'Yes. This gives AI a clear task, tone, length and situation, so it is more likely to produce a useful answer.'
    },
    'Make this better.': {
      label: 'Make this better.',
      isBest: false,
      feedback: `This can work as a follow-up, but on its own it does not say what better means. Shorter, clearer or friendlier would give more direction.${tryAnotherOption}`
    },
    'What do I do?': {
      label: 'What do I do?',
      isBest: false,
      feedback: `This is understandable, but too broad. AI will usually help more if you add the situation and the kind of help you need.${tryAnotherOption}`
    }
  },
  'when-to-check': {
    'Ideas for a birthday card message.': {
      label: 'Ideas for a birthday card message.',
      isBest: false,
      feedback: `This is usually low risk. You might edit the wording, but it does not normally need careful fact-checking.${tryAnotherOption}`
    },
    'A summary of a public webpage.': {
      label: 'A summary of a public webpage.',
      isBest: false,
      feedback: `This may be useful, but it is still worth checking against the webpage if accuracy matters.${tryAnotherOption}`
    },
    'Advice about a medical symptom.': {
      label: 'Advice about a medical symptom.',
      isBest: true,
      feedback: 'Yes. Medical information should be checked carefully with a reliable source or a qualified professional.'
    },
    'A list of possible meal ideas.': {
      label: 'A list of possible meal ideas.',
      isBest: false,
      feedback: `This is usually low risk, although allergies, medical needs or dietary requirements would still need care.${tryAnotherOption}`
    }
  },
  'confidence-now': {
    'I am still unsure.': {
      label: 'I am still unsure.',
      isBest: false,
      feedback: `That is okay. Being unsure does not mean you have failed. It simply means repetition and small practice will help.${tryAnotherOption}`
    },
    'I am starting to understand.': {
      label: 'I am starting to understand.',
      isBest: true,
      feedback: 'Good. Starting to understand is exactly the kind of progress this journey is designed to support.'
    },
    'I feel more confident.': {
      label: 'I feel more confident.',
      isBest: true,
      feedback: 'Good. Confidence grows when the tool starts to feel usable rather than mysterious.'
    },
    'I could show someone else one thing.': {
      label: 'I could show someone else one thing.',
      isBest: true,
      feedback: 'Excellent. Being able to show one small thing is a strong sign that the learning is becoming practical.'
    }
  },
  'journey-complete': {
    'I will try one simple prompt this week.': {
      label: 'I will try one simple prompt this week.',
      isBest: true,
      feedback: 'Good. One simple prompt is a realistic next step.'
    },
    'I will repeat this journey later.': {
      label: 'I will repeat this journey later.',
      isBest: true,
      feedback: 'Good. Repeating the journey is a sensible way to build confidence without pressure.'
    },
    'I will move to another beginner journey.': {
      label: 'I will move to another beginner journey.',
      isBest: true,
      feedback: 'Good. Moving on gently can help you keep momentum.'
    },
    'I will show someone else one thing I learnt.': {
      label: 'I will show someone else one thing I learnt.',
      isBest: true,
      feedback: 'Good. Sharing one small thing can help make the learning feel more real.'
    }
  }
};

function withFeedback(stepId: string, labels: string[]): ChoiceOption[] {
  return labels.map((label) => choiceFeedback[stepId]?.[label] || { label });
}

export const aiWithoutOverwhelm: LessonStep[] = [
  {
    id: 'welcome',
    type: 'welcome',
    title: 'Welcome',
    time: 'About 30 seconds',
    body: [
      'Welcome to KeepCalmAI.',
      'We are going to learn AI together, one small step at a time.'
    ],
    whyItMatters: 'The first aim is not to learn everything. The first aim is to make AI feel less intimidating.',
    actionTitle: 'Begin calmly',
    actionSteps: [
      'Take a breath.',
      'Read this screen without rushing.',
      'Continue when you feel ready to begin.'
    ],
    readyToContinue: 'Continue when you are ready to take the first small step.',
    takeaway: 'You do not need to know everything before you start.'
  },
  {
    id: 'not-behind',
    type: 'choice',
    title: 'You are not behind',
    time: 'About 45 seconds',
    body: [
      'Many people feel as though everyone else already understands AI.',
      'That is rarely true. Lots of people are only just starting.'
    ],
    whyItMatters: 'Feeling behind can stop people from trying. KeepCalmAI starts by removing that pressure.',
    actionTitle: 'Choose your starting point',
    actionSteps: [
      'Select the statement that feels closest to where you are today.',
      'There is no right or wrong choice.',
      'Your answer simply helps you notice your starting point.'
    ],
    choices: [
      'I have never used AI.',
      'I have tried AI once or twice.',
      'I use AI sometimes but do not feel confident.',
      'I already use AI and want clearer guidance.'
    ],
    readyToContinue: 'Continue when you have selected the statement that fits best.',
    takeaway: 'Confidence starts from an honest starting point.'
  },
  {
    id: 'what-we-will-do',
    type: 'orientation',
    title: 'What we will do together',
    time: 'About 1 minute',
    body: [
      'This journey takes about 25 to 30 minutes.',
      'You will learn what AI is, try your first prompt, ask follow-up questions and practise checking answers.'
    ],
    whyItMatters: 'Knowing what will happen reduces uncertainty. That makes the learning feel safer and more manageable.',
    actionTitle: 'Notice the structure',
    actionSteps: [
      'You will see one step at a time.',
      'Each step gives you one idea and one action.',
      'Your progress bar will show how far you have come.'
    ],
    readyToContinue: 'Continue when the structure feels clear enough.',
    takeaway: 'You will not be given a wall of information.'
  },
  {
    id: 'what-is-ai',
    type: 'learn',
    title: 'What is AI?',
    time: 'About 1 minute',
    body: [
      'AI stands for artificial intelligence.',
      'In simple terms, it is software that can respond to questions, recognise patterns, generate text, summarise information and help with tasks.'
    ],
    whyItMatters: 'A plain definition helps remove some of the mystery. AI is easier to approach when it is treated as a practical tool.',
    actionTitle: 'Read the simple definition',
    actionSteps: [
      'Read the definition above once.',
      'Do not worry about remembering the exact wording.',
      'Focus on the idea that AI can help with tasks.'
    ],
    readyToContinue: 'Continue when you can say, roughly, that AI is software that can help with tasks.',
    takeaway: 'AI is a tool, not magic.'
  },
  {
    id: 'ai-is-not-magic',
    type: 'safety',
    title: 'AI is not magic',
    time: 'About 1 minute',
    body: [
      'AI can seem impressive because it replies quickly and confidently.',
      'But it does not understand the world in the same way a person does. It produces responses based on patterns in information.'
    ],
    whyItMatters: 'This helps keep expectations realistic. AI can be useful without being perfect.',
    actionTitle: 'Hold two ideas together',
    actionSteps: [
      'AI can be helpful.',
      'AI can also be wrong.',
      'Both things can be true at the same time.'
    ],
    readyToContinue: 'Continue when that balance makes sense.',
    takeaway: 'Useful does not mean perfect.'
  },
  {
    id: 'ai-is-a-conversation',
    type: 'learn',
    title: 'AI is a conversation',
    time: 'About 1 minute',
    body: [
      'You do not have to get the perfect question first time.',
      'You can ask, read the answer, then ask another question to make it clearer, shorter or more useful.'
    ],
    whyItMatters: 'Many beginners think the first question has to be perfect. It does not. The conversation is where the learning happens.',
    actionTitle: 'Remember this pattern',
    actionSteps: [
      'Ask a question.',
      'Read the answer.',
      'Ask a follow-up question.'
    ],
    readyToContinue: 'Continue when you understand that you can ask more than once.',
    takeaway: 'You are not limited to the first answer.'
  },
  {
    id: 'already-used-ai',
    type: 'choice',
    title: 'You may have used AI already',
    time: 'About 1 minute',
    body: [
      'AI may feel new, but you may already use technology that makes suggestions.',
      'Examples include predictive text, route suggestions, music recommendations and photo grouping.'
    ],
    whyItMatters: 'Connecting AI to familiar tools can make it feel less alien.',
    actionTitle: 'Choose one familiar example',
    actionSteps: [
      'Look at the options below.',
      'Choose one example you recognise.',
      'Think about whether it has ever been useful.'
    ],
    choices: [
      'My phone suggests words when I type.',
      'A map app suggests a route.',
      'A music or video app recommends something.',
      'A photo app groups or recognises pictures.'
    ],
    readyToContinue: 'Continue when you have selected one familiar example.',
    takeaway: 'AI is easier to understand when it connects to something familiar.'
  },
  {
    id: 'small-reflection',
    type: 'reflection',
    reflectionPrompt: 'Does AI feel a little less unfamiliar now?',
    title: 'A small reflection',
    time: 'About 45 seconds',
    body: [
      'You have already covered something important.',
      'AI is not completely separate from everyday technology. It is another tool you can learn to use gradually.'
    ],
    whyItMatters: 'Reflection helps the learning settle before adding another idea.',
    actionTitle: 'Notice what changed',
    actionSteps: [
      'Think about whether AI feels slightly less unfamiliar now.',
      'If it does not, that is fine.',
      'The next steps will make it more practical.'
    ],
    readyToContinue: 'Continue when you are ready to try using AI directly.',
    takeaway: 'Small shifts in understanding count.'
  },
  {
    id: 'open-ai-assistant',
    type: 'try',
    title: 'Open your AI assistant',
    time: 'About 1 minute',
    body: [
      'Now we will try a simple interaction.',
      'Open the AI assistant you have available. This may be ChatGPT, Microsoft Copilot, Google Gemini, Claude or another similar tool.'
    ],
    whyItMatters: 'Confidence grows faster when you move from reading about AI to trying one small task.',
    actionTitle: 'Open the tool',
    actionSteps: [
      'Open your AI assistant in another tab, app or window.',
      'Do not worry if the screen looks different from someone else’s.',
      'Come back here when it is open.'
    ],
    readyToContinue: 'Continue when your AI assistant is open.',
    takeaway: 'The first practical step is simply opening the tool.'
  },
  {
    id: 'what-do-you-see',
    type: 'orientation',
    title: 'What do you see?',
    time: 'About 1 minute',
    body: [
      'Most AI assistants have a message box where you type a question or instruction.',
      'The exact layout may differ, but the basic idea is usually the same.'
    ],
    whyItMatters: 'Knowing what to look for reduces the feeling of being lost on a new screen.',
    actionTitle: 'Find the message box',
    actionSteps: [
      'Look for a box where you can type a message.',
      'It may say something like ask anything, message, or prompt.',
      'You do not need to type yet.'
    ],
    readyToContinue: 'Continue when you have found where to type.',
    takeaway: 'The message box is where the conversation starts.'
  },
  {
    id: 'message-box',
    type: 'learn',
    title: 'The message box',
    time: 'About 45 seconds',
    body: [
      'The message box is where you give AI an instruction.',
      'That instruction is often called a prompt.'
    ],
    whyItMatters: 'Understanding the message box makes the interface feel simpler. It is just the place where you ask for help.',
    actionTitle: 'Name the part you will use',
    actionSteps: [
      'Look again at the message box in your AI assistant.',
      'Think of it as the place where you start the conversation.',
      'You will use it in the next step.'
    ],
    readyToContinue: 'Continue when you know where the prompt will go.',
    takeaway: 'A prompt is the message you give to AI.'
  },
  {
    id: 'copy-first-prompt',
    type: 'prompt',
    title: 'Copy your first prompt',
    time: 'About 1 minute',
    body: [
      'We will start with a simple prompt.',
      'It asks AI to explain itself in plain language.'
    ],
    whyItMatters: 'A ready-made prompt removes the pressure of having to think of the perfect words.',
    actionTitle: 'Copy this prompt',
    actionSteps: [
      'Use the copy button below if available.',
      'If copying is not available, select the text manually.',
      'Paste it into your AI assistant on the next step.'
    ],
    examplePrompt: 'Explain artificial intelligence in one short paragraph for someone who has never used it before.',
    readyToContinue: 'Continue when the prompt is copied or you are ready to type it manually.',
    takeaway: 'You can start by copying a prompt. You do not have to invent one.'
  },
  {
    id: 'paste-first-prompt',
    type: 'prompt',
    title: 'Paste the prompt',
    time: 'About 1 minute',
    body: [
      'Now paste the prompt into your AI assistant.',
      'Then send it.'
    ],
    whyItMatters: 'This is your first meaningful AI interaction in the journey.',
    actionTitle: 'Send the prompt',
    actionSteps: [
      'Paste the prompt into the message box.',
      'Send the message.',
      'Wait for the answer to appear.'
    ],
    readyToContinue: 'Continue when you have sent the prompt and received an answer.',
    takeaway: 'You have now asked AI a real question.'
  },
  {
    id: 'read-answer',
    type: 'choice',
    title: 'Read the answer',
    time: 'About 1 minute',
    body: [
      'Read the answer you received.',
      'You do not need to judge it perfectly. Just notice whether it feels clear, confusing or somewhere in between.'
    ],
    whyItMatters: 'The first answer is only a starting point. You can improve it in the next steps.',
    actionTitle: 'Choose how it felt',
    actionSteps: [
      'Read the AI answer once.',
      'Do not worry if some parts are unclear.',
      'Choose the option that best describes it.'
    ],
    choices: withFeedback('read-answer', [
      'It made sense.',
      'It partly made sense.',
      'It was too technical.',
      'I am not sure yet.'
    ]),
    readyToContinue: 'Continue when you have chosen how the answer felt.',
    takeaway: 'It is normal if the first answer is not perfect.'
  },
  {
    id: 'did-it-surprise-you',
    type: 'choice',
    title: 'Did that surprise you?',
    time: 'About 45 seconds',
    body: [
      'People often expect AI to feel more complicated than it does.',
      'Sometimes the most useful moment is simply realising that you can ask a question and get something back.'
    ],
    whyItMatters: 'A small surprise can become confidence if it feels manageable.',
    actionTitle: 'Notice your reaction',
    actionSteps: [
      'Think about your first reaction to the answer.',
      'Choose the option closest to how you felt.',
      'There is no need to analyse it deeply.'
    ],
    choices: withFeedback('did-it-surprise-you', [
      'Yes, it was easier than expected.',
      'A little.',
      'Not really.',
      'I am still unsure.'
    ]),
    readyToContinue: 'Continue when you have noticed your reaction.',
    takeaway: 'Noticing your reaction is part of learning.'
  },
  {
    id: 'ai-is-not-google',
    type: 'learn',
    title: 'AI is not Google',
    time: 'About 1 minute',
    body: [
      'A search engine usually gives you links to explore.',
      'An AI assistant gives you a generated response. You can then ask it to change, explain or improve that response.'
    ],
    whyItMatters: 'This helps you use the right mental model. AI is more like a conversation than a list of search results.',
    actionTitle: 'Compare the difference',
    actionSteps: [
      'Search engines help you find sources.',
      'AI assistants help you generate and shape an answer.',
      'Both can be useful, but they work differently.'
    ],
    readyToContinue: 'Continue when the difference feels clear enough.',
    takeaway: 'AI is usually conversational rather than just a list of links.'
  },
  {
    id: 'ask-another-question',
    type: 'prompt',
    title: 'Ask another question',
    time: 'About 1 minute',
    body: [
      'You can ask a follow-up question without starting again.',
      'The AI will usually use the previous conversation as context.'
    ],
    whyItMatters: 'Follow-up questions are one of the easiest ways to make AI more useful.',
    actionTitle: 'Ask a follow-up',
    actionSteps: [
      'Return to your AI assistant.',
      'Use the prompt below as a follow-up.',
      'Read how the answer changes.'
    ],
    examplePrompt: 'Can you explain that again using a simple everyday example?',
    readyToContinue: 'Continue when you have asked one follow-up question.',
    takeaway: 'You can keep shaping the answer.'
  },
  {
    id: 'make-it-shorter',
    type: 'prompt',
    title: 'Make it shorter',
    time: 'About 1 minute',
    body: [
      'If an AI answer is too long, ask for a shorter version.',
      'This is often easier than trying to read through too much detail.'
    ],
    whyItMatters: 'Reducing length can reduce overwhelm, especially when you are learning something new.',
    actionTitle: 'Ask for a shorter answer',
    actionSteps: [
      'Use the prompt below.',
      'Compare the shorter answer with the earlier one.',
      'Notice whether it feels easier to read.'
    ],
    examplePrompt: 'Make that answer shorter and easier to scan.',
    readyToContinue: 'Continue when you have tried making the answer shorter.',
    takeaway: 'You can control the length of the answer.'
  },
  {
    id: 'make-it-simpler',
    type: 'prompt',
    title: 'Make it simpler',
    time: 'About 1 minute',
    body: [
      'If the answer uses words that feel too technical, ask for a simpler version.',
      'This is not cheating. It is good use of the tool.'
    ],
    whyItMatters: 'AI can adapt explanations to suit the reader. That is one of its most useful learning features.',
    actionTitle: 'Ask for plain English',
    actionSteps: [
      'Use the prompt below.',
      'Look for any words that become clearer.',
      'Decide whether the new answer is easier to understand.'
    ],
    examplePrompt: 'Explain that in plain English, without technical words.',
    readyToContinue: 'Continue when you have tried making the answer simpler.',
    takeaway: 'You can ask AI to meet you where you are.'
  },
  {
    id: 'ask-for-example',
    type: 'prompt',
    title: 'Ask for an example',
    time: 'About 1 minute',
    body: [
      'Examples often make abstract ideas easier to understand.',
      'If an answer feels vague, ask for an example from everyday life.'
    ],
    whyItMatters: 'A practical example can replace several paragraphs of explanation.',
    actionTitle: 'Ask for an everyday example',
    actionSteps: [
      'Use the prompt below.',
      'Read the example.',
      'Think about whether it makes the idea more concrete.'
    ],
    examplePrompt: 'Give me a simple everyday example of that.',
    readyToContinue: 'Continue when you have asked for an example.',
    takeaway: 'Examples make learning easier to apply.'
  },
  {
    id: 'notice-improvement',
    type: 'choice',
    title: 'Notice how the answer improves',
    time: 'About 1 minute',
    body: [
      'You have now asked AI to change the answer in several ways.',
      'Shorter. Simpler. More practical. This is how you guide the tool.'
    ],
    whyItMatters: 'The learner is not passive. You can shape the response until it is more useful.',
    actionTitle: 'Choose the most useful change',
    actionSteps: [
      'Think about the follow-up prompts you tried.',
      'Choose the one that helped most.',
      'Remember it for future use.'
    ],
    choices: withFeedback('notice-improvement', [
      'Making it shorter helped most.',
      'Making it simpler helped most.',
      'Asking for an example helped most.',
      'I am still working it out.'
    ]),
    readyToContinue: 'Continue when you have chosen the most useful change.',
    takeaway: 'Good AI use is often a conversation, not a single question.'
  },
  {
    id: 'what-is-prompt',
    type: 'learn',
    title: 'What is a prompt?',
    time: 'About 1 minute',
    body: [
      'A prompt is the instruction or question you give to AI.',
      'It can be short, but it should usually say what you want clearly.'
    ],
    whyItMatters: 'Understanding prompts gives you more control over the result.',
    actionTitle: 'Remember the simple formula',
    actionSteps: [
      'Say what you want.',
      'Add a little context.',
      'Say how you want the answer presented.'
    ],
    readyToContinue: 'Continue when the idea of a prompt feels clear enough.',
    takeaway: 'A prompt is simply your instruction to AI.'
  },
  {
    id: 'good-prompt',
    type: 'prompt',
    title: 'A useful prompt',
    time: 'About 1 minute',
    body: [
      'A useful prompt gives the AI enough information to help you well.',
      'It usually includes the task, the context and the style or length you want.'
    ],
    whyItMatters: 'Clearer prompts reduce frustration and usually produce better answers.',
    actionTitle: 'Look at this prompt',
    actionSteps: [
      'Read the example prompt below.',
      'Notice that it says the task.',
      'Notice that it says the tone and length.'
    ],
    examplePrompt: 'Help me write a short note to a neighbour. Make it friendly, clear and no more than four sentences.',
    readyToContinue: 'Continue when you can see why this prompt is useful.',
    takeaway: 'Useful prompts give clear direction.'
  },
  {
    id: 'poor-prompt',
    type: 'prompt',
    title: 'A vague prompt',
    time: 'About 1 minute',
    body: [
      'A vague prompt gives AI very little to work with.',
      'For example, writing only “help me” may produce a vague or unhelpful answer.'
    ],
    whyItMatters: 'If the instruction is unclear, the answer may be unclear too.',
    actionTitle: 'Compare the vague version',
    actionSteps: [
      'Read the vague prompt below.',
      'Notice what information is missing.',
      'Think about how you might improve it.'
    ],
    examplePrompt: 'Help me write something.',
    readyToContinue: 'Continue when you can see why this is less helpful.',
    takeaway: 'Vague prompts often lead to vague answers.'
  },
  {
    id: 'compare-prompts',
    type: 'choice',
    title: 'Compare two prompts',
    time: 'About 1 minute',
    body: [
      'Now compare the two prompt styles.',
      'One gives clear direction. One leaves too much for AI to guess.'
    ],
    whyItMatters: 'Comparing examples helps you recognise what makes a prompt stronger.',
    actionTitle: 'Choose the better prompt',
    actionSteps: [
      'Look at the options below.',
      'Choose the prompt that is more likely to give a useful answer.',
      'Do not overthink it.'
    ],
    choices: withFeedback('compare-prompts', [
      'Help me write something.',
      'Help me write a short, friendly note to a neighbour about a parcel delivery.',
      'Make this better.',
      'What do I do?'
    ]),
    readyToContinue: 'Continue when you have selected the stronger prompt.',
    takeaway: 'Specific usually beats vague.'
  },
  {
    id: 'write-your-own',
    type: 'prompt',
    title: 'Write your own prompt',
    time: 'About 2 minutes',
    body: [
      'Now think of one simple task where AI could help you.',
      'Keep it low pressure. A note, a list, a plan or a simple explanation is enough.'
    ],
    whyItMatters: 'Writing your own prompt turns the learning into something personally useful.',
    actionTitle: 'Build a prompt in three parts',
    actionSteps: [
      'Say what you want help with.',
      'Add one piece of context.',
      'Say how short, simple or formal you want the answer to be.'
    ],
    examplePrompt: 'Help me plan three simple meals for this week. Keep them quick, affordable and easy to cook.',
    readyToContinue: 'Continue when you have written or adapted one prompt for yourself.',
    takeaway: 'Your own prompt does not need to be perfect. It just needs to start the conversation.'
  },
  {
    id: 'ai-can-be-wrong',
    type: 'safety',
    title: 'AI can be wrong',
    time: 'About 1 minute',
    body: [
      'AI can sound confident even when it is wrong, incomplete or out of date.',
      'That does not mean it is useless. It means you need to know when to check.'
    ],
    whyItMatters: 'Safe AI use depends on judgement. Confidence should include knowing the limits.',
    actionTitle: 'Remember the safety rule',
    actionSteps: [
      'Use AI for help, ideas and drafts.',
      'Check important information before relying on it.',
      'Be especially careful with health, money, law, safety and work decisions.'
    ],
    readyToContinue: 'Continue when the safety rule feels clear.',
    takeaway: 'AI can help, but important answers need checking.'
  },
  {
    id: 'when-to-check',
    type: 'safety',
    title: 'When should you check?',
    time: 'About 1 minute',
    body: [
      'Some AI answers are low risk. Others should be checked carefully.',
      'A recipe idea is usually low risk. Medical, legal or financial advice is not.'
    ],
    whyItMatters: 'Knowing when to check helps you use AI confidently and safely.',
    actionTitle: 'Choose the answers you would check',
    actionSteps: [
      'Read the options below.',
      'Choose the one that most clearly needs checking.',
      'Think about why it matters.'
    ],
    choices: withFeedback('when-to-check', [
      'Ideas for a birthday card message.',
      'A summary of a public webpage.',
      'Advice about a medical symptom.',
      'A list of possible meal ideas.'
    ]),
    readyToContinue: 'Continue when you have selected the option that needs checking most.',
    takeaway: 'The more important the decision, the more carefully you should check.'
  },
  {
    id: 'human-judgement',
    type: 'safety',
    title: 'Human judgement matters',
    time: 'About 1 minute',
    body: [
      'AI can suggest, draft, summarise and explain.',
      'You decide what is suitable, accurate and appropriate.'
    ],
    whyItMatters: 'This keeps the learner in control. AI should support judgement, not replace it.',
    actionTitle: 'Use this simple question',
    actionSteps: [
      'When AI gives an answer, ask yourself: does this make sense?',
      'Ask: would I act on this without checking?',
      'Ask: what might be missing?'
    ],
    examplePrompt: 'What should I check before trusting this answer?',
    readyToContinue: 'Continue when you can name one thing you might check.',
    takeaway: 'You are still the decision maker.'
  },
  {
    id: 'safety-reflection',
    type: 'reflection',
    reflectionPrompt: 'What is one safety rule you want to remember?',
    title: 'A safety reflection',
    time: 'About 1 minute',
    body: [
      'You do not need to be afraid of AI.',
      'You simply need a habit of checking when the answer matters.'
    ],
    whyItMatters: 'This balances confidence and caution. Both are needed for responsible use.',
    actionTitle: 'Choose the statement you want to remember',
    actionSteps: [
      'Read the options below.',
      'Choose the one that feels most useful to remember.',
      'Keep it as your personal safety rule.'
    ],
    choices: [
      'AI can help me start.',
      'Important answers should be checked.',
      'I can ask follow-up questions.',
      'I stay in control.'
    ],
    readyToContinue: 'Continue when you have chosen your safety reminder.',
    takeaway: 'Calm confidence includes knowing when to pause.'
  },
  {
    id: 'you-have-learnt',
    type: 'learn',
    title: 'You have learnt a lot',
    time: 'About 45 seconds',
    body: [
      'You have already done several important things.',
      'You opened AI, asked a prompt, shaped the answer and thought about checking it.'
    ],
    whyItMatters: 'Progress is easy to miss when learning feels new. This step makes that progress visible.',
    actionTitle: 'Notice your progress',
    actionSteps: [
      'Look at the progress bar.',
      'Notice that you have moved through many small steps.',
      'Let that count.'
    ],
    readyToContinue: 'Continue when you have noticed the progress you have made.',
    takeaway: 'Confidence grows through repeated small steps.'
  },
  {
    id: 'confidence-now',
    type: 'confidence',
    title: 'Where do you feel now?',
    time: 'About 1 minute',
    body: [
      'This is not a test.',
      'It is just a chance to notice whether anything feels clearer than it did at the start.'
    ],
    whyItMatters: 'Confidence grows when people can recognise movement, even if they are not fully confident yet.',
    actionTitle: 'Choose your confidence level',
    actionSteps: [
      'Choose the option that fits best.',
      'Be honest rather than optimistic.',
      'Any answer is acceptable.'
    ],
    choices: withFeedback('confidence-now', [
      'I am still unsure.',
      'I am starting to understand.',
      'I feel more confident.',
      'I could show someone else one thing.'
    ]),
    readyToContinue: 'Continue when you have selected your current confidence level.',
    takeaway: 'Noticing progress is part of building confidence.'
  },
  {
    id: 'try-tomorrow',
    type: 'choice',
    title: 'One thing to try tomorrow',
    time: 'About 1 minute',
    body: [
      'The best next step is small and practical.',
      'Choose one low-pressure way to use AI again.'
    ],
    whyItMatters: 'A small repeat use helps turn this journey from something you watched into something you can use.',
    actionTitle: 'Choose a next step',
    actionSteps: [
      'Choose one option below.',
      'Pick something realistic.',
      'Do it when you have a quiet moment.'
    ],
    choices: [
      'Ask AI to explain something I am interested in.',
      'Ask AI to help me write a short message.',
      'Ask AI to make a simple plan.',
      'Repeat this journey before trying more.'
    ],
    readyToContinue: 'Continue when you have chosen one small next step.',
    takeaway: 'The next step should feel achievable, not impressive.'
  },
  {
    id: 'summary',
    type: 'summary',
    title: 'What you now know',
    time: 'About 1 minute',
    body: [
      'AI is software that can help with questions, writing, planning, summaries and ideas.',
      'You can ask follow-up questions, ask for simpler answers and check important information before relying on it.'
    ],
    whyItMatters: 'A short summary helps close the journey without adding more to remember.',
    actionTitle: 'Read the summary once',
    actionSteps: [
      'Read the summary above.',
      'Notice one idea that feels useful.',
      'Do not try to memorise everything.'
    ],
    readyToContinue: 'Continue when one useful idea stands out.',
    takeaway: 'You now have a basic pattern for using AI calmly.'
  },
  {
    id: 'journey-complete',
    type: 'complete',
    nextButtonLabel: 'Finish journey',
    title: 'Journey complete',
    time: 'About 1 minute',
    body: [
      'You have just done something that may have felt difficult half an hour ago.',
      'That is how confidence grows. Not by learning everything, but by taking one small step at a time.'
    ],
    whyItMatters: 'Ending positively helps the learner leave with confidence rather than a list of things they still do not know.',
    actionTitle: 'Finish calmly',
    actionSteps: [
      'Notice that you completed the journey.',
      'Choose one small way to use AI again.',
      'Finish without adding more pressure.'
    ],
    choices: withFeedback('journey-complete', [
      'I will try one simple prompt this week.',
      'I will repeat this journey later.',
      'I will move to another beginner journey.',
      'I will show someone else one thing I learnt.'
    ]),
    readyToContinue: 'Select Finish journey when you are ready to close this journey.',
    takeaway: 'Calm today. Confident tomorrow.'
  }
];
