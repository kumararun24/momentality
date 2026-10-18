# Momentality

Momentality is a family organization landing page with a multi-screen product
demo for a shared family schedule, tasks, caregiver coordination, and an AI
assistant interface. The demo is a frontend-only prototype that uses fictional,
hardcoded sample data.

## Tech stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Lucide React icons
- Recharts for the dashboard chart

## Prerequisites

- Node.js 18.17 or later
- npm

## Setup

Install the project dependencies:

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Momentality landing page
- `/demo` — Dashboard / Morning Brief
- `/demo/calendar` — Family Calendar
- `/demo/tasks` — Family Tasks
- `/demo/elle` — Elle assistant chat mockup
- `/demo/caregivers` — Caregivers
- `/demo/recap` — Evening Recap

## Demo data

All demo family members, events, tasks, caregiver details, and recap content are
fictional and hardcoded in the project. The demo has no backend, database,
external API, or authentication.

## Production validation

Run these checks before deployment:

```bash
npm run lint
npx tsc --noEmit
npm run build
```
