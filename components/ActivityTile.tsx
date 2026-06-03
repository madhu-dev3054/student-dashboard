"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
    const data = [30, 70, 45, 90, 60, 80, 50];

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800 hover:border-cyan-500/40 active:border-cyan-500/40  transition"
        >
            <h3 className="text-lg font-semibold">Activity</h3>
            <p className="text-xs text-zinc-400 mb-4">
                Weekly learning activity
            </p>

            <div className="flex items-end gap-2 h-32">
                {data.map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 180,
                            damping: 18,
                        }}
                        style={{
                            height: `${value}%`,
                            transformOrigin: "bottom",
                        }}
                        className="w-4 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-md"
                    />
                ))}
            </div>
        </motion.article>
    );
}