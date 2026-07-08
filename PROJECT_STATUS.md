# KeepCalmAI Project Status

Current version: v0.4 Development

Current milestone: M1, Core Platform

Overall Version 1 completion estimate: 45%

Last updated: 8 July 2026

## Version 1 objective

Deliver a polished personal AI learning platform that helps people build confidence with AI through calm, accessible, guided learning journeys.

## Milestone status

| Milestone | Description | Status | Progress |
|---|---|---|---:|
| M1 | Core Platform | In progress | 80% |
| M2 | Learning Engine | In progress | 30% |
| M3 | Journey Polish | Not started | 15% |
| M4 | Documentation | In progress | 35% |
| M5 | Accessibility and QA | Not started | 10% |
| M6 | Release Candidate | Not started | 0% |

## Completed

### Platform foundation

- Astro application scaffolded.
- Base layout created.
- Shared styling foundation created.
- Header and footer components created.
- Homepage dashboard created.
- Journeys page created.
- Journey map created.
- Progress resume component created.
- Achievement component created.
- Calm Mentor panel added to the Journey Player.

### Journeys

- AI Without Overwhelm created as a 35-step micro-learning journey.
- Writing Better Prompts created as a 17-step journey.
- Journey completion pages created.
- Choice feedback and prompt-building choice objects introduced.

### State and services

- Learner Profile service created.
- Recommendation service created.
- Prompt Workspace service created.
- Notebook page foundation created.
- Legacy localStorage migration started.

### Documentation

- Learning Experience Bible created.
- Journey Authoring Guide created.
- Architecture Handbook created.
- Design Decisions Log created.
- Phase 3 Codex Backlog created.

## In progress

### Core platform

- Learner Profile migration.
- Prompt Workspace visibility.
- Notebook integration.
- Learning DNA integration.

### Learning engine

- Adaptive choice feedback.
- Prompt-building integration.
- Mentor guidance refinement.

### Documentation

- Root project documentation.
- Developer guide.
- Component catalogue.
- Release plan.

## Remaining for M1, Core Platform

- Complete Learner Profile migration across JourneyPlayer, Dashboard, ProgressResume, JourneyMap and Achievements.
- Build visible Prompt Workspace page.
- Add Prompt Workspace navigation.
- Integrate prompt saving into Notebook.
- Improve Notebook display and filtering.
- Expand onboarding to include accessibility profile.

## Known risks

- Several components still read directly from legacy localStorage keys.
- Prompt Workspace is implemented as a service but is not yet a visible learner tool.
- Notebook exists as a page but is not yet fully integrated into journeys.
- Learning DNA exists as a model but does not yet drive recommendations or mentor behaviour.
- Accessibility profile exists in the model but is not yet exposed in onboarding or applied to the UI.

## Current next task

Complete Learner Profile migration across all progress-aware components.

## Version 1 scope, locked

Version 1 includes:

- Dashboard.
- Onboarding.
- Learner Profile.
- Journey Player.
- Journey Map.
- Progress Resume.
- Achievements.
- Calm Mentor.
- Prompt Workspace.
- Notebook.
- Recommendations.
- Learning DNA.
- Accessibility Profile.
- AI Without Overwhelm.
- Writing Better Prompts.
- Documentation and release checklist.

Deferred to Version 2:

- AI Sandbox.
- Cloud accounts.
- Enterprise features.
- Analytics.
- AI Playground.
- Community features.
- Prompt sharing.

## Definition of done

A task is complete only when:

- The functionality works.
- Existing behaviour has not regressed.
- Keyboard access is preserved.
- Screen reader impact has been considered.
- Responsive behaviour has been reviewed.
- Documentation is updated where needed.
- Manual test steps are clear.
