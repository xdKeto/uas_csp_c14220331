'use server'

import { createClient } from "@/lib/supabaseClient"
import { redirect } from "next/navigation"

export async function login(formData: FormData){
    const supabase = await createClient()
    const {data, error} = await supabase.auth.signInWithPassword({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    })

    if(error){
        console.error(error)
        return { error: error.message }
    }

    return { success: true }
}

export async function register(formData: FormData){
    const supabase = await createClient()
    const {data, error} = await supabase.auth.signUp({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    })

    if(error){
        console.log(error)
        return { error: error.message }
    }

    return { success: true }
}

export async function logout(){
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login')
}
