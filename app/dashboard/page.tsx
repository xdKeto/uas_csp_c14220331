'use server'

import { getAnnouncements } from "@/actions/announcement";
import { logout } from "@/actions/auth";
import { Card } from "@/components/Card";
import { createClient } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const announcements = await getAnnouncements();
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
             <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
             {user && <span className="text-sm text-gray-500">{user.email}</span>}
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </form>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Announcements</h2>
          {announcements.length === 0 ? (
            <p className="text-gray-500">No announcements yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {announcements.map((item: any) => (
               <Card key={item.id} item={item}/>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
