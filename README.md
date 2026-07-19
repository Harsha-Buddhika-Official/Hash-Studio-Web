# Hash Studio Web

Marketing website for Hash Studio built with React, Vite, Tailwind CSS v4, and React Router.

![Hash Studio Logo](src/assets/logo.png)

## Overview

This project is a multi-page-style SPA with dedicated routes for core studio sections:

- Home
- Portfolio
- Services
- About
- Contact

The UI is component-driven, with content centralized in `src/data` so non-structural updates can be done without changing layout components.

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- MUI (Material UI + icons)
- Oxlint

## Project Structure

```text
src/
	components/
		about/
		common/
		contact/
		home/
		layout/
		portfolio/
		services/
		shared/
	data/
	hooks/
	pages/
	assets/
```

## Routes

- `/` -> Home
- `/portfolio` -> Portfolio
- `/services` -> Services
- `/about` -> About
- `/contact` -> Contact

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: start local Vite server
- `npm run build`: create optimized production bundle
- `npm run preview`: preview production build locally
- `npm run lint`: run Oxlint

## Content Management

Most display content is maintained in `src/data`:

- `hero.js`, `featuredWork.js`, `testimonials.js` for Home
- `portfolio.js` for Portfolio
- `services.js`, `servicesCta.js`, `trust.js` for Services
- `about.js`, `values.js`, `blueprint.js`, `aboutCta.js` for About
- `contact.js`, `siteConfig.js` for Contact and shared contact/social links

Useful config values in `src/data/siteConfig.js`:

- WhatsApp number and generated `wa.me` links
- Contact email
- Social profile URLs

## Brand Assets

- Main logo: `src/assets/logo.png`
- Compact icon: `src/assets/icon.png`
- Hero/office image: `src/assets/office.png`

## Notes

- Router setup is in `src/App.jsx` with `BrowserRouter` mounted in `src/main.jsx`.
- Styling tokens and animations are defined in `src/index.css`.
