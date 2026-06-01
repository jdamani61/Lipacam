'use client'

export default function PublishersPage() {
  const publishers = [
    {
      name: 'EDICEF',
      country: 'Cameroun',
      description: 'Éditeur camerounais spécialisé en manuels scolaires',
      logo: '📚',
    },
    {
      name: 'Nathan',
      country: 'France',
      description: 'Éditeur français de référence pour l\'enseignement',
      logo: '📖',
    },
    {
      name: 'Hatier',
      country: 'France',
      description: 'Manuels scolaires et parascolaires de qualité',
      logo: '✏️',
    },
    {
      name: 'ITEC',
      country: 'Cameroun',
      description: 'Spécialiste des ouvrages techniques et informatiques',
      logo: '💻',
    },
    {
      name: 'Bordas',
      country: 'France',
      description: 'Livres éducatifs et collections de référence',
      logo: '📚',
    },
    {
      name: 'Hachette Éducation',
      country: 'France',
      description: 'Leader mondial de l\'édition scolaire',
      logo: '🎓',
    },
  ]

  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Playfair Display' }}>
            Nos Éditeurs Partenaires
          </h1>
          <p>Les plus grands noms de l'édition scolaire</p>
        </div>
      </header>

      <section style={{ padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {publishers.map((publisher) => (
              <div
                key={publisher.name}
                style={{
                  padding: '30px',
                  backgroundColor: '#F5F5F7',
                  borderRadius: '8px',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#0A3A75'
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(10, 58, 117, 0.15)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>
                  {publisher.logo}
                </div>
                <h3 style={{ fontSize: '20px', color: '#0A3A75', marginBottom: '8px', fontWeight: '700' }}>
                  {publisher.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#999', marginBottom: '12px', fontWeight: '600' }}>
                  {publisher.country}
                </p>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                  {publisher.description}
                </p>
                <a
                  href="#"
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: '#0A3A75',
                    color: '#FFFFFF',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  Voir les livres →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#F5F5F7', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', color: '#0A3A75', marginBottom: '20px', fontFamily: 'Playfair Display' }}>
            Partenaire Éditeur?
          </h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
            Lipacam travaille en partenariat avec les meilleurs éditeurs mondiaux pour vous proposer
            la meilleure sélection de livres scolaires et parascolaires.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              backgroundColor: '#0A3A75',
              color: '#FFFFFF',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Nous Contacter
          </a>
        </div>
      </section>
    </main>
  )
}
