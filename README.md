# Student Dashboard

## Live Demo
https://student-dashboard-one-psi.vercel.app

---

## Overview
A modern Student Dashboard built using Next.js, Supabase, Tailwind CSS, and Framer Motion.  
The project focuses on responsive UI, dynamic data fetching, and smooth animations.

---

## Features
- Dark themed dashboard UI  
- Responsive sidebar (desktop + mobile)  
- Dynamic course cards fetched from Supabase  
- Animated activity graph  
- Bento grid layout  
- Framer Motion animations (hover + entry effects)  
- Basic loading and error handling UI  

---

## Tech Stack
- Next.js (App Router)  
- TypeScript  
- Tailwind CSS  
- Supabase (PostgreSQL)  
- Framer Motion  
- Lucide React  

---

## Database Schema (Supabase)

**Table: courses**

- id (uuid, primary key)  
- title (text)  
- progress (integer)  
- icon_name (text)  
- created_at (timestamp)  

---

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url  
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key  

---

## Architecture
- Server Components used for data fetching from Supabase  
- Client Components used for UI interactions and animations  
- Component-based structure for reusability  
- Clear separation between UI and data logic  

---

## Setup Instructions

```bash
git clone <your-repo-url>
cd student-dashboard
npm install
npm run dev