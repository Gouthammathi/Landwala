import React from 'react'
import bg from '../../assets/bg.png'
import services1 from '../../assets/services1.png'
import services2 from '../../assets/services2.png'
import services3 from '../../assets/services3.png'

function Services() {
  return (
    <section className="pt-12 pb-10 px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Orange Images */}
        <div className="relative">
          <div className="relative rounded-3xl p-6 sm:p-8 w-full max-w-[36rem] mx-auto sm:mx-0 h-[28rem] sm:h-[34rem] lg:h-[40rem]" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            {/* Three overlapping vertical photo cards arranged diagonally */}
            <div className="flex relative h-full ">
              {/* Leftmost Card (Foreground) - Woman with glasses */}
              <div className="absolute top-24 sm:top-28 left-0 ml-4 sm:ml-8 w-28 sm:w-32 md:w-36 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg z-30">
                <img 
                  src={services1} 
                  alt="Team Member 1"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Middle Card - Team meeting around laptop */}
              <div className="absolute top-6 sm:top-8 left-6 sm:left-8 ml-24 sm:ml-32 md:ml-40 w-28 sm:w-32 md:w-36 h-64 sm:h-72 md:h-80  rounded-2xl overflow-hidden shadow-lg z-20">
                <img 
                  src={services2} 
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Rightmost Card - Woman with laptop */}
              <div className="absolute top-24 sm:top-28 left-10 sm:left-16 ml-56 sm:ml-64 md:ml-72 w-28 sm:w-32 md:w-36 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg z-10">
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
