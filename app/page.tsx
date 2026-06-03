import { supabase } from "../lib/supabase";
import { Course } from "../types/course";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";
import MobileSidebar from "../components/MobileSidebar";

export default async function Home() {

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

      <div className="flex flex-col md:flex-row">

        {/* MOBILE SIDEBAR */}
        <MobileSidebar />

        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <section className="flex-1 p-4 md:p-8">

          <HeroTile />

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {courses?.map((course: Course) => (
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