import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile, socialLinks } from '../content'
import { fadeUp, stagger } from '../motion'
import './Sidebar.css'

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6.5 3h3l1.5 5-2 1.5a13 13 0 0 0 6 6L16.5 14l5 1.5v3A2 2 0 0 1 19.5 21 16.5 16.5 0 0 1 3 4.5 2 2 0 0 1 5 3Z" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function IconResume() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  )
}

function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)

  return (
    <motion.aside
      className={`sidebar card sidebar-compact ${open ? 'is-open' : ''}`}
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="sidebar-inner">
        <div className="sidebar-top">
          <div className="avatar-wrap">
            <span className="avatar-ring" aria-hidden />
            <span className="avatar-box">
              {profile.avatar ? (
                <img className="avatar-img" src={profile.avatar} alt={profile.name} />
              ) : (
                <span className="avatar-initials" aria-hidden>
                  {initials}
                </span>
              )}
            </span>
          </div>
          <div className="sidebar-meta">
            <motion.h1 className="sidebar-name" variants={fadeUp} initial="hidden" animate="show">
              {profile.name}
            </motion.h1>
            <div className="sidebar-badges">
              <motion.p
                className="sidebar-title"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {profile.title}
              </motion.p>
              <motion.div
                className="open-to-work"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                aria-label="Open to work"
              >
                <span className="open-to-work-dot" aria-hidden />
                Open to Work
              </motion.div>
            </div>
          </div>

          <div className="sidebar-actions">
            <motion.a
              className="sidebar-cta sidebar-cta-primary"
              href={profile.resume}
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconResume />
              Resume
            </motion.a>
            <motion.a
              className="sidebar-cta sidebar-cta-ghost"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconGithub />
              GitHub
            </motion.a>
          </div>

          <button
            type="button"
            className="sidebar-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? 'Hide Contacts' : 'Show Contacts'}
          </button>
        </div>

        <div className="separator contacts-sep" />

        <motion.ul className="contacts-list" variants={stagger} initial="hidden" animate="show">
          <motion.li className="contact-item" variants={fadeUp}>
            <div className="icon-box">
              <IconPhone />
            </div>
            <div>
              <p className="contact-title">Phone</p>
              <a className="contact-link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                {profile.phone}
              </a>
            </div>
          </motion.li>
          <motion.li className="contact-item" variants={fadeUp}>
            <div className="icon-box">
              <IconPin />
            </div>
            <div>
              <p className="contact-title">Location</p>
              <address className="contact-text" style={{ fontStyle: 'normal' }}>
                {profile.location}
              </address>
            </div>
          </motion.li>
        </motion.ul>

        <div className="sidebar-bottom">
          <div className="separator contacts-sep" />

          <ul className="social-list">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={s.name}
                  title={s.name}
                >
                  <img src={s.icon} alt={s.alt} width={22} height={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.aside>
  )
}
