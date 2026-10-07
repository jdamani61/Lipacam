'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@lib/cart/CartContext'
import { buildOrderMessage, buildWhatsAppUrl, normalizeWhatsAppNumber } from '@lib/cart/whatsapp'

const WHATSAPP_NUMBER = normalizeWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)
const fcfa = (n: number) => `${n.toLocaleString('fr-CM')} FCFA`

const fieldStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '2px solid #e0e0e0',
  borderRadius: '6px',
  fontSize: '16px',
} as const

export default function CartPage() {
  const { lines, total, itemCount, ready, setQuantity, removeItem, clear } = useCart()
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [note, setNote] = useState('')

  const message = buildOrderMessage(
    lines.map((l) => ({ title: l.product.title, sku: l.product.sku, unitPrice: l.product.price, quantity: l.quantity })),
    { name, city, note }
  )

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px 100px' }}>
      <h1 style={{ fontSize: '34px', color: '#0A3A75', marginBottom: '24px' }}>Mon panier</h1>

      {!ready ? (
        <p>Chargement du panier...</p>
      ) : lines.length === 0 ? (
        <div>
          <p style={{ marginBottom: '16px' }}>Votre panier est vide.</p>
          <Link href="/librairie/books" style={{ color: '#0A3A75', fontWeight: 600, marginRight: '20px' }}>Voir les livres</Link>
          <Link href="/papeterie/products" style={{ color: '#D62828', fontWeight: 600 }}>Voir la papeterie</Link>
        </div>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
            {lines.map(({ product, quantity }) => (
              <li
                key={product.slug}
                style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', padding: '16px 0', borderBottom: '1px solid #eee' }}
              >
                <div style={{ flex: '1 1 260px' }}>
                  <Link
                    href={`/${product.universe === 'librairie' ? 'librairie/books' : 'papeterie/products'}/${product.slug}`}
                    style={{ color: '#1A1A1A', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {product.title}
                  </Link>
                  <p style={{ color: '#666', fontSize: '14px' }}>{fcfa(product.price)} l'unité</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button type="button" aria-label={`Diminuer la quantité de ${product.title}`} onClick={() => setQuantity(product.slug, quantity - 1)} style={{ width: '32px', height: '32px' }}>−</button>
                  <span aria-live="polite" style={{ minWidth: '28px', textAlign: 'center' }}>{quantity}</span>
                  <button type="button" aria-label={`Augmenter la quantité de ${product.title}`} onClick={() => setQuantity(product.slug, quantity + 1)} style={{ width: '32px', height: '32px' }}>+</button>
                </div>
                <strong style={{ minWidth: '110px', textAlign: 'right' }}>{fcfa(product.price * quantity)}</strong>
                <button type="button" onClick={() => removeItem(product.slug)} style={{ color: '#D62828', background: 'none', border: 'none', cursor: 'pointer' }}>
                  Retirer
                </button>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: '22px', fontWeight: 800, color: '#0A3A75', textAlign: 'right', marginBottom: '32px' }}>
            Total ({itemCount} article{itemCount > 1 ? 's' : ''}) : {fcfa(total)}
          </p>

          <section aria-labelledby="delivery-title" style={{ display: 'grid', gap: '14px', marginBottom: '24px' }}>
            <h2 id="delivery-title" style={{ fontSize: '20px', color: '#0A3A75' }}>Livraison (facultatif)</h2>
            <input aria-label="Votre nom" placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} maxLength={80} style={fieldStyle} />
            <input aria-label="Ville de livraison" placeholder="Ville de livraison (Yaoundé, Douala...)" value={city} onChange={(e) => setCity(e.target.value)} maxLength={80} style={fieldStyle} />
            <textarea aria-label="Remarque" placeholder="Remarque pour la commande" value={note} onChange={(e) => setNote(e.target.value)} maxLength={300} rows={3} style={fieldStyle} />
          </section>

          {WHATSAPP_NUMBER ? (
            <a
              href={buildWhatsAppUrl(WHATSAPP_NUMBER, message)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '14px 32px', backgroundColor: '#25D366', color: '#FFFFFF', borderRadius: '6px', fontWeight: 700, textDecoration: 'none' }}
            >
              Commander sur WhatsApp
            </a>
          ) : (
            <p role="alert" style={{ color: '#D62828' }}>
              La commande WhatsApp n'est pas encore disponible. <Link href="/contact" style={{ color: '#0A3A75' }}>Contactez-nous</Link> pour passer commande.
            </p>
          )}

          <p style={{ color: '#666', fontSize: '13px', marginTop: '16px' }}>
            Un message récapitulatif s'ouvre dans WhatsApp. Aucune commande n'est enregistrée tant que vous ne l'envoyez pas, et le paiement se convient avec notre équipe.
          </p>

          <button type="button" onClick={clear} style={{ marginTop: '24px', background: 'none', border: 'none', color: '#666', textDecoration: 'underline', cursor: 'pointer' }}>
            Vider le panier
          </button>
        </>
      )}
    </main>
  )
}
