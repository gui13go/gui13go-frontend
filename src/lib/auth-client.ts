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

export const { signIn, signOut, signUp } = authClient

// Strongly typed useSession hook ensuring session.user is always recognized by TypeScript and IDE Language Servers
export const useSession = authClient.useSession as () => {
  data: SessionData | null
  isPending: boolean
  isRefetching: boolean
  error: Error | null
  refetch: () => Promise<void>
}
