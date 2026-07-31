import { useMemo, useState } from 'react'
import { projects, type ProjectCategory } from '../content'
import './Portfolio.css'

const filters: ProjectCategory[] = ['All', 'Enterprise', 'Open Source', 'Hackathon', 'Apps']

export function Portfolio() {
  const [filter, setFilter] = useState<ProjectCategory>('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <article className="portfolio">
      <header>
        <h2 className="article-title">Portfolio</h2>
      </header>

      <ul className="filter-list">
        {filters.map((f) => (
          <li key={f}>
            <button type="button" className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
              {f}
            </button>
          </li>
        ))}
      </ul>

      <ul className="project-list">
        {visible.map((p) => (
          <li className="project-item" key={p.title}>
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
                  <span>{p.category}</span>
                </div>
              </figure>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-category">{p.stack}</p>
              <p className="project-blurb">{p.blurb}</p>
            </a>
          </li>
        ))}
      </ul>
    </article>
  )
}
