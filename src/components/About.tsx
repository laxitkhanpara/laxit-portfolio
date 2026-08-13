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

export function About() {
  return (
    <article className="about">
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

        <motion.ul className="about-bullets" variants={fadeUp} aria-label="Summary">
          {profile.aboutBullets.map((bullet) => (
            <li key={bullet.emphasis}>
              <span className="about-bullet-marker" aria-hidden />
              <p>
                {bullet.leading}
                <span className="text-emphasis">{bullet.emphasis}</span>
                {bullet.trailing}
              </p>
            </li>
          ))}
        </motion.ul>

        <motion.ul className="tech-badges" variants={fadeUp} aria-label="Tech stack">
          {profile.techBadges.map((badge) => (
            <li key={badge}>
              <span>{badge}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div className="skills-marquee about-skills" variants={fadeUp} aria-label="Skills">
          <div className="skills-marquee-track">
            {[...skillIcons, ...skillIcons].map((skill, i) => (
              <a
                className="skills-marquee-item"
                key={`${skill.name}-${i}`}
                href={skill.href}
                target="_blank"
                rel="noreferrer"
                title={skill.name}
                aria-hidden={i >= skillIcons.length ? true : undefined}
                tabIndex={i >= skillIcons.length ? -1 : undefined}
              >
                <img src={skill.src} alt={i >= skillIcons.length ? '' : skill.alt} title={skill.name} />
              </a>
            ))}
          </div>
        </motion.div>
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
