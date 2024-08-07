# NISA Invest

NISA Invest is a personal finance platform for Muslim women

## Tech Stack

This project uses the following technologies:

- **Frontend Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Styling**: Tailwind CSS

## Getting Started

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

and include the following line:

- development:
```env
VITE_BASE_URL = "https://nisa-invest-tfb-be.vercel.app"
```
- production:
```env
VITE_BASE_URL = "https://nisa-invest-tfb-be.vercel.app"
```

5. Enter the following script to run the server in the development mode:

```bash
npm run dev
```

## Style Guide

Contributors should refer to our style guide for coding conventions and best practices. The style guide can be found at:

[./docs/STYLEGUIDE.md](./docs/STYLEGUIDE.md)

Please make sure to read and follow the style guide before submitting any pull requests.

#Force redeploy