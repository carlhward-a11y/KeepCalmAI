# Astro Architecture

This document defines the proposed Astro structure for KeepCalmAI.

## Goal

Astro should turn the KeepCalmAI framework, content and design system into a fast, accessible learning website.

## Proposed folder structure

```text
src/
  components/
    Button.astro
    Header.astro
    Hero.astro
    LessonCard.astro
    ProgressBar.astro
    SummaryBox.astro
    TryBox.astro
  content/
    journeys/
    lessons/
  layouts/
    BaseLayout.astro
    LessonLayout.astro
  pages/
    index.astro
    journeys/
  styles/
    global.css
  data/
    journeys.ts
    lessons.ts
public/
  images/
  icons/
  illustrations/
```

## Content model

Content should remain structured and reusable.

Each journey needs:

- id
- title
- collection
- difficulty
- estimated time
- persona targets
- lesson order

Each lesson needs:

- id
- title
- journey
- estimated time
- difficulty
- body content
- try activity
- key takeaway
- next step
- accessibility notes

## Component principles

Components should be:

- Semantic
- Keyboard accessible
- Screen reader friendly
- Responsive
- Consistent with the design system
- Simple to reuse

## Migration plan

1. Initialise Astro in the repository.
2. Move global CSS into `src/styles/global.css`.
3. Convert `website/index.html` into `src/pages/index.astro`.
4. Convert lesson sections into Astro components.
5. Move lesson data into `src/data/lessons.ts` or Astro content collections.
6. Add a journey page route.
7. Add build and deployment configuration.
