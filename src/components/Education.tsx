import { motion } from 'framer-motion'
import { education } from '../content'
import { fadeUp, stagger } from '../motion'
import './Timeline.css'

export function Education() {
  return (
    <article className="timeline-page">
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 19V5a1 1 0 0 1 1-1h6l2 2h7a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
            </svg>
          </div>
          <h3 className="section-title">Academic background</h3>
        </div>

        <motion.ul className="timeline-list" variants={stagger} initial="hidden" animate="show">
          {education.map((item) => (
            <motion.li className="timeline-item" key={item.school} variants={fadeUp}>
              <span className="timeline-dot" aria-hidden />
              <div className="timeline-card glass-panel">
                <div className="timeline-card-head">
                  <h4 className="timeline-item-title">{item.school}</h4>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-text">
                  {item.degree}
                  <br />
                  {item.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </article>
  )
}
