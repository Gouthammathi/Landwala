import React from 'react'
import bg from '../../assets/bg.png'
import services1 from '../../assets/services1.png'
import services2 from '../../assets/services2.png'
import services3 from '../../assets/services3.png'
import Icons from '../../assets/Icons.svg'

function Services() {
  return (
    <section className="pt-12 pb-10 px-6 sm:px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Decorative icons in right corner */}
      <img 
        src={Icons} 
        alt="" 
        aria-hidden="true" 
        className="absolute top-10 right-2 sm:right-6 w-20 sm:w-28 md:w-32 lg:w-40 opacity-60 transform scale-x-[-1]"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Orange Images */}
        <div className="relative">
          <div className="relative rounded-3xl p-6 sm:p-8 w-full max-w-[36rem] mx-auto sm:mx-0 h-[26rem] sm:h-[32rem] lg:h-[38rem]" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            {/* Three overlapping vertical photo cards arranged diagonally */}
            <div className="flex sm:relative items-end justify-center gap-3 h-full">
              {/* Leftmost Card (Foreground) - Woman with glasses */}
              <div className="relative mt-4 sm:mt-0 w-28 h-56 sm:absolute sm:top-28 sm:left-0 sm:ml-8 sm:w-32 md:w-36 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 hover:shadow-2xl hover:ring-orange-200 transition-all z-30">
                <img 
                  src={services1} 
                  alt="Team Member 1"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Middle Card - Team meeting around laptop */}
              <div className="relative -mt-4 w-28 h-56 sm:absolute sm:top-6 sm:left-8 sm:ml-32 md:ml-40 sm:w-32 md:w-36 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 hover:shadow-2xl hover:ring-orange-200 transition-all z-20">
                <img 
                  src={services2} 
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Rightmost Card - Woman with laptop */}
              <div className="relative mt-4 sm:mt-0 w-28 h-56 sm:absolute sm:top-28 sm:left-16 sm:ml-64 md:ml-72 sm:w-32 md:w-36 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 hover:shadow-2xl hover:ring-orange-200 transition-all z-10">
                <img 
                  src={services3} 
                  alt="Team Member 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">The transfer of real estate</h3>
            <p className="text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">The transfer of real estate</h3>
            <p className="text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">The transfer of real estate</h3>
            <p className="text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services