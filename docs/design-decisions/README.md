# KeepCalmAI Design Decisions Log

This log records significant product, learning and technical decisions for KeepCalmAI.

The purpose is to avoid drifting back into conventional course design and to make future decisions easier to explain.

## Decision 001: KeepCalmAI is a learning experience, not a course library

Date: 2026-07-07

### Decision

KeepCalmAI will be designed as a guided learning experience rather than a traditional library of modules and lessons.

### Reason

The target learner may feel overwhelmed, excluded or behind. A library of content can increase cognitive load. A guided experience reduces the number of decisions the learner has to make.

### Consequence

The Journey Player becomes the primary product pattern.

## Decision 002: Use journeys, steps and actions

Date: 2026-07-07

### Decision

The product language will use journeys, steps and actions rather than modules, lessons and tests.

### Reason

Journeys and steps feel calmer and less academic. The language supports confidence-building rather than performance pressure.

### Consequence

Future documentation and UI should avoid traditional e-learning language unless there is a specific reason to use it.

## Decision 003: One screen, one idea

Date: 2026-07-07

### Decision

Each learning screen should teach one concept only.

### Reason

This reduces cognitive load and supports learners who may be anxious, neurodivergent, older, fatigued or unsure about technology.

### Consequence

Long lesson pages should be split into micro-steps.

## Decision 004: The first journey uses micro-steps

Date: 2026-07-07

### Decision

AI Without Overwhelm was rebuilt as a 35 micro-step journey.

### Reason

The previous 9-step structure still felt too broad. Smaller steps better match the KeepCalmAI promise of calm, manageable progress.

### Consequence

Future beginner journeys should use micro-steps unless there is a clear reason not to.

## Decision 005: Progress is saved locally

Date: 2026-07-07

### Decision

Early progress tracking will use local storage on the learner’s device.

### Reason

This avoids accounts, passwords and registration friction during the first learning experience.

### Consequence

Progress is private to the device and browser. A future account system may be added later, but should not interrupt first use.

## Decision 006: One curriculum, multiple AI platforms

Date: 2026-07-07

### Decision

KeepCalmAI will maintain one curriculum and adapt wording for ChatGPT, Microsoft Copilot, Google Gemini, Claude or an unspecified AI assistant.

### Reason

Maintaining separate courses for each AI platform would create duplication and inconsistency. Most beginner learning objectives are platform-neutral.

### Consequence

Journey data should use generic wording where possible. The Journey Player can adapt visible wording based on onboarding preferences.

## Decision 007: Choices are reflective, not graded

Date: 2026-07-07

### Decision

Selectable choices should support reflection and confidence rather than assessment.

### Reason

The platform is designed to build confidence, not test the learner. Early failure states would undermine the product purpose.

### Consequence

Avoid pass, fail, correct and incorrect language unless a future assessment feature is deliberately introduced.

## Decision 008: Accessibility is part of the product architecture

Date: 2026-07-07

### Decision

Accessibility will be treated as a default product requirement, not a later compliance pass.

### Reason

The intended audience includes people who may benefit from cognitive accessibility, screen reader compatibility, keyboard access, clear language and predictable structure.

### Consequence

Components should use semantic HTML, visible focus, sufficient contrast, reduced motion support and plain language from the start.
