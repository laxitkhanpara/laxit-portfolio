import { motion } from 'framer-motion'
import { awards, certifications, profile, services, skillIcons } from '../content'
import { fadeUp, scaleIn, stagger } from '../motion'
import './About.css'

function ServiceIcon({ type }: { type: string }) {
  const common = {
    width: 36,
    height: 36,
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
      <header>
        <h2 className="article-title">About me</h2>
      </header>

      <motion.section
        className="about-text"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {profile.about.split('\n\n').map((p) => (
          <motion.p key={p.slice(0, 24)} variants={fadeUp}>
            {p}
          </motion.p>
        ))}
      </motion.section>

      <section>
        <h3 className="section-title">What I'm doing</h3>
        <motion.ul className="service-list" variants={stagger} initial="hidden" animate="show">
          {services.map((s) => (
            <motion.li
              className="service-item"
              key={s.title}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
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

      <section className="clients">
        <h3 className="section-title">Skills</h3>
        <ul className="clients-list has-scrollbar">
          {skillIcons.map((skill) => (
            <li className="clients-item" key={skill.name}>
              <a href={skill.href} target="_blank" rel="noreferrer" title={skill.name}>
                <img src={skill.src} alt={skill.name} />
              </a>
            </li>
          ))}
        </ul>
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
