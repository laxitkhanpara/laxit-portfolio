import type { FormEvent } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile, socialLinks } from '../content'
import { fadeUp, stagger } from '../motion'
import './Contact.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('fullname') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <article className="contact">
      <header>
        <h2 className="article-title">Contact</h2>
      </header>

      <motion.section
        className="contact-map"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="map-placeholder">
          <strong>{profile.location}</strong>
          <p>Open to remote / hybrid opportunities</p>
        </div>
      </motion.section>

      <section className="contact-socials">
        <h3 className="section-title">Connect</h3>
        <motion.ul className="social-icon-list" variants={stagger} initial="hidden" animate="show">
          {socialLinks.map((s) => (
            <motion.li key={s.name} variants={fadeUp}>
              <a
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={s.name}
                title={s.name}
              >
                <img src={s.icon} alt={s.alt} width={36} height={28} />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section>
        <h3 className="section-title">Contact Form</h3>
        <motion.form
          className="contact-form"
          onSubmit={onSubmit}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="input-wrapper" variants={fadeUp}>
            <input type="text" name="fullname" placeholder="Full name" required />
            <input type="email" name="email" placeholder="Email address" required />
          </motion.div>
          <motion.textarea name="message" placeholder="Your Message" required rows={6} variants={fadeUp} />
          <motion.button
            type="submit"
            className="form-btn"
            variants={fadeUp}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m4 6 8 6 8-6M4 6h16v12H4z" />
            </svg>
            Send Message
          </motion.button>
          {sent ? <p className="form-note">Opening your email client…</p> : null}
        </motion.form>
      </section>
    </article>
  )
}
