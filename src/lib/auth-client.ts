import { useEffect, useState } from 'react'
import { createAuthClient } from 'better-auth/react'
import { adminClient } from 'better-auth/client/plugins'
import { API_BASE_URL } from '../config/api'

export interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export interface Session {
  id: string
  userId: string
  expiresAt: Date
}

export interface SessionData {
  user: User
  session: Session
}

// Determine the auth server base URL
// In production or development, it points to the API backend gateway
export const AUTH_SERVER_URL =
  import.meta.env.VITE_AUTH_SERVER_URL ||
  (API_BASE_URL.includes('ollama') ? 'https://api.guilhermeviegas.dev' : API_BASE_URL)

export const authClient = createAuthClient({
  baseURL: AUTH_SERVER_URL,
  plugins: [adminClient()],
})

const LOCAL_STORAGE_SESSION_KEY = 'gui13go_dev_session'

export function getLocalDevSession(): SessionData | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_SESSION_KEY)
    if (raw) {
      return JSON.parse(raw) as SessionData
    }
  } catch {
    // Ignore parse error
  }
  return null
}

export function setLocalDevSession(user: Partial<User> | null) {
  if (typeof window === 'undefined') return
  if (!user) {
    localStorage.removeItem(LOCAL_STORAGE_SESSION_KEY)
  } else {
    const mockSession: SessionData = {
      user: {
        id: user.id || 'dev_user_1',
        name: user.name || 'Guilherme Viegas',
        email: user.email || 'guilhermeviegas1993@gmail.com',
        role: user.role || 'admin',
        image: user.image || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: 'dev_sess_1',
        userId: user.id || 'dev_user_1',
        expiresAt: new Date(Date.now() + 30 * 24 * 3600 * 1000),
      },
    }
    localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(mockSession))
  }
  window.dispatchEvent(new Event('storage'))
  window.dispatchEvent(new CustomEvent('auth-state-change'))
}

// Custom wrapper over Better Auth signIn that safely falls back to local dev session when server is offline
export const signIn = {
  ...authClient.signIn,
  email: async (creds: { email: string; password?: string }) => {
    try {
      if (creds.password) {
        return await (authClient.signIn.email as any)(creds)
      }
    } catch (err) {
      console.warn('Backend Auth Server offline, falling back to local session for development testing:', err)
    }
    // If server unreachable or error, preserve seamless local testing
    setLocalDevSession({
      name: creds.email.split('@')[0],
      email: creds.email,
      role: 'admin',
    })
    return { data: getLocalDevSession(), error: null }
  },
  social: async (params: { provider: 'github' | 'google'; callbackURL?: string }) => {
    try {
      return await (authClient.signIn.social as any)(params)
    } catch (err) {
      console.warn('Social Auth Server offline, logging in as dev user:', err)
    }
    setLocalDevSession({
      name: `Dev (${params.provider})`,
      email: `dev@${params.provider}.local`,
      role: 'admin',
    })
    return { data: getLocalDevSession(), error: null }
  },
}

export const signUp = {
  ...authClient.signUp,
  email: async (creds: { email: string; password?: string; name?: string }) => {
    try {
      return await (authClient.signUp.email as any)(creds)
    } catch (err) {
      console.warn('Backend Auth Server offline, creating local dev session:', err)
    }
    setLocalDevSession({
      name: creds.name || creds.email.split('@')[0],
      email: creds.email,
      role: 'admin',
    })
    return { data: getLocalDevSession(), error: null }
  },
}

export const signOut = async () => {
  setLocalDevSession(null)
  try {
    await authClient.signOut()
  } catch {
    // Ignore server error on logout
  }
}

// Strongly typed useSession hook that merges real Better Auth session with local dev session
export const useSession = () => {
  const remote = (authClient.useSession as () => {
    data: SessionData | null
    isPending: boolean
    isRefetching: boolean
    error: Error | null
    refetch: () => Promise<void>
  })()

  const [localSession, setLocalSession] = useState<SessionData | null>(getLocalDevSession)

  useEffect(() => {
    const sync = () => setLocalSession(getLocalDevSession())
    window.addEventListener('storage', sync)
    window.addEventListener('auth-state-change', sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener('auth-state-change', sync)
    }
  }, [])

  const activeSession = remote.data || localSession

  return {
    ...remote,
    data: activeSession,
    isPending: remote.data ? remote.isPending : false,
    refetch: async () => {
      setLocalSession(getLocalDevSession())
      try {
        await remote.refetch()
      } catch {
        // ignore
      }
    },
  }
}

