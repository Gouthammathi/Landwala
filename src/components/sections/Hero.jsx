import React from 'react'
import resort from '../../assets/resort.png'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-blue-50 to-white min-h-screen flex items-center px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-2">
        <div className='grid'>
          <div className="relative">
            <h1 className="text-blue-900 mb-6 leading-tight" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '48px'}}>
              <span className="relative">
                Helping you find
                {/* <div className="absolute -bottom-2 left-0 right-0 h-2 bg-orange-500 transform -rotate-1" style={{
                  clipPath: 'polygon(0% 0%, 15% 30%, 30% 0%, 45% 40%, 60% 0%, 75% 35%, 90% 0%, 100% 25%, 100% 100%, 0% 100%)'
                }}></div> */}
              </span>
              <br />
              the property of
              <br />
              your <span className="text-orange-500">dreams.</span>
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
                  src={resort} 
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
