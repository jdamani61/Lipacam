'use client'

import Link from 'next/link'
import { useState } from 'react'

const CATEGORIES = [
  { id: 'all', label: 'Tous les articles', count: 12 },
  { id: 'conseils', label: 'Conseils Scolaires', count: 5 },
  { id: 'actualites', label: 'Actualités', count: 3 },
  { id: 'ressources', label: 'Ressources', count: 2 },
  { id: 'listes', label: 'Listes & Guides', count: 2 },
]

const ARTICLES = [
  {
    id: 1,
    slug: 'liste-fournitures-rentree-2024',
    title: 'Liste complète des fournitures scolaires pour la rentrée 2024-2025',
    excerpt: 'Tout ce qu\'il faut pour aborder la rentrée scolaire sereinement : de la maternelle au lycée, voici les listes officielles des fournitures recommandées au Cameroun.',
    category: 'listes',
    categoryLabel: 'Listes & Guides',
    date: '15 Août 2024',
    readTime: '8 min',
    image: 'https://via.placeholder.com/600x350/0A3A75/FFFFFF?text=Rentrée+2024',
    featured: true,
    tags: ['rentrée', 'fournitures', 'scolaire'],
  },
  {
    id: 2,
    slug: 'comment-choisir-manuel-scolaire',
    title: 'Comment choisir le bon manuel scolaire au Cameroun ?',
    excerpt: 'Entre les éditions officielles, les parascolaires et les révisions, il n\'est pas toujours facile de s\'y retrouver. Nos experts vous guident dans vos choix.',
    category: 'conseils',
    categoryLabel: 'Conseils Scolaires',
    date: '3 Septembre 2024',
    readTime: '6 min',
    image: 'https://via.placeholder.com/600x350/0E1E3A/FFFFFF?text=Manuel+Scolaire',
    featured: false,
    tags: ['manuels', 'choix', 'programme'],
  },
  {
    id: 3,
    slug: 'techniques-revision-bac',
    title: '10 techniques de révision efficaces pour le BAC camerounais',
    excerpt: 'Le baccalauréat approche ? Découvrez les méthodes éprouvées par les meilleurs élèves pour optimiser leurs révisions et réussir leurs examens.',
    category: 'conseils',
    categoryLabel: 'Conseils Scolaires',
    date: '10 Octobre 2024',
    readTime: '10 min',
    image: 'https://via.placeholder.com/600x350/7A1E2C/FFFFFF?text=Révision+BAC',
    featured: false,
    tags: ['BAC', 'révision', 'examens'],
  },
  {
    id: 4,
    slug: 'nouveaux-programmes-minesec-2024',
    title: 'Nouveaux programmes MINESEC 2024 : ce qui change',
    excerpt: 'Le Ministère des Enseignements Secondaires a annoncé des changements dans les programmes scolaires. Voici ce que cela signifie pour les manuels et les cours.',
    category: 'actualites',
    categoryLabel: 'Actualités',
    date: '22 Octobre 2024',
    readTime: '5 min',
    image: 'https://via.placeholder.com/600x350/2D9CDB/FFFFFF?text=MINESEC+2024',
    featured: false,
    tags: ['programmes', 'MINESEC', 'réforme'],
  },
  {
    id: 5,
    slug: 'organiser-cartable-enfant',
    title: 'Comment bien organiser le cartable de votre enfant ?',
    excerpt: 'Un cartable bien organisé, c\'est un enfant serein et prêt pour l\'école. Nos conseils pratiques pour ranger, alléger et optimiser le sac de votre élève.',
    category: 'conseils',
    categoryLabel: 'Conseils Scolaires',
    date: '5 Novembre 2024',
    readTime: '4 min',
    image: 'https://via.placeholder.com/600x350/F2C94C/0A3A75?text=Cartable',
    featured: false,
    tags: ['organisation', 'cartable', 'primaire'],
  },
  {
    id: 6,
    slug: 'guide-achat-calculatrice-scientifique',
    title: 'Guide d\'achat : choisir sa calculatrice scientifique',
    excerpt: 'Casio, Sharp, Texas Instruments... Quelle calculatrice choisir pour le lycée et les concours au Cameroun ? Notre comparatif complet avec les modèles autorisés.',
    category: 'listes',
    categoryLabel: 'Listes & Guides',
    date: '18 Novembre 2024',
    readTime: '7 min',
    image: 'https://via.placeholder.com/600x350/E0E0E0/333333?text=Calculatrice',
    featured: false,
    tags: ['calculatrice', 'lycée', 'guide'],
  },
  {
    id: 7,
    slug: 'lipacam-30-ans-education',
    title: 'Lipacam fête ses 60 ans au service de l\'éducation camerounaise',
    excerpt: 'En 2023, Lipacam a célébré son 30e anniversaire. Retour sur trois décennies d\'engagement, de passion et de service aux familles camerounaises.',
    category: 'actualites',
    categoryLabel: 'Actualités',
    date: '1er Décembre 2024',
    readTime: '5 min',
    image: 'https://via.placeholder.com/600x350/0A3A75/F2C94C?text=60+Ans+Lipacam',
    featured: false,
    tags: ['Lipacam', 'anniversaire', 'histoire'],
  },
  {
    id: 8,
    slug: 'ressources-gratuites-eleves-cameroun',
    title: '5 ressources en ligne gratuites pour les élèves camerounais',
    excerpt: 'Internet regorge de ressources éducatives pour compléter les manuels scolaires. Voici notre sélection des meilleures plateformes gratuites adaptées aux programmes camerounais.',
    category: 'ressources',
    categoryLabel: 'Ressources',
    date: '10 Décembre 2024',
    readTime: '6 min',
    image: 'https://via.placeholder.com/600x350/2D9CDB/FFFFFF?text=Ressources+En+Ligne',
    featured: false,
    tags: ['ressources', 'numérique', 'gratuit'],
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const featuredArticle = ARTICLES.find(a => a.featured)
  const filteredArticles = ARTICLES.filter(a => {
    if (activeCategory === 'all') return !a.featured
    return a.category === activeCategory && !a.featured
  })

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A3A75 0%, #0E1E3A 100%)',
          color: '#FFFFFF',
          padding: '70px 20px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '5px 16px',
              backgroundColor: 'rgba(242,201,76,0.2)',
              border: '1px solid rgba(242,201,76,0.4)',
              borderRadius: '50px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#F2C94C',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Blog & Conseils
          </div>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '48px',
              fontWeight: '700',
              color: '#FFFFFF',
              marginBottom: '16px',
              lineHeight: '1.2',
            }}
          >
            Le Blog Lipacam
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
            Conseils scolaires, actualités éducatives, guides d'achat et ressources
            pour accompagner la réussite de vos enfants au Cameroun.
          </p>
        </div>
      </section>

      {/* Article vedette */}
      {featuredArticle && (
        <section style={{ padding: '60px 20px', backgroundColor: '#F5F5F7' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#D62828', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
              ⭐ Article à la une
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ height: '380px', overflow: 'hidden' }}>
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: '#E8EEF7',
                    color: '#0A3A75',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '16px',
                    width: 'fit-content',
                  }}
                >
                  {featuredArticle.categoryLabel}
                </span>
                <h2
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '28px',
                    color: '#0A3A75',
                    marginBottom: '16px',
                    lineHeight: '1.3',
                  }}
                >
                  {featuredArticle.title}
                </h2>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '24px' }}>
                  {featuredArticle.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '13px', color: '#999' }}>📅 {featuredArticle.date}</span>
                  <span style={{ fontSize: '13px', color: '#999' }}>⏱ {featuredArticle.readTime} de lecture</span>
                </div>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  style={{
                    display: 'inline-block',
                    padding: '12px 28px',
                    backgroundColor: '#0A3A75',
                    color: '#FFFFFF',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '15px',
                    width: 'fit-content',
                  }}
                >
                  Lire l'article →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filtres par catégorie */}
      <section style={{ padding: '40px 20px 0', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '50px',
                  border: '2px solid',
                  borderColor: activeCategory === cat.id ? '#0A3A75' : '#e0e0e0',
                  backgroundColor: activeCategory === cat.id ? '#0A3A75' : '#FFFFFF',
                  color: activeCategory === cat.id ? '#FFFFFF' : '#666',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
                <span
                  style={{
                    display: 'inline-block',
                    marginLeft: '6px',
                    padding: '1px 7px',
                    backgroundColor: activeCategory === cat.id ? 'rgba(255,255,255,0.3)' : '#f0f0f0',
                    borderRadius: '10px',
                    fontSize: '11px',
                  }}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille d'articles */}
      <section style={{ padding: '0 20px 80px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {filteredArticles.map(article => (
              <article
                key={article.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  border: '1px solid #f0f0f0',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span
                      style={{
                        padding: '3px 10px',
                        backgroundColor: '#E8EEF7',
                        color: '#0A3A75',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}
                    >
                      {article.categoryLabel}
                    </span>
                    <span style={{ fontSize: '12px', color: '#bbb' }}>⏱ {article.readTime}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '17px',
                      fontWeight: '700',
                      color: '#0A3A75',
                      marginBottom: '10px',
                      lineHeight: '1.4',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#777',
                      lineHeight: '1.6',
                      marginBottom: '16px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#bbb' }}>📅 {article.date}</span>
                    <Link
                      href={`/blog/${article.slug}`}
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#0A3A75',
                        textDecoration: 'none',
                      }}
                    >
                      Lire →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
              <p style={{ fontSize: '18px' }}>Aucun article dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#0A3A75',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#FFFFFF', marginBottom: '15px' }}>
            Restez informé
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '60+px', lineHeight: '1.7' }}>
            Inscrivez-vous à notre newsletter et recevez nos derniers articles, conseils et offres
            directement dans votre boîte email.
          </p>
          <form
            style={{ display: 'flex', gap: '10px', maxWidth: '480px', margin: '0 auto' }}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              style={{
                flex: 1,
                padding: '14px 18px',
                border: 'none',
                borderRadius: '6px',
                fontSize: '15px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 24px',
                backgroundColor: '#F2C94C',
                color: '#0A3A75',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '15px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              S'inscrire
            </button>
          </form>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '12px' }}>
            Pas de spam. Désinscription possible à tout moment.
          </p>
        </div>
      </section>

      {/* Liens rapides */}
      <section style={{ padding: '50px 20px', backgroundColor: '#F5F5F7' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', color: '#0A3A75', marginBottom: '60+px', fontFamily: 'Montserrat' }}>
            Explorer Lipacam
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            <Link href="/librairie" style={{ padding: '12px 24px', backgroundColor: '#0A3A75', color: '#FFFFFF', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
              📚 Librairie Scolaire
            </Link>
            <Link href="/papeterie" style={{ padding: '12px 24px', backgroundColor: '#D62828', color: '#FFFFFF', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
              ✏️ Papeterie
            </Link>
            <Link href="/about" style={{ padding: '12px 24px', backgroundColor: '#FFFFFF', color: '#0A3A75', border: '2px solid #0A3A75', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
              🏢 À propos
            </Link>
            <Link href="/contact" style={{ padding: '12px 24px', backgroundColor: '#FFFFFF', color: '#666', border: '2px solid #e0e0e0', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
              📞 Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
