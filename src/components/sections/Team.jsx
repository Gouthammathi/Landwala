import React from 'react'
import group from '../../assets/group.png'
import pers from '../../assets/pers.png'
import blob from '../../assets/bg.png'

function Team() {
  return (
    <section className="py-24 px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            The people you can <span className="text-orange-500">trust</span>
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <figure className="ml-0 lg:ml-8 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
            <img
              src={group}
              alt="Team Group Photo"
              className="w-full h-[280px] md:h-[340px] lg:h-[380px] object-cover"
            />
          </figure>
        </div>
        <div className="relative order-1 lg:order-2 h-[420px] md:h-[520px] lg:h-[640px]">
          {/* Background blob behind the person */}
          <img
            src={blob}
            alt=""
            aria-hidden="true"
            className="absolute bottom-4 right-8 md:bottom-6 md:right-10 lg:bottom-8 lg:right-14 h-[380px] md:h-[500px] lg:h-[620px] w-auto object-contain select-none pointer-events-none z-0"
          />
          {/* Foreground person */}
          <img
            src={pers}
            alt="Team Lead"
            className="absolute bottom-0 right-0 md:right-4 lg:right-8 w-auto h-[420px] md:h-[520px] lg:h-[640px] object-contain drop-shadow-2xl z-10 transform translate-y-3 sm:translate-y-0"
          />
        </div>
      </div>
    </section>
  )
}

export default Team
