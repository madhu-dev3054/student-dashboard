# Student Dashboard

## Live Demo
https://student-dashboard-one-psi.vercel.app

## Overview

A modern Student Dashboard built using Next.js, Supabase, Tailwind CSS, and Framer Motion.  
The project focuses on responsive UI, smooth animations, and real-time database integration using Supabase.

## Features

- Dark themed dashboard UI
- Responsive sidebar (desktop + mobile)
- Dynamic course cards from Supabase
- Animated activity graph
- Bento grid layout
- Smooth Framer Motion animations
- Loading and error handling support

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

## Database Schema (Supabase)

Table: courses

- id (uuid, primary key)
- title (text)
- progress (integer)
- icon_name (text)
- created_at (timestamp)

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url  
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

## Architecture

- Server Component used for Supabase data fetching
- Client Components used for animations and interactions
- Component-based reusable structure
- Clean separation between UI and logic

## Setup Instructions

1. Clone repository
2. Install dependencies
   npm install
3. Run development server
   npm run dev
4. Build for production
   npm run build

## Deployment

Deploy using Vercel and connect GitHub repository for automatic deployment.

## Notes

- All animations are implemented using Framer Motion
- Layout is fully responsive for all screen sizes
- Data is dynamically fetched from Supabase