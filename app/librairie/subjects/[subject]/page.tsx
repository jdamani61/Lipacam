export default function SubjectPage({ params }: { params: { subject: string } }) {
  const subjectTitles: Record<string, string> = {
    mathematiques: 'Mathématiques',
    francais: 'Français',
    svt: 'SVT',
    physique: 'Physique',
    'histoire-geo': 'Histoire-Géographie',
    anglais: 'Anglais',
    philosophie: 'Philosophie',
    informatique: 'Informatique',
  }

  const subject = subjectTitles[params.subject] || params.subject

  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Playfair Display' }}>
            Livres de {subject}
          </h1>
          <p>Tous nos ouvrages en {subject}</p>
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
                backgroundColor: '#F5F5F7',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '280px',
                  backgroundColor: '#7A1E2C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '12px',
                }}
              >
                {subject}
              </div>
              <div style={{ padding: '15px' }}>
                <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                  {subject} {i + 1}
                </h4>
                <p style={{ color: '#666', fontSize: '13px', marginBottom: '12px' }}>
                  {(8000 + i * 500).toLocaleString('fr-CM')} FCFA
                </p>
                <button
                  style={{
                    width: '100%',
                    padding: '8px',
                    backgroundColor: '#0A3A75',
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
