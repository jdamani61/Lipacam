import Link from 'next/link'
import { Hero, FeaturedProducts, CategoryGrid } from '@components/common'

const STATIONERY_CATEGORIES = [
  {
    id: 'fournitures-scolaires',
    name: 'Fournitures Scolaires',
    icon: '✏️',
    description: 'Stylos, cahiers, géométrie, sacs',
    link: '/papeterie/categories/fournitures-scolaires',
    count: 580,
  },
  {
    id: 'materiel-bureau',
    name: 'Matériel de Bureau',
    icon: '📎',
    description: 'Agrafeuses, perforateurs, tapis de souris',
    link: '/papeterie/categories/materiel-bureau',
    count: 340,
  },
  {
    id: 'archivage',
    name: 'Archivage & Classeurs',
    icon: '📁',
    description: 'Classeurs, chemises, boîtes d\'archives',
    link: '/papeterie/categories/archivage',
    count: 250,
  },
  {
    id: 'machines',
    name: 'Machines & Équipements',
    icon: '🖨️',
    description: 'Imprimantes, relieuses, calculatrices',
    link: '/papeterie/categories/machines',
    count: 95,
  },
  {
    id: 'accessoires-it',
    name: 'Accessoires Informatiques',
    icon: '🖥️',
    description: 'Clés USB, souris, claviers, câbles',
    link: '/papeterie/categories/accessoires-it',
    count: 210,
  },
  {
    id: 'arts-creativite',
    name: 'Arts & Créativité',
    icon: '🎨',
    description: 'Papiers spéciaux, feutres, peinture',
    link: '/papeterie/categories/arts-creativite',
    count: 180,
  },
]

const FEATURED_PRODUCTS = [
  {
    id: 'stylos-pack',
    title: 'Pack 50 Stylos Bille Premium',
    image: 'https://via.placeholder.com/250x350/D62828/FFFFFF?text=Stylos+Pack',
    category: 'Fournitures Scolaires',
    price: 4500,
    badge: { text: '-25%', variant: 'danger' as const },
    description: 'Ensemble économique de stylos haute qualité',
  },
  {
    id: 'cahier-200',
    title: 'Cahier Spirale 200 Pages A4',
    image: 'https://via.placeholder.com/250x350/2D9CDB/FFFFFF?text=Cahier+200p',
    category: 'Fournitures Scolaires',
    price: 2800,
    badge: { text: 'Populaire', variant: 'success' as const },
    description: 'Cahier durable avec spirale robuste',
  },
  {
    id: 'agrafeuse-pro',
    title: 'Agrafeuse Électrique Professionnelle',
    image: 'https://via.placeholder.com/250x350/E0E0E0/333333?text=Agrafeuse',
    category: 'Matériel de Bureau',
    price: 18500,
    description: 'Agrafeuse électrique pour usage intensif',
  },
  {
    id: 'classeur-a4',
    title: 'Classeur A4 Résistant 4 Anneaux',
    image: 'https://via.placeholder.com/250x350/2D9CDB/FFFFFF?text=Classeur+A4',
    category: 'Archivage',
    price: 3200,
    badge: { text: 'Stock limité', variant: 'warning' as const },
    description: 'Classeur robuste pour archives professionnelles',
  },
  {
    id: 'calc-scientifique',
    title: 'Calculatrice Scientifique 12 Chiffres',
    image: 'https://via.placeholder.com/250x350/D62828/FFFFFF?text=Calculatrice',
    category: 'Machines & Équipements',
    price: 6800,
    description: 'Pour lycée et enseignement supérieur',
  },
  {
    id: 'souris-usb',
    title: 'Souris Optique USB 3 Boutons',
    image: 'https://via.placeholder.com/250x350/E0E0E0/333333?text=Souris+USB',
    category: 'Accessoires Informatiques',
    price: 5500,
    badge: { text: 'Nouveau', variant: 'success' as const },
    description: 'Souris ergonomique pour confort maximal',
  },
]

