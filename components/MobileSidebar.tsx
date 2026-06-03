"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">

      {/* TOP BAR BUTTON */}
      <div className="p-4">
        <button
          onClick={() => setOpen(true)}
          className="text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* OVERLAY SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-50 flex">

          {/* BACKDROP */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* SIDEBAR PANEL */}
          <div className="w-64 bg-zinc-900 p-4">
            <button
              className="text-white mb-4"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <Sidebar />
          </div>

        </div>
      )}

    </div>
  );
}