import { useState, useEffect, lazy, Suspense } from 'react'
import { galleryImages, getImagesByCategory, getAllCategories } from '../data/galleryData'
import GalleryItem from './GalleryItem'

const Modal = lazy(() => import('./common/Modal'))

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const categories = getAllCategories()

  useEffect(() => {
    setFilteredImages(getImagesByCategory(activeCategory))
  }, [activeCategory])

  return (
    <div className="gallery">
      <div className="gallery-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <GalleryItem
            key={image.id}
            image={image}
            index={index}
            onClick={setSelectedImage}
          />
        ))}
      </div>

      {selectedImage && (
        <Suspense fallback={null}>
          <Modal
            image={selectedImage}
            images={filteredImages}
            onClose={() => setSelectedImage(null)}
          />
        </Suspense>
      )}
    </div>
  )
}

export default Gallery
