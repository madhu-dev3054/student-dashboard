"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Settings,
} from "lucide-react";

const items = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Courses", icon: BookOpen },
  { name: "Activity", icon: Activity },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className="w-64 min-h-screen border-r border-zinc-800 p-6 bg-zinc-950 text-white">
      
      <h1 className="text-xl font-bold mb-8">LearnX</h1>

      <ul className="space-y-3">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.name}>
              <button
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition ${
                  active === item.name
                    ? "bg-zinc-800 text-cyan-400"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <Icon size={20} />
                {item.name}
              </button>
            </li>
          );
        })}

      </ul>
    </nav>
  );
}