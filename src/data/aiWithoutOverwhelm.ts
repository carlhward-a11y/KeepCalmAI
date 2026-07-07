export interface LessonStep {
  id: string;
  title: string;
  time: string;
  body: string[];
  whyItMatters: string;
  actionTitle: string;
  actionSteps: string[];
  examplePrompt?: string;
  readyToContinue: string;
  takeaway: string;
}

export const aiWithoutOverwhelm: LessonStep[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    time: '2 minutes',
    body: [
      'You do not need technical knowledge to start using AI.',
      'This journey introduces AI in short, calm steps. Each step gives you one thing to understand and one thing to try.'
    ],
    whyItMatters: 'Many people feel they are already behind with AI. This first step is designed to make the starting point feel manageable.',
    actionTitle: 'Choose your starting point',
    actionSteps: [
      'Read the four statements below.',
      'Choose the one that feels closest to your current confidence.',
      'Keep that answer in mind as you move through the journey.'
    ],
    examplePrompt: 'I have never used AI. I want a calm beginner introduction.',
    readyToContinue: 'Continue when you know which confidence statement fits you best.',
    takeaway: 'You are not behind. You are starting from where you are.'
  },
  {
    id: 'what-is-ai',
    title: 'What is AI?',
    time: '3 minutes',
    body: [
      'AI stands for artificial intelligence.',
      'In everyday terms, it means computer systems that can respond to questions, recognise patterns, generate text, summarise information or help with tasks.'
    ],
    whyItMatters: 'A simple definition helps remove some of the mystery. AI is easier to approach when it is treated as a practical tool rather than something magical.',
    actionTitle: 'Ask for a simple explanation',
    actionSteps: [
      'Open the AI assistant you have available, such as ChatGPT, Copilot, Gemini or Claude.',
      'Copy the example prompt below.',
      'Read the answer and notice whether it feels clear or too technical.'
    ],
    examplePrompt: 'Explain artificial intelligence in one short paragraph for someone who has never used it before.',
    readyToContinue: 'Continue when you have read one short explanation of AI.',
    takeaway: 'AI is a practical tool. You remain responsible for deciding whether the result is useful.'
  },
  {
    id: 'familiar-technology',
    title: 'Familiar technology',
    time: '3 minutes',
    body: [
      'AI feels less strange when we connect it to tools people already know.',
      'Some tools can suggest words, routes, songs, products or photo groups. These are not all the same as modern AI chat tools, but they show how technology can use patterns to make suggestions.'
    ],
    whyItMatters: 'Starting with familiar examples makes AI feel less separate from everyday life.',
    actionTitle: 'Spot one familiar example',
    actionSteps: [
      'Think about your phone, email, maps, shopping apps, music apps or photo library.',
      'Choose one place where a tool suggests something to you.',
      'Ask whether the suggestion was useful, partly useful or not useful.'
    ],
    readyToContinue: 'Continue when you can name one familiar example of technology making a suggestion.',
    takeaway: 'AI is easier to understand when it is connected to familiar technology.'
  },
  {
    id: 'ai-helper',
    title: 'AI as a helper',
    time: '3 minutes',
    body: [
      'AI can help with thinking, writing, planning and checking ideas.',
      'It works best when you treat it as a helpful tool, not as a final authority.'
    ],
    whyItMatters: 'This keeps you in control. AI can make suggestions, but you decide what is useful, accurate and appropriate.',
    actionTitle: 'Ask for useful ideas',
    actionSteps: [
      'Choose a simple everyday area, such as planning meals, writing a note or organising a list.',
      'Ask the AI for three ideas only.',
      'Pick one idea that seems useful and ignore anything that does not fit.'
    ],
    examplePrompt: 'Give me three simple ideas for using AI in everyday life. Keep them practical and easy to try.',
    readyToContinue: 'Continue when you have seen at least one useful idea.',
    takeaway: 'AI can support you, but it should not replace your judgement.'
  },
  {
    id: 'first-conversation',
    title: 'Your first conversation',
    time: '4 minutes',
    body: [
      'Using AI can feel easier if you treat it like a conversation.',
      'You do not need to find the perfect wording at the start. You can ask a follow-up question if the first answer is not clear.'
    ],
    whyItMatters: 'Many beginners think they only get one chance to ask the question correctly. In practice, the follow-up question is often where the answer becomes useful.',
    actionTitle: 'Ask a follow-up question',
    actionSteps: [
      'Use an answer you already received in this journey.',
      'Ask the AI to explain it again in a different way.',
      'Compare the first answer with the second one.'
    ],
    examplePrompt: 'Can you explain that again using a simple everyday example?',
    readyToContinue: 'Continue when you have asked one follow-up question.',
    takeaway: 'You can ask follow-up questions. You are not limited to the first answer.'
  },
  {
    id: 'prompt-basics',
    title: 'Prompt basics',
    time: '4 minutes',
    body: [
      'A prompt is the question or instruction you give to an AI tool.',
      'Good prompts are usually clear and specific. A useful prompt often says what you want, gives a little context and explains the style you need.'
    ],
    whyItMatters: 'A clearer prompt usually gives a more useful answer. It also reduces frustration because the AI has more information to work with.',
    actionTitle: 'Build one useful prompt',
    actionSteps: [
      'Choose a small task you would genuinely like help with.',
      'Say what the task is.',
      'Add who it is for or what tone you need.',
      'Ask for a short answer first.'
    ],
    examplePrompt: 'Help me write a short note to a neighbour. Make it friendly, clear and no more than four sentences.',
    readyToContinue: 'Continue when you have written or copied one complete prompt.',
    takeaway: 'You can change or improve a prompt after you see the first answer.'
  },
  {
    id: 'checking-answers',
    title: 'Checking answers',
    time: '4 minutes',
    body: [
      'AI can be useful, but it can also make mistakes.',
      'It may sound confident even when the answer is incomplete, out of date or wrong.'
    ],
    whyItMatters: 'Checking is one of the most important AI habits. It helps you use AI safely without treating every answer as fact.',
    actionTitle: 'Practise a checking question',
    actionSteps: [
      'Look at an answer from an AI tool.',
      'Ask what might need checking.',
      'Think about whether the topic is low risk or important enough to verify elsewhere.'
    ],
    examplePrompt: 'What should I check before trusting this answer?',
    readyToContinue: 'Continue when you can name one thing you would check before relying on an AI answer.',
    takeaway: 'AI is useful, but important answers should still be checked.'
  },
  {
    id: 'checkpoint',
    title: 'Checkpoint',
    time: '3 minutes',
    body: [
      'This is a pause point, not a test.',
      'The aim is to notice what feels clearer and what still feels uncertain.'
    ],
    whyItMatters: 'Confidence grows when learners can pause and recognise progress without being judged.',
    actionTitle: 'Choose your confidence level',
    actionSteps: [
      'Choose one option: still unsure, starting to understand, more confident, or able to show someone else.',
      'If you are still unsure, repeat one earlier step.',
      'If you feel more confident, move on to the finish step.'
    ],
    readyToContinue: 'Continue when you have chosen the confidence level that best fits how you feel now.',
    takeaway: 'Confidence grows through small repeated steps.'
  },
  {
    id: 'finish',
    title: 'Finish',
    time: '3 minutes',
    body: [
      'You have reached the end of this first journey.',
      'You have started to learn what AI is, how to ask a first question, how to follow up and why checking matters.'
    ],
    whyItMatters: 'Finishing with one practical next step helps the learner leave with momentum rather than more information to absorb.',
    actionTitle: 'Choose one next step',
    actionSteps: [
      'Ask AI for a short explanation of something you are interested in.',
      'Ask it to make the answer clearer or more practical.',
      'Check anything important before acting on it.'
    ],
    examplePrompt: 'Explain one thing I am interested in using plain English. Then give me one practical next step.',
    readyToContinue: 'You have completed this journey when you have chosen one small way to use AI again.',
    takeaway: 'One small useful step is enough to begin.'
  }
];
