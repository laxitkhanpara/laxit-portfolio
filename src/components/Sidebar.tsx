import { motion } from 'framer-motion'
import { profile } from '../content'
import { fadeUp, stagger } from '../motion'
import './Sidebar.css'

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  )
}

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

function IconCal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  )
}

export function Sidebar() {
  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)

  return (
    <motion.aside
      className="sidebar card"
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="avatar-box"
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 160, damping: 14 }}
        whileHover={{ scale: 1.04, rotate: -2 }}
      >
        <span className="avatar-initials">{initials}</span>
      </motion.div>
      <motion.h1 className="sidebar-name" variants={fadeUp} initial="hidden" animate="show">
        {profile.name}
      </motion.h1>
      <motion.p
        className="sidebar-title"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        {profile.title}
      </motion.p>

      <div className="separator" />

      <motion.ul className="contacts-list" variants={stagger} initial="hidden" animate="show">
        <motion.li className="contact-item" variants={fadeUp}>
          <div className="icon-box">
            <IconMail />
          </div>
          <div>
            <p className="contact-title">Email</p>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </motion.li>
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
            <IconCal />
          </div>
          <div>
            <p className="contact-title">Experience</p>
            <p className="contact-text">3+ years</p>
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

      <div className="separator" />

      <ul className="social-list">
        <li>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </li>
        <li>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.94 8.5H3.75V20h3.19V8.5ZM5.34 7.12a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7ZM20.25 20h-3.18v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V20H9.88V8.5h3.05v1.57h.04c.43-.8 1.47-1.65 3.03-1.65 3.24 0 3.84 2.13 3.84 4.9V20Z" />
            </svg>
          </a>
        </li>
      </ul>

      <motion.a
        className="sidebar-cta"
        href={profile.resume}
        download
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Download CV
      </motion.a>
    </motion.aside>
  )
}
