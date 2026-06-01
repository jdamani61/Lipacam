import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
