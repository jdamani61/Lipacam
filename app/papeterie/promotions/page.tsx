import { FeaturedProducts } from '@components/common'

const PROMOTIONS = [
  {
    id: 'promo-1',
    title: 'Cahiers 100 pages à -40%',
    image: 'https://via.placeholder.com/250x350/E0E0E0/333333?text=Cahier+100p',
    category: 'Fournitures Scolaires',
    price: 1500,
    badge: { text: '-40%', variant: 'danger' as const },
    description: 'Pack de 5 cahiers 100 pages',
  },
  {
    id: 'promo-2',
    title: 'Stylos gel premium -30%',
    image: 'https://via.placeholder.com/250x350/D62828/FFFFFF?text=Stylos+Gel',
    category: 'Fournitures Scolaires',
    price: 2800,
    badge: { text: '-30%', variant: 'danger' as const },
    description: 'Lot de 12 stylos gel haute qualité',
  },
  {
    id: 'promo-3',
    title: 'Calculatrice scientifique -25%',
    image: 'https://via.placeholder.com/250x350/2D9CDB/FFFFFF?text=Calc',
    category: 'Machines & Équipements',
    price: 5100,
    badge: { text: '-25%', variant: 'danger' as const },
    description: 'Calculatrice scientifique avec fonctions avancées',
  },
  {
    id: 'promo-4',
    title: 'Classeurs A4 pack de 3 -20%',
    image: 'https://via.placeholder.com/250x350/E0E0E0/333333?text=Classeurs',
    category: 'Archivage & Classeurs',
    price: 7500,
    badge: { text: '-20%', variant: 'danger' as const },
    description: 'Pack de 3 classeurs A4 résistants',
  },
  {
    id: 'promo-5',
    title: 'Souris USB optique -35%',
    image: 'https://via.placeholder.com/250x350/D62828/FFFFFF?text=Souris',
    category: 'Accessoires Informatiques',
    price: 3575,
    badge: { text: '-35%', variant: 'danger' as const },
    description: 'Souris ergonomique pour confort optimal',
  },
  {
    id: 'promo-6',
    title: 'Kit complet fournitures -50%',
    image: 'https://via.placeholder.com/250x350/2D9CDB/FFFFFF?text=Kit+Complet',
    category: 'Pack Promo',
    price: 6250,
    badge: { text: '-50%', variant: 'danger' as const },
    description: 'Kit fournitures scolaires complètes - Offre limitée!',
  },
]

export default function PromotionsPage() {
  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#D62828', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Montserrat' }}>
            🎉 Promotions & Offres Spéciales
          </h1>
          <p style={{ fontSize: '18px' }}>Profitez de réductions exceptionnelles cette semaine!</p>
        </div>
      </header>

      <section style={{ padding: '60px 0', backgroundColor: '#F9F9F9' }}>
        <FeaturedProducts
          title="Les meilleures offres du moment"
          subtitle="Économisez jusqu'à 50% sur vos achats"
          products={PROMOTIONS}
          universe="papeterie"
          columns={3}
        />
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#D62828', color: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '20px', fontFamily: 'Montserrat' }}>
            Inscrivez-vous à notre newsletter
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', opacity: 0.95 }}>
            Recevez nos meilleures offres et promotions directement dans votre boîte email
          </p>

          <form style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Votre adresse email"
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
                backgroundColor: '#FFFFFF',
                color: '#D62828',
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

      <section style={{ padding: '40px 20px', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', color: '#D62828', fontFamily: 'Montserrat' }}>
            Conditions des promotions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'left' }}>
            <div style={{ padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '8px' }}>
              <h3 style={{ color: '#D62828', marginBottom: '10px' }}>✓ Prix garantis</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Tous les prix sont fixes pendant la période de promotion
              </p>
            </div>

            <div style={{ padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '8px' }}>
              <h3 style={{ color: '#D62828', marginBottom: '10px' }}>✓ Livraison gratuite</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                À partir de 15 000 FCFA d'achat partout au Cameroun
              </p>
            </div>

            <div style={{ padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '8px' }}>
              <h3 style={{ color: '#D62828', marginBottom: '10px' }}>✓ Stock limité</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Les stocks promotionnels sont limités, achetez maintenant!
              </p>
            </div>

            <div style={{ padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '8px' }}>
              <h3 style={{ color: '#D62828', marginBottom: '10px' }}>✓ Garantie 30 jours</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Retour sans frais dans les 30 jours si insatisfait
              </p>
            </div>

            <div style={{ padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '8px' }}>
              <h3 style={{ color: '#D62828', marginBottom: '10px' }}>✓ Paiement sécurisé</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Paiement en espèces, par virement ou à la livraison
              </p>
            </div>

            <div style={{ padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '8px' }}>
              <h3 style={{ color: '#D62828', marginBottom: '10px' }}>✓ Support client</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Notre équipe est disponible 24/7 pour vous aider
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
