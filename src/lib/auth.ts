import { supabase } from './supabaseClient'

// export const signUp = async (email: string, password: string) => {
//   const { data, error } = await supabase.auth.signUp({ email, password })
//   if (error) throw error
//   return data
// }

export const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      }
    }
  })
  if (error) throw error
  return data
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

// export const getCurrentUser = async () => {
//   const { data: { user } } = await supabase.auth.getUser()
//   return user
// }

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (user) {
    // Fetch the corresponding user data from the public users table
    const { data: publicUserData, error } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', user.id)
      .single()

    if (error) {
      console.error('Error fetching public user data:', error)
      return { authUser: user, publicUser: null }
    }

    return { authUser: user, publicUser: publicUserData }
  }

  return { authUser: null, publicUser: null }
}

export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email)
  if (error) throw error
  return data
}

export const updateUser = async (updates: { email?: string, password?: string, data?: object }) => {
  const { data, error } = await supabase.auth.updateUser(updates)
  if (error) throw error
  return data
}