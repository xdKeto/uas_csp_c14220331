export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="h-8 w-32 animate-pulse rounded bg-gray-200"></div>
          <div className="h-10 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="space-y-6">
          <div className="h-8 w-48 animate-pulse rounded bg-gray-200"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {[1, 2, 3].map((i) => (
               <div key={i} className="flex h-64 flex-col justify-between rounded-lg bg-white p-6 shadow">
                 <div className="space-y-3">
                   <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>
                   <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                   <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                 </div>
                 <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200"></div>
               </div>
             ))}
          </div>
        </section>
      </main>
    </div>
  );
}
