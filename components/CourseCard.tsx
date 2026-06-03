"use client";

import { motion } from "framer-motion";

export default function CourseCard({ title, progress }: any) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800 
      hover:border-cyan-500/40 active:border-cyan-500/40  transition"
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
        />
      </div>

      <p className="text-xs text-zinc-400 mt-2">
        {progress}% completed
      </p>
    </motion.article>
  );
}