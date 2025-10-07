import React, { useRef } from 'react'
import peop from '../../assets/peop.png'

function Testimonials() {
  const rowRef = useRef(null)
  const scrollBy = (amount) => {
    if (rowRef.current) rowRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-8 px-6 sm:px-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            What <span className="text-orange-500">people</span> are saying
          </h2>
          <div className="flex gap-3 mt-4">
            <button onClick={() => scrollBy(-320)} className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-blue-900 bg-transparent rounded-full text-blue-900 text-lg sm:text-xl hover:bg-blue-900 hover:text-white transition-all duration-300">←</button>
            <button onClick={() => scrollBy(320)} className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-blue-900 bg-transparent rounded-full text-blue-900 text-lg sm:text-xl hover:bg-blue-900 hover:text-white transition-all duration-300">→</button>
          </div>
        </div>
       <section className="py-20 sm:py-24 px-6 sm:px-8 text-white relative" style={{
         backgroundImage: `url(${peop})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat'
       }}>
      
        <div className="max-w-6xl mx-auto relative z-10">

          <div ref={rowRef} className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl min-w-[85%] md:min-w-0 snap-center">
              <p className="mb-8 leading-relaxed text-gray-500">
                Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"
                  alt="Hellen Jummy"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-blue-900">Hellen Jummy</div>
                  <div className="text-sm text-gray-500">Financial Counselor</div>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl min-w-[85%] md:min-w-0 snap-center">
              <p className="mb-8 leading-relaxed text-gray-500">
                Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=faces"
                  alt="Ralph Edwards"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-blue-900">Ralph Edwards</div>
                  <div className="text-sm text-gray-500">Math Teacher</div>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl min-w-[85%] md:min-w-0 snap-center">
              <p className="mb-8 leading-relaxed text-gray-500">
                Sagittis nunc egestas leo et malesua urna risus. Morbi proin et cras aliquar Diam tellus, amet, hac imperdiet.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&h=96&fit=crop&crop=faces"
                  alt="Hellena John"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-blue-900">Hellena John</div>
                  <div className="text-sm text-gray-500">Psychology Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
