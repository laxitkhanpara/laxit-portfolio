import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { projects } from '../content'
import './Projects.css'

function TiltCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 180, damping: 18 })
  const sry = useSpring(ry, { stiffness: 180, damping: 18 })
  const glow = useMotionTemplate`radial-gradient(420px circle at ${ry}px ${rx}px, color-mix(in srgb, var(--accent) 28%, transparent), transparent 45%)`

  return (
    <motion.article
      ref={ref}
      className="project-card"
      style={{
        ['--accent' as string]: project.accent,
        rotateX: srx,
        rotateY: sry,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: Math.min(index * 0.05, 0.2), duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        const px = e.clientX - r.left
        const py = e.clientY - r.top
        const nx = px / r.width - 0.5
        const ny = py / r.height - 0.5
        rx.set(-ny * 10)
        ry.set(nx * 12)
      }}
      onMouseLeave={() => {
        rx.set(0)
        ry.set(0)
      }}
    >
      <motion.div className="project-glow" style={{ background: glow }} />
      <div className="project-index">0{index + 1}</div>
      <div className="project-visual" aria-hidden>
        <div className="project-orb" />
        <div className="project-ring" />
        <div className="project-visual-label">{project.title}</div>
      </div>
      <div className="project-body">
        <div className="project-kicker">
          <span>{project.subtitle}</span>
          <span>{project.period}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-blurb">{project.blurb}</p>
        <ul>
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="chip-row">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <div className="project-links">
          {Object.entries(project.links).map(([label, href]) => (
            <a key={label} className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-inner">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title section-title-xl">
          Not a template.
          <br />
          <span className="text-gradient">Real systems. Real impact.</span>
        </h2>
        <p className="section-lead">
          Cinematic case cards with live product ownership, hackathon wins, and open-source CLIs. Screenshots land next —
          structure is ready.
        </p>

        <div className="projects-list">
          {projects.map((project, i) => (
            <TiltCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
