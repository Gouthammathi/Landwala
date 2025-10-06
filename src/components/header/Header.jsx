import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

function Header() {
  const [activeSection, setActiveSection] = useState('home')

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

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setActiveSection(sectionId)
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
    <header className="bg-gradient-to-r from-blue-200 via-blue-50 to-white w-full px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-5">
        <img 
          src={logo} 
          alt="LandWala Logo" 
          className="w-12 h-12"
        />
        <div className="text-2xl font-bold -ml-4">
          <span className="text-blue-900">Land</span>
          <span className="text-orange-500">Wala</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="hidden md:flex gap-8">
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
      
      {/* Action Buttons */}
      <div className="flex gap-4 items-center">
        <button className="bg-transparent border-none text-blue-900 font-medium text-base px-4 py-2 hover:text-orange-500 transition-colors duration-300">
          Log In
        </button>
        <button className="bg-white border-2 border-blue-900 text-blue-900 font-medium text-base px-6 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300">
          Sign Up Now
        </button>
      </div>
    </header>
  )
}

export default Header
