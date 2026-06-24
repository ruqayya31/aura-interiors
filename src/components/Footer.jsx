import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Footer.css'
import ContactModal from './ContactModal'

function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <footer className="footer" id="contact">

        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="footer-cta-eyebrow">Let's Build Something Beautiful</p>
          <h2 className="footer-cta-heading">
            Ready to Transform<br />
            Your <em>Space?</em>
          </h2>
          <button
            className="footer-cta-btn"
            onClick={() => setModalOpen(true)}
          >
            Start a Conversation
          </button>
        </motion.div>

        <div className="footer-top">

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              AURA <span>INTERIORS</span>
            </a>
            <p>
              Luxury interior design studio based in Bangalore.
              Crafting spaces that are as functional as they are beautiful.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social">Instagram</a>
              <a href="#" className="footer-social">Pinterest</a>
              <a href="#" className="footer-social">LinkedIn</a>
            </div>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Navigation</p>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Services</p>
            <ul>
              <li><a href="#services">Interior Design</a></li>
              <li><a href="#services">Space Planning</a></li>
              <li><a href="#services">Furniture Curation</a></li>
              <li><a href="#services">Project Management</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <p className="footer-contact-item">
              <a href="mailto:hello@aurainteriors.in">hello@aurainteriors.in</a>
            </p>
            <p className="footer-contact-item">
              <a href="tel:+919876543210">+91 98765 43210</a>
            </p>
            <p className="footer-contact-item">
              Bangalore,<br />Karnataka 560001
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2025 <span>Aura Interiors</span>. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer