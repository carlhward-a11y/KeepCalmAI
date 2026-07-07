export interface LessonStep {
  id: string;
  title: string;
  time: string;
  body: string[];
  activityTitle: string;
  activityText: string;
  takeaway: string;
}

export const aiWithoutOverwhelm: LessonStep[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    time: '2 minutes',
    body: [
      'You do not need technical knowledge to start using AI.',
      'This journey introduces AI in short, calm steps.'
    ],
    activityTitle: 'Try this',
    activityText: 'Choose the statement that feels closest to where you are now.',
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
    activityTitle: 'Try this',
    activityText: 'Ask an AI tool to explain artificial intelligence in one short paragraph for a beginner.',
    takeaway: 'AI is a practical tool. You remain responsible for deciding whether the result is useful.'
  },
  {
    id: 'familiar-technology',
    title: 'Familiar technology',
    time: '3 minutes',
    body: [
      'AI feels less strange when we connect it to tools people already know.',
      'Some tools can suggest words, routes, songs, products or photo groups.'
    ],
    activityTitle: 'Try this',
    activityText: 'Think of one digital tool that gives you a suggestion. Was the suggestion useful?',
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
    activityTitle: 'Try this',
    activityText: 'Ask an AI tool for three simple ideas for using AI in everyday life.',
    takeaway: 'AI can support you, but it should not replace your judgement.'
  },
  {
    id: 'first-conversation',
    title: 'Your first conversation',
    time: '4 minutes',
    body: [
      'Using AI can feel easier if you treat it like a conversation.',
      'You do not need to find the perfect wording at the start.'
    ],
    activityTitle: 'Try this',
    activityText: 'Ask a follow-up question such as: can you explain that using a simple everyday example?',
    takeaway: 'You can ask follow-up questions. You are not limited to the first answer.'
  },
  {
    id: 'prompt-basics',
    title: 'Prompt basics',
    time: '4 minutes',
    body: [
      'A prompt is the question or instruction you give to an AI tool.',
      'Good prompts are usually clear and specific.'
    ],
    activityTitle: 'Try this',
    activityText: 'Write one short prompt about a task you would like help with.',
    takeaway: 'You can change or improve a prompt after you see the first answer.'
  },
  {
    id: 'checking-answers',
    title: 'Checking answers',
    time: '4 minutes',
    body: [
      'AI can be useful, but it can also make mistakes.',
      'Check AI answers when the topic involves money, health, law, safety, work decisions or anything important.'
    ],
    activityTitle: 'Try this',
    activityText: 'Ask: what should I check before trusting this answer?',
    takeaway: 'AI is useful, but important answers should still be checked.'
  },
  {
    id: 'checkpoint',
    title: 'Checkpoint',
    time: '3 minutes',
    body: [
      'This is a pause point, not a test.',
      'Notice what feels clearer and what still feels uncertain.'
    ],
    activityTitle: 'Choose one option',
    activityText: 'I am still unsure. I am starting to understand. I feel more confident. I could show someone else.',
    takeaway: 'Confidence grows through small repeated steps.'
  },
  {
    id: 'finish',
    title: 'Finish',
    time: '3 minutes',
    body: [
      'You have reached the end of this first journey.',
      'You have started to learn what AI is and how to ask a first question.'
    ],
    activityTitle: 'Try one small task',
    activityText: 'Ask an AI tool for a short explanation of something you are interested in. Then ask it to make the answer clearer.',
    takeaway: 'One small useful step is enough to begin.'
  }
];
