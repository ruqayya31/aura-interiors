import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSection from './components/ServiceSection'
import Projects from './components/Projects'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceSection />
        <Projects />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <ContactModal />
    </>
  )
}

export default App