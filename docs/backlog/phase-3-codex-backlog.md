# KeepCalmAI Phase 3 Codex Backlog

## Purpose

This backlog breaks Phase 3 into implementation tasks suitable for Codex.

Each task should be completed as a small, reviewable change. Avoid combining unrelated tasks.

## Working rules for Codex

- Read docs/architecture-handbook/README.md before starting.
- Keep the calm learning philosophy intact.
- Prefer shared services over duplicated component logic.
- Preserve existing behaviour unless the task explicitly changes it.
- Do not remove legacy localStorage migration until all components use LearnerProfile.
- Keep UI keyboard accessible.
- Avoid visual clutter.
- Use UK English for learner-facing copy.

---

# Task 1: Refactor JourneyPlayer to use LearnerProfile service

## Goal

Move JourneyPlayer progress and answers from direct localStorage access to src/lib/learnerProfile.ts.

## Files likely involved

- src/components/JourneyPlayer.astro
- src/lib/learnerProfile.ts
- src/lib/promptWorkspace.ts

## Requirements

- Load current step from getJourneyProgress.
- Save current step through updateJourneyProgress.
- Save answers through updateJourneyProgress.
- Preserve existing migration from old localStorage keys.
- Continue to support choice feedback.
- Continue to support prompt fragments and builder summary.
- Do not break AI Without Overwhelm.
- Do not break Writing Better Prompts.

## Acceptance criteria

- Refreshing a journey resumes the correct step.
- Choices remain selected after refresh.
- Prompt fragments still build the prompt summary.
- Completion still routes to the correct completion page.
- No new scattered localStorage keys are introduced.

## Manual test

- Start AI Without Overwhelm, move to step 3, refresh.
- Start Writing Better Prompts, choose task/context/format/tone, confirm prompt summary appears.
- Finish a journey, confirm completion state persists.

---

# Task 2: Refactor Dashboard to use LearnerProfile and Recommendation service

## Goal

Replace direct localStorage reads in Dashboard with src/lib/learnerProfile.ts and src/lib/recommendations.ts.

## Files likely involved

- src/components/Dashboard.astro
- src/lib/recommendations.ts
- src/lib/learnerProfile.ts

## Requirements

- Read onboarding from LearnerProfile.
- Read journey state from LearnerProfile.
- Use getNextRecommendation for recommendation content.
- Use getConfidenceLabel for confidence card.
- Preserve existing dashboard wording and behaviour.

## Acceptance criteria

- Dashboard still shows personalised platform greeting.
- Dashboard shows correct current journey.
- Dashboard recommends Writing Better Prompts after AI Without Overwhelm is complete.
- Dashboard recommends coming soon content after both active journeys are complete.

## Manual test

- Clear localStorage and visit homepage.
- Complete or simulate completion of AI Without Overwhelm.
- Confirm dashboard recommendation changes.

---

# Task 3: Refactor ProgressResume, JourneyMap and Achievements to LearnerProfile

## Goal

Move remaining progress-aware components away from direct localStorage access.

## Files likely involved

- src/components/ProgressResume.astro
- src/components/JourneyMap.astro
- src/components/Achievements.astro
- src/lib/learnerProfile.ts

## Requirements

- Use LearnerProfile journey progress.
- Preserve current visual states.
- Resume cards should still hide when no progress exists.
- Achievements should still appear when milestones are achieved.

## Acceptance criteria

- Resume card appears for started journeys.
- Journey map shows in progress and complete states correctly.
- Achievement cards update based on profile progress.
- No direct journey progress localStorage reads remain in these components.

---

# Task 4: Build visible Prompt Workspace page

## Goal

Create a page where learners can see their current prompt components and generated prompt.

## Files likely involved

- src/pages/workspace.astro
- src/lib/promptWorkspace.ts
- src/styles/workspace.css
- src/layouts/BaseLayout.astro
- src/components/SiteHeader.astro

## Requirements

- Show task, context, format and tone.
- Show generated prompt.
- Provide a copy prompt button.
- Provide a clear workspace button.
- Link to Notebook.
- Add navigation link if appropriate.

## Acceptance criteria

- Visiting /workspace shows current prompt workspace.
- Copy button copies generated prompt.
- Clear button clears the workspace.
- Empty state is calm and helpful.
- Page is usable by keyboard.

---

# Task 5: Save completed prompts to Notebook

## Goal

When the learner reaches suitable prompt-building steps, allow or trigger saving the current prompt to the notebook.

## Files likely involved

- src/components/JourneyPlayer.astro
- src/lib/promptWorkspace.ts
- src/lib/learnerProfile.ts
- src/pages/notebook.astro

## Requirements

- Add a Save prompt to notebook button when a generated prompt exists.
- Store prompt entry using addNotebookEntry.
- Avoid duplicate entries where possible.
- Notebook page should display saved prompts clearly.

## Acceptance criteria

- A built prompt can be saved from Writing Better Prompts.
- Saved prompt appears on /notebook.
- Entry includes date and type.
- Duplicate saving does not create excessive repeated entries.

---

# Task 6: Add Learning DNA updates from journey activity

## Goal

Update Learning DNA based on meaningful learner activity.

## Files likely involved

- src/lib/learnerProfile.ts
- src/components/JourneyPlayer.astro
- src/components/Dashboard.astro

## Suggested update rules

- Completing AI Without Overwhelm increases understandingAI and confidence.
- Completing Writing Better Prompts increases promptSkills and confidence.
- Selecting strong safety answers increases safetyAwareness.
- Selecting “I am still unsure” keeps needsReassurance true.
- Selecting bullet point format sets prefersBullets true.

## Acceptance criteria

- Learning DNA values update predictably.
- Dashboard can display Learning DNA summary.
- Updates are bounded and do not grow beyond expected scale.

---

# Task 7: Add Accessibility Profile to onboarding

## Goal

Expand onboarding so learners can optionally select accessibility and learning preferences.

## Files likely involved

- src/pages/start.astro
- src/lib/learnerProfile.ts
- src/styles/learner-context.css

## Suggested options

- Dyslexia
- ADHD
- Screen reader user
- Low vision
- Cognitive fatigue
- Technology anxiety
- Prefer shorter steps
- Prefer bullet points

## Requirements

- These are optional.
- Wording must be calm and non-clinical.
- Store selections in LearnerProfile.accessibility and LearningDNA where appropriate.

## Acceptance criteria

- Learner can select accessibility preferences.
- Preferences persist after refresh.
- No intrusive or medicalised language.

---

# Task 8: Apply basic accessibility adaptations

## Goal

Use accessibility profile to alter presentation lightly.

## Files likely involved

- src/components/JourneyPlayer.astro
- src/styles/accessibility-profile.css
- src/layouts/BaseLayout.astro

## Suggested adaptations

- prefersBullets: render action guidance more prominently.
- cognitiveFatigue: show shorter mentor message and encourage breaks every 10 steps.
- lowVision: add a high-contrast class option.
- screenReader: reduce decorative visual output where possible.

## Acceptance criteria

- Adaptations are subtle and do not break layout.
- User can still complete both journeys.
- No adaptation hides essential content.

---

# Task 9: Improve adaptive choice feedback

## Goal

When a learner selects a weaker answer, provide better guided recovery.

## Files likely involved

- src/components/JourneyPlayer.astro
- src/data/writingBetterPrompts.ts
- src/data/aiWithoutOverwhelm.ts

## Requirements

- Weaker answer feedback should explain why without judgement.
- Where useful, show a “Try another option” prompt.
- Continue should remain available unless a step explicitly requires retry.
- Update AI Without Overwhelm choices to use richer choice objects where appropriate.

## Acceptance criteria

- Weaker answers give specific guidance.
- Stronger answers give positive confirmation.
- Feedback remains calm and non-punitive.

---

# Task 10: Add Reflection Journal foundation

## Goal

Create a simple reflection mechanism and display reflections in the notebook.

## Files likely involved

- src/components/JourneyPlayer.astro
- src/lib/learnerProfile.ts
- src/pages/notebook.astro

## Requirements

- Support a reflection step type or reflection field.
- Save reflection entries to notebook.
- Use plain textarea with accessible label.
- Keep it optional.

## Acceptance criteria

- Learner can save a reflection.
- Reflection appears in notebook.
- Works with keyboard and screen reader.

---

# Task 11: Update framework documentation after implementation

## Goal

Keep documentation aligned with the actual implementation.

## Files likely involved

- docs/architecture-handbook/README.md
- docs/learning-experience-bible/README.md
- docs/journey-authoring-guide/README.md
- docs/design-decisions/README.md

## Requirements

- Document the final state model.
- Document prompt workspace behaviour.
- Document notebook behaviour.
- Document Learning DNA updates.
- Add new design decisions where needed.

## Acceptance criteria

- Documentation matches implementation.
- New contributors can understand the product structure without reading the whole codebase.

---

# Task 12: Add basic tests or validation script

## Goal

Add a lightweight validation mechanism to catch obvious journey data errors.

## Files likely involved

- package.json
- scripts/validateJourneys.mjs
- src/data/*.ts

## Requirements

Validation should check:

- every step has required fields
- journey IDs are unique
- step IDs are unique within a journey
- choices have labels
- choice feedback is present where isBest is used
- completion routes exist where possible

## Acceptance criteria

- npm script runs validation.
- Validation fails with useful messages.
- Current journeys pass validation.

---

# Suggested order

1. Task 1
2. Task 2
3. Task 3
4. Task 4
5. Task 5
6. Task 6
7. Task 7
8. Task 8
9. Task 9
10. Task 10
11. Task 12
12. Task 11

## Product owner review points

Ask for review after:

- Task 3, because state refactor affects existing behaviour.
- Task 5, because the Prompt Workspace and Notebook become visible product features.
- Task 8, because accessibility adaptations need careful judgement.
- Task 10, because reflection wording affects learner trust.
