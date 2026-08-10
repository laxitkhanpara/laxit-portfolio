import { motion } from 'framer-motion'
import { experience, profile, skills } from '../content'
import { fadeUp, stagger } from '../motion'
import './Timeline.css'

export function Experience() {
  return (
    <article className="timeline-page">
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </div>
          <h3 className="section-title">Work experience</h3>
        </div>

        <motion.ul className="timeline-list" variants={stagger} initial="hidden" animate="show">
          {experience.map((job) => (
            <motion.li className="timeline-item" key={`${job.company}-${job.role}`} variants={fadeUp}>
              <span className="timeline-dot" aria-hidden />
              <div className="timeline-card glass-panel">
                <div className="timeline-card-head">
                  <h4 className="timeline-item-title">
                    {job.role}
                    <span className="timeline-sep">·</span>
                    {job.company}
                  </h4>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="skills-section">
        <h3 className="section-title">Core skills</h3>
        <motion.ul className="skills-list" variants={stagger} initial="hidden" animate="show">
          {skills.map((s) => (
            <motion.li className="skills-item" key={s.name} variants={fadeUp}>
              <div className="title-wrapper skills-head">
                <h4>{s.name}</h4>
                <data value={s.level}>{s.level}%</data>
              </div>
              <div className="skill-progress-bg">
                <motion.div
                  className="skill-progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${s.level}%` }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <motion.a
          className="resume-download"
          href={profile.resume}
          download
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Download CV
        </motion.a>
      </section>
    </article>
  )
}
