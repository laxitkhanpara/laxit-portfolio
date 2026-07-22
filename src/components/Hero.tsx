import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../content'
import { HeroScene } from './HeroScene'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="grid-noise" />
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Software Engineer · AI Ninja · Builder</p>
          <h1 className="hero-name">
            <span className="hero-name-glow">{profile.name}</span>
          </h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              Explore work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact me
            </a>
            <a className="btn btn-ghost" href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="hero-meta">
            <span>3+ yrs shipping enterprise systems</span>
            <span>Spring · Kafka · React · AWS</span>
            <span>Open-source npm CLIs</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-stage"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-stage-glow" />
          <Suspense fallback={<div className="hero-fallback" />}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
