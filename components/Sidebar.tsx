"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const items = [
    { name: "Dashboard", href: "/#", icon: LayoutDashboard },
    { name: "Courses", href: "/#", icon: BookOpen },
    { name: "Activity", href: "/#", icon: Activity },
    { name: "Settings", href: "/#", icon: Settings },
  ];

  return (
    <nav className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6 text-white">
      <h1 className="text-xl font-bold mb-8">
        LearnX
      </h1>

      <ul className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.name}>
              <motion.div
                whileTap={{ scale: 0.95 }}
                animate={
                  active === item.name
                    ? { x: 4 }
                    : { x: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition ${
                    active === item.name
                      ? "bg-zinc-800 text-cyan-400"
                      : "text-white hover:bg-zinc-800 active:bg-zinc-700"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}