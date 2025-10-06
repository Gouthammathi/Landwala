import React, { useEffect, useRef, useState } from 'react'

// animation: 'fade' | 'fade-up' | 'fade-scale'
function LazySection({ children, rootMargin = '0px 0px -10% 0px', threshold = 0.12, className = '', animation = 'fade-up' }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    if (!containerRef.current || isVisible) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { root: null, rootMargin, threshold }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [rootMargin, threshold, isVisible])

  const base = 'transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform'
  const hiddenByVariant = {
    fade: 'opacity-0',
    'fade-up': 'opacity-0 translate-y-6',
    'fade-scale': 'opacity-0 scale-[0.98]'
  }[animation]
  const shownByVariant = {
    fade: 'opacity-100',
    'fade-up': 'opacity-100 translate-y-0',
    'fade-scale': 'opacity-100 scale-100'
  }[animation]

  return (
    <div ref={containerRef} className={`${className} ${base} ${isVisible ? shownByVariant : hiddenByVariant}`}>
      {isVisible ? children : null}
    </div>
  )
}

export default LazySection


