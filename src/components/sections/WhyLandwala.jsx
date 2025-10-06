import React from 'react'

function WhyLandwala() {
  return (
    <section className="py-24 px-8 bg-gradient-to-r from-blue-100 via-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8">
            Why <span className="text-orange-500">Landwala?</span>
          </h2>
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-orange-500">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-orange-500 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-500 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute top-4 left-6 w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
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
