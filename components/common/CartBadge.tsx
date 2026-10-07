'use client'

import Link from 'next/link'
import { useCart } from '@lib/cart/CartContext'

export default function CartBadge() {
  const { itemCount, ready } = useCart()
  const count = ready ? itemCount : 0

  return (
    <Link
      href="/cart"
      aria-label={`Panier, ${count} article${count > 1 ? 's' : ''}`}
      style={{
        position: 'fixed',
        right: '16px',
        bottom: '16px',
        zIndex: 200,
        padding: '12px 18px',
        backgroundColor: '#0A3A75',
        color: '#FFFFFF',
        borderRadius: '999px',
        fontWeight: 700,
        textDecoration: 'none',
        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
      }}
    >
      🛒 Panier{count > 0 ? ` (${count})` : ''}
    </Link>
  )
}
