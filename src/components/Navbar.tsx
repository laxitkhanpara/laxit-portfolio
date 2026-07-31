import './Navbar.css'

export type Tab = 'About' | 'Resume' | 'Portfolio' | 'Journey' | 'Contact'

const tabs: Tab[] = ['About', 'Resume', 'Portfolio', 'Journey', 'Contact']

export function Navbar({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  return (
    <nav className="navbar" aria-label="Primary">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={active === tab ? 'active' : ''}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}
