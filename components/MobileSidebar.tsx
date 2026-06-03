"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const items = ["Dashboard", "Courses", "Activity", "Settings"];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* MENU BUTTON */}
      <div className="md:hidden p-4">
        <button onClick={() => setOpen(true)}>
          <Menu className="text-white" />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50">
          
          <div className="fixed left-0 top-0 w-64 h-full bg-zinc-900 p-6">
            
            <button
              className="mb-6 text-white"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>

            <nav>
              <ul className="space-y-3">

                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActive(item)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition ${
                        active === item
                          ? "bg-zinc-800 text-cyan-400"
                          : "text-white hover:bg-zinc-800"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}

              </ul>
            </nav>

          </div>
        </div>
      )}
    </>
  );
}