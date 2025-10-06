import React from 'react'
import Hero from '../sections/Hero'
import WhyLandwala from '../sections/WhyLandwala'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import Team from '../sections/Team'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'
import Registered from '../sections/Registered'
function Home() {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <WhyLandwala />
      </div>
      <div id="properties">
        <Registered />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Home
