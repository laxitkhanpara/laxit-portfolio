import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { highlights } from '../content'
import './Highlights.css'

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return value
}

function HighlightCard({
  item,
  index,
}: {
  item: (typeof highlights)[number]
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const numeric = Number.parseInt(item.value.replace(/[^0-9]/g, ''), 10)
  const isNumeric = !Number.isNaN(numeric)
  const counted = useCountUp(isNumeric ? numeric : 0, inView)

  return (
    <motion.article
      ref={ref}
      className="panel highlight-card"
      initial={{ opacity: 0, y: 40, rotateX: 18 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <p className="highlight-value">
        {item.value.startsWith('~') ? '~' : ''}
        {isNumeric ? counted : item.value}
        {item.value.includes('x') ? 'x' : ''}
        {item.value.includes('%') ? '%' : ''}
        {item.value === '1st' ? 'st' : ''}
      </p>
      <h3>{item.label}</h3>
      <p>{item.detail}</p>
    </motion.article>
  )
}

export function Highlights() {
  return (
    <section className="section highlights" id="impact" aria-label="Impact highlights">
      <div className="section-inner">
        <p className="eyebrow">Signal, not fluff</p>
        <h2 className="section-title">Numbers recruiters remember.</h2>
        <div className="highlights-grid">
          {highlights.map((item, i) => (
            <HighlightCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
