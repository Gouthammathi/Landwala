import React from 'react'
import Blob from '../../assets/Blob.png'
import UserThumb from '../../assets/User Thumb.png'
import ContactPicture from '../../assets/Picture.png'
import Vector14 from '../../assets/Vector 14.svg'
import Icons from '../../assets/Icons.svg'

function Contact() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            <span className="relative inline-block align-baseline">
              <span className="relative z-10">Connect</span>
              <img src={Vector14} alt="" aria-hidden="true" className="absolute -bottom-3 md:-bottom-6 left-0 w-40 md:w-52 z-0" />
            </span>{' '}
            with <span className="text-black">us</span>
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          </p>
          <form className="w-full max-w-xl relative" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="contact-email">Email</label>
            <div className="relative">
              {/* Pill container */}
              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                className="w-full pr-44 pl-5 py-4 rounded-full border border-gray-200 text-base outline-none focus:border-orange-500 transition-colors duration-300 placeholder:text-gray-400"
                required
              />
              {/* Right-aligned button */}
              <button
                type="submit"
                className="absolute top-1/2 right-1 -translate-y-1/2 px-6 md:px-7 lg:px-8 py-3 rounded-full bg-blue-900 text-white text-sm md:text-base font-semibold shadow-sm hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-900"
              >
                Connect with us
              </button>
            </div>
            {/* Decorative icons under the form */}
            <img 
              src={Icons} 
              alt="" 
              aria-hidden="true" 
              className="absolute -bottom-130 -left-10 w-24 md:w-32 lg:w-40 opacity-100"
            />
          </form>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl p-8 -m-8">
            {/* Blob background image replacing the solid gradient block */}
            <img 
              src={Blob} 
              alt="" 
              aria-hidden="true" 
              className="absolute inset-0 m-auto w-[320px] md:w-[420px] lg:w-[500px] h-auto object-contain pointer-events-none select-none z-0"
            />
            {/* Decorative icons under the blob */}
            <img 
              src={Icons} 
              alt="" 
              aria-hidden="true" 
              className="absolute bottom-8 right-25 w-24 md:w-32 lg:w-40 opacity-100 z-0"
            />
            <div className="relative h-96 z-10">
              <div className="absolute top-0 left-0 w-96 h-80 rounded-2xl overflow-hidden">
                <img
                  src={ContactPicture}
                  alt="Contact Person"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Diagonal thumbnail under the main picture (image only) */}
              <img
                src={UserThumb}
                alt="Team Member"
                className="absolute top-56 md:top-64 lg:top-72 left-90 w-28 h-28 object-contain"
              />
              {/* Support circle removed as requested */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
