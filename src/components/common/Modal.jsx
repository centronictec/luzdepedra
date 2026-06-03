import { useEffect } from 'react'

const Modal = ({ image, images, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-content">
          <img src={image.src} alt={image.title} />
          <div className="modal-info">
            <h2>{image.title}</h2>
            <p><strong>{image.subtitle}</strong></p>
            <p>{image.description}</p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              📅 {image.date} • 🎨 {image.style} • 📍 {image.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
