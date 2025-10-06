import React from 'react'
import peop from '../../assets/peop.png'

function Testimonials() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8 px-14">
          <h2 className="text-4xl lg:text-5xl font-bold">
            What <span className="text-orange-500">people</span> are saying
          </h2>
          <div className="flex gap-4 mt-4">
            <button className="w-12 h-12 border-2 border-blue-900 bg-transparent rounded-full text-blue-900 text-xl hover:bg-blue-900 hover:text-white transition-all duration-300">←</button>
            <button className="w-12 h-12 border-2 border-blue-900 bg-transparent rounded-full text-blue-900 text-xl hover:bg-blue-900 hover:text-white transition-all duration-300">→</button>
          </div>
        </div>
       <section className="py-24 px-8 text-white relative" style={{
         backgroundImage: `url(${peop})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat'
       }}>
      
        <div className="max-w-6xl mx-auto relative z-10">
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
              <p className="mb-8 leading-relaxed text-gray-500">
                Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium border-2 border-dashed border-gray-300">
                  HJ
                </div>
                <div>
                  <div className="font-bold text-blue-900">Hellen Jummy</div>
                  <div className="text-sm text-gray-500">Financial Counselor</div>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
              <p className="mb-8 leading-relaxed text-gray-500">
                Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium border-2 border-dashed border-gray-300">
                  RE
                </div>
                <div>
                  <div className="font-bold text-blue-900">Ralph Edwards</div>
                  <div className="text-sm text-gray-500">Math Teacher</div>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
              <p className="mb-8 leading-relaxed text-gray-500">
                Sagittis nunc egestas leo et malesua urna risus. Morbi proin et cras aliquar Diam tellus, amet, hac imperdiet.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium border-2 border-dashed border-gray-300">
                  HJ
                </div>
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
