# KeepCalmAI Architecture Handbook

## Purpose

This handbook is the source of truth for the KeepCalmAI product, learning experience and technical direction.

KeepCalmAI is not simply an AI course website. It is a personal AI learning platform designed to help people build confidence with AI through calm, accessible, guided and adaptive learning experiences.

## Product vision

KeepCalmAI helps people who feel overwhelmed, excluded or behind with AI become confident through small practical steps.

The product should feel like a calm coach sitting beside the learner. It should not feel like a conventional e-learning module, a test platform or a content library.

## Core promise

Calm Today. Confident Tomorrow.

This promise should guide every design, content and engineering decision.

## Current product pillars

### 1. Journey Player

The Journey Player is the core learning interface. It presents one focused step at a time and handles progress, choices, prompts, feedback and mentor guidance.

### 2. Learner Profile

The learner profile is the shared application state layer. It contains onboarding choices, journey progress, Learning DNA, accessibility preferences, prompt workspace and notebook entries.

### 3. Learning DNA

Learning DNA is a structured model of the learner’s confidence and developing skills. It is not an exam score. It exists to support adaptive explanations, recommendations and mentor behaviour.

Current dimensions:

- understandingAI
- promptSkills
- safetyAwareness
- confidence
- prefersBullets
- needsReassurance

Future dimensions may include:

- criticalThinking
- workplaceUse
- creativity
- accessibilityConfidence
- reflectionDepth
- practiceFrequency

### 4. Prompt Workspace

The Prompt Workspace is a persistent area where prompt components are assembled and reused.

Core prompt components:

- task
- context
- format
- tone
- generatedPrompt

The Prompt Workspace should eventually become a visible learner tool with prompt history, saved templates and favourite prompts.

### 5. Notebook

The notebook collects useful prompts, reflections, achievements and learning notes. It should become automatic rather than relying on the learner to remember to save everything.

### 6. AI Mentor

The AI Mentor currently provides rule-based contextual guidance. Over time it should become more adaptive, using learner profile, current step, selected choices, confidence and accessibility preferences.

### 7. Recommendations

The recommendation system should suggest the next best journey or activity based on progress, Learning DNA and learner goals.

### 8. Accessibility Engine

Accessibility is part of the platform architecture, not an optional mode. The system should adapt for cognitive accessibility, screen readers, keyboard use, low vision, dyslexia, ADHD, autism, cognitive fatigue and technology anxiety.

## Technical architecture

Current stack:

- Astro
- TypeScript
- localStorage-based learner state
- structured journey data
- reusable Astro components

Current core paths:

- src/components/JourneyPlayer.astro
- src/components/Dashboard.astro
- src/components/JourneyMap.astro
- src/components/ProgressResume.astro
- src/components/Achievements.astro
- src/lib/learnerProfile.ts
- src/lib/recommendations.ts
- src/lib/promptWorkspace.ts
- src/data/aiWithoutOverwhelm.ts
- src/data/writingBetterPrompts.ts

## Desired architecture direction

The platform should move towards this model:

1. Journey content is structured data.
2. The Journey Player renders steps from data.
3. Interactions update the Learner Profile.
4. Prompt choices update the Prompt Workspace.
5. Useful outputs are saved to the Notebook.
6. Learning DNA updates based on evidence.
7. Recommendations respond to Learning DNA and journey state.
8. The Mentor uses all of this context to guide the learner.

## State model

The preferred state object is LearnerProfile.

All new features should read and write through src/lib/learnerProfile.ts unless there is a clear reason not to.

Avoid introducing new scattered localStorage keys. Legacy keys may remain temporarily for migration support.

## Journey model

A journey is a guided learning route made of micro-steps.

Each step should include:

- id
- title
- time
- body
- whyItMatters
- actionTitle
- actionSteps
- choices, optional
- examplePrompt, optional
- readyToContinue
- takeaway

Choices may be simple strings or richer choice objects.

A richer choice object may include:

- label
- feedback
- isBest
- promptPart

## Learning principles

### One screen, one idea

Each screen should contain one core idea. If a screen teaches more than one thing, split it.

### One action

Each screen should ask the learner to do one achievable action.

### One success

Each screen should leave the learner with a small sense of progress.

### Feedback over judgement

When learners choose a weaker answer, explain why and guide them. Do not simply mark them wrong.

### Adaptive where useful

Adaptation should reduce load, increase relevance or improve confidence. Avoid adaptation for its own sake.

## Current journeys

### AI Without Overwhelm

Purpose: first calm introduction to AI.

Status: active.

### Writing Better Prompts

Purpose: teach task, context, format and tone as a simple prompt structure.

Status: active.

## Product roadmap summary

### Version 0.5

- first two journeys
- Journey Player
- dashboard
- visual journey map
- rule-based mentor
- progress saving

### Version 0.6

- learner profile refactor
- prompt workspace page
- notebook integration
- Learning DNA updates
- recommendations service

### Version 0.7

- adaptive feedback paths
- accessibility profile
- reflection journal
- missions

### Version 0.8

- AI sandbox
- prompt library
- saved prompt templates
- more journey types

### Version 0.9

- authoring toolkit
- cloud sync planning
- account model planning
- enterprise architecture planning

### Version 1.0

- public beta-ready experience
- complete foundations collection
- privacy and accessibility documentation
- production deployment

## Coding principles

- Prefer data-driven journeys.
- Avoid duplicating state logic in components.
- Keep learner-facing language calm and plain.
- Preserve accessibility as a default requirement.
- Use semantic HTML before adding complex custom widgets.
- Keep interactions keyboard accessible.
- Do not introduce unnecessary animation or visual noise.

## Codex working model

Codex should be given small, specific tasks with:

- goal
- relevant files
- constraints
- acceptance criteria
- testing steps

Codex should not be asked to broadly improve the platform without constraints. Product direction remains controlled by this handbook and by the KeepCalmAI design principles.
