"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6 text-white">

      <h1 className="text-xl font-bold mb-8">
        LearnX
      </h1>

      <ul className="space-y-2">

        <Link href="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link href="/#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
          <BookOpen size={20} />
          Courses
        </Link>

        <Link href="/#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
          <Activity size={20} />
          Activity
        </Link>

        <Link href="/#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition">
          <Settings size={20} />
          Settings
        </Link>

      </ul>
    </nav>
  );
}