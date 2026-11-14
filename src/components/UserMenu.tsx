import React, { useState } from 'react'
import { useSession, signOut } from '../lib/auth-client'
import { AuthModal } from './AuthModal'

export const UserMenu: React.FC = () => {
  const { data: session, isPending } = useSession()
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  if (isPending) {
    return (
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'var(--tertiary)',
          opacity: 0.5,
        }}
      />
    )
  }

  if (!session?.user) {
    return (
      <>
        <button
          type="button"
          onClick={() => setAuthModalOpen(true)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            fontSize: '0.82rem',
            fontWeight: 600,
            borderRadius: '8px',
            border: '1px solid var(--theme-border)',
            backgroundColor: 'var(--tertiary)',
            color: 'var(--primary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          title="Sign in to unlock reserved agents and personal history"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Sign In</span>
        </button>

        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      </>
    )
  }

  const user = session.user
  const userInitial = (user.name || user.email || 'U').charAt(0).toUpperCase()
  const role = (user as unknown as { role?: string })?.role || 'user'
  const isAdmin = role === 'admin'

  return (
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setDropdownOpen((prev) => !prev)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '3px 8px 3px 4px',
          borderRadius: '999px',
          border: '1px solid var(--theme-border)',
          backgroundColor: 'var(--tertiary)',
          color: 'var(--primary)',
          cursor: 'pointer',
        }}
        aria-label="User profile menu"
      >
        {user.image ? (
          <img
            src={user.image}
            alt={user.name || 'User'}
            style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'var(--theme-accent)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 700,
            }}
          >
            {userInitial}
          </div>
        )}
        <span style={{ fontSize: '0.8rem', fontWeight: 600, maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {user.name?.split(' ')[0] || user.email?.split('@')[0]}
        </span>
        {isAdmin && (
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              padding: '1px 5px',
              borderRadius: '4px',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              color: '#ef4444',
              textTransform: 'uppercase',
            }}
          >
            Admin
          </span>
        )}
      </button>

      {dropdownOpen && (
        <>
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 999 }}
            onClick={() => setDropdownOpen(false)}
          />
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              width: '200px',
              backgroundColor: 'var(--entry)',
              border: '1px solid var(--theme-border)',
              borderRadius: '12px',
              padding: '8px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div style={{ padding: '8px', borderBottom: '1px solid var(--theme-border)', marginBottom: '4px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--primary)' }}>
                {user.name || 'User'}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--secondary)', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user.email}
              </div>
              <div style={{ marginTop: '4px', fontSize: '0.72rem', color: isAdmin ? '#ef4444' : '#10b981', fontWeight: 600 }}>
                {isAdmin ? '★ System Administrator' : '✓ Authenticated Tier'}
              </div>
            </div>

            <button
              type="button"
              onClick={async () => {
                setDropdownOpen(false)
                await signOut()
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 10px',
                borderRadius: '6px',
                border: 'none',
                background: 'none',
                color: '#ef4444',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

