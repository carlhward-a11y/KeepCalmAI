const aiWithoutOverwhelmFeedback = {
  'read-answer': {
    'It made sense.': {
      isBest: true,
      feedback: 'Good. If the first answer made sense, you can treat that as a useful start. You can still ask a follow-up if you want it shorter, simpler or more practical.'
    },
    'It partly made sense.': {
      isBest: false,
      feedback: 'That is a very normal response. A partly clear answer is a good reason to ask AI to explain it again in simpler words.'
    },
    'It was too technical.': {
      isBest: false,
      feedback: 'That is useful to notice. If an answer feels too technical, you can ask for plain English or a simple example.'
    },
    'I am not sure yet.': {
      isBest: false,
      feedback: 'That is fine. You do not have to judge the answer straight away. The next steps will show how to shape it gently.'
    }
  },
  'did-it-surprise-you': {
    'Yes, it was easier than expected.': {
      isBest: true,
      feedback: 'Good. Noticing that it felt easier than expected can be an early confidence step.'
    },
    'A little.': {
      isBest: true,
      feedback: 'Good. A small shift still counts. Confidence often grows in small, practical moments.'
    },
    'Not really.': {
      isBest: false,
      feedback: 'That is okay. The aim is not to be impressed. The aim is to understand what AI can and cannot help with.'
    },
    'I am still unsure.': {
      isBest: false,
      feedback: 'That is a valid place to be. Keep going one step at a time and use the guidance rather than trying to feel confident immediately.'
    }
  },
  'notice-improvement': {
    'Making it shorter helped most.': {
      isBest: true,
      feedback: 'Good. Asking for a shorter answer is a practical way to reduce overwhelm.'
    },
    'Making it simpler helped most.': {
      isBest: true,
      feedback: 'Good. Asking for simpler wording is a useful skill, especially when a topic feels new.'
    },
    'Asking for an example helped most.': {
      isBest: true,
      feedback: 'Good. Examples often make abstract explanations easier to understand and use.'
    },
    'I am still working it out.': {
      isBest: false,
      feedback: 'That is fine. You are still learning the pattern. The useful point is that you can ask AI to change its answer.'
    }
  },
  'compare-prompts': {
    'Help me write something.': {
      isBest: false,
      feedback: 'This is a start, but it leaves AI guessing what you want, who it is for and how it should sound.'
    },
    'Help me write a short, friendly note to a neighbour about a parcel delivery.': {
      isBest: true,
      feedback: 'Yes. This gives AI a clear task, tone, length and situation, so it is more likely to produce a useful answer.'
    },
    'Make this better.': {
      isBest: false,
      feedback: 'This can work as a follow-up, but on its own it does not say what better means. Shorter, clearer or friendlier would give more direction.'
    },
    'What do I do?': {
      isBest: false,
      feedback: 'This is understandable, but too broad. AI will usually help more if you add the situation and the kind of help you need.'
    }
  },
  'when-to-check': {
    'Ideas for a birthday card message.': {
      isBest: false,
      feedback: 'This is usually low risk. You might edit the wording, but it does not normally need careful fact-checking.'
    },
    'A summary of a public webpage.': {
      isBest: false,
      feedback: 'This may be useful, but it is still worth checking against the webpage if accuracy matters.'
    },
    'Advice about a medical symptom.': {
      isBest: true,
      feedback: 'Yes. Medical information should be checked carefully with a reliable source or a qualified professional.'
    },
    'A list of possible meal ideas.': {
      isBest: false,
      feedback: 'This is usually low risk, although allergies, medical needs or dietary requirements would still need care.'
    }
  },
  'confidence-now': {
    'I am still unsure.': {
      isBest: false,
      feedback: 'That is okay. Being unsure does not mean you have failed. It simply means repetition and small practice will help.'
    },
    'I am starting to understand.': {
      isBest: true,
      feedback: 'Good. Starting to understand is exactly the kind of progress this journey is designed to support.'
    },
    'I feel more confident.': {
      isBest: true,
      feedback: 'Good. Confidence grows when the tool starts to feel usable rather than mysterious.'
    },
    'I could show someone else one thing.': {
      isBest: true,
      feedback: 'Excellent. Being able to show one small thing is a strong sign that the learning is becoming practical.'
    }
  },
  'journey-complete': {
    'I will try one simple prompt this week.': {
      isBest: true,
      feedback: 'Good. One simple prompt is a realistic next step.'
    },
    'I will repeat this journey later.': {
      isBest: true,
      feedback: 'Good. Repeating the journey is a sensible way to build confidence without pressure.'
    },
    'I will move to another beginner journey.': {
      isBest: true,
      feedback: 'Good. Moving on gently can help you keep momentum.'
    },
    'I will show someone else one thing I learnt.': {
      isBest: true,
      feedback: 'Good. Sharing one small thing can help make the learning feel more real.'
    }
  }
};

function getChoiceFeedback(input) {
  const player = document.querySelector('.player');
  if (!player || player.getAttribute('data-journey') !== 'ai-without-overwhelm') return null;

  const stepId = input.name.replace('choice-', '');
  return aiWithoutOverwhelmFeedback[stepId]?.[input.value] || null;
}

function applyFeedback(input) {
  const feedback = getChoiceFeedback(input);
  const feedbackBox = document.querySelector('#choice-feedback');
  if (!feedback || !feedbackBox) return;

  const tryAgain = feedback.isBest
    ? ''
    : ' Try another option if you would like to compare, or continue when you are ready.';

  feedbackBox.hidden = false;
  feedbackBox.textContent = `${feedback.feedback}${tryAgain}`;
  feedbackBox.classList.toggle('is-best', feedback.isBest === true);
  feedbackBox.classList.toggle('is-developing', feedback.isBest !== true);
}

document.addEventListener('change', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  if (target.type !== 'radio' || !target.name.startsWith('choice-')) return;

  window.setTimeout(() => applyFeedback(target), 0);
});
