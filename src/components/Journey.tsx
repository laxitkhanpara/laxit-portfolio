import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { journey } from '../content'
import { fadeUp, stagger } from '../motion'
import './Journey.css'

type Photo = { src: string; alt: string }

const GALLERY_PREVIEW = 6

function collectPhotos(item: (typeof journey)[number]): Photo[] {
  const list: Photo[] = []
  if (item.image) list.push({ src: item.image, alt: item.title })
  for (const src of item.images ?? []) {
    list.push({ src, alt: `${item.title} photo` })
  }
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
  return 'gallery-many'
}

function JourneyPhoto({
  src,
  alt,
  onOpen,
  onFail,
}: {
  src: string
  alt: string
  onOpen?: () => void
  onFail?: (src: string) => void
}) {
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <button
      type="button"
      className="journey-photo"
      onClick={onOpen}
      aria-label={`View ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => {
          setFailed(true)
          onFail?.(src)
        }}
      />
    </button>
  )
}

function JourneyThumb({
  photo,
  onOpen,
  onFail,
}: {
  photo: Photo
  onOpen: () => void
  onFail: (src: string) => void
}) {
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <button
      type="button"
      className="journey-thumb"
      onClick={onOpen}
      aria-label={`View ${photo.alt}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        onError={() => {
          setFailed(true)
          onFail(photo.src)
        }}
      />
    </button>
  )
}

function JourneyCardGallery({
  photos,
  onOpen,
}: {
  photos: Photo[]
  onOpen: (photo: Photo) => void
}) {
  const [failed, setFailed] = useState<Set<string>>(() => new Set())

  const visible = photos.filter((p) => !failed.has(p.src))
  if (visible.length === 0) return null

  const shown = visible.slice(0, GALLERY_PREVIEW)
  const extra = visible.slice(GALLERY_PREVIEW)

  const markFailed = (src: string) => {
    setFailed((prev) => {
      if (prev.has(src)) return prev
      const next = new Set(prev)
      next.add(src)
      return next
    })
  }

  return (
    <>
      <div className={`journey-gallery ${galleryClass(Math.min(shown.length, 4))}`}>
        {shown.map((photo) => (
          <JourneyPhoto
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            onOpen={() => onOpen(photo)}
            onFail={markFailed}
          />
        ))}
      </div>

      {extra.length > 0 ? (
        <div className="journey-thumbs" aria-label="More photos">
          {extra.map((photo) => (
            <JourneyThumb
              key={photo.src}
              photo={photo}
              onOpen={() => onOpen(photo)}
              onFail={markFailed}
            />
          ))}
        </div>
      ) : null}
    </>
  )
}

export function Journey() {
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  const items = useMemo(
    () =>
      [...journey]
        .sort((a, b) => b.sortDate - a.sortDate)
        .map((item) => ({
          ...item,
          photos: collectPhotos(item),
        })),
    [],
  )

  return (
    <article className="journey">
      <p className="journey-intro">
        A visual timeline of education, hackathons, certifications, product work, awards, and community — newest
        milestones first.{' '}
        <a href="/admin/upload">Upload journey photos →</a>
      </p>

      <motion.ol className="journey-list" variants={stagger} initial="hidden" animate="show">
        {items.map((item, index) => {
          const photoCount = item.photos.length

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
                  {photoCount > 1 ? (
                    <span className="journey-photo-count">{photoCount} photos</span>
                  ) : null}
                </div>
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-story">{item.story}</p>

                {photoCount > 0 ? (
                  <JourneyCardGallery photos={item.photos} onOpen={setLightbox} />
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
