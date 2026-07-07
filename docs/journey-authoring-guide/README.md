# KeepCalmAI Journey Authoring Guide

## Purpose

This guide explains how to create KeepCalmAI journeys that work inside the Journey Player.

A journey should feel calm, practical and achievable. It should never feel like a textbook, slide deck or traditional e-learning module.

## Authoring model

KeepCalmAI uses this structure:

Journey, then step, then one idea, one action and one success.

Do not begin by writing a long lesson and then splitting it up. Begin by defining the learner’s smallest useful steps.

## Journey planning template

Before writing step content, define:

- journey title
- target learner
- starting confidence level
- desired end state
- estimated journey time
- number of micro-steps
- practical task the learner completes within five minutes
- final next step after completion

## Step writing rules

Each step should include the following fields.

### id

A short kebab-case identifier, such as copy-first-prompt.

### title

A clear learner-facing title.

Good example: Copy your first prompt.

Avoid: Prompt engineering fundamentals.

### time

Use reassuring estimates, such as About 30 seconds, About 1 minute or About 2 minutes.

### body

Use one or two short paragraphs only. If more is needed, split the step.

### whyItMatters

Explain the purpose of the step in plain language. This helps the learner understand why they are being asked to do it.

### actionTitle

Use a direct, practical heading.

Examples include Copy this prompt, Choose one familiar example, or Ask for a shorter answer.

### actionSteps

Use three short actions where possible. Avoid long lists.

### choices

Use choices when the learner needs to select, reflect or compare.

Choices should not feel like a test unless the journey explicitly requires assessment.

### examplePrompt

Use an example prompt when the learner needs something to copy or adapt.

Prompts should be simple, useful and low risk.

### readyToContinue

Tell the learner when it is reasonable to move on.

Examples include Continue when you have copied the prompt, Continue when you have selected one option, or Continue when you have read the answer once.

### takeaway

One sentence only. This is the idea the learner should carry forward.

## Micro-step sizing

A normal step should take 30 seconds to 2 minutes.

If a step requires several concepts, several actions, long reading, scrolling or more than one decision, split it.

## Prompt writing rules

Example prompts should be easy to copy, use plain English, avoid unnecessary technical wording, be safe and low risk, produce a useful result quickly, and work across ChatGPT, Copilot, Gemini and Claude where possible.

## Adaptive wording

Use generic wording in journey data where possible, such as your AI assistant.

The Journey Player can replace this with the learner’s chosen platform, such as ChatGPT or Microsoft Copilot.

Do not create separate journeys for each AI platform unless the learning objective genuinely differs.

## Confidence checks

Confidence checks are reflective, not graded.

Good choices include:

- I am still unsure.
- I am starting to understand.
- I feel more confident.
- I could show someone else one thing.

Avoid:

- Correct
- Incorrect
- Pass
- Fail

## Safety steps

Where a journey involves accuracy, decisions or reliance on AI output, include a safety or judgement step.

Use plain language, such as AI can help, but important answers need checking.

Avoid scare language. The goal is calm confidence, not fear.

## Completion step

A completion step should acknowledge progress, avoid hype, reinforce confidence and give one small next action.

## Quality checklist

Before publishing a journey, check:

- Does each step teach one idea?
- Does each step ask for one action?
- Is the language calm and plain?
- Is there a practical success within five minutes?
- Are choices selectable where choices are shown?
- Are prompts useful across AI platforms?
- Does the journey include checking or judgement where needed?
- Can the learner resume progress?
- Does the journey end with one clear next step?
