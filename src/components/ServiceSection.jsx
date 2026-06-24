import '../styles/serviceSection.css'
import { motion } from 'framer-motion'

const items = [
  {
    number: '01',
    icon: '✦',
    title: 'Interior Design',
    body: 'Full-scale residential and commercial design from concept to completion. Every detail considered, nothing left to chance.',
    link: 'Explore Service',
    variant: 'gold',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
  },
  {
    number: '02',
    icon: '◈',
    title: 'Space Planning',
    body: 'Intelligent layouts that maximise flow, function, and feeling. We make every square foot count.',
    link: 'Explore Service',
    variant: 'image',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
  },
  {
    number: '03',
    icon: '◇',
    title: 'Furniture Curation',
    body: 'Bespoke furniture sourcing and custom pieces that define the character of a room.',
    link: 'Explore Service',
    variant: 'dark-bold',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  },
  {
    number: '04',
    icon: '○',
    title: 'Project Management',
    body: 'End-to-end oversight of contractors, timelines, and budgets — so you never have to worry.',
    link: 'Explore Service',
    variant: 'rose',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
  },
]

function ServiceSection() {
  return (
    <section className="svc-section" id="services">

      <div className="svc-top">
        <div>
          <p className="svc-eyebrow">What We Do</p>
          <h2 className="svc-heading">
            Design That<br />
            <em>Defines</em> You
          </h2>
        </div>
        <p className="svc-desc">
          From a single room to an entire estate — we bring clarity,
          craft, and a relentless eye for detail to every project we take on.
        </p>
      </div>

      <div className="svc-grid">
        {items.map(function(item, i) {
          const cardClass = 'svc-card svc-card-' + item.variant
          return (
            <motion.div
              className={cardClass}
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {item.img && (
                <div className="svc-card-bg">
                  <img src={item.img} alt={item.title} />
                </div>
              )}
              <span className="svc-bignum">{item.number}</span>
              <div className="svc-card-content">
                <span className="svc-icon">{item.icon}</span>
                <h3 className="svc-title">{item.title}</h3>
                <p className="svc-body">{item.body}</p>
                <a href="#contact" className="svc-link">{item.link}</a>
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default ServiceSection