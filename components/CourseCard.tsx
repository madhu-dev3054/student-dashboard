"use client";

import { motion } from "framer-motion";

type CourseCardProps = {
  title: string;
  progress: number;
};

export default function CourseCard({
  title,
  progress,
}: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800"
    >
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="text-zinc-400 mt-4">
        Progress: {progress}%
      </p>

      <div className="mt-3 h-2 w-full rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          className="h-2 rounded-full bg-blue-500"
        />
      </div>
    </motion.article>
  );
}