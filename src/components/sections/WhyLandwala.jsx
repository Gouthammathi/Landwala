import React from 'react'
import Icons from '../../assets/Icons.svg'

function WhyLandwala() {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 bg-gradient-to-r from-blue-100 via-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-8">
            Why <span className="text-orange-500">Landwala?</span>
          </h2>
          {/* Decorative icons under the heading */}
          <img 
            src={Icons} 
            alt="" 
            aria-hidden="true" 
            className="absolute -bottom-100 -left-20 w-32 md:w-40 lg:w-48 opacity-100"
          />
         
        </div>
        <div>
          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-12 justify-center lg:justify-start">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">12k+</div>
              <div className="text-gray-500">Registered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">14+</div>
              <div className="text-gray-500">Registered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
              <div className="text-gray-500">Registered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyLandwala
