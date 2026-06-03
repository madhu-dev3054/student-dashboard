"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-3xl bg-zinc-900 p-8 mb-6 border border-zinc-800 hover:border-cyan-500/40 transition"
    >
      <h2 className="text-3xl font-bold">
        Welcome back, Madhu 👋
      </h2>

      <p className="text-zinc-400 mt-2">
        You are on a 7 day learning streak 🔥
      </p>
    </motion.section>
  );
}