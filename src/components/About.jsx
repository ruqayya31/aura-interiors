import '../styles/About.css'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className="about" id="about">

      <span className="about-bignum">02</span>

      <div className="about-grid">

        <motion.div
          className="about-img-wrap"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80"
            alt="Our studio"
            className="about-img"
          />
          <div className="about-img-accent" />
          <div className="about-img-frame" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="about-eyebrow">Our Story</p>
          <h2 className="about-heading">
            Design With<br />
            <em>Purpose</em> And Soul
          </h2>
          <p className="about-body">
            Aura Interiors was founded on a single belief — that great design
            is not about trends, but about truth. The truth of how you live,
            what you value, and who you are.
          </p>
          <p className="about-body">
            Over eight years, we have had the privilege of designing homes,
            restaurants, and commercial spaces across India — each one
            a deeply personal collaboration with our clients.
          </p>

          <div className="about-divider" />

          <div className="about-values">
            <div className="about-value">
              <span className="about-value-num">01</span>
              <p className="about-value-text">
                <strong>Intentional Design</strong> — every choice has a reason
              </p>
            </div>
            <div className="about-value">
              <span className="about-value-num">02</span>
              <p className="about-value-text">
                <strong>Client First</strong> — your life, your space, your vision
              </p>
            </div>
            <div className="about-value">
              <span className="about-value-num">03</span>
              <p className="about-value-text">
                <strong>Craft Over Speed</strong> — we never rush excellence
              </p>
            </div>
          </div>

          <a href="#contact" className="about-cta">Work With Us</a>
        </motion.div>

      </div>
    </section>
  )
}

export default About