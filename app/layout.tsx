import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@lib/cart/CartContext'
import CartBadge from '@components/common/CartBadge'

export const metadata: Metadata = {
  title: 'Lipacam - Librairie & Papeterie',
  description: 'La référence camerounaise en librairie scolaire et papeterie depuis 1963',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          {children}
          <CartBadge />
        </CartProvider>
      </body>
    </html>
  )
}
