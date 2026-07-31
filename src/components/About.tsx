import { awards, certifications, profile, services } from '../content'
import './About.css'

function ServiceIcon({ type }: { type: string }) {
  const common = {
    width: 36,
    height: 36,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
  } as const

  if (type === 'code') {
    return (
      <svg {...common}>
        <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13 5l-2 14" />
      </svg>
    )
  }
  if (type === 'web') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </svg>
    )
  }
  if (type === 'design') {
    return (
      <svg {...common}>
        <path d="M12 3 4 8v8l8 5 8-5V8l-8-5Z" />
        <path d="M12 12 4 8M12 12l8-4M12 12v9" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  )
}

export function About() {
  return (
    <article className="about">
      <header>
        <h2 className="article-title">About me</h2>
      </header>

      <section className="about-text">
        {profile.about.split('\n\n').map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </section>

      <section>
        <h3 className="section-title">What I'm doing</h3>
        <ul className="service-list">
          {services.map((s) => (
            <li className="service-item" key={s.title}>
              <div className="service-icon-box">
                <ServiceIcon type={s.icon} />
              </div>
              <div>
                <h4 className="service-item-title">{s.title}</h4>
                <p className="service-item-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-extra">
        <h3 className="section-title">Awards & certifications</h3>
        <ul className="chip-list">
          {awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
