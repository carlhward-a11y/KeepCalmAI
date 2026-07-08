# KeepCalmAI

KeepCalmAI is a calm, accessible AI learning platform for people who feel overwhelmed, excluded or behind with AI.

It is built around guided learning journeys, one small step at a time. The product direction is defined in `docs/architecture-handbook/README.md` and the learning principles are captured in `docs/learning-experience-bible/README.md`.

## Current Product Shape

- Astro static site
- Guided Journey Player
- Local learner profile stored on the learner's device
- Two active journeys: `AI Without Overwhelm` and `Writing Better Prompts`
- Dashboard, journey map, achievements, prompt workspace and notebook foundations
- Accessibility and learning preferences captured during onboarding

## Key Commands

```sh
npm install
npm run dev
npm run build
npm run validate:journeys
```

## Project Structure

```text
src/components/        Reusable Astro UI and learning components
src/data/              Structured journey data
src/lib/               Learner profile, recommendations and prompt workspace helpers
src/pages/             Site routes
docs/                  Product, architecture and authoring documentation
scripts/               Lightweight project validation scripts
```

## Important Docs

- `docs/architecture-handbook/README.md` is the source of truth for product and technical direction.
- `docs/backlog/phase-3-codex-backlog.md` breaks current implementation work into small tasks.
- `docs/journey-authoring-guide/README.md` explains how to write new journeys.
- `docs/learning-experience-bible/README.md` defines the learning experience principles.
- `docs/design-decisions/README.md` records significant product decisions.

## Working Principles

- Prefer data-driven journeys.
- Keep learner-facing language calm and plain.
- Use the shared LearnerProfile state model for new features.
- Avoid adding new scattered localStorage keys except for legacy migration.
- Treat accessibility as part of the architecture, not an optional mode.
