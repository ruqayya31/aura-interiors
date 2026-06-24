import '../styles/hero.css'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80"
          alt="Luxury interior"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-content">

        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Aura Interiors
        </motion.p>

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Creating Spaces<br />
          That <span className="hero-headline-gold">Inspire</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We transform visions into extraordinary spaces with innovation,
          elegance, and functionality in every project.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a href="#projects" className="hero-btn-filled">View Our Work</a>
          <a href="#contact" className="hero-btn-outline">Get In Touch</a>
        </motion.div>

      </div>

      <motion.div
        className="hero-gallery"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="hero-gallery-item">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80" alt="Living room" />
        </div>
        <div className="hero-gallery-item">
          <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&q=80" alt="Kitchen" />
        </div>
        <div className="hero-gallery-item">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80" alt="Bedroom" />
        </div>
      </motion.div>

    </section>
  )
}

export default Hero