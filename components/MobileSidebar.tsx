"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden p-4">
      
      <button
        className="text-white text-3xl"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {open && (
        <div className="fixed top-0 left-0 h-full w-64 bg-zinc-900 z-50">
          
          <button
            className="text-white p-4 text-xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <Sidebar />
        </div>
      )}

    </div>
  );
}