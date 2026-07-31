import type { FormEvent } from 'react'
import { useState } from 'react'
import { profile } from '../content'
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

      <section className="contact-map">
        <div className="map-placeholder">
          <strong>{profile.location}</strong>
          <p>Open to remote / hybrid opportunities</p>
        </div>
      </section>

      <section>
        <h3 className="section-title">Contact Form</h3>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="input-wrapper">
            <input type="text" name="fullname" placeholder="Full name" required />
            <input type="email" name="email" placeholder="Email address" required />
          </div>
          <textarea name="message" placeholder="Your Message" required rows={6} />
          <button type="submit" className="form-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m4 6 8 6 8-6M4 6h16v12H4z" />
            </svg>
            Send Message
          </button>
          {sent ? <p className="form-note">Opening your email client…</p> : null}
        </form>

        <div className="contact-alt">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </article>
  )
}
