import { useState, useEffect } from 'react'
import '../styles/navbar.css'
import BookCallModal from './BookCallModal'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const navClass = scrolled ? 'navbar scrolled' : 'navbar top'

  return (
    <>
      <nav className={navClass}>

        <a href="/" className="nav-logo">
          AURA <span>INTERIORS</span>
        </a>

        <ul className="nav-links">
          {links.map(function(link) {
            return (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            )
          })}
          <li>
            <button className="nav-cta" onClick={function() { setModalOpen(true) }}>
              Book a Call
            </button>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={function() { setMenuOpen(!menuOpen) }}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            {links.map(function(link) {
              return (
                <a key={link.label} href={link.href} onClick={function() { setMenuOpen(false) }}>
                  {link.label}
                </a>
              )
            })}
            <button
              className="gold mobile-cta"
              onClick={function() {
                setMenuOpen(false)
                setModalOpen(true)
              }}
            >
              Book a Call
            </button>
          </div>
        )}

      </nav>

      <BookCallModal isOpen={modalOpen} onClose={function() { setModalOpen(false) }} />
    </>
  )
}

export default Navbar