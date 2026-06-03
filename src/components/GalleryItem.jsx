import { OptimizedImage } from './common/OptimizedImage'

const GalleryItem = ({ image, index, onClick }) => {
  const isPriority = index < 4

  return (
    <div 
      className="gallery-item"
      onClick={() => onClick(image)}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <OptimizedImage
        src={image.src}
        alt={image.title}
        priority={isPriority}
      />
      <div className="gallery-item-overlay">
        <h3>{image.title}</h3>
        <p>{image.subtitle}</p>
        <small>{image.date} • {image.style}</small>
      </div>
    </div>
  )
}

export default GalleryItem
