import { useState, useEffect, useRef } from 'react'

export const OptimizedImage = ({ src, alt, className = '', priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(priority)
  const imgRef = useRef()

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px', threshold: 0.01 }
    )

    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [priority])

  return (
    <div ref={imgRef} className={`image-wrapper ${className}`}>
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`gallery-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
      {!isLoaded && isVisible && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
    </div>
  )
}
