import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="w-64 min-h-screen border-r border-zinc-800 p-6">
      <h1 className="text-xl font-bold mb-8">LearnX</h1>

      <ul className="space-y-3">

        <li className="flex items-center gap-3 text-zinc-300 cursor-pointer p-2 rounded-lg hover:bg-zinc-800 transition">
          <LayoutDashboard size={20} />
          Dashboard
        </li>

        <li className="flex items-center gap-3 text-zinc-300 cursor-pointer p-2 rounded-lg hover:bg-zinc-800 transition">
          <BookOpen size={20} />
          Courses
        </li>

        <li className="flex items-center gap-3 text-zinc-300 cursor-pointer p-2 rounded-lg hover:bg-zinc-800 transition">
          <Activity size={20} />
          Activity
        </li>

        <li className="flex items-center gap-3 text-zinc-300 cursor-pointer p-2 rounded-lg hover:bg-zinc-800 transition">
          <Settings size={20} />
          Settings
        </li>

      </ul>
    </nav>
  );
}