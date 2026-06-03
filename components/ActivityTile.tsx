"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const data = [3, 6, 2, 8, 5, 7, 4];

  return (
    <article className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800">
      <h3 className="text-lg font-semibold mb-4">Activity</h3>

      <div className="flex items-end gap-2 h-24">
        {data.map((value, index) => (
          <motion.div
            key={index}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: value * 10, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="w-4 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-md"
          />
        ))}
      </div>
    </article>
  );
}