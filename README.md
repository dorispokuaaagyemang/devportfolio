# DevPortfolio

React + Tailwind CSS v4 portfolio.

## Setup

npm install
npm run dev

## Structure

src/
  App.jsx                 - assembles all sections, owns dark/light state
  index.css                - Tailwind v4 import + theme tokens + dark mode variant
  data/portfolioData.js    - all editable copy/content (stats, skills, projects, blog...)
  components/
    Navbar.jsx, Hero.jsx, Stats.jsx, About.jsx, Skills.jsx,
    Experience.jsx, Projects.jsx, BlogAndContact.jsx, Footer.jsx
    ui/  - shared primitives: Card, Buttons, SocialIcon, TextInput, SectionLabel

## Editing content

Everything text-based (stats, nav links, skills, experience, projects,
blog posts) lives in `src/data/portfolioData.js` — edit there instead of
digging through components.

## Theme

Dark mode is the default (matches the design mockup). The navbar sun/moon
button toggles a `dark` class on `<html>`, and every component uses
Tailwind's `dark:` variant for light-mode fallback styles.
