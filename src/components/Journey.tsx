import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { journey } from '../content'
import { fadeUp, stagger } from '../motion'
import './Journey.css'

type Photo = { src: string; alt: string }

function collectPhotos(item: (typeof journey)[number]): Photo[] {
  const list: Photo[] = []
  if (item.image) list.push({ src: item.image, alt: item.title })
  for (const src of item.images ?? []) {
    list.push({ src, alt: `${item.title} photo` })
  }
  // de-dupe identical paths
  const seen = new Set<string>()
  return list.filter((p) => {
    if (seen.has(p.src)) return false
    seen.add(p.src)
    return true
  })
}

function galleryClass(count: number) {
  if (count <= 1) return 'gallery-1'
  if (count === 2) return 'gallery-2'
  if (count === 3) return 'gallery-3'
  if (count === 4) return 'gallery-4'
  return 'gallery-many'
}

function JourneyPhoto({
  src,
  alt,
  onOpen,
}: {
  src: string
  alt: string
  onOpen?: () => void
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="journey-photo journey-photo-empty" aria-hidden>
        <span>Photo</span>
      </div>
    )
  }

  return (
    <button type="button" className="journey-photo" onClick={onOpen} aria-label={`View ${alt}`}>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </button>
  )
}

export function Journey() {
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  const items = useMemo(
    () =>
      journey.map((item) => ({
        ...item,
        photos: collectPhotos(item),
      })),
    [],
  )

  return (
    <article className="journey">
      <header>
        <h2 className="article-title">Journey</h2>
      </header>

      <p className="journey-intro">
        A visual timeline of education, hackathons, certifications, product work, awards, and community — one
        milestone at a time.
      </p>

      <motion.ol className="journey-list" variants={stagger} initial="hidden" animate="show">
        {items.map((item, index) => {
          const photos = item.photos
          const shown = photos.slice(0, 4)

          return (
            <motion.li className="journey-item" key={item.id} variants={fadeUp}>
              <div className="journey-rail" aria-hidden>
                <span className="journey-dot" />
                {index < items.length - 1 ? <span className="journey-line" /> : null}
              </div>

              <div className="journey-card">
                <div className="journey-meta">
                  <span className="journey-year">{item.year}</span>
                  <span className="journey-tag">{item.tag}</span>
                </div>
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-story">{item.story}</p>

                {photos.length > 0 ? (
                  <div className={`journey-gallery ${galleryClass(Math.min(photos.length, 4))}`}>
                    {shown.map((photo) => (
                      <JourneyPhoto
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        onOpen={() => setLightbox(photo)}
                      />
                    ))}
                  </div>
                ) : null}

                {photos.length > 4 ? (
                  <div className="journey-thumbs" aria-label="More photos">
                    {photos.slice(4).map((photo) => (
                      <button
                        type="button"
                        className="journey-thumb"
                        key={photo.src}
                        onClick={() => setLightbox(photo)}
                        aria-label={`View ${photo.alt}`}
                      >
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.li>
          )
        })}
      </motion.ol>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            className="journey-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <button type="button" className="journey-lightbox-close" aria-label="Close">
              ×
            </button>
            <motion.img
              key={lightbox.src}
              src={lightbox.src}
              alt={lightbox.alt}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  )
}
