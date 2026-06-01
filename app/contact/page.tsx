'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { Input } from '@components/common'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    type: 'general',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Send to backend/email service
  }

  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Playfair Display' }}>
            Nous Contacter
          </h1>
          <p style={{ fontSize: '18px' }}>Nous sommes là pour vous aider 24/7</p>
        </div>
      </header>

      <section style={{ padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '30px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
                Informations de Contact
              </h2>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0A3A75', marginBottom: '10px' }}>
                  📍 Adresse
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                  Yaoundé: Centre-Ville, Rue 1.456<br />
                  Douala: Zone Portuaire<br />
                  Cameroun
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0A3A75', marginBottom: '10px' }}>
                  📞 Téléphone
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  +237 222 XXX XXX (Yaoundé)<br />
                  +237 233 XXX XXX (Douala)
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0A3A75', marginBottom: '10px' }}>
                  💬 WhatsApp
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  +237 6XX XXX XXX
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0A3A75', marginBottom: '10px' }}>
                  📧 Email
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  contact@lipacam.cm<br />
                  business@lipacam.cm
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0A3A75', marginBottom: '10px' }}>
                  🕐 Horaires
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                  Lun-Sam: 8h00-18h00<br />
                  Dimanche: 10h00-16h00<br />
                  Jours fériés: Fermé
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '30px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
                Envoyez un Message
              </h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Input
                  type="text"
                  placeholder="Votre nom"
                  label="Nom complet"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />

                <Input
                  type="email"
                  placeholder="votre@email.com"
                  label="Adresse email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <Input
                  type="tel"
                  placeholder="+237 6XX XXX XXX"
                  label="Numéro de téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1A1A1A' }}>
                    Type de demande
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                    }}
                  >
                    <option value="general">Demande générale</option>
                    <option value="business">Demande commerciale</option>
                    <option value="support">Support client</option>
                    <option value="complaint">Réclamation</option>
                  </select>
                </div>

                <Input
                  type="text"
                  placeholder="Objet de votre message"
                  label="Objet"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1A1A1A' }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Votre message ici..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '12px 30px',
                    backgroundColor: '#0A3A75',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0E1E3A')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0A3A75')}
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section Placeholder */}
          <div style={{ marginTop: '60px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '30px', color: '#0A3A75', fontFamily: 'Playfair Display', textAlign: 'center' }}>
              Retrouvez nos magasins
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                }}
              >
                Carte Google - Yaoundé
              </div>
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                }}
              >
                Carte Google - Douala
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
