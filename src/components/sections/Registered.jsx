import React, { useEffect, useState } from 'react'
import img1 from '../../assets/img1.png'
import resort from '../../assets/resort.png'
import img2 from '../../assets/img2.png'

function Registered() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  
  const properties = [
    {
      id: 1,
      title: "Urban City View",
      image: img1,
      description: "Modern cityscape with river views"
    },
    {
      id: 2,
      title: "Luxury Resort",
      image: resort,
      description: "Premium resort with lakefront access"
    },
    {
      id: 3,
      title: "Modern Homes",
      image: img2,
      description: "Contemporary residential development"
    },
    {
      id: 4,
      title: "Green Landscape",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
      description: "Eco-friendly property with nature views"
    },
    {
      id: 5,
      title: "Commercial Complex",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
      description: "Modern business district property"
    },
    {
      id: 6,
      title: "Premium Resort Complex",
      image: resort,
      description: "Luxury resort with lakefront views and premium amenities"
    }
  ]

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width < 768) {
        setItemsPerView(1)
      } else if (width < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  useEffect(() => {
    // Ensure current index is valid when itemsPerView changes
    const maxIndex = Math.max(0, properties.length - itemsPerView)
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex)
  }, [itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, properties.length - itemsPerView)
      return prevIndex >= maxIndex ? 0 : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, properties.length - itemsPerView)
      return prevIndex <= 0 ? maxIndex : prevIndex - 1
    })
  }

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header with Title and Navigation */}
        <div className="flex justify-between items-center mb-12">
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900" style={{fontFamily: 'Poppins, sans-serif'}}>
              <span className="relative">
               
                Registered Properties
              </span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 border-2 border-[#EF9E41] bg-white rounded-full text-[#EF9E41] text-xl hover:bg-[#EF9E41] hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 border-2 border-[#EF9E41] bg-white rounded-full text-[#EF9E41] text-xl hover:bg-[#EF9E41] hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {properties.map((property, index) => (
              <div key={property.id} className="px-4 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative h-64 md:h-64 lg:h-64">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">{property.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
      
      </div>
    </section>
  )
}

export default Registered
