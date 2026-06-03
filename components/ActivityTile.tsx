"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  // each bar = 1 day learning activity score
  const data = [
    { day: "Mon", value: 2 },
    { day: "Tue", value: 5 },
    { day: "Wed", value: 3 },
    { day: "Thu", value: 8 },
    { day: "Fri", value: 6 },
    { day: "Sat", value: 4 },
    { day: "Sun", value: 7 },
  ];

  return (
    <article className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800">
      
      <h3 className="text-lg font-semibold mb-4">
        Activity
      </h3>

      <p className="text-xs text-zinc-400 mb-4">
        Weekly learning activity
      </p>

      <div className="flex items-end justify-between gap-2 h-28">

        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
              }}
              style={{ transformOrigin: "bottom" }}
              className="w-4 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-md"
            />

            <span className="text-[10px] text-zinc-500">
              {item.day}
            </span>

          </div>
        ))}

      </div>
    </article>
  );
}