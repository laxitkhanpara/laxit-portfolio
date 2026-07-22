import { Suspense, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { profile } from '../content'
import { HeroScene } from './HeroScene'
import './Hero.css'

const letters = profile.name.split('')

export function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const parallaxX = useTransform(sx, [-0.5, 0.5], [-18, 18])
  const parallaxY = useTransform(sy, [-0.5, 0.5], [-12, 12])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 80)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section
      className="hero"
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
    >
      <div className="hero-3d">
        <Suspense fallback={<div className="hero-fallback" />}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="hero-veil" />
      <div className="grid-noise" />

      <motion.div className="hero-inner" style={{ x: parallaxX, y: parallaxY }}>
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Software Engineer · AI Ninja · System Builder
        </motion.p>

        <h1 className="hero-name" aria-label={profile.name}>
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              className={ch === ' ' ? 'hero-space' : 'hero-letter'}
              initial={{ opacity: 0, y: 80, rotateX: 70 }}
              animate={ready ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
              transition={{ delay: 0.25 + i * 0.035, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          {profile.title}
          <span className="hero-role-slash"> / </span>
          High-throughput platforms
        </motion.p>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <a className="btn btn-primary btn-glow" href="#work">
            Enter the work
            <span aria-hidden>↗</span>
          </a>
          <a className="btn btn-ghost" href="#contact">
            Hire me
          </a>
          <a className="btn btn-ghost" href={profile.resume} download>
            Resume
          </a>
        </motion.div>

        <motion.div
          className="hero-ticker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="hero-ticker-track">
            {[
              'Spring Boot',
              'Kafka',
              'React',
              'AWS',
              'Voice AI',
              'CPaaS',
              'Liferay OSS',
              'Hackathon Winner',
              'AXpert of the Month',
            ]
              .concat([
                'Spring Boot',
                'Kafka',
                'React',
                'AWS',
                'Voice AI',
                'CPaaS',
                'Liferay OSS',
                'Hackathon Winner',
                'AXpert of the Month',
              ])
              .map((item, i) => (
                <span key={`${item}-${i}`}>{item}</span>
              ))}
          </div>
        </motion.div>
      </motion.div>

      <a className="hero-scroll" href="#impact">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  )
}
