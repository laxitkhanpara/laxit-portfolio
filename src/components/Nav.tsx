import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../content'
import './Nav.css'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="nav-brand" href="#top">
        <span className="nav-mark">LK</span>
        <span>{profile.name}</span>
      </a>
      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="btn btn-ghost nav-cta" href={profile.resume} download>
        Resume
      </a>
    </motion.header>
  )
}
