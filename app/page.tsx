import { supabase } from "../lib/supabase";
import { Course } from "../types/course";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";

export default async function Home() {

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <article className="rounded-3xl bg-zinc-900 p-8 border border-red-500">
          <h2 className="text-2xl font-bold">Database Error</h2>
          <p className="text-zinc-400 mt-2">
            Unable to load courses from Supabase.
          </p>
        </article>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* RESPONSIVE WRAPPER */}
      <div className="flex flex-col md:flex-row">

        {/* Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <section className="flex-1 p-4 md:p-8">

          <HeroTile />

          {/* Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {/* Course Cards */}
            {courses?.map((course: Course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}

            {/* NEW Activity Component */}
            <ActivityTile />

          </section>

        </section>
      </div>
    </main>
  );
}