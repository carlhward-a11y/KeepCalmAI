# Tutorial-style improvement plan

**Status:** Approved roadmap (not yet implemented)

## Purpose

This document is the source of truth for evolving KeepCalmAI journeys toward a calmer, more guided tutorial style inspired by the general methodology of step-by-step tutorial platforms, without copying any wording, branding, layout, visual design or content from tixu.ai or any other product.

## 1. Goal

Make KeepCalmAI journeys feel more like calm guided tutorials while preserving the existing friendly, reassuring and accessible tone.

## 2. Confirmed current state

- Four beginner journeys are active:
  - AI Without Overwhelm
  - Writing Better Prompts
  - Everyday AI Tasks
  - Checking AI Answers
- Checking AI Answers is fully integrated, including `/journeys` resume support.
- `npm run validate:journeys`: not executed in this session. The available GitHub connection can create and update repository files, but the session does not provide a runnable repository checkout. A direct clone attempt failed because the execution environment could not resolve `github.com`.
- `npm run build`: not executed for the same reason.
- No validation or build pass is claimed until these commands are run in Codex, a local checkout or CI.

## 3. Learning principles

- One small concept per screen
- One clear action per screen
- Clear and reassuring progress
- Frequent “try this now” moments
- Interactive choices with calm explanatory feedback
- Optional reflection and notebook moments
- Simple recap at the end of each journey
- No pressure, scores, tests or fear-based language
- Progressive disclosure
- Accessibility by default

## 4. Architecture findings

- JourneyPlayer already supports progress, choices, feedback, prompt copy, prompt builder summary, notebook prompt saving, optional reflection saving, mentor text, accessibility classes and platform wording.
- JourneyPlayer currently shows many possible content blocks on most screens, which can create cognitive load.
- JourneyPlayer currently duplicates learner-profile access and progress-writing logic that should move toward `src/lib/learnerProfile.ts`.
- Some presentation behaviour is inferred from step IDs such as `check`, `safe`, `wrong`, `summary` and `complete`.
- Optional explicit step metadata would be more maintainable than relying on step ID keywords.

## 5. Controlled implementation phases

### Phase 1: Consolidate JourneyPlayer learner-profile access

- Use shared learner-profile functions before adding tutorial-style presentation logic.
- Avoid new localStorage keys.
- Avoid duplicate profile/progress logic.
- Acceptance: existing journeys resume correctly, notebook/reflection saving still works, validate/build pass.

### Phase 2: Add optional step metadata

- Update `src/types/journey.ts` with optional fields only, such as:
  - `type`
  - `reflectionPrompt`
  - `progressLabel`
  - `completionMessage`
  - `nextButtonLabel`
- Do not require existing journeys to change immediately.
- Acceptance: all current journey data remains valid.

### Phase 3: Add step-type-aware presentation in the existing JourneyPlayer

- Use the existing JourneyPlayer, not separate players.
- Let step type influence which blocks are emphasised.
- Learn steps prioritise explanation and takeaway.
- Try steps prioritise action.
- Prompt steps prioritise copyable prompt.
- Choice steps prioritise choices and feedback.
- Reflection steps show the notebook reflection field deliberately.
- Summary/complete steps show recap and one next action.
- Acceptance: less visual/cognitive load, no loss of accessibility.

### Phase 4: Improve authoring documentation

- Update `docs/journey-authoring-guide/README.md` with patterns for:
  - Welcome
  - Learn
  - Try it
  - Prompt
  - Choice
  - Reflection
  - Safety
  - Confidence check
  - Summary
  - Journey complete
- Include purpose, fields normally used, fields normally omitted, recommended text amount and expected learner action.

### Phase 5: Pilot on one journey

- Pilot the new tutorial-style metadata and presentation on Everyday AI Tasks first.
- Do not rewrite all journeys at once.
- Acceptance: existing journey still validates/builds, learner flow feels clearer and calmer.

### Phase 6: Review and expand

- Review with Codex before applying to other journeys.
- Then apply gradually to the other journeys if the pilot works.

## 6. Risks

- Breaking progress/resume behaviour if profile logic is refactored too broadly.
- Adding too many optional fields and making authoring harder.
- Hiding useful content in a way that harms accessibility.
- Accidentally changing notebook or reflection storage.
- Turning calm feedback into assessment or gamification.
- Over-designing the interface instead of improving the learning flow.

## 7. Constraints

- Do not copy tixu.ai wording, branding, layout, visual design or content.
- Do not add new localStorage keys.
- Do not create a second learner-profile system.
- Do not duplicate journey progress logic.
- Do not create separate journey players unless there is a strong technical reason.
- Do not add scores, grades, pass/fail behaviour or gamification.
- Do not broadly redesign the visual interface.
- Do not rewrite every journey at once.
