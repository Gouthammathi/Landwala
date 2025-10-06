import React from 'react'
import Hero from '../sections/Hero'
import WhyLandwala from '../sections/WhyLandwala'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import Team from '../sections/Team'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'
import Registered from '../sections/Registered'
import LazySection from '../utils/LazySection'
function Home() {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div id="home"><LazySection animation="fade-up"><Hero /></LazySection></div>
      <div id="about"><LazySection animation="fade-up"><WhyLandwala /></LazySection></div>
      <div id="properties"><LazySection animation="fade-scale"><Registered /></LazySection></div>
      <div id="services"><LazySection animation="fade-up"><Services /></LazySection></div>
      <div id="testimonials"><LazySection animation="fade"><Testimonials /></LazySection></div>
      <div id="team"><LazySection animation="fade-up"><Team /></LazySection></div>
      <div id="faq"><LazySection animation="fade-scale"><FAQ /></LazySection></div>
      <div id="contact"><LazySection animation="fade-up"><Contact /></LazySection></div>
    </div>
  )
}

export default Home
