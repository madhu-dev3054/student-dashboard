"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const data = [30, 60, 20, 80, 50, 70, 40];

  return (
    <article className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800">
      
      <h3 className="text-lg font-semibold mb-1">
        Activity
      </h3>

      <p className="text-xs text-zinc-400 mb-4">
        Weekly Activity (7 days)
      </p>

      {/* IMPORTANT: FIX HEIGHT CONTAINER */}
      <div className="flex items-end gap-2 h-32">

        {data.map((value, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: value }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            className="w-4 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-md"
          />
        ))}

      </div>
    </article>
  );
}