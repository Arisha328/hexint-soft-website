# Hexint Soft — Corporate Website

A production-ready React + Tailwind CSS website for Hexint Soft, a global software house.

## Stack
- React 18 + Vite
- Tailwind CSS (custom brand tokens in `tailwind.config.js`)
- React Router v6 (client-side routing across all 13 pages)
- Framer Motion (scroll reveals, hero animation, animated stat counters)
- Lucide React (icon set)
- react-helmet-async (per-page SEO meta tags)

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview
```

The production build outputs to `dist/`, ready to deploy to Vercel, Netlify, or any static host.

## Project Structure

```
src/
  assets/        Logo and static images
  components/
    layout/      Navbar, Footer, Layout wrapper
    ui/          Reusable primitives (Button, Container, SectionHeading, HexFrame, SEO, PageHero, Reveal)
    home/        Home-page-specific sections
  data/          Single source of truth for services, projects, tech stack, industries, testimonials, FAQs, blog posts
  pages/         One file per route
  App.jsx        Route definitions
  main.jsx       Entry point
```

## Editing Content

All copy lives in `src/data/*.js` — update a project, service, or testimonial once and it propagates to both the Home page preview and its dedicated full page.

## Brand Tokens

Colors, fonts, and the shared hexagon motif are defined in `tailwind.config.js` under `theme.extend`. The `maroon` scale is derived from the Hexint Soft logo.

## Contact Form

The contact form in `src/pages/Contact.jsx` currently simulates submission client-side. Connect it to your email provider or a service like Formspree/Resend by replacing the `handleSubmit` function.
