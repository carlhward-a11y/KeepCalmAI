# KeepCalmAI Version 1 Release Checklist

## Purpose

This checklist defines the minimum manual checks required before KeepCalmAI Version 1 can be treated as a release candidate.

The aim is not only to confirm that the site builds. The aim is to confirm that the first learner experience is calm, understandable, accessible and resilient.

## Required command checks

Run these before manual testing:

```bash
npm install
npm run validate:journeys
npm run build
npm run preview
```

A release candidate must not be created if validation or build fails.

## Core route checks

Open each route and confirm it loads without console errors:

- `/`
- `/start/`
- `/journeys/`
- `/journeys/ai-without-overwhelm/`
- `/journeys/ai-without-overwhelm/complete/`
- `/journeys/writing-better-prompts/`
- `/journeys/writing-better-prompts/complete/`
- `/workspace/`
- `/notebook/`
- `/about/`
- `/accessibility/`

## First-use journey test

Start with a clean browser profile or clear localStorage.

1. Open `/`.
2. Confirm the dashboard does not show misleading saved progress.
3. Open `/start/`.
4. Select a goal, confidence level and AI assistant.
5. Select at least two optional support preferences.
6. Submit the form.
7. Confirm the AI Without Overwhelm journey opens.
8. Confirm the selected AI assistant name appears where expected.
9. Move forward several steps.
10. Refresh the page.
11. Confirm the journey resumes at the correct step.
12. Return to `/`.
13. Confirm dashboard progress has updated.

## AI Without Overwhelm full pass

Complete the whole journey.

Check:

- each screen has one main idea
- actions are clear
- wording remains calm and non-technical
- mentor text is helpful
- choices give guidance rather than judgement
- final completion page appears
- dashboard shows the journey as complete
- journey map shows the journey as complete
- achievement appears

## Writing Better Prompts full pass

Complete the whole journey.

Check:

- task, context, format and tone choices are understandable
- weaker choices give useful feedback
- stronger choices confirm why they work
- prompt summary appears at the right point
- Workspace shows the generated prompt
- prompt can be copied
- prompt can be saved to Notebook
- duplicate notebook saves are prevented
- completion page appears
- dashboard updates Learning DNA and recommendation state

## Notebook checks

1. Open `/notebook/` before saving anything.
2. Confirm empty state is clear and helpful.
3. Save a prompt from Workspace.
4. Reopen Notebook.
5. Confirm the saved prompt appears.
6. Use the Prompts filter.
7. Use the Reflections filter.
8. Use the Achievements filter.
9. Confirm empty filtered states do not feel broken.

## Workspace checks

1. Open `/workspace/` before building a prompt.
2. Confirm empty state gives a clear next step.
3. Build a prompt through Writing Better Prompts.
4. Return to Workspace.
5. Confirm task, context, format and tone are shown.
6. Confirm generated prompt is readable.
7. Copy the prompt.
8. Save the prompt to Notebook.
9. Clear the workspace.
10. Confirm empty state returns.

## Learning DNA checks

Confirm the dashboard shows:

- Understanding AI
- Prompt skills
- Safety awareness
- Confidence

Complete both journeys and confirm values change. These are not exam scores and should never be presented as pass or fail measures.

## Accessibility preference checks

Use `/start/` to enable:

- shorter steps
- clearer spacing
- screen reader friendly layout
- low cognitive load
- reassurance

Then open a journey and confirm:

- support note appears where appropriate
- visual spacing improves when selected
- screen reader mode removes decorative visual content
- shorter-step support reduces unnecessary extra mentor detail
- no essential content is hidden

## Keyboard testing

Using keyboard only:

1. Tab from the browser address bar into the page.
2. Confirm skip link appears and works.
3. Navigate header links.
4. Complete onboarding.
5. Move through a journey.
6. Select radio-button choices.
7. Open and close details elements.
8. Use Back and Continue buttons.
9. Copy a prompt.
10. Save a prompt to Notebook.

No control should be unreachable by keyboard.

## Screen reader review

At minimum, test one journey with VoiceOver or NVDA.

Check:

- page titles are meaningful
- heading order is sensible
- radio groups announce their legends
- feedback updates are announced or discoverable
- progress text is understandable
- decorative visuals are not confusing
- buttons have clear names
- links make sense out of context

## Mobile review

Test at narrow width.

Check:

- header navigation remains usable
- journey cards do not overflow
- buttons are large enough
- dashboard cards stack cleanly
- workspace cards stack cleanly
- notebook filters remain usable
- mentor panel moves below the main card

## Content tone review

Check all learner-facing content against these rules:

- plain English
- calm and reassuring
- no blame
- no test-like language unless genuinely needed
- no hype about AI
- no unexplained jargon
- no patronising wording

## Browser checks

Minimum manual checks:

- Safari
- Chrome
- Firefox

If the first public audience is mainly using Apple devices, Safari should be treated as a priority browser.

## Known issue review

Before release candidate, update:

- `PROJECT_STATUS.md`
- `CHANGELOG.md`
- `ROADMAP.md`

Known issues should be listed honestly. A minor known issue can remain if it does not block the core learner journey or accessibility requirements.

## Release candidate approval

A Version 1 release candidate can be created only when:

- journey validation passes
- production build passes
- both journeys can be completed
- onboarding, dashboard, workspace and notebook work together
- keyboard testing passes for main flows
- screen reader review has been completed
- mobile review has been completed
- documentation reflects the current implementation
