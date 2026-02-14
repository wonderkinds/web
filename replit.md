# Ventech Enterprises - Corporate Website

## Overview
A professional multi-page corporate website for Ventech Enterprises, a Pune-based industrial solutions company specializing in cables, connectors, safety equipment, and industrial services for the renewable energy and manufacturing sectors.

## Recent Changes
- 2026-02-14: Initial MVP build with 8 pages, green energy theme, quote request system, and company profile PDF download

## Project Architecture
- **Frontend**: React SPA with Wouter routing, Tailwind CSS, Shadcn UI, Framer Motion animations
- **Backend**: Express.js with PostgreSQL (Drizzle ORM)
- **Pages**: Home, About Us, Products, Why Choose Ventech, Industries We Serve, Certifications & Standards, Testimonials, Get a Quote
- **Key Features**: Quote request form (persisted to DB), company profile PDF download, responsive navigation
- **Theme**: Green energy industrial palette (primary: green 152 60% 36%, dark mode support)

## Structure
- `client/src/pages/` - All 8 page components
- `client/src/components/` - Navigation header and Footer shared components
- `server/routes.ts` - Quote request API and PDF download endpoints
- `server/storage.ts` - Database storage layer
- `server/db.ts` - PostgreSQL connection
- `shared/schema.ts` - Drizzle schemas for users and quote_requests tables

## User Preferences
- No emoji in UI
- Industrial/corporate professional style
