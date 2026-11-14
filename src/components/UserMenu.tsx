import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ChevronDown, LogOut, Bot, Activity, Shield } from 'lucide-react'
import { useSession, signOut } from '../lib/auth-client'
import { AuthModal } from './AuthModal'

export const UserMenu: React.FC = () => {
  const { data: session, isPending } = useSession()
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const menuContainerRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false)
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dropdownOpen])

  // Skeleton shimmer while session is loading
  if (isPending) {
    return (
      <div
        style={{
          width: '78px',
          height: '32px',
          borderRadius: '9999px',
          background: 'var(--tertiary)',
          opacity: 0.6,
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />
    )
  }

  // Guest State: High-tech "Sign In" button with spark icon
  if (!session?.user) {
    return (
      <>
        <button
          type="button"
          onClick={() => setAuthModalOpen(true)}
          className="user-nav-signin-btn"
          aria-label="Sign in to your account"
          title="Sign in with GitHub, Google, or email to unlock reserved agents and personal history"
        >
          <Sparkles size={14} className="signin-icon-sparkle" />
          <span>Sign In</span>
        </button>

        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      </>
    )
  }

  const user = session.user
  const userInitial = (user.name || user.email || 'U').charAt(0).toUpperCase()
  const role = user.role || 'user'
  const isAdmin = role === 'admin'
  const firstName = user.name ? user.name.split(' ')[0] : user.email?.split('@')[0] || 'User'

  return (
    <div ref={menuContainerRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="user-nav-profile-btn"
        aria-label="User profile menu"
        aria-expanded={dropdownOpen}
      >
        <div className="user-nav-avatar-wrap">
          {user.image ? (
            <img src={user.image} alt={user.name || 'User Avatar'} className="user-nav-avatar-img" />
          ) : (
            <div className="user-nav-avatar-placeholder">{userInitial}</div>
          )}
          <span className="user-nav-status-dot" title="Active authenticated session" />
        </div>

        <span className="user-nav-name">{firstName}</span>

        <span className={`user-nav-badge ${isAdmin ? 'admin' : 'member'}`}>
          {isAdmin ? 'Admin' : 'Pro'}
        </span>

        <ChevronDown size={14} className={`user-nav-chevron ${dropdownOpen ? 'open' : ''}`} />
      </button>

      {dropdownOpen && (
        <div className="user-nav-dropdown" role="menu">
          <div className="user-nav-dropdown-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <div className="user-nav-dropdown-name">{user.name || 'User'}</div>
              <span className={`user-nav-badge ${isAdmin ? 'admin' : 'member'}`}>
                {isAdmin ? 'System Admin' : 'Authenticated'}
              </span>
            </div>
            <div className="user-nav-dropdown-email">{user.email}</div>
          </div>

          <Link
            to="/agents/"
            className="user-nav-dropdown-item"
            onClick={() => setDropdownOpen(false)}
          >
            <Bot size={15} style={{ color: '#818cf8' }} />
            <span>Agent Portfolio</span>
          </Link>

          <Link
            to="/status/"
            className="user-nav-dropdown-item"
            onClick={() => setDropdownOpen(false)}
          >
            <Activity size={15} style={{ color: '#34d399' }} />
            <span>Ollama Cluster Status</span>
          </Link>

          {isAdmin && (
            <div
              className="user-nav-dropdown-item"
              style={{ cursor: 'default', opacity: 0.9, fontSize: '0.78rem' }}
            >
              <Shield size={14} style={{ color: '#ef4444' }} />
              <span style={{ color: '#ef4444', fontWeight: 600 }}>Unrestricted Swarm Access</span>
            </div>
          )}

          <div style={{ height: '1px', background: 'var(--theme-border)', margin: '4px 0' }} />

          <button
            type="button"
            className="user-nav-dropdown-item danger"
            onClick={async () => {
              setDropdownOpen(false)
              await signOut()
            }}
          >
            <LogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  )
}
