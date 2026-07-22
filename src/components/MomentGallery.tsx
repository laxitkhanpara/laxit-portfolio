import { motion } from 'framer-motion'
import { certVisuals, moments } from '../content/media'
import './MomentGallery.css'

function MomentVisual({ id, accent }: { id: string; accent: string }) {
  const style = { ['--moment-accent' as string]: accent }

  if (id === 'axpert') {
    return (
      <div className="moment-visual moment-axpert" style={style}>
        <span className="moment-brand">AIXTOR</span>
        <strong>AXpert of the Month</strong>
        <em>Laxit Khanpara</em>
        <small>January 2026</small>
      </div>
    )
  }

  if (id === 'pu-hackathon') {
    return (
      <div className="moment-visual moment-pu" style={style}>
        <div className="moment-people">
          <i /><i /><i />
        </div>
        <strong>PU CODE HACKATHON</strong>
        <small>Participant · Parul University</small>
      </div>
    )
  }

  if (id === 'vadodara-win') {
    return (
      <div className="moment-visual moment-trophy" style={style}>
        <span className="trophy">1st</span>
        <strong>Vadodara Hackathon 4.0</strong>
        <small>1st Place · GuruZone</small>
      </div>
    )
  }

  if (id === 'liferay-ug') {
    return (
      <div className="moment-visual moment-liferay" style={style}>
        <span>Liferay</span>
        <strong>User Group Ahmedabad</strong>
        <small>Junior Liferay Developer</small>
      </div>
    )
  }

  if (id.startsWith('liferay') || id === 'cyber-fdp') {
    return (
      <div className="moment-visual moment-cert" style={style}>
        <span>CERTIFICATE</span>
        <strong>Liferay</strong>
        <small>Professional recognition</small>
      </div>
    )
  }

  return (
    <div className="moment-visual moment-generic" style={style}>
      <strong>{id.replace(/-/g, ' ')}</strong>
    </div>
  )
}

export function MomentGallery() {
  return (
    <section className="section moment-gallery" id="moments">
      <div className="section-inner">
        <p className="eyebrow">Moments & proof</p>
        <h2 className="section-title">
          From your
          <span className="text-gradient"> prompt gallery.</span>
        </h2>
        <p className="section-lead">
          Hackathons, AXpert recognition, Liferay community, and certifications — visualized from the photos you shared.
        </p>

        <div className="moments-grid">
          {moments.map((m, i) => (
            <motion.article
              key={m.id}
              className="moment-card"
              style={{ ['--moment-accent' as string]: m.accent }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              whileHover={{ y: -6 }}
            >
              <MomentVisual id={m.id} accent={m.accent} />
              <div className="moment-body">
                <span className="moment-tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.detail}</p>
                <small>{m.promptRef}</small>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="cert-gallery">
          <h3 className="certs-title">Liferay certifications</h3>
          <div className="cert-visual-row">
            {certVisuals.map((c) => (
              <div
                key={c.title}
                className="cert-visual"
                style={{ ['--moment-accent' as string]: c.accent }}
              >
                <span className="cert-logo">Liferay</span>
                <strong>{c.title}</strong>
                <em>Issued {c.issued}</em>
                <small>{c.promptRef}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
