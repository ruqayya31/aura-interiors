import '../styles/Projects.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

const allProjects = [
  {
    number: '01',
    tag: 'Residential',
    title: 'The Kapoor Residence',
    location: 'Mumbai, India',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
    featured: true,
  },
  {
    number: '02',
    tag: 'Commercial',
    title: 'Noir Bistro',
    location: 'New Delhi, India',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
  },
  {
    number: '03',
    tag: 'Penthouse',
    title: 'Sky Villa',
    location: 'Bangalore, India',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
  },
  {
    number: '04',
    tag: 'Residential',
    title: 'The Mehta Villa',
    location: 'Pune, India',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  },
  {
    number: '05',
    tag: 'Commercial',
    title: 'Velvet Lounge',
    location: 'Goa, India',
    img: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=900&q=80',
  },
  {
    number: '06',
    tag: 'Penthouse',
    title: 'Horizon Suite',
    location: 'Hyderabad, India',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
  },
]

const filters = ['All', 'Residential', 'Commercial', 'Penthouse']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(function(p) { return p.tag === activeFilter })

  return (
    <section className="projects" id="projects">

      <div className="projects-top">
        <div>
          <p className="projects-eyebrow">Our Work</p>
          <h2 className="projects-heading">
            Spaces We Have<br />
            <em>Brought to Life</em>
          </h2>
        </div>
        <a href="#" className="projects-link">View All Projects</a>
      </div>

      <div className="projects-filters">
        {filters.map(function(filter) {
          const className = filter === activeFilter ? 'filter-btn filter-btn-active' : 'filter-btn'
          return (
            <button
              key={filter}
              className={className}
              onClick={function() { setActiveFilter(filter) }}
            >
              {filter}
            </button>
          )
        })}
      </div>

      <div className="projects-grid">
        {visibleProjects.map(function(project, i) {
          const cardClass = project.featured ? 'project-card project-card-featured' : 'project-card'
          return (
            <motion.div
              className={cardClass}
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              layout
            >
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <span className="project-bignum">{project.number}</span>
              <div className="project-overlay">
                <p className="project-tag">{project.tag}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">{project.location}</p>
              </div>
              <div className="project-arrow">↗</div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default Projects