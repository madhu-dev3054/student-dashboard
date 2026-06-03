"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Course } from "../types/course";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";

export default function Home() {
  const [open, setOpen] = useState(false);

  const courses = [
    // NOTE: Supabase server fetch agar error de to tum apna original fetch yaha wapas rakh sakte ho
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER MOBILE */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl"
        >
          ☰
        </button>
      </div>

      <div className="flex">

        {/* SIDEBAR DESKTOP */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* SIDEBAR MOBILE */}
        {open && (
          <div className="fixed top-0 left-0 h-full w-64 bg-zinc-900 z-50">
            <Sidebar />
          </div>
        )}

        {/* MAIN CONTENT */}
        <section className="flex-1 p-4 md:p-8">

          <HeroTile />

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {/* Course Cards */}
            {courses?.map((course: Course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}

            {/* Activity Tile */}
            <ActivityTile />

          </section>
        </section>

      </div>
    </main>
  );
}