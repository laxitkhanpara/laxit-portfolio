import { motion } from 'framer-motion'
import { profile } from '../content'
import './Contact.css'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-inner">
        <motion.div
          className="panel contact-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let’s build something that moves the needle.</h2>
          <p className="section-lead">
            Open to roles where architecture, ownership, and AI-accelerated delivery matter. Reach out — I reply fast.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-ghost" href={profile.resume} download>
              Download CV
            </a>
          </div>
          <p className="contact-note">
            {profile.location} · {profile.phone}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
