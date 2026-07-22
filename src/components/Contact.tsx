import { motion } from 'framer-motion'
import { profile } from '../content'
import './Contact.css'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-inner">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-orb contact-orb-a" />
          <div className="contact-orb contact-orb-b" />
          <p className="eyebrow">Contact</p>
          <h2 className="section-title contact-title">
            Let’s build something
            <br />
            <span className="text-gradient">recruiters can’t ignore.</span>
          </h2>
          <p className="section-lead">
            Open to roles where architecture, ownership, and AI-accelerated delivery matter. I reply fast.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary btn-glow" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="btn btn-ghost" href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub ↗
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
