import '../styles/testimonials.css'
import { motion } from 'framer-motion'

const items = [
  {
    quote: 'Working with Aura Interiors transformed not just our home, but how we live in it. Every detail was considered with such care.',
    name: 'Priya Kapoor',
    role: 'Homeowner, Mumbai',
    featured: true,
  },
  {
    quote: 'Our restaurant went from a blank shell to something truly extraordinary. Guests comment on the atmosphere every single night.',
    name: 'Arjun Mehta',
    role: 'Restaurateur, New Delhi',
  },
  {
    quote: 'They listened to everything we wanted and delivered beyond what we imagined. The process was seamless from start to finish.',
    name: 'Sana Raza',
    role: 'Homeowner, Bangalore',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <span className="testi-bignum">03</span>

      <motion.p
        className="testimonials-eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Kind Words
      </motion.p>
      <motion.h2
        className="testimonials-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        What Our Clients<br />
        <em>Say About Us</em>
      </motion.h2>

      <div className="testimonials-grid">
        {items.map(function(item, i) {
          const cardClass = item.featured ? 'testimonial-card testimonial-card-featured' : 'testimonial-card'
          return (
            <motion.div
              className={cardClass}
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="testimonial-quote">"</p>
              <p className="testimonial-body">{item.quote}</p>
              <div className="testimonial-divider" />
              <div className="testimonial-author">
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-role">{item.role}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default Testimonials