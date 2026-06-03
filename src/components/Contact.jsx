import { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const openWhatsApp = () => {
    window.open('https://wa.me/5561985197299?text=Olá! Gostaria de mais informações sobre a pintura marmorizada.', '_blank')
  }

  const openInstagram = () => {
    window.open('https://instagram.com/depedraluz', '_blank')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('depedraluz@gmail.com')
    setStatus({ type: 'success', message: 'Email copiado com sucesso!' })
    setTimeout(() => setStatus({ type: '', message: '' }), 3000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'info', message: 'Enviando mensagem...' })

    try {
      const response = await fetch('https://formsubmit.co/ajax/depedraluz@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Contato - Luz de Pedra - ${formData.name}`
        })
      })
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Mensagem enviada com sucesso! Responderemos em breve.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Erro')
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Erro ao enviar. Tente pelo WhatsApp.' })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-grid">
        <div className="contact-form-container">
          <h2>✨ Fale Conosco</h2>
          <p>Transforme seu ambiente com elegância e requinte</p>
          <p className="contact-person">Atendimento: Clemilson</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows="5"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {status.message && <div className={`form-status ${status.type}`}>{status.message}</div>}
          </form>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <h3>📱 Atendimento Rápido</h3>
            
            <div className="info-item whatsapp-item" onClick={openWhatsApp}>
              <div className="info-icon">
                <FaWhatsapp size={32} color="#25D366" />
              </div>
              <div className="info-content">
                <strong>WhatsApp</strong>
                <p>Converse conosco agora</p>
                <span className="info-number">(61) 98519-7299</span>
              </div>
            </div>

            <div className="info-item instagram-item" onClick={openInstagram}>
              <div className="info-icon">
                <FaInstagram size={32} color="#E4405F" />
              </div>
              <div className="info-content">
                <strong>Instagram</strong>
                <p>Acompanhe nosso trabalho</p>
                <span className="info-number">@depedraluz</span>
              </div>
            </div>

            <div className="info-item email-item" onClick={copyEmail}>
              <div className="info-icon">
                <FaEnvelope size={32} color="#FFD700" />
              </div>
              <div className="info-content">
                <strong>E-mail</strong>
                <p>Clique para copiar</p>
                <span className="info-number">depedraluz@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>💡 Horário de Atendimento</h3>
            <div className="schedule">
              <p>📅 Segunda - Sexta: 09h às 18h</p>
              <p>📅 Sábado: 09h às 12h</p>
              <p>💬 WhatsApp: Atendimento 24h</p>
              <p>✨ Resposta em até 2h úteis</p>
            </div>
          </div>

          <div className="info-card">
            <h3>📍 Localização</h3>
            <div className="schedule">
              <p>Brasília - DF</p>
              <p>Atendimento para todo Brasil</p>
              <p>🚀 Projetos especiais sob consulta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
