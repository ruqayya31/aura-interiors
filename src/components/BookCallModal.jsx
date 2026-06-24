import '../styles/BookCallModal.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function BookCallModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit() {
    const subject = 'Booking a Call - ' + name
    const body = 'Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0A%0D%0A' + message
    window.location.href = 'mailto:hello@aurainteriors.in?subject=' + subject + '&body=' + body
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-box"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={function(e) { e.stopPropagation() }}
          >
            <button className="modal-close" onClick={onClose}>×</button>

            <p className="modal-eyebrow">Let's Talk</p>
            <h3 className="modal-heading">Book a Call With Us</h3>
            <p className="modal-desc">
              Tell us a little about your project and we will get back
              to you within 24 hours.
            </p>

            <div className="modal-field">
              <label className="modal-label">Your Name</label>
              <input
                type="text"
                className="modal-input"
                value={name}
                onChange={function(e) { setName(e.target.value) }}
                placeholder="Priya Kapoor"
              />
            </div>

            <div className="modal-field">
              <label className="modal-label">Email Address</label>
              <input
                type="email"
                className="modal-input"
                value={email}
                onChange={function(e) { setEmail(e.target.value) }}
                placeholder="you@example.com"
              />
            </div>

            <div className="modal-field">
              <label className="modal-label">Tell Us About Your Project</label>
              <textarea
                className="modal-textarea"
                value={message}
                onChange={function(e) { setMessage(e.target.value) }}
                placeholder="A 3BHK in Mumbai, looking for a full renovation..."
                rows={4}
              />
            </div>

            <button className="modal-submit" onClick={handleSubmit}>
              Send Message
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookCallModal