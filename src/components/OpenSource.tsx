import { motion } from 'framer-motion'
import { openSource } from '../content'
import './OpenSource.css'

export function OpenSource() {
  return (
    <section className="section" id="open-source">
      <div className="section-inner">
        <p className="eyebrow">Open source</p>
        <h2 className="section-title">Tools other developers actually run.</h2>
        <p className="section-lead">
          Published npm CLIs for Liferay DXP — featured on the official Liferay Developer Blog.
        </p>
        <div className="oss-grid">
          {openSource.map((item, i) => (
            <motion.article
              key={item.title}
              className="panel oss-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <span className="oss-badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
              <div className="project-links">
                {Object.entries(item.links).map(([label, href]) => (
                  <a key={label} className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
