import { motion } from 'framer-motion'
import { projects } from '../content'
import './Projects.css'

export function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-inner">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Projects that prove the craft.</h2>
        <p className="section-lead">
          From live CPaaS / Voice AI platforms to hackathon winners and open tools — impact first, aesthetics second.
          Drop your screenshots into <code>public/media</code> anytime and we wire them in.
        </p>

        <div className="projects-list">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="panel project-card"
              style={{ ['--accent' as string]: project.accent }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: Math.min(i * 0.05, 0.25), duration: 0.6 }}
            >
              <div className="project-visual" aria-hidden>
                <div className="project-orb" />
                <div className="project-visual-label">{project.title}</div>
                {project.mediaNote ? <p className="project-media-note">{project.mediaNote}</p> : null}
              </div>
              <div className="project-body">
                <div className="project-kicker">
                  <span>{project.subtitle}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-blurb">{project.blurb}</p>
                <ul>
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="chip-row">
                  {project.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {Object.entries(project.links).map(([label, href]) => (
                    <a key={label} className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
