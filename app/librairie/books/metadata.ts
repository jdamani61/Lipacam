import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Livres Scolaires Cameroun | Manuels Officiels & Parascolaires – Lipacam',
  description:
    'Achetez les meilleurs livres scolaires au Cameroun. Manuels officiels, ouvrages parascolaires et annales conformes aux programmes camerounais. Maternelle, Primaire, Collège, Lycée. Livraison Yaoundé & Douala.',
  keywords: [
    'livres scolaires Cameroun',
    'manuels scolaires Cameroun',
    'livres scolaires Yaoundé',
    'livres scolaires Douala',
    'parascolaire Cameroun',
    'manuels primaire Cameroun',
    'livres collège Cameroun',
    'manuels lycée Cameroun',
    'librairie scolaire Cameroun',
    'acheter livres scolaires Cameroun',
    'EDICEF Cameroun',
    'Hachette scolaire Cameroun',
    'annales examens Cameroun',
    'Lipacam librairie',
  ],
  openGraph: {
    title: 'Livres Scolaires Cameroun – Manuels Officiels | Lipacam',
    description:
      'La plus grande sélection de livres scolaires et parascolaires au Cameroun. Conforme aux programmes officiels. Maternelle au Lycée.',
    url: 'https://lipacam.cm/librairie/books',
    siteName: 'Lipacam',
    locale: 'fr_CM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Livres Scolaires Cameroun | Lipacam',
    description:
      'Manuels scolaires conformes aux programmes camerounais. Livraison Yaoundé & Douala.',
  },
  alternates: {
    canonical: 'https://lipacam.cm/librairie/books',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}
