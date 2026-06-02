import { supabase } from "../lib/supabase";
import { Course } from "../types/course";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";

export default async function Home() {

  const {
    data: courses,
    error,
  } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <article className="rounded-3xl bg-zinc-900 p-8 border border-red-500">
          <h2 className="text-2xl font-bold">
            Database Error
          </h2>

          <p className="text-zinc-400 mt-2">
            Unable to load courses from Supabase.
          </p>
        </article>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-8">

          <HeroTile />

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {courses?.map((course: Course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}

            <article className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold mb-4">
                Activity
              </h3>

              <div className="grid grid-cols-7 gap-2 items-end h-24">
                {[20, 40, 60, 80, 30, 70, 90].map((height, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 rounded"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </article>

          </section>

        </section>

      </div>
    </main>
  );
}