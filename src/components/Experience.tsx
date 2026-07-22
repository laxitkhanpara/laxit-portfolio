import { motion } from 'framer-motion'
import { experience } from '../content'
import './Experience.css'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Shipping systems that scale.</h2>
        <p className="section-lead">
          Enterprise ownership on live B2B platforms — architecture, delivery, and mentoring under Agile pressure.
        </p>
        <div className="experience-list">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              className="panel experience-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <div className="experience-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>
                <span className="experience-period">{job.period}</span>
              </div>
              <div className="chip-row">
                {job.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
