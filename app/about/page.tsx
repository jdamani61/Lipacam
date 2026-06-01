import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Playfair Display' }}>
            À propos de Lipacam
          </h1>
          <p style={{ fontSize: '18px' }}>Depuis 1963, au service de l'éducation camerounaise</p>
        </div>
      </header>

      <section style={{ padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Notre Histoire
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '15px' }}>
              Fondée en 1963 par Tiani, Lipacam a commencé comme une simple librairie scolaire à Yaoundé.
              Depuis plus de 60 ans, nous accompagnons les élèves, parents et enseignants du Cameroun.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
              Aujourd'hui, avec nos magasins à Yaoundé et Douala, et notre plateforme en ligne,
              Lipacam est devenue la référence incontournable en librairie scolaire et papeterie au Cameroun.
            </p>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Notre Mission
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
              Fournir des ouvrages fiables, conformes aux programmes officiels du Cameroun,
              et des fournitures de qualité, accessibles à tous les étudiants et professionnels.
            </p>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Nos Valeurs
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
              <div>
                <h3 style={{ fontSize: '18px', color: '#D62828', marginBottom: '10px', fontWeight: '600' }}>
                  Fiabilité
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  Des produits de qualité garantis depuis 60 ans
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', color: '#D62828', marginBottom: '10px', fontWeight: '600' }}>
                  Accessibilité
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  Des prix justes pour tous les budgets
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', color: '#D62828', marginBottom: '10px', fontWeight: '600' }}>
                  Excellence
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  Excellence pédagogique pour la réussite
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', color: '#D62828', marginBottom: '10px', fontWeight: '600' }}>
                  Modernité
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  Innovation technologique constante
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', color: '#D62828', marginBottom: '10px', fontWeight: '600' }}>
                  Service
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  Support client 24/7 dédié
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', color: '#D62828', marginBottom: '10px', fontWeight: '600' }}>
                  Engagement
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  Partenaire de l'éducation camerounaise
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Nos Magasins
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              <div style={{ padding: '20px', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#0A3A75', fontWeight: '600' }}>
                  🏢 Yaoundé (Siège)
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                  Centre-Ville, Rue 1.456<br />
                  Yaoundé, Cameroun
                </p>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                  📞 +237 222 XXX XXX<br />
                  💬 WhatsApp: +237 6XX XXX XXX
                </p>
                <p style={{ fontSize: '12px', color: '#999' }}>
                  Lun-Sam: 8h00-18h00<br />
                  Dim: 10h00-16h00
                </p>
              </div>

              <div style={{ padding: '20px', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#0A3A75', fontWeight: '600' }}>
                  🏢 Douala
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                  Zone Portuaire<br />
                  Douala, Cameroun
                </p>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                  📞 +237 233 XXX XXX<br />
                  💬 WhatsApp: +237 6XX XXX XXX
                </p>
                <p style={{ fontSize: '12px', color: '#999' }}>
                  Lun-Sam: 8h00-18h00<br />
                  Dim: 10h00-16h00
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0A3A75', borderRadius: '8px', color: '#FFFFFF' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', fontFamily: 'Playfair Display' }}>
              Prêt à commencer?
            </h2>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/librairie"
                style={{
                  padding: '12px 30px',
                  backgroundColor: '#F2C94C',
                  color: '#0A3A75',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Découvrir la Librairie
              </Link>
              <Link
                href="/papeterie"
                style={{
                  padding: '12px 30px',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '2px solid #FFFFFF',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Découvrir la Papeterie
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
