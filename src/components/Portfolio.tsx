import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { blogPosts, projects, type ProjectCategory } from '../content'
import { fadeUp, scaleIn, stagger } from '../motion'
import './Portfolio.css'

type ProjectsSubtab = 'Projects' | 'Blog'

const filters: ProjectCategory[] = ['All', 'Enterprise', 'Tools', 'Hackathon', 'Apps']

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M14 4h6v6M10 14 20 4M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export function Projects() {
  const [subtab, setSubtab] = useState<ProjectsSubtab>('Projects')
  const [filter, setFilter] = useState<ProjectCategory>('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <article className="portfolio">
      <div className="projects-subtabs" role="tablist" aria-label="Projects sections">
        {(['Projects', 'Blog'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={subtab === tab}
            className={subtab === tab ? 'active' : ''}
            onClick={() => setSubtab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {subtab === 'Projects' ? (
        <>
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
                      <div className="project-cover" data-cat={p.category}>
                        {p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : null}
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
        </>
      ) : (
        <motion.ul className="blog-list" variants={stagger} initial="hidden" animate="show">
          {blogPosts.map((post) => (
            <motion.li key={post.href} className="blog-card glass-panel" variants={fadeUp}>
              <a href={post.href} target="_blank" rel="noreferrer" className="blog-card-link">
                <div className="blog-card-top">
                  <span className="blog-source">{post.source}</span>
                  <span className="blog-external" aria-hidden>
                    <ExternalIcon />
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>
                <ul className="blog-tags" aria-label="Tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </article>
  )
}
