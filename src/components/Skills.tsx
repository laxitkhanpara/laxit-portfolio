import { motion } from 'framer-motion'
import { about, skills } from '../content'
import './Skills.css'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <p className="eyebrow">About & skills</p>
        <h2 className="section-title">Built for systems. Obsessed with speed.</h2>
        <p className="section-lead">{about}</p>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], i) => (
            <motion.div
              key={group}
              className="panel skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <h3>{group}</h3>
              <div className="chip-row">
                {items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
