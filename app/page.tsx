"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Course } from "../types/course";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";


export default async function Home() {


  const [open, setOpen] = useState(false);

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-red-500">Database Error</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* WRAPPER */}
      <div className="flex flex-col md:flex-row">

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
                className="text-white p-4"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <Sidebar />
            </div>
          )}
        </div>

        {/* SIDEBAR (DESKTOP ONLY) */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <section className="flex-1 p-4 md:p-8">

          {/* HERO */}
          <HeroTile />

          {/* BENTO GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {/* COURSE CARDS */}
            {courses?.map((course: Course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}

            {/* ACTIVITY TILE */}
            <ActivityTile />

          </section>

        </section>
      </div>

    </main>
  );
}