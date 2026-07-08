# KeepCalmAI Project Status

Current version: v0.5 Development

Current milestone: M2, Learning Engine

Overall Version 1 completion estimate: 58%

Last updated: 8 July 2026

## Version 1 objective

Deliver a polished personal AI learning platform that helps people build confidence with AI through calm, accessible, guided learning journeys.

## Milestone status

| Milestone | Description | Status | Progress |
|---|---|---|---:|
| M1 | Core Platform | Mostly complete | 92% |
| M2 | Learning Engine | In progress | 48% |
| M3 | Journey Polish | Not started | 20% |
| M4 | Documentation | In progress | 50% |
| M5 | Accessibility and QA | In progress | 25% |
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
- Prompt Workspace page created.
- Notebook page improved with filtering.

### Journeys

- AI Without Overwhelm created as a 35-step micro-learning journey.
- Writing Better Prompts created as a 17-step journey.
- Journey completion pages created.
- Choice feedback and prompt-building choice objects introduced.

### State and services

- Learner Profile service created.
- Progress-aware components migrated to the shared learner profile object.
- Recommendation service created.
- Prompt Workspace service created.
- Notebook page foundation created.
- Workspace prompt saving to Notebook added.
- Learning DNA updates introduced from choices and journey completion.
- Accessibility and learning preferences added to onboarding.
- Light presentation adaptations added to the Journey Player.

### Documentation and validation

- Learning Experience Bible created.
- Journey Authoring Guide created.
- Architecture Handbook created.
- Design Decisions Log created.
- Phase 3 Codex Backlog created.
- Root project control files created.
- Developer Guide created.
- Journey validation script created.

## In progress

### Learning engine

- Prompt Workspace integration inside Journey Player.
- Notebook saving directly from journeys.
- Adaptive choice feedback.
- Mentor guidance refinement.
- Learning DNA use in recommendations.

### Documentation

- Component catalogue.
- Release checklist.
- Accessibility checklist.

### Accessibility and QA

- Keyboard testing.
- Screen reader review.
- Responsive review.
- Journey validation.

## Remaining for M1, Core Platform

- Complete any remaining legacy localStorage migration.
- Ensure Prompt Workspace is updated directly from journey choices.
- Add direct save-to-notebook behaviour inside Journey Player.
- Confirm dashboard, journey map, achievements, notebook and workspace all reflect shared learner profile state.

## Known risks

- JourneyPlayer has grown large and should be refactored after the current behaviour stabilises.
- Prompt Workspace currently derives much of its prompt from saved journey answers rather than being updated directly on every prompt choice.
- Notebook supports saved prompts but reflection entries are not yet implemented.
- Learning DNA is visible and updated but does not yet drive recommendations strongly.
- Accessibility adaptations are light-touch and need manual review.

## Current next task

Integrate Prompt Workspace and Notebook saving directly into Journey Player, then refactor JourneyPlayer into smaller services or helper modules.

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
