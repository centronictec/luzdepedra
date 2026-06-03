import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <a href="/" className="logo">
            <h1>✦ LUZ DE PEDRA ✦</h1>
            <p>PINTURA MARMORIZADA DE LUXO</p>
          </a>
          <nav>
            <a href="#gallery">GALERIA</a>
            <a href="#contact">CONTATO</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>✦ LUZ DE PEDRA ✦</h1>
            <p className="hero-subtitle">Pintura Marmorizada de Luxo</p>
            <p className="hero-description">
              <strong>Valorize seu ambiente e traga requinte com a pintura marmorizada.</strong><br />
              Transformamos suas paredes em verdadeiras obras de arte,<br />
              combinando técnica artesanal com design exclusivo.
            </p>
            <a href="#gallery" className="cta-button">EXPLORAR GALERIA</a>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="container">
            <h2 className="section-title">OBRAS EXCLUSIVAS</h2>
            <p className="section-subtitle">
              Cada peça é única, criada com dedicação e paixão pela arte
            </p>
            <Gallery />
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>© 2026 Luz de Pedra - Clemilson</p>
          <p>✨ Transformando ambientes com elegância e sofisticação ✨</p>
          <p style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
            📍 Brasília - DF | 💡 Projetos para todo Brasil
          </p>
          
          {/* Crédito Centronic */}
          <div className="footer-credits">
            <p className="credit-line">
              Desenvolvido por <strong className="centronic">Centronic Tecnologia LTDA</strong> — 100% Open Source
            </p>
            <p className="credit-sub">
              🚀 Tecnologia e inovação para transformar ideias em realidade
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
