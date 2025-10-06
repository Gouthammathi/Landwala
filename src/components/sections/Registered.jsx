import React, { useState } from 'react'

function Registered() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const properties = [
    {
      id: 1,
      title: "Urban City View",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
      description: "Modern cityscape with river views"
    },
    {
      id: 2,
      title: "Luxury Resort",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center",
      description: "Premium resort with lakefront access"
    },
    {
      id: 3,
      title: "Modern Homes",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&crop=center",
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
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === properties.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? properties.length - 3 : prevIndex - 1
    )
  }

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header with Title and Navigation */}
        <div className="flex justify-between items-center mb-12">
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900" style={{fontFamily: 'Poppins, sans-serif'}}>
              <span className="relative">
                <span className="absolute -top-2 -left-6 w-3 h-3 bg-orange-500">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-orange-500 transform -translate-y-1/2"></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-500 transform -translate-x-1/2"></div>
                </span>
                Registered Properties
              </span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 border-2 border-orange-500 bg-white rounded-full text-orange-500 text-xl hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 border-2 border-orange-500 bg-white rounded-full text-orange-500 text-xl hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {properties.map((property, index) => (
              <div key={property.id} className="w-1/3 flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{property.title}</h3>
                    <p className="text-gray-500 text-sm">{property.description}</p>
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
