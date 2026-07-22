import { motion } from 'framer-motion'
import { achievements, certifications } from '../content'
import './Awards.css'

export function Awards() {
  return (
    <section className="section" id="awards">
      <div className="section-inner">
        <p className="eyebrow">Wins & recognition</p>
        <h2 className="section-title">Proof beyond the resume bullets.</h2>
        <p className="section-lead">
          Hackathon podiums, employee recognition, and Liferay certifications — the human side of shipping hard things.
        </p>

        <div className="awards-grid">
          {achievements.map((item, i) => (
            <motion.article
              key={item.title}
              className="panel award-card"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <span className={`award-kind award-kind-${item.kind}`}>{item.kind}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="certs">
          <h3 className="certs-title">Certifications</h3>
          <div className="certs-row">
            {certifications.map((cert) => (
              <div className="panel cert-card" key={cert.title}>
                <strong>{cert.title}</strong>
                <span>
                  {cert.issuer} · {cert.issued}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
