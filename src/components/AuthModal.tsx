import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  KeyRound,
  ShieldAlert,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { signIn, signUp } from '../lib/auth-client'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  agentName?: string
  agentStatus?: 'locked' | 'reserved'
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  agentName,
  agentStatus = 'locked',
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOAuthSignIn = async (provider: 'github' | 'google') => {
    try {
      setLoading(true)
      setErrorMsg(null)
      await signIn.social({
        provider,
        callbackURL: window.location.href,
      })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Social authentication failed'
      setErrorMsg(msg)
      setLoading(false)
    }
  }

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return

    try {
      setLoading(true)
      setErrorMsg(null)

      if (mode === 'signup') {
        await signUp.email({
          email,
          password,
          name: name.trim() || email.split('@')[0],
        })
      } else {
        await signIn.email({
          email,
          password,
        })
      }
      onClose()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Authentication failed. Please verify credentials.'
      setErrorMsg(msg)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen || typeof document === 'undefined') return null

  return createPortal(
    <div
      className="auth-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div
        className="auth-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="auth-modal-close-btn"
          aria-label="Close dialog"
        >
          <X size={16} />
        </button>

        {/* Header Section */}
        <div className="auth-modal-header">
          <div
            className={`auth-modal-icon-shield ${
              agentStatus === 'reserved' ? 'reserved' : agentName ? 'locked' : 'general'
            }`}
          >
            {agentStatus === 'reserved' ? (
              <ShieldAlert size={28} />
            ) : agentName ? (
              <KeyRound size={28} />
            ) : (
              <Sparkles size={28} />
            )}
          </div>

          <h2 id="auth-modal-title" className="auth-modal-title">
            {agentName ? `Unlock ${agentName}` : mode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h2>

          <p className="auth-modal-subtitle">
            {agentStatus === 'reserved'
              ? 'This orchestrator is reserved for system-level swarm consensus and administrative pipelines.'
              : agentName
              ? `Sign in to activate real-time dialogue and inference sessions with ${agentName}.`
              : 'Access locked neural models, sync conversation history, and unlock sovereign AI agents.'}
          </p>
        </div>

        {/* Tab Segmented Control */}
        <div className="auth-segmented-control" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signin'}
            className={`auth-segmented-btn ${mode === 'signin' ? 'active' : ''}`}
            onClick={() => {
              setMode('signin')
              setErrorMsg(null)
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signup'}
            className={`auth-segmented-btn ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => {
              setMode('signup')
              setErrorMsg(null)
            }}
          >
            Create Account
          </button>
        </div>

        {/* Error Alert Pill */}
        {errorMsg && (
          <div className="auth-error-alert" role="alert">
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Social Authentication Providers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            type="button"
            disabled={loading}
            onClick={() => handleOAuthSignIn('github')}
            className="auth-social-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Continue with GitHub</span>
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={() => handleOAuthSignIn('google')}
            className="auth-social-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.99 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Divider */}
        <div className="auth-divider">
          <span>or email credentials</span>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleEmailAuth} className="auth-input-group">
          {mode === 'signup' && (
            <div className="auth-input-wrapper">
              <User size={16} className="auth-input-icon" />
              <input
                type="text"
                placeholder="Your Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="auth-input-field"
                autoComplete="name"
              />
            </div>
          )}

          <div className="auth-input-wrapper">
            <Mail size={16} className="auth-input-icon" />
            <input
              type="email"
              required
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input-field"
              autoComplete="email"
            />
          </div>

          <div className="auth-input-wrapper">
            <Lock size={16} className="auth-input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input-field"
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            />
            <button
              type="button"
              className="auth-input-toggle-btn"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="auth-submit-btn"
          >
            {loading ? (
              <>
                <Loader2 size={17} className="spinner" />
                <span>Processing...</span>
              </>
            ) : mode === 'signin' ? (
              <span>Sign In with Email</span>
            ) : (
              <span>Create Account</span>
            )}
          </button>
        </form>

        {/* Trust & Encryption Badge */}
        <div className="auth-trust-footer">
          <Lock size={12} style={{ color: 'var(--secondary)' }} />
          <span>Encrypted with Better Auth & Cloudflare Tunnel</span>
        </div>
      </div>
    </div>,
    document.body
  )
}
export default AuthModal
