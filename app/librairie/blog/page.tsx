'use client'

import Link from 'next/link'

const articles = [
  {
    id: 'article1',
    title: 'Comment choisir un manuel scolaire adapté',
    excerpt: 'Guide complet pour sélectionner les meilleurs manuels selon votre niveau et vos besoins.',
    category: 'Conseils',
    date: '15 mars 2024',
    readTime: '5 min',
  },
  {
    id: 'article2',
    title: 'Préparer la rentrée : liste complète par niveau',
    excerpt: 'Découvrez tout ce qu\'il faut pour bien préparer la rentrée scolaire.',
    category: 'Guides',
    date: '10 mars 2024',
    readTime: '8 min',
  },
  {
    id: 'article3',
    title: 'Comment réviser efficacement pour les examens',
    excerpt: 'Techniques et conseils pour optimiser votre révision avant les examens.',
    category: 'Étude',
    date: '5 mars 2024',
    readTime: '6 min',
  },
  {
    id: 'article4',
    title: 'Les indispensables pour le primaire',
    excerpt: 'Sélection des meilleurs livres et fournitures pour les élèves du primaire.',
    category: 'Sélection',
    date: '28 février 2024',
    readTime: '4 min',
  },
  {
    id: 'article5',
    title: 'Mathématiques au collège: les clés de la réussite',
    excerpt: 'Conseils et ressources pour maîtriser les mathématiques au collège.',
    category: 'Matières',
    date: '20 février 2024',
    readTime: '7 min',
  },
  {
    id: 'article6',
    title: 'Littérature française: auteurs incontournables',
    excerpt: 'Découvrez les œuvres essentielles de la littérature française.',
    category: 'Littérature',
    date: '15 février 2024',
    readTime: '9 min',
  },
]

export default function BlogPage() {
  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Playfair Display' }}>
            Blog & Conseils
          </h1>
          <p>Conseils pédagogiques et actualités éducatives</p>
        </div>
      </header>

      <section style={{ padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '50px' }}>
            <input
              type="search"
              placeholder="Rechercher un article..."
              style={{
                width: '100%',
                maxWidth: '500px',
                padding: '12px 16px',
                border: '2px solid #0A3A75',
                borderRadius: '6px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/librairie/blog/${article.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    padding: '25px',
                    backgroundColor: '#F5F5F7',
                    borderRadius: '8px',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#0A3A75'
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(10, 58, 117, 0.15)'
                    e.currentTarget.style.transform = 'translateY(-5px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: '#0A3A75',
                        color: '#FFFFFF',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}
                    >
                      {article.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', color: '#0A3A75', marginBottom: '12px', fontWeight: '700', lineHeight: '1.4' }}>
                    {article.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px', lineHeight: '1.6' }}>
                    {article.excerpt}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#999' }}>
                    <span>{article.date}</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', fontFamily: 'Playfair Display' }}>
            S'inscrire à notre newsletter
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', opacity: 0.95 }}>
            Recevez nos conseils pédagogiques et actualités éducatives chaque semaine
          </p>

          <form style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Votre email"
              style={{
                flex: 1,
                padding: '12px 16px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 30px',
                backgroundColor: '#F2C94C',
                color: '#0A3A75',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
