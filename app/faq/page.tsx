'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'

const faqs = [
  {
    id: 'shipping',
    question: 'Quels sont les délais de livraison?',
    answer: 'Nous livrons dans les 24-48h à Yaoundé et Douala, et sous 5-7 jours dans les autres villes. Les délais peuvent être prolongés en fonction de votre localité.',
  },
  {
    id: 'payment',
    question: 'Quels sont les modes de paiement acceptés?',
    answer: 'Nous acceptons les paiements en espèces, par virement bancaire, et à la livraison (pour les commandes à Yaoundé et Douala).',
  },
  {
    id: 'returns',
    question: 'Comment faire un retour?',
    answer: 'Vous avez 30 jours pour retourner un produit défectueux ou non conforme. Contactez notre service client pour initier le processus de retour.',
  },
  {
    id: 'exchange',
    question: 'Puis-je échanger un produit?',
    answer: 'Oui, vous pouvez échanger un produit dans les 14 jours suivant l\'achat, s\'il est en bon état et non utilisé.',
  },
  {
    id: 'warranty',
    question: 'Y a-t-il une garantie sur les produits?',
    answer: 'Tous nos produits sont garantis conformes aux normes. Les machines (imprimantes, calculatrices) bénéficient d\'une garantie de 1 an.',
  },
  {
    id: 'discount',
    question: 'Proposez-vous des réductions pour les achats en gros?',
    answer: 'Oui, pour les achats supérieurs à 100 000 FCFA, contactez notre équipe commerciale pour obtenir un devis personnalisé.',
  },
  {
    id: 'stock',
    question: 'Comment vérifier la disponibilité d\'un produit?',
    answer: 'Vous pouvez vérifier la disponibilité directement sur notre site ou contacter notre équipe WhatsApp pour une réponse instantanée.',
  },
  {
    id: 'order-track',
    question: 'Comment suivre ma commande?',
    answer: 'Vous recevrez un numéro de suivi par SMS et email après votre achat. Vous pouvez utiliser ce numéro pour suivre votre colis en temps réel.',
  },
]

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Playfair Display' }}>
            Questions Fréquentes
          </h1>
          <p style={{ fontSize: '18px' }}>Trouvez les réponses à vos questions</p>
        </div>
      </header>

      <section style={{ padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <input
              type="search"
              placeholder="Rechercher une question..."
              style={{
                width: '100%',
                padding: '15px 20px',
                border: '2px solid #0A3A75',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'Inter',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                style={{
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    backgroundColor: openId === faq.id ? '#F5F5F7' : '#FFFFFF',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#F5F5F7')}
                  onMouseOut={(e) => {
                    if (openId !== faq.id) {
                      e.currentTarget.style.backgroundColor = '#FFFFFF'
                    }
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#0A3A75', fontSize: '16px' }}>
                    {faq.question}
                  </span>
                  <span style={{ fontSize: '20px', color: '#0A3A75' }}>
                    {openId === faq.id ? '−' : '+'}
                  </span>
                </button>

                {openId === faq.id && (
                  <div
                    style={{
                      padding: '20px',
                      backgroundColor: '#F9F9F9',
                      borderTop: '1px solid #e0e0e0',
                      color: '#666',
                      lineHeight: '1.8',
                      fontSize: '15px',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', padding: '40px', backgroundColor: '#F5F5F7', borderRadius: '8px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Vous n'avez pas trouvé votre réponse?
            </h2>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
              Notre équipe est disponible 24/7 pour vous aider
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: '#0A3A75',
                color: '#FFFFFF',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
