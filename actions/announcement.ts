'use server'

import { createClient } from "@/lib/supabaseClient"

export async function getAnnouncements() {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    if (error) {
        console.error('Error fetching announcements:', error)
        return []
    }

    return data
}