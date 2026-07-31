import { useState } from 'react'
import { motion } from 'framer-motion'
import { journey } from '../content'
import { fadeUp, stagger } from '../motion'
import './Journey.css'

function JourneyPhoto({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(!src)

  if (failed || !src) {
    return (
      <div className="journey-photo journey-photo-empty" aria-label={`${alt} — photo coming soon`}>
        <span>Photo</span>
        <small>Drop file in public/media/journey/</small>
      </div>
    )
  }

  return (
    <div className="journey-photo">
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  )
}

export function Journey() {
  return (
    <article className="journey">
      <header>
        <h2 className="article-title">Journey</h2>
      </header>

      <p className="journey-intro">
        The path so far — hackathons, career milestones, awards, and community moments. Photos will light up here as
        you add them.
      </p>

      <motion.ol className="journey-list" variants={stagger} initial="hidden" animate="show">
        {journey.map((item, index) => (
          <motion.li className="journey-item" key={item.id} variants={fadeUp}>
            <div className="journey-rail" aria-hidden>
              <span className="journey-dot" />
              {index < journey.length - 1 ? <span className="journey-line" /> : null}
            </div>

            <div className="journey-card">
              <div className="journey-meta">
                <span className="journey-year">{item.year}</span>
                <span className="journey-tag">{item.tag}</span>
              </div>
              <h3 className="journey-title">{item.title}</h3>
              <p className="journey-story">{item.story}</p>

              <div className={`journey-gallery ${item.images?.length ? 'multi' : ''}`}>
                <JourneyPhoto src={item.image} alt={item.title} />
                {item.images?.map((img) => (
                  <JourneyPhoto key={img} src={img} alt={`${item.title} extra`} />
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </article>
  )
}
