# CyberSift — UI/UX & Frontend Engineer Take-Home Assignment

## Background

CyberSift develops cybersecurity products used by security analysts. Analysts often need to review numerous alerts, identify what matters, investigate an individual detection, and update its status.

This repository contains a **deliberately imperfect React application** called the *Alert Management Console*. It works, but its user experience, visual hierarchy, interaction patterns, accessibility, responsiveness, and frontend implementation all have room for improvement.

**Your assignment is to improve the actual application—not merely propose a redesign.** We're looking for someone who thinks like a designer and builds like a frontend engineer.

## The challenge

Imagine you're joining a small product team that already ships this console. Improve it so an analyst can quickly:

1. **Triage** incoming alerts, distinguishing urgent items from routine noise.
2. **Find** relevant alerts using filtering and/or search.
3. **Investigate** a selected alert while retaining useful context from the list.
4. **Act** by changing an alert's status to *New*, *Acknowledged*, *Resolved*, or *False Positive*.
5. **Understand feedback**, including empty results and successful status updates.

You may change the layout, interactions, styling, information architecture, and React code as much as you deem useful. You may keep, remove, or replace the existing elements. Treat it as a small real-world improvement, not a blank-canvas mockup competition.

## Timebox: 3–4 hours

Please spend **no more than four hours**. We care about judgment and prioritization as much as completeness. A coherent, working core flow beats a large unfinished redesign. Record approximately how long you spent and what you intentionally deferred.

## Technical expectations

- **React** is required; you may use JavaScript or migrate to TypeScript.
- The result must be a **working application** that we can run locally.
- Keep the main alert-list, alert-details, search/filter, and status-change journeys functional.
- Data can remain **local/mock**; no backend, authentication, database, or real integrations are required.
- Aim for maintainable components and reasonable state management. You may refactor the existing single-component implementation.
- Consider desktop-first usability, smaller viewport behavior, accessibility, and loading/error/empty states where relevant. You do **not** need to implement every possible enhancement.
- You may use component libraries, icon libraries, CSS frameworks, Figma, AI coding assistants, or other tools. **AI-assisted development is explicitly allowed.** You should be able to explain and modify any code you submit.
- Please do not spend time setting up deployment infrastructure, a backend, or a comprehensive test suite. A few meaningful tests are welcome if useful.

## What to submit

1. A link to your Git repository (or a ZIP of the updated project).
2. The runnable application source, including any dependencies and setup instructions.
3. A short section in your README covering:
   - The **top 3 UX problems** you identified and how your changes address them.
   - Key **technical/design decisions** and trade-offs.
   - What you would improve next with more time.
   - Approximate time spent and any AI tools used (briefly).
4. Optional: before/after screenshots, sketches, or a brief demo video. These are **not required**; the working code is the primary deliverable.

## How we'll review it

| Dimension | Weight | What we're looking for |
| --- | ---: | --- |
| Frontend engineering | **35%** | Functionality, React competence, component structure, maintainability, debugging and sensible use of state |
| UX and product thinking | **30%** | Clear user journeys, efficient triage/investigation, thoughtful information architecture and interaction choices |
| Visual design and taste | **20%** | Readability, hierarchy, spacing, consistency, and professional execution |
| Polish and pragmatism | **15%** | Edge cases, feedback, sensible prioritization, and appropriate trade-offs within the timebox |

We'll also invite you to a short walkthrough (approximately **30 minutes**) to discuss your decisions, review the code, and potentially make a small change together. We are assessing **your understanding of the result**, not whether you wrote every line without help.

## Running the starter

Prerequisite: Node.js 18+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To check that it builds:

```bash
npm run build
npm run preview
```

## Starter notes

- The 36 fictional alerts in `src/alerts.js` are deterministic mock data. Feel free to enrich the mock data if it helps your design.
- All data and changes exist only in browser memory; refreshing resets changes. Persistence is **not required**.
- The initial UI is intentionally awkward. This is **not** a visual design reference and is **not** a recommended architecture.
- The starter currently has a single large `src/App.jsx` and its CSS in `src/styles.css`. You may restructure both.
- No network services, API credentials, or proprietary CyberSift systems are needed.
- Please avoid using any real security incident or customer information.

## Candidate notes (fill in before submitting)

**Top 3 UX issues addressed:**

1.
2.
3.

**Design / technical decisions:**

**What I'd do next:**

**Time spent:**

**AI/tools used (if any):**
