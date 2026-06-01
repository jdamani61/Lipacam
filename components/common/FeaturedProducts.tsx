'use client'

import React from 'react'
import Card from './Card'
import Badge from './Badge'
import Button from './Button'
import styles from '@styles/components/featured-products.module.css'

interface Product {
  id: string
  title: string
  image: string
  price?: number
  category?: string
  badge?: { text: string; variant: 'danger' | 'success' | 'warning' | 'promo' }
  description?: string
}

interface FeaturedProductsProps {
  title: string
  subtitle?: string
  products: Product[]
  universe?: 'librairie' | 'papeterie'
  columns?: 2 | 3 | 4
}

export default function FeaturedProducts({
  title,
  subtitle,
  products,
  universe = 'librairie',
  columns = 3,
}: FeaturedProductsProps) {
  return (
    <section className={`featured-products featured-${universe}`}>
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className={`products-grid grid-${columns}`}>
          {products.map((product) => (
            <Card key={product.id} variant={universe === 'librairie' ? 'library' : 'stationery'}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                {product.badge && (
                  <Badge variant={product.badge.variant} className="product-badge">
                    {product.badge.text}
                  </Badge>
                )}
              </div>

              <div className="product-body">
                {product.category && (
                  <p className="product-category">{product.category}</p>
                )}
                <h3 className="product-title">{product.title}</h3>
                {product.description && (
                  <p className="product-description">{product.description}</p>
                )}

                {product.price && (
                  <p className="product-price">{product.price.toLocaleString('fr-CM')} FCFA</p>
                )}

                <Button variant="primary" className="product-cta">
                  {universe === 'librairie' ? 'Voir le livre' : 'Ajouter au panier'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
