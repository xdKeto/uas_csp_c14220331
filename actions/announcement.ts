'use server'

import { createClient } from "@/lib/supabaseClient"
import { revalidatePath } from "next/cache"

export async function getAnnouncements() {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })
    
    if (error) {
        console.error('Error fetching announcements:', error)
        return []
    }

    return data
}