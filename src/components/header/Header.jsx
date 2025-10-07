import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'properties', label: 'Properties' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact us' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    scrollToSection('home')
    setActiveSection('home')
    setMobileOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <header className="bg-gradient-to-r from-blue-200 via-blue-50 to-white w-full px-6 sm:px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo Section */}
      <button 
        onClick={handleLogoClick}
        className="flex items-center gap-5 hover:opacity-80 transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
      >
        <img 
          src={logo} 
          alt="LandWala Logo" 
          className="w-12 h-12"
        />
        <div className="text-2xl font-bold -ml-4">
          <span className="text-blue-900">Land</span>
          <span className="text-orange-500">Wala</span>
        </div>
      </button>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 lg:gap-8">
        {sections.map((section) => (
          <a 
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleNavClick(e, section.id)}
            className={`font-medium text-base transition-all duration-300 relative ${
              activeSection === section.id 
                ? 'text-orange-500' 
                : 'text-blue-900 hover:text-orange-500'
            }`}
          >
            {section.label}
            {activeSection === section.id && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-100 transition-transform duration-300"></div>
            )}
          </a>
        ))}
      </nav>
      
      {/* Mobile hamburger */}
      <button
        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-blue-900/20 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        {/* Hamburger icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {mobileOpen ? (
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Action Buttons (desktop) */}
      <div className="hidden md:flex gap-4 items-center">
        <button className="bg-transparent border-none text-blue-900 font-medium text-base px-4 py-2 hover:text-orange-500 transition-colors duration-300">
          Log In
        </button>
        <button className="bg-white border-2 border-blue-900 text-blue-900 font-medium text-base px-6 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300">
          Sign Up Now
        </button>
      </div>
    </header>
    {/* Mobile menu panel */}
    {mobileOpen && (
      <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-blue-900/10 px-6 py-4 sticky top-[64px] z-40">
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className={`py-2 text-base font-medium rounded-lg px-2 transition-colors ${
                activeSection === section.id ? 'text-orange-500' : 'text-blue-900 hover:text-orange-500'
              }`}
            >
              {section.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 bg-transparent border border-blue-900 text-blue-900 font-medium text-base px-4 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-colors">
              Log In
            </button>
            <button className="flex-1 bg-blue-900 text-white font-medium text-base px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Header
