import React from 'react'
import Vector14 from '../../assets/Vector 14.svg'
import resort from '../../assets/resort.png'
import chines from '../../assets/chinese-city 1.png'
function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-blue-50 to-white min-h-screen flex items-center px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-2">
        <div className='grid'>
          <div className="relative">
            <h1 className="text-blue-900 mb-6 leading-tight" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '48px'}}>
              <span className="relative inline-block">
                <span className="relative z-10">Helping you find</span>
                <img src={Vector14} alt="" aria-hidden="true" className="absolute -bottom-3 md:-bottom-4 left-0 w-40 md:w-52 z-0" />
              </span>
              <br />
              the property of
              <br />
              your <span className="text-[#EF9E41]">dreams.</span>
            </h1>
            </div>
            <div>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Creating quality urban lifestyles, <br/>building stronger communities.
              </p>
            </div>
        </div>
       
         
          <div className="relative pt-6 sm:pt-10">
            <div className="relative h-[22rem] sm:h-96 lg:h-[500px]">
              {/* Background Image - Urban Properties (Top, Larger) */}
              <div className=" top-4 -right-4 lg:w-[34rem] h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-2xl z-0">
                <div className="w-full h-full bg-white flex items-center justify-center text-gray-500 font-medium rounded-3xl">
                <img 
                  src={chines} 
                  alt="Resort Properties" 
                  className="w-full h-full object-cover rounded-3xl"
                />
                </div>
              </div>
              {/* Foreground Image - Resort Properties (Bottom, Smaller) */}
              <div className=" absolute bottom-6 sm:bottom-10 -left-24 sm:-left-32 w-60 sm:w-72 lg:w-80 h-48 sm:h-56 lg:h-64 rounded-3xl overflow-hidden shadow-2xl z-10">
                <img 
                  src={resort} 
                  alt="Resort Properties" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero
