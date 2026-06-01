export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryTitles: Record<string, string> = {
    'fournitures-scolaires': 'Fournitures Scolaires',
    'materiel-bureau': 'Matériel de Bureau',
    'archivage': 'Archivage & Classeurs',
    'machines': 'Machines & Équipements',
    'accessoires-it': 'Accessoires Informatiques',
    'arts-creativite': 'Arts & Créativité',
  }

  const category = categoryTitles[params.category] || params.category

  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#D62828', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Montserrat' }}>
            {category}
          </h1>
          <p>Découvrez notre sélection complète de {category.toLowerCase()}</p>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '25px' }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  backgroundColor: '#E0E0E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '12px',
                }}
              >
                {category} {i + 1}
              </div>
              <div style={{ padding: '15px' }}>
                <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                  Produit {i + 1}
                </h4>
                <p style={{ color: '#666', fontSize: '13px', marginBottom: '12px' }}>
                  {(3000 + i * 800).toLocaleString('fr-CM')} FCFA
                </p>
                <button
                  style={{
                    width: '100%',
                    padding: '8px',
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
          ))}
        </div>
      </div>
    </main>
  )
}
