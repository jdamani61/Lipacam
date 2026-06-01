/**
 * JSON-LD schema builders for Lipacam SEO
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lipacam',
  url: 'https://lipacam.cm',
  logo: 'https://lipacam.cm/images/logo.png',
  description:
    'Référence camerounaise en librairie scolaire et papeterie & matériel de bureau depuis 1993.',
  foundingDate: '1993',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Centre-Ville, Rue 1.456',
      addressLocality: 'Yaoundé',
      addressCountry: 'CM',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Zone Portuaire',
      addressLocality: 'Douala',
      addressCountry: 'CM',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['French'],
  },
  sameAs: [
    'https://facebook.com/lipacam',
    'https://instagram.com/lipacam',
  ],
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const booksCategorySchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Livres Scolaires Cameroun – Manuels Officiels',
  description:
    'La plus grande sélection de livres scolaires et parascolaires au Cameroun. Manuels conformes aux programmes officiels, du préscolaire au lycée.',
  url: 'https://lipacam.cm/librairie/books',
  provider: {
    '@type': 'Organization',
    name: 'Lipacam',
    url: 'https://lipacam.cm',
  },
  about: {
    '@type': 'Thing',
    name: 'Livres scolaires Cameroun',
  },
}

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const productSchema = (p: {
  name: string
  description: string
  image: string
  sku: string
  brand: string
  price: number
  currency?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  url: string
  reviewCount?: number
  ratingValue?: number
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: p.name,
  description: p.description,
  image: p.image,
  sku: p.sku,
  brand: { '@type': 'Brand', name: p.brand },
  offers: {
    '@type': 'Offer',
    url: p.url,
    priceCurrency: p.currency ?? 'XAF',
    price: p.price,
    availability: `https://schema.org/${p.availability ?? 'InStock'}`,
    seller: { '@type': 'Organization', name: 'Lipacam' },
  },
  ...(p.reviewCount && p.ratingValue
    ? {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: p.ratingValue,
          reviewCount: p.reviewCount,
        },
      }
    : {}),
})

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BookStore',
  name: 'Lipacam',
  url: 'https://lipacam.cm',
  description: 'Librairie scolaire et papeterie de référence au Cameroun depuis 1993.',
  priceRange: '$$',
  openingHours: ['Mo-Sa 08:00-18:00', 'Su 10:00-16:00'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Centre-Ville, Rue 1.456',
    addressLocality: 'Yaoundé',
    addressCountry: 'CM',
  },
}
