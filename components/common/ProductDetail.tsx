import Link from 'next/link'
import JsonLd from './JsonLd'
import { productSchema, breadcrumbSchema } from '@lib/seo/schemas'
import AddToCartButton from './AddToCartButton'
import { getProducts } from '@lib/data'
import type { Product } from '@lib/data/types'

const SITE_URL = 'https://lipacam.cm'

const STOCK_LABEL: Record<Product['stockStatus'], string> = {
  in_stock: 'En stock',
  low_stock: 'Stock limité',
  out_of_stock: 'Rupture de stock',
}

const AVAILABILITY = {
  in_stock: 'InStock',
  low_stock: 'InStock',
  out_of_stock: 'OutOfStock',
} as const

const METADATA_LABELS: Record<string, string> = {
  level: 'Niveau',
  subject: 'Matière',
  publisher: 'Éditeur',
  pages: 'Pages',
  edition: 'Édition',
  language: 'Langue',
  conformProgram: 'Conforme au programme',
  material: 'Matière',
  nibSize: 'Taille de plume',
  refill: 'Recharge',
  weight: 'Poids',
  warranty: 'Garantie',
  color: 'Couleur',
}

const formatPrice = (n: number) => `${n.toLocaleString('fr-CM')} FCFA`

interface ProductDetailProps {
  product: Product
  basePath: string
  universeLabel: string
  accent: string
}

export default function ProductDetail({ product, basePath, universeLabel, accent }: ProductDetailProps) {
  const url = `${SITE_URL}${basePath}/${product.slug}`
  const related = getProducts({ universe: product.universe, category: product.category })
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const specs = Object.entries(product.metadata).filter(([key]) => key in METADATA_LABELS)

  return (
    <>
      <JsonLd
        data={productSchema({
          name: product.title,
          description: product.description,
          image: product.images[0] ? `${SITE_URL}${product.images[0]}` : '',
          sku: product.sku,
          brand: product.brand ?? 'Lipacam',
          price: product.price,
          currency: product.currency,
          availability: AVAILABILITY[product.stockStatus],
          url,
          reviewCount: product.reviewCount,
          ratingValue: product.rating,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Accueil', url: SITE_URL },
          { name: universeLabel, url: `${SITE_URL}/${product.universe}` },
          { name: product.title, url },
        ])}
      />

      <main>
        <nav style={{ padding: '12px 20px', backgroundColor: '#F5F5F7', fontSize: '13px', color: '#999' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '6px' }}>
            <Link href="/" style={{ color: accent, textDecoration: 'none' }}>Accueil</Link>
            <span>/</span>
            <Link href={`/${product.universe}`} style={{ color: accent, textDecoration: 'none' }}>{universeLabel}</Link>
            <span>/</span>
            <span>{product.title}</span>
          </div>
        </nav>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div
              role="img"
              aria-label={product.title}
              style={{
                minHeight: '360px',
                backgroundColor: '#F0F0F2',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '14px',
              }}
            >
              {product.brand ?? universeLabel}
            </div>

            <div>
              {product.badge && (
                <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: accent, color: '#FFFFFF', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
                  {product.badge}
                </span>
              )}
              <h1 style={{ fontSize: '32px', color: accent, marginBottom: '12px' }}>{product.title}</h1>
              <p style={{ color: '#666', marginBottom: '8px' }}>
                ★ {product.rating.toFixed(1)} ({product.reviewCount} avis) · Réf. {product.sku}
              </p>
              <p style={{ color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>{product.description}</p>

              <p style={{ fontSize: '30px', fontWeight: 800, color: accent, marginBottom: '4px' }}>
                {formatPrice(product.price)}
                {product.comparePrice ? (
                  <span style={{ fontSize: '16px', fontWeight: 400, color: '#999', textDecoration: 'line-through', marginLeft: '12px' }}>
                    {formatPrice(product.comparePrice)}
                  </span>
                ) : null}
              </p>
              <p style={{ color: product.stockStatus === 'out_of_stock' ? '#D62828' : '#27ae60', fontWeight: 600, marginBottom: '24px' }}>
                {STOCK_LABEL[product.stockStatus]}
              </p>

              {product.stockStatus !== 'out_of_stock' && (
                <AddToCartButton slug={product.slug} accent={accent} />
              )}
            </div>
          </div>

          {specs.length > 0 && (
            <div style={{ marginTop: '48px' }}>
              <h2 style={{ fontSize: '22px', color: accent, marginBottom: '16px' }}>Caractéristiques</h2>
              <dl style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 220px) 1fr', gap: '8px 20px' }}>
                {specs.map(([key, value]) => (
                  <div key={key} style={{ display: 'contents' }}>
                    <dt style={{ fontWeight: 600, color: '#555' }}>{METADATA_LABELS[key]}</dt>
                    <dd style={{ margin: 0 }}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {related.length > 0 && (
            <div style={{ marginTop: '56px' }}>
              <h2 style={{ fontSize: '22px', color: accent, marginBottom: '16px' }}>Produits similaires</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                {related.map((p) => (
                  <li key={p.id} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '16px' }}>
                    <Link href={`${basePath}/${p.slug}`} style={{ color: '#1A1A1A', fontWeight: 600, textDecoration: 'none' }}>
                      {p.title}
                    </Link>
                    <p style={{ color: accent, fontWeight: 700, marginTop: '8px' }}>{formatPrice(p.price)}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </>
  )
}
