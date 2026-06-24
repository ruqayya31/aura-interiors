import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/ContactModal.css'

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef(null)
  const firstInputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          ref={overlayRef}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <span /><span />
            </button>

            {!submitted ? (
              <>
                <div className="modal-header">
                  <p className="modal-eyebrow">Get in Touch</p>
                  <h2 className="modal-title" id="modal-title">
                    Start a <em>Conversation</em>
                  </h2>
                  <p className="modal-subtitle">
                    Tell us about your space. We'll be in touch within 24 hours.
                  </p>
                </div>

                <form className="modal-form" onSubmit={handleSubmit} noValidate>
                  <div className="modal-row">
                    <div className="modal-field">
                      <label htmlFor="name">Full Name <span>*</span></label>
                      <input ref={firstInputRef} id="name" name="name" type="text"
                        placeholder="Your name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="modal-field">
                      <label htmlFor="email">Email Address <span>*</span></label>
                      <input id="email" name="email" type="email"
                        placeholder="hello@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="modal-row">
                    <div className="modal-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel"
                        placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="modal-field">
                      <label htmlFor="service">Service Interested In</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option value="interior-design">Interior Design</option>
                        <option value="space-planning">Space Planning</option>
                        <option value="furniture-curation">Furniture Curation</option>
                        <option value="project-management">Project Management</option>
                      </select>
                    </div>
                  </div>

                  <div className="modal-field">
                    <label htmlFor="message">Tell Us About Your Space <span>*</span></label>
                    <textarea id="message" name="message" rows="4"
                      placeholder="Describe your project, budget, timeline..."
                      value={formData.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="modal-submit">Send Message</button>
                </form>
              </>
            ) : (
              <motion.div className="modal-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="modal-success-icon">✦</div>
                <h2>Thank You</h2>
                <p>We've received your message and will be in touch within 24 hours.</p>
                <button className="modal-submit" onClick={handleReset}>Close</button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactModal