export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-8">
      <div className="animate-pulse space-y-6">

        <div className="h-32 rounded-3xl bg-zinc-800"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="h-40 rounded-3xl bg-zinc-800"></div>

          <div className="h-40 rounded-3xl bg-zinc-800"></div>

          <div className="h-40 rounded-3xl bg-zinc-800"></div>

        </div>

      </div>
    </main>
  );
}