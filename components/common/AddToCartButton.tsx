'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@lib/cart/CartContext'

interface AddToCartButtonProps {
  slug: string
  accent: string
}

export default function AddToCartButton({ slug, accent }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <button
        type="button"
        onClick={() => {
          addItem(slug)
          setAdded(true)
        }}
        style={{ padding: '14px 32px', backgroundColor: accent, color: '#FFFFFF', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}
      >
        Ajouter au panier
      </button>
      {added && (
        <span role="status" style={{ color: '#27ae60', fontWeight: 600 }}>
          Ajouté ·{' '}
          <Link href="/cart" style={{ color: accent }}>
            Voir le panier
          </Link>
        </span>
      )}
    </div>
  )
}
