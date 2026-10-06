'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '@components/common'
import { getProducts, getCategories } from '@lib/data'

export default function PapeterieProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = getCategories('papeterie').filter((c) => c.slug !== 'promotions')
  const products = getProducts({ universe: 'papeterie' }).filter((p) => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory
    const q = searchTerm.trim().toLowerCase()
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q))
    return matchCategory && matchSearch
  })

  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#D62828', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', fontFamily: 'Montserrat' }}>
            Tous nos produits
          </h1>
          <p>Explorez notre catalogue complet de fournitures et équipements</p>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '30px' }}>
          {/* Sidebar - Filters */}
          <aside>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '15px', color: '#D62828', fontFamily: 'Montserrat' }}>Recherche</h3>
              <Input
                type="search"
                placeholder="Chercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <h3 style={{ marginBottom: '15px', color: '#D62828', fontFamily: 'Montserrat' }}>Catégories</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{ marginRight: '8px' }}
                    />
                    Tous les produits
                  </label>
                </li>
                {categories.map((cat) => (
                  <li key={cat.slug} style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="category"
                        value={cat.slug}
                        checked={selectedCategory === cat.slug}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{ marginRight: '8px' }}
                      />
                      {cat.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content - Products Grid */}
          <section>
            <div style={{ marginBottom: '30px' }}>
              <p style={{ color: '#666' }}>
                {selectedCategory === 'all'
                  ? 'Affichage de tous les produits'
                  : `${products.length} produit${products.length > 1 ? 's' : ''}`}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {products.map((p) => (
                <Link
                  key={p.id}
                  href={`/papeterie/products/${p.slug}`}
                  style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ width: '100%', height: '200px', backgroundColor: '#E0E0E0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '14px' }}>
                    {p.brand ?? 'Lipacam'}
                  </div>
                  <div style={{ padding: '15px' }}>
                    <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>{p.title}</h4>
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>{p.shortDescription}</p>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#D62828' }}>
                      {p.price.toLocaleString('fr-CM')} FCFA
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </section>
        </div>
      </div>
    </main>
  )
}
