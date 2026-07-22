import { motion } from 'framer-motion'
import { highlights } from '../content'
import './Highlights.css'

export function Highlights() {
  return (
    <section className="section highlights" aria-label="Impact highlights">
      <div className="section-inner highlights-grid">
        {highlights.map((item, i) => (
          <motion.article
            key={item.label}
            className="panel highlight-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
          >
            <p className="highlight-value">{item.value}</p>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