const PROMO_SECTION = [
  {
    id: 'pack-back-to-school',
    title: 'Pack Rentrée Scolaire Complet',
    image: 'https://via.placeholder.com/250x350/D62828/FFFFFF?text=Pack+Rentrée',
    category: 'Pack Promo',
    price: 12500,
    badge: { text: '-30%', variant: 'danger' as const },
    description: 'Stylos, cahiers, géométrie - Tout en un!',
  },
  {
    id: 'pack-bureau-pro',
    title: 'Pack Bureau Professionnel',
    image: 'https://via.placeholder.com/250x350/2D9CDB/FFFFFF?text=Pack+Bureau',
    category: 'Pack Promo',
    price: 24000,
    badge: { text: '-20%', variant: 'danger' as const },
    description: 'Fournitures complètes pour entreprises',
  },
  {
    id: 'pack-arts-etudiant',
    title: 'Pack Arts & Créativité Étudiant',
    image: 'https://via.placeholder.com/250x350/E0E0E0/333333?text=Pack+Arts',
    category: 'Pack Promo',
    price: 8900,
    description: 'Feutres, crayons, papiers spécialisés',
  },
]

export default function PapeteriePage() {
  return (
    <main>
      <Hero
        title="Tout pour l'école, l'université et le bureau"
        subtitle="Fournitures scolaires, accessoires, machines, archivage, équipements professionnels au meilleur prix."
        cta={{ text: 'Voir tous les produits', href: '/papeterie/products' }}
        secondaryCta={{ text: 'Découvrir les promotions', href: '/papeterie/promotions' }}
        universe="papeterie"
      />

      <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', color: '#D62828', marginBottom: '15px', fontFamily: 'Montserrat' }}>
              Promotions & Bons Plans
            </h2>
            <p style={{ fontSize: '16px', color: '#666' }}>
              Découvrez nos meilleures offres cette semaine
            </p>
          </div>
          <FeaturedProducts
            title=""
            products={PROMO_SECTION}
            universe="papeterie"
            columns={3}
          />
        </div>
      </section>

      <section style={{ padding: '60px 0', backgroundColor: '#F9F9F9' }}>
        <div className="container">
          <FeaturedProducts
            title="Nouveautés & Best-sellers"
            subtitle="Les produits les plus demandés par nos clients"
            products={FEATURED_PRODUCTS}
            universe="papeterie"
            columns={3}
          />
        </div>
      </section>

      <CategoryGrid
        title="Parcourez nos catégories"
        subtitle="Tous les produits organisés pour vous"
        categories={STATIONERY_CATEGORIES}
        universe="papeterie"
        columns={3}
      />

      <section style={{ padding: '60px 20px', backgroundColor: '#D62828', color: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '20px', fontFamily: 'Montserrat' }}>
            Solutions pour Entreprises & Institutions
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '30px', opacity: 0.95 }}>
            Lipacam équipe les bureaux, écoles, institutions et entreprises depuis 1993.
            Nous proposons des solutions sur mesure, des tarifs avantageux et un service client dédié.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact?type=business"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: '#FFFFFF',
                color: '#D62828',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              Demander un devis
            </Link>
            <Link
              href="/about#enterprise"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '2px solid #FFFFFF',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#D62828', fontFamily: 'Montserrat' }}>
            Pourquoi choisir Lipacam?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>✓</div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#D62828' }}>30+ ans d'expérience</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Depuis 1993, confiance garantie</p>
            </div>

            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>💰</div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#D62828' }}>Meilleurs prix</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Tarifs compétitifs & promotions régulières</p>
            </div>

            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>📦</div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#D62828' }}>Livraison rapide</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>À Yaoundé, Douala & partout au Cameroun</p>
            </div>

            <div>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>💬</div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#D62828' }}>Support 24/7</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>Équipe dédiée pour vous aider</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#E0E0E0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '30px', color: '#D62828', fontFamily: 'Montserrat' }}>
            Besoin d'aide?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <Link
              href="/contact"
              style={{
                padding: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#D62828',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
            >
              📞 Nous Contacter
            </Link>

            <Link
              href="/faq"
              style={{
                padding: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#D62828',
                fontWeight: '600',
              }}
            >
              ❓ FAQ
            </Link>

            <Link
              href="/shipping"
              style={{
                padding: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#D62828',
                fontWeight: '600',
              }}
            >
              📦 Livraison & Retours
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
