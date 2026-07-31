import { education, experience, profile, skills } from '../content'
import './Resume.css'

export function Resume() {
  return (
    <article className="resume">
      <header>
        <h2 className="article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 19V5a1 1 0 0 1 1-1h6l2 2h7a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
            </svg>
          </div>
          <h3 className="section-title">Education</h3>
        </div>
        <ol className="timeline-list">
          {education.map((item) => (
            <li className="timeline-item" key={item.school}>
              <h4 className="timeline-item-title">{item.school}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">
                {item.degree}
                <br />
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </div>
          <h3 className="section-title">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience.map((job) => (
            <li className="timeline-item" key={`${job.company}-${job.role}`}>
              <h4 className="timeline-item-title">
                {job.role} · {job.company}
              </h4>
              <span>{job.period}</span>
              <ul className="timeline-points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="skills-section">
        <h3 className="section-title">My skills</h3>
        <ul className="skills-list">
          {skills.map((s) => (
            <li className="skills-item" key={s.name}>
              <div className="title-wrapper skills-head">
                <h4>{s.name}</h4>
                <data value={s.level}>{s.level}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${s.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
        <a className="resume-download" href={profile.resume} download>
          Download CV
        </a>
      </section>
    </article>
  )
}
