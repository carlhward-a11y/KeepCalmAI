# KeepCalmAI Accessibility Checklist

## Purpose

This checklist defines the minimum accessibility checks for KeepCalmAI Version 1.

Accessibility in KeepCalmAI is not only technical compliance. The product is specifically intended for people who may feel overwhelmed, excluded or anxious about AI. Cognitive accessibility, clarity and emotional safety are part of the product quality standard.

## Core principles

Every learner should be able to:

- understand what the page is asking them to do
- move through the experience without time pressure
- use keyboard navigation
- use a screen reader
- recover from uncertainty
- return later without losing progress
- complete the first two journeys without needing external help

## Page structure

Check each major route:

- `/`
- `/start/`
- `/journeys/`
- journey pages
- completion pages
- `/workspace/`
- `/notebook/`
- `/accessibility/`

Confirm:

- one `h1` per page
- headings follow a logical structure
- sections have clear labels where needed
- the skip link works
- landmark regions are sensible
- page titles describe the page

## Keyboard access

Check:

- all links can be reached by Tab
- all buttons can be activated by keyboard
- radio buttons can be selected by keyboard
- checkbox groups can be completed by keyboard
- details/summary elements can be opened and closed
- focus order follows visual order
- focus is visible at all times
- no keyboard trap occurs

## Journey Player

Check:

- step title receives focus after step change
- Back and Continue buttons are reachable
- radio button choices are grouped with a clear legend
- feedback is placed close to the choice group
- progress text is available as text, not only as a visual bar
- copied prompt status is announced or visible
- completion is clear

## Screen reader checks

Use VoiceOver, NVDA or JAWS.

Check:

- header navigation is announced clearly
- form fields have meaningful labels
- radio groups announce their legends
- choice feedback is discoverable
- prompt copy status is discoverable
- decorative icons do not create noise
- screen reader friendly mode reduces decorative output
- generated prompts are read as normal text

## Cognitive accessibility

Check:

- each journey step has one main idea
- each action is achievable without extra knowledge
- paragraph length is controlled
- jargon is avoided or explained
- weaker answers are not described as failures
- guidance tells the learner what to do next
- progress is visible without creating pressure
- empty states explain the next action

## Anxiety and confidence support

Check:

- onboarding wording is optional and non-medicalised
- the product does not imply the learner is behind or failing
- mentor guidance is calm and practical
- feedback avoids words such as wrong, failed or incorrect unless used in a carefully explained educational context
- completion messages reinforce useful progress rather than perfection

## Low vision review

Check:

- text contrast is sufficient
- visual focus is clear
- text can be zoomed to 200 percent without loss of function
- cards and buttons do not overlap at larger text sizes
- clear visual spacing mode improves readability
- important information is not conveyed by colour alone

## Dyslexia-friendly review

Check:

- text blocks are short
- spacing is generous
- headings are descriptive
- instructions are explicit
- numbered actions are used where sequence matters
- bullet preference is respected where available

## ADHD and cognitive fatigue review

Check:

- each screen has a limited number of actions
- there are no unnecessary animations
- progress is saved automatically
- shorter-step support reduces mentor detail
- break-friendly language appears at appropriate points
- the learner can stop and resume easily

## Motor access review

Check:

- target sizes are comfortable
- controls are not tightly packed
- actions do not require drag and drop
- no timed interaction is required
- repeat actions are avoidable where possible

## Mobile accessibility

Check:

- content reflows cleanly
- buttons remain large enough
- header navigation remains usable
- cards do not become too narrow
- prompt text can be read and copied
- notebook filters remain usable

## Content review

Check learner-facing language for:

- UK English
- plain language
- direct instructions
- supportive feedback
- no unnecessary hype
- no patronising tone
- no medicalised assumptions

## Minimum assistive technology test matrix

For Version 1, complete at least:

| Platform | Browser | Assistive technology | Required |
|---|---|---|---|
| macOS | Safari | VoiceOver | Yes |
| Windows | Chrome or Edge | NVDA | Yes |
| Windows | Chrome or Edge | Keyboard only | Yes |
| iOS | Safari | VoiceOver quick pass | Recommended |

JAWS testing is strongly recommended before public launch if available.

## Accessibility release gate

Version 1 should not be released if:

- main navigation cannot be used by keyboard
- onboarding cannot be completed by keyboard
- journeys cannot be completed by keyboard
- screen reader users cannot understand the choice structure
- generated prompts cannot be accessed as text
- progress or feedback depends only on colour
- mobile layout blocks core functionality

## Known issues

Any unresolved accessibility issue must be recorded with:

- affected page or component
- user impact
- severity
- workaround, if any
- planned fix
