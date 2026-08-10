import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './Navbar.css'

export type Tab = 'About' | 'Experience' | 'Education' | 'Projects' | 'Journey' | 'Contact'

const tabs: { id: Tab; short: string; icon: 'user' | 'briefcase' | 'grad' | 'grid' | 'path' | 'mail' }[] = [
  { id: 'About', short: 'About', icon: 'user' },
  { id: 'Experience', short: 'Exp', icon: 'briefcase' },
  { id: 'Education', short: 'Edu', icon: 'grad' },
  { id: 'Projects', short: 'Proj', icon: 'grid' },
  { id: 'Journey', short: 'Path', icon: 'path' },
  { id: 'Contact', short: 'Talk', icon: 'mail' },
]

function useIsMobileNav() {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 1024px)').matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1024px)')
    const sync = () => setMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return mobile
}

function NavIcon({ name }: { name: (typeof tabs)[number]['icon'] }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'user':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 19.5c1.8-3.2 4.2-4.8 7-4.8s5.2 1.6 7 4.8" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      )
    case 'grad':
      return (
        <svg {...common}>
          <path d="M3 10 12 5l9 5-9 5-9-5Z" />
          <path d="M7 12.5v4.2c0 .6 2.2 2.3 5 2.3s5-1.7 5-2.3v-4.2" />
        </svg>
      )
    case 'grid':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      )
    case 'path':
      return (
        <svg {...common}>
          <path d="M4 18c2.5-6 5-9 8-9s5.5 3 8 9" />
          <circle cx="12" cy="7" r="2.5" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 8 8 6 8-6" />
        </svg>
      )
  }
}

export function Navbar({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  const mobileNav = useIsMobileNav()

  const nav = (
    <nav className={`navbar${mobileNav ? ' navbar-dock' : ''}`} aria-label="Primary">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={active === tab.id ? 'active' : ''}
          onClick={() => onChange(tab.id)}
          aria-current={active === tab.id ? 'page' : undefined}
        >
          <span className="nav-icon">
            <NavIcon name={tab.icon} />
          </span>
          <span className="nav-label-full">{tab.id}</span>
          <span className="nav-label-short">{tab.short}</span>
        </button>
      ))}
    </nav>
  )

  return (
    <header className="article-header">
      <h2 className="article-title">{active}</h2>
      {mobileNav ? createPortal(nav, document.body) : nav}
    </header>
  )
}
