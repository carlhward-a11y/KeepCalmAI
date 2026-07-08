# KeepCalmAI Developer Guide

## Purpose

This guide explains how to run, validate and safely extend KeepCalmAI Version 1.

KeepCalmAI is a calm, accessible AI learning platform. Development decisions should protect that purpose. The product should remain clear, reassuring and practical for people who may feel overwhelmed by AI.

## Current stack

- Astro
- TypeScript
- localStorage for Version 1 learner state
- Data-driven journey content
- Reusable Astro components

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:4321/
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Validation

Run journey validation:

```bash
npm run validate:journeys
```

This checks the journey data files in `src/data` for:

- required step fields
- duplicate step IDs
- missing journey exports
- choice feedback consistency
- likely prompt-building mistakes

This should be run before committing journey changes.

## Core folders

```text
src/components
```

Reusable UI and learning components.

```text
src/data
```

Journey data. Journeys should remain data-driven wherever possible.

```text
src/layouts
```

Shared page layout.

```text
src/lib
```

Shared state and service logic.

```text
src/pages
```

Astro routes.

```text
src/styles
```

Global and feature-specific CSS.

```text
scripts
```

Validation and maintenance scripts.

```text
docs
```

Product, architecture, roadmap and developer documentation.

## State model

Version 1 stores learner state in localStorage under:

```text
keepcalmai:learner-profile
```

New work should avoid creating extra scattered localStorage keys unless there is a clear migration reason.

The learner profile currently includes:

- onboarding
- journeys
- promptWorkspace
- notebook
- accessibility
- learningDNA

Legacy onboarding state may still be written to:

```text
keepcalmai:onboarding
```

This exists for compatibility while the migration is completed.

## Journey data principles

A journey is made from small steps. Each step should have one clear idea, one action and one takeaway.

Required fields:

- id
- title
- time
- body
- whyItMatters
- actionTitle
- actionSteps
- readyToContinue
- takeaway

Optional fields:

- choices
- examplePrompt

Choice objects may include:

- label
- feedback
- isBest
- promptPart

A weaker answer must still be useful. Feedback should explain, not judge.

## Accessibility requirements

Every change should protect:

- keyboard access
- visible focus
- semantic HTML
- plain language
- responsive layout
- sufficient colour contrast
- screen reader sensible structure

The platform should not depend on hover, colour alone or fast reactions.

## Coding principles

- Prefer shared state through the learner profile.
- Keep journey content in data files.
- Keep components small and purposeful.
- Avoid hidden feature logic inside content files.
- Use UK English for learner-facing copy.
- Keep the tone calm and direct.
- Do not introduce unnecessary animation.
- Update documentation when behaviour changes.

## Manual test path

For most changes, test this path:

1. Visit `/start/`.
2. Save onboarding preferences.
3. Complete several steps in `/journeys/ai-without-overwhelm/`.
4. Refresh the page and confirm progress resumes.
5. Visit `/` and confirm dashboard progress updates.
6. Visit `/journeys/` and confirm the journey map updates.
7. Visit `/journeys/writing-better-prompts/`.
8. Select task, context, format and tone choices.
9. Visit `/workspace/` and confirm a prompt appears.
10. Save the prompt to `/notebook/`.
11. Run `npm run validate:journeys`.
12. Run `npm run build`.

## Definition of done

A change is done only when:

- it works locally
- it does not regress existing journeys
- keyboard access remains intact
- content remains calm and clear
- validation passes where relevant
- build passes
- documentation is updated if behaviour changed

## Codex task guidance

Codex should be given one specific task at a time. Each task should include:

- goal
- affected files
- constraints
- acceptance criteria
- manual test steps

Codex should read:

- `PROJECT_STATUS.md`
- `ROADMAP.md`
- `docs/architecture-handbook/README.md`
- this guide
- the relevant backlog task

before making changes.
