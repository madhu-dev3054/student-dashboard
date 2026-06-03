"use client";

import { useState } from "react";
import {
  Menu,
  X,
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

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* TOP MENU BUTTON */}
      <div className="md:hidden p-4">
        <button onClick={() => setOpen(true)}>
          <Menu className="text-white" />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50">
          
          {/* SIDEBAR */}
          <div className="fixed left-0 top-0 w-64 h-full bg-zinc-900 p-6">

            {/* CLOSE BUTTON */}
            <button
              className="mb-6 text-white"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>

            {/* NAV */}
            <nav>
              <ul className="space-y-2">

                {items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          setActive(item.name);
                          setOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition text-left ${
                          active === item.name
                            ? "bg-zinc-800 text-cyan-400"
                            : "text-white hover:bg-zinc-800 active:bg-zinc-700"
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

          </div>
        </div>
      )}
    </>
  );
}