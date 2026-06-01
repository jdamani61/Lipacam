import Link from 'next/link'
import { Hero, FeaturedProducts, CategoryGrid } from '@components/common'

const LIBRARY_CATEGORIES = [
  {
    id: 'scolaires',
    name: 'Livres Scolaires',
    icon: '📚',
    description: 'Manuels officiels & programmes Cameroun',
    link: '/librairie/books',
    count: 450,
  },
  {
    id: 'parascolaire',
    name: 'Parascolaire',
    icon: '✏️',
    description: 'Exercices, annales & cahiers d\'activités',
    link: '/librairie/books?type=parascolaire',
    count: 320,
  },
  {
    id: 'maternelle',
    name: 'Maternelle',
    icon: '🎨',
    description: 'Livres d\'éveil & premiers apprentissages',
    link: '/librairie/levels/maternelle',
    count: 120,
  },
  {
    id: 'primaire',
    name: 'Primaire',
    icon: '🔤',
    description: 'Manuels & exercices du primaire',
    link: '/librairie/levels/primaire',
    count: 280,
  },
  {
    id: 'college',
    name: 'Collège',
    icon: '🔢',
    description: 'Manuels officiels du collège',
    link: '/librairie/levels/college',
    count: 340,
  },
  {
    id: 'lycee',
    name: 'Lycée',
    icon: '📖',
    description: 'Séries A, C, D - Manuels & annales',
    link: '/librairie/levels/lycee',
    count: 290,
  },
]

const FEATURED_BOOKS = [
  {
    id: 'livre1',
    title: 'Mathématiques - Classe de 3e',
    image: 'https://via.placeholder.com/250x350/0A3A75/FFFFFF?text=Math+3e',
    category: 'Collège',
    price: 8500,
    badge: { text: 'Nouveau', variant: 'success' as const },
    description: 'Manuel officiel conforme aux programmes camerounais',
  },
  {
    id: 'livre2',
    title: 'Français - Littérature Africaine',
    image: 'https://via.placeholder.com/250x350/0E1E3A/FFFFFF?text=Francais',
    category: 'Lycée',
    price: 12000,
    description: 'Anthologie & analyse de textes',
  },
  {
    id: 'livre3',
    title: 'SVT - Biologie Humaine',
    image: 'https://via.placeholder.com/250x350/7A1E2C/FFFFFF?text=SVT',
    category: 'Lycée',
    price: 11500,
    badge: { text: '-15%', variant: 'danger' as const },
    description: 'Sciences de la vie & de la terre',
  },
]

export default function LibrairieHome() {
  return (
    <main>
      <Hero
        title="Les livres scolaires et parascolaires de référence au Cameroun"
        subtitle="Du préscolaire au lycée — des ouvrages fiables, conformes aux programmes officiels."
        cta={{ text: 'Explorer les livres', href: '/librairie/books' }}
        secondaryCta={{ text: 'Par niveau scolaire', href: '/librairie/levels' }}
        universe="librairie"
      />

      <FeaturedProducts
        title="Sélections du Moment"
        subtitle="Découvrez nos manuels et ouvrages les plus populaires"
        products={FEATURED_BOOKS}
        universe="librairie"
        columns={3}
      />

      <CategoryGrid
        title="Choisissez votre niveau"
        subtitle="Parcourez nos livres organisés par niveau scolaire"
        categories={LIBRARY_CATEGORIES}
        universe="librairie"
        columns={3}
      />

      <section style={{ padding: '60px 0', backgroundColor: '#F5F5F7', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#0A3A75' }}>
            À propos de Lipacam
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '30px' }}>
            Depuis 1993, Lipacam accompagne les élèves, parents et enseignants du Cameroun.
            Notre mission : fournir des ouvrages fiables, conformes aux programmes, et accessibles à tous.
          </p>
          <Link
            href="/about"
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
            En savoir plus
          </Link>
        </div>
      </section>
    </main>
  )
}
