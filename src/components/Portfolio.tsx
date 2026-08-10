import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, type ProjectCategory } from '../content'
import { scaleIn, stagger } from '../motion'
import './Portfolio.css'

const filters: ProjectCategory[] = ['All', 'Enterprise', 'Tools', 'Hackathon', 'Apps', 'Blog']

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <article className="portfolio">
      <ul className="filter-list">
        {filters.map((f) => (
          <li key={f}>
            <button type="button" className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
              {f}
            </button>
          </li>
        ))}
      </ul>

      <motion.ul className="project-list" variants={stagger} initial="hidden" animate="show" key={filter}>
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.li
              className="project-item"
              key={p.title}
              layout
              variants={scaleIn}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              whileHover={{ y: -8 }}
            >
              <a
                href={p.live || p.link || '#'}
                target={p.live || p.link ? '_blank' : undefined}
                rel={p.live || p.link ? 'noreferrer' : undefined}
                className={!p.live && !p.link ? 'no-link' : undefined}
                onClick={(e) => {
                  if (!p.live && !p.link) e.preventDefault()
                }}
              >
                <figure className="project-img">
                  <div className="project-cover" data-cat={p.category} data-icon={p.icon ? 'true' : undefined}>
                    {p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : null}
                    {p.icon ? (
                      <img className="project-cover-icon" src={p.icon} alt="" aria-hidden loading="lazy" />
                    ) : null}
                    <span>{p.category}</span>
                  </div>
                </figure>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-category">{p.stack}</p>
                <p className="project-blurb">{p.blurb}</p>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </article>
  )
}
