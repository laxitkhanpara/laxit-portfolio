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

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const [avatarOpen, setAvatarOpen] = useState(false)
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
          <motion.button
            type="button"
            className="avatar-wrap"
            aria-label="View profile photo"
            onClick={() => profile.avatar && setAvatarOpen(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 160, damping: 14 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
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
          </motion.button>
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
                  <img src={s.icon} alt="" width={28} height={22} />
                </a>
              </li>
            ))}
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
        </div>
      </div>

      {avatarOpen && profile.avatar ? (
        <div
          className="avatar-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo"
          onClick={() => setAvatarOpen(false)}
        >
          <button type="button" className="avatar-lightbox-close" aria-label="Close">
            ×
          </button>
          <img
            src={profile.avatar}
            alt={profile.name}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </motion.aside>
  )
}
