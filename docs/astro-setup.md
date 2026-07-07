# Astro Setup

This guide explains how to initialise Astro for KeepCalmAI.

## Recommended location

Install Astro inside the KeepCalmAI repository.

Do not install Astro as a separate project on the server.

The repository should become the application.

## Recommended workflow

Use this workflow:

```text
Mac or development machine
  -> GitHub
  -> server or GitHub Pages
```

Develop locally, commit to GitHub, then deploy from GitHub.

## Prerequisites

Install Node.js LTS.

Check versions:

```bash
node -v
npm -v
```

## Clone the repository

```bash
git clone https://github.com/carlhward-a11y/KeepCalmAI.git
cd KeepCalmAI
```

## Initialise Astro

Run Astro in the existing repository folder:

```bash
npm create astro@latest .
```

Choose:

- Empty project
- TypeScript: Yes
- Strict mode: Yes
- Install dependencies: Yes
- Initialise Git: No

## Start local preview

```bash
npm run dev
```

Open:

```text
http://localhost:4321
```

## Build for production

```bash
npm run build
```

Astro will output the built site to:

```text
dist/
```

## Important note

The current `website/` folder is a static prototype. Once Astro is installed, the prototype should be migrated into `src/` as reusable layouts, pages and components.
