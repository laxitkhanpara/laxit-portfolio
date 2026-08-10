import { motion } from 'framer-motion'
import { awards, certifications, profile, services, skillIcons } from '../content'
import { fadeUp, scaleIn, stagger } from '../motion'
import './About.css'

function ServiceIcon({ type }: { type: string }) {
  const common = {
    width: 32,
    height: 32,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
  } as const

  if (type === 'code') {
    return (
      <svg {...common}>
        <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13 5l-2 14" />
      </svg>
    )
  }
  if (type === 'web') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </svg>
    )
  }
  if (type === 'design') {
    return (
      <svg {...common}>
        <path d="M12 3 4 8v8l8 5 8-5V8l-8-5Z" />
        <path d="M12 12 4 8M12 12l8-4M12 12v9" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12h8M12 8v8" />
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

export function About() {
  return (
    <article className="about">
      <header>
        <h2 className="article-title">About</h2>
      </header>

      <motion.section
        className="about-hero glass-panel"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p className="about-role" variants={fadeUp}>
          {profile.title}
        </motion.p>

        <motion.h3 className="about-headline" variants={fadeUp}>
          {profile.headline}
        </motion.h3>

        <motion.p className="about-body" variants={fadeUp}>
          {profile.about}
        </motion.p>

        <motion.ul className="tech-badges" variants={fadeUp} aria-label="Tech stack">
          {profile.techBadges.map((badge) => (
            <li key={badge}>
              <span>{badge}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div className="about-ctas" variants={fadeUp}>
          <a className="btn btn-primary" href={profile.resume} download>
            <IconResume />
            Resume
          </a>
          <a
            className="btn btn-ghost"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <IconGithub />
            GitHub
          </a>
        </motion.div>

        <motion.ul className="clients-list about-skills" variants={fadeUp} aria-label="Skills">
          {skillIcons.map((skill) => (
            <li className="clients-item" key={skill.name}>
              <a href={skill.href} target="_blank" rel="noreferrer" title={skill.name}>
                <img src={skill.src} alt={skill.alt} title={skill.name} />
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.section>

      <section className="about-block">
        <h3 className="section-title">What I build</h3>
        <motion.ul className="service-list" variants={stagger} initial="hidden" animate="show">
          {services.map((s) => (
            <motion.li
              className="service-item glass-panel"
              key={s.title}
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="service-icon-box">
                <ServiceIcon type={s.icon} />
              </div>
              <div>
                <h4 className="service-item-title">{s.title}</h4>
                <p className="service-item-text">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="about-extra">
        <h3 className="section-title">Awards & certifications</h3>
        <motion.ul className="chip-list" variants={stagger} initial="hidden" animate="show">
          {awards.map((a) => (
            <motion.li key={a} variants={fadeUp} whileHover={{ x: 4 }}>
              {a}
            </motion.li>
          ))}
          {certifications.map((c) => (
            <motion.li key={c} variants={fadeUp} whileHover={{ x: 4 }}>
              {c}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </article>
  )
}
