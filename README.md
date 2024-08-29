# NISA Invest

## Table of contents

1. [About](#about)
2. [Tech Stack](#tech-stack)
3. [Local Environment](#local-environment)
4. [Hosting & deployment](#hosting--deployment)


## About
NISA Invest is a personal finance platform for Muslim women. It's main functions are to be able to book a call with a fincial advisor, a quiz which then leads you to a dashboard where you can click to see a personalised list of goals (widgets). Once you have completed this goal, you make it as complete and it moves to the top of the page. Once you have finished all your pre-populated priorities, you can choose more goals from the bottom section to be your new focus. 

## Tech Stack

This project uses the following technologies:

- **Frontend Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Styling**: Tailwind and CSS

## Local Environment

1. Clone the repository:

```bash
git clone https://github.com/fac29/NisaInvest-TFB-FE.git
```

2. Navigate to the repository:

```bash
cd NISAINVEST-TFB-FE
```

3. Install NPM packages:

```bash
npm install
```

4. Create .env files :

```bash
 touch .env.development
 touch .env.production
```

and include the following lines:

- development:
```env
VITE_BASE_URL=https://nisa-invest-tfb-be.vercel.app
VITE_SUPABASE_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=[Check this at Supabase Online Dashboard]
VITE_SUPABASE_SERVICE_ROLE_KEY=[Check this at Supabase Online Dashboard]
```
- production:
```env
VITE_BASE_URL=https://nisa-invest-tfb-be.vercel.app
VITE_SUPABASE_URL=https://xzzacivebczssoporkmz.supabase.co
VITE_SUPABASE_ANON_KEY=[Check this at Supabase Online Dashboard]
VITE_SUPABASE_SERVICE_ROLE_KEY=[Check this at Supabase Online Dashboard]
```

Supabase references are needed for auth purposes. Fetching data from supabase is done exclusively from the back-end

5. Enter the following script to run the server in the development mode:

```bash
npm run dev
```


## Hosting & deployment

## Style Guide

Contributors should refer to our style guide for coding conventions and best practices. The style guide can be found at:

[./docs/STYLEGUIDE.md](./docs/STYLEGUIDE.md)

Please make sure to read and follow the style guide before submitting any pull requests.

#Force redeploy