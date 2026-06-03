"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Course } from "../types/course";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("courses").select("*");
      if (data) setCourses(data);
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* MOBILE HEADER */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button
          className="text-white text-3xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      <div className="flex">

        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* MOBILE SIDEBAR */}
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

        {/* MAIN CONTENT */}
        <section className="flex-1 p-4 md:p-8">

          <HeroTile />

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}

            <ActivityTile />

          </section>

        </section>
      </div>
    </main>
  );
}