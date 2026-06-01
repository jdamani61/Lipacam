'use client'

import { useState } from 'react'
import { Input } from '@components/common'

export default function PapeterieProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'Fournitures Scolaires',
    'Matériel de Bureau',
    'Archivage & Classeurs',
    'Machines & Équipements',
    'Accessoires Informatiques',
    'Arts & Créativité',
  ]

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
                  <li key={cat} style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{ marginRight: '8px' }}
                      />
                      {cat}
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
                  : `Affichage des produits: ${selectedCategory}`}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {/* Placeholder Product Cards */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '200px',
                      backgroundColor: '#E0E0E0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#999',
                      fontSize: '14px',
                    }}
                  >
                    Product {i + 1}
                  </div>
                  <div style={{ padding: '15px' }}>
                    <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>
                      Produit {i + 1}
                    </h4>
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>
                      Description du produit
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#D62828' }}>
                        {(5000 + i * 1000).toLocaleString('fr-CM')} FCFA
                      </span>
                      <button
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#D62828',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '12px',
                        }}
                      >
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <button
                style={{
                  padding: '12px 40px',
                  backgroundColor: '#D62828',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Charger plus de produits
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
