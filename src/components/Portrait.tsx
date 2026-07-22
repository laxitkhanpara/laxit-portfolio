import { motion } from 'framer-motion'
import './Portrait.css'

/** Image 12 — portrait from your prompt (outdoor, navy tee, bold framing). */
export function Portrait() {
  return (
    <motion.div
      className="portrait-frame"
      initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="portrait-glow" />
      <div className="portrait-art" role="img" aria-label="Laxit Khanpara portrait">
        <div className="portrait-bg" />
        <div className="portrait-person">
          <div className="portrait-hair" />
          <div className="portrait-face" />
          <div className="portrait-beard" />
          <div className="portrait-shirt" />
          <div className="portrait-chain" />
        </div>
      </div>
      <div className="portrait-badge">AI Ninja</div>
      <p className="portrait-caption">Laxit Khanpara</p>
    </motion.div>
  )
}
