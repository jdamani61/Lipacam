'use client'

import { useState } from 'react'
import Link from 'next/link'
import JsonLd from '@components/common/JsonLd'
import { booksCategorySchema, breadcrumbSchema, faqSchema } from '@lib/seo/schemas'

const LEVELS = ['Maternelle', 'Primaire', 'Collège', 'Lycée']
const SUBJECTS = ['Mathématiques', 'Français', 'SVT', 'Physique', 'Histoire-Géo', 'Anglais', 'Philosophie', 'Informatique']
const PUBLISHERS = ['EDICEF', 'Nathan', 'Hatier', 'ITEC', 'Bordas', 'Hachette']
const TYPES = ['Manuels officiels', 'Parascolaire', 'Annales', 'Cahiers d\'activités']

const SAMPLE_BOOKS = [
  { id: 1, title: 'Mathématiques 3e – Manuel Officiel', level: 'Collège', subject: 'Mathématiques', publisher: 'EDICEF', price: 8500, badge: 'Nouveau', cover: '#0A3A75' },
  { id: 2, title: 'Français Littérature Africaine – Lycée', level: 'Lycée', subject: 'Français', publisher: 'Nathan', price: 12000, badge: null, cover: '#0E1E3A' },
  { id: 3, title: 'SVT Biologie – Tle C/D', level: 'Lycée', subject: 'SVT', publisher: 'Hachette', price: 11500, badge: '-15%', cover: '#7A1E2C' },
  { id: 4, title: 'Physique-Chimie – 4e', level: 'Collège', subject: 'Physique', publisher: 'Hatier', price: 9000, badge: null, cover: '#0A3A75' },
  { id: 5, title: 'Anglais Primaire – CM2', level: 'Primaire', subject: 'Anglais', publisher: 'ITEC', price: 6500, badge: 'Populaire', cover: '#0E1E3A' },
  { id: 6, title: 'Eveil – Grande Section Maternelle', level: 'Maternelle', subject: 'Éveil', publisher: 'EDICEF', price: 4500, badge: null, cover: '#2D9CDB' },
  { id: 7, title: 'Annales Maths Bac – Séries C/D', level: 'Lycée', subject: 'Mathématiques', publisher: 'ITEC', price: 7500, badge: 'Essentiel', cover: '#7A1E2C' },
  { id: 8, title: 'Histoire-Géographie – 5e', level: 'Collège', subject: 'Histoire-Géo', publisher: 'Bordas', price: 8000, badge: null, cover: '#0A3A75' },
]

const BOOKS_FAQS = [
  {
    question: 'Vos livres scolaires sont-ils conformes aux programmes camerounais?',
    answer: 'Oui, tous nos manuels scolaires sont rigoureusement sélectionnés pour être conformes aux programmes officiels du Ministère de l\'Éducation du Cameroun. Chaque ouvrage est validé avant d\'être proposé à la vente.',
  },
  {
    question: 'Livrez-vous les livres scolaires partout au Cameroun?',
    answer: 'Nous livrons en 24-48h à Yaoundé et Douala. Pour les autres villes du Cameroun, la livraison prend 5 à 7 jours ouvrables. Les frais de livraison sont offerts pour toute commande supérieure à 15 000 FCFA.',
  },
  {
    question: 'Proposez-vous des livres parascolaires et des annales?',
    answer: 'Absolument. Notre gamme parascolaire couvre les cahiers d\'activités, exercices supplémentaires et annales d\'examens (BEPC, BAC) pour toutes les séries. Ces ouvrages sont idéaux pour préparer les examens officiels.',
  },
  {
    question: 'Quels éditeurs trouvez-vous chez Lipacam?',
    answer: 'Lipacam est partenaire des plus grandes maisons d\'édition : EDICEF, Nathan, Hatier, ITEC, Bordas et Hachette Éducation. Vous trouverez chez nous les collections les plus recommandées par les enseignants camerounais.',
  },
]

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const filtered = SAMPLE_BOOKS.filter((book) => {
    const matchSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchLevel = selectedLevel === 'all' || book.level === selectedLevel
    const matchSubject = selectedSubject === 'all' || book.subject === selectedSubject
    return matchSearch && matchLevel && matchSubject
  })

  return (
    <>
      {/* JSON-LD Schemas */}
      <JsonLd data={booksCategorySchema} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Accueil', url: 'https://lipacam.cm' },
        { name: 'Librairie', url: 'https://lipacam.cm/librairie' },
        { name: 'Livres Scolaires', url: 'https://lipacam.cm/librairie/books' },
      ])} />
      <JsonLd data={faqSchema(BOOKS_FAQS)} />

      <main>
        {/* ── BREADCRUMB ── */}
        <nav style={{ padding: '12px 20px', backgroundColor: '#F5F5F7', fontSize: '13px', color: '#999' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#0A3A75', textDecoration: 'none' }}>Accueil</Link>
            <span>/</span>
            <Link href="/librairie" style={{ color: '#0A3A75', textDecoration: 'none' }}>Librairie</Link>
            <span>/</span>
            <span>Livres Scolaires</span>
          </div>
        </nav>

        {/* ── SEO HEADER ── */}
        <header style={{ padding: '60px 20px 40px', background: 'linear-gradient(135deg, #0A3A75 0%, #0E1E3A 100%)', color: '#FFFFFF' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-block', padding: '5px 16px', backgroundColor: 'rgba(242,201,76,0.2)',
              border: '1px solid rgba(242,201,76,0.4)', borderRadius: '50px', fontSize: '12px',
              color: '#F2C94C', fontWeight: '600', letterSpacing: '1px', marginBottom: '20px',
            }}>
              1 500+ ouvrages disponibles
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontFamily: 'Playfair Display, serif', fontWeight: '800', marginBottom: '16px', lineHeight: '1.2' }}>
              Livres Scolaires au Cameroun
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '650px', lineHeight: '1.7', marginBottom: '30px' }}>
              Manuels officiels, ouvrages parascolaires et annales d'examens — conformes aux programmes
              camerounais, du préscolaire au lycée. Livraison à Yaoundé &amp; Douala en 24-48h.
            </p>

            {/* Level Pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Maternelle', 'Primaire', 'Collège', 'Lycée'].map((level) => (
                <Link
                  key={level}
                  href={`/librairie/levels/${level.toLowerCase()}`}
                  style={{
                    padding: '8px 20px', backgroundColor: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50px',
                    color: '#FFFFFF', fontSize: '13px', fontWeight: '600', textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {level}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px', alignItems: 'start' }}>

            {/* ── SIDEBAR ── */}
            <aside style={{ position: 'sticky', top: '20px' }}>
              {/* Search */}
              <div style={{ marginBottom: '32px' }}>
                <input
                  type="search"
                  placeholder="Chercher un livre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Rechercher un livre scolaire"
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '15px', outline: 'none' }}
                />
              </div>

              {/* Level Filter */}
              <div style={{ marginBottom: '28px' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#0A3A75', marginBottom: '14px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Niveau Scolaire
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['all', ...LEVELS].map((l) => (
                    <label key={l} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px', color: selectedLevel === l ? '#0A3A75' : '#555', fontWeight: selectedLevel === l ? '600' : '400' }}>
                      <input type="radio" name="level" value={l} checked={selectedLevel === l} onChange={() => setSelectedLevel(l)} />
                      {l === 'all' ? 'Tous les niveaux' : l}
                    </label>
                  ))}
                </div>
              </div>

              {/* Subject Filter */}
              <div style={{ marginBottom: '28px' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#0A3A75', marginBottom: '14px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Matière
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['all', ...SUBJECTS].map((s) => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px', color: selectedSubject === s ? '#0A3A75' : '#555', fontWeight: selectedSubject === s ? '600' : '400' }}>
                      <input type="radio" name="subject" value={s} checked={selectedSubject === s} onChange={() => setSelectedSubject(s)} />
                      {s === 'all' ? 'Toutes les matières' : s}
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#0A3A75', marginBottom: '14px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Type d'ouvrage
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['all', ...TYPES].map((t) => (
                    <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px', color: selectedType === t ? '#0A3A75' : '#555', fontWeight: selectedType === t ? '600' : '400' }}>
                      <input type="radio" name="type" value={t} checked={selectedType === t} onChange={() => setSelectedType(t)} />
                      {t === 'all' ? 'Tous les types' : t}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <section>
              {/* Result Count */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  <strong style={{ color: '#0A3A75' }}>{filtered.length}</strong> livre{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
                  {selectedLevel !== 'all' && ` · Niveau : ${selectedLevel}`}
                  {selectedSubject !== 'all' && ` · Matière : ${selectedSubject}`}
                </p>
                <select
                  style={{ padding: '8px 14px', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '13px', color: '#555' }}
                >
                  <option>Pertinence</option>
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Nouveautés</option>
                </select>
              </div>

              {/* Books Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(195px, 1fr))', gap: '24px', marginBottom: '60px' }}>
                {filtered.map((book) => (
                  <article
                    key={book.id}
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden', transition: 'all 0.3s ease', cursor: 'pointer' }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,58,117,0.14)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <div style={{ position: 'relative', height: '240px', backgroundColor: book.cover, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {book.publisher}
                      </span>
                      {book.badge && (
                        <span style={{
                          position: 'absolute', top: '10px', right: '10px',
                          padding: '4px 10px', backgroundColor: book.badge === '-15%' ? '#D62828' : '#27ae60',
                          color: '#FFFFFF', borderRadius: '20px', fontSize: '11px', fontWeight: '700',
                        }}>
                          {book.badge}
                        </span>
                      )}
                    </div>
                    <div style={{ padding: '16px' }}>
                      <p style={{ fontSize: '11px', color: '#0A3A75', fontWeight: '700', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {book.subject} · {book.level}
                      </p>
                      <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px', lineHeight: '1.4', minHeight: '38px' }}>
                        {book.title}
                      </h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '17px', fontWeight: '800', color: '#0A3A75' }}>
                          {book.price.toLocaleString('fr-CM')} F
                        </span>
                        <button
                          style={{
                            padding: '7px 14px', backgroundColor: '#0A3A75', color: '#FFFFFF',
                            border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: '600',
                            cursor: 'pointer',
                          }}
                        >
                          Voir →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* ── SEO EDITORIAL CONTENT ── */}
              <section
                style={{
                  padding: '50px 0',
                  borderTop: '2px solid #F5F5F7',
                  color: '#444',
                  fontSize: '15px',
                  lineHeight: '1.85',
                }}
              >
                <h2 style={{ fontSize: '28px', fontFamily: 'Playfair Display, serif', color: '#0A3A75', marginBottom: '20px' }}>
                  Livres scolaires au Cameroun : votre guide complet
                </h2>
                <p style={{ marginBottom: '18px' }}>
                  Chez <strong>Lipacam</strong>, nous proposons la plus grande sélection de{' '}
                  <strong>livres scolaires au Cameroun</strong> — des manuels officiels rigoureusement
                  conformes aux programmes du Ministère de l'Éducation, jusqu'aux ouvrages parascolaires
                  indispensables pour réussir les examens. Depuis 1993, nous accompagnons chaque élève,
                  du préscolaire au lycée, avec des ouvrages de qualité et accessibles.
                </p>

                <h3 style={{ fontSize: '20px', fontFamily: 'Playfair Display, serif', color: '#0A3A75', margin: '32px 0 14px' }}>
                  Manuels scolaires officiels : conformité garantie
                </h3>
                <p style={{ marginBottom: '18px' }}>
                  Tous nos <strong>manuels scolaires</strong> sont sélectionnés et validés pour être
                  conformes aux programmes officiels camerounais. Qu'il s'agisse de mathématiques,
                  français, SVT, physique, histoire-géographie ou anglais, chaque ouvrage correspond
                  exactement au curriculum enseigné dans les établissements publics et privés du Cameroun.
                  Nos éditeurs partenaires — <strong>EDICEF, Nathan, Hatier, ITEC, Bordas et Hachette
                  Éducation</strong> — sont reconnus pour la qualité et la rigueur pédagogique de leurs collections.
                </p>

                <h3 style={{ fontSize: '20px', fontFamily: 'Playfair Display, serif', color: '#0A3A75', margin: '32px 0 14px' }}>
                  Ouvrages parascolaires et annales d'examens
                </h3>
                <p style={{ marginBottom: '18px' }}>
                  La réussite scolaire ne se limite pas au manuel de classe. Notre gamme parascolaire
                  comprend des <strong>cahiers d'exercices, des guides de révision, des annales BEPC et
                  BAC</strong> pour toutes les séries (A, C, D, TI). Ces ouvrages sont particulièrement
                  plébiscités en période d'examen pour renforcer les acquis et s'entraîner dans les
                  meilleures conditions.
                </p>

                <h3 style={{ fontSize: '20px', fontFamily: 'Playfair Display, serif', color: '#0A3A75', margin: '32px 0 14px' }}>
                  Livres scolaires par niveau : de la Maternelle au Lycée
                </h3>
                <ul style={{ paddingLeft: '20px', marginBottom: '18px' }}>
                  {[
                    { level: 'Maternelle', desc: "Livres d'éveil, cahiers de coloriage, premiers apprentissages — pour éveiller la curiosité des tout-petits." },
                    { level: 'Primaire', desc: 'Manuels de Maths, Français, Sciences, Anglais — pour accompagner chaque étape du CM1 au CM2.' },
                    { level: 'Collège', desc: "Manuels officiels + exercices pour les classes de 6e, 5e, 4e et 3e, avec les indispensables pour le BEPC." },
                    { level: 'Lycée', desc: "Collections complètes Séries A, C, D, TI — manuels, annales et guides de révision pour réussir le BAC." },
                  ].map((item) => (
                    <li key={item.level} style={{ marginBottom: '10px' }}>
                      <strong style={{ color: '#0A3A75' }}>{item.level} :</strong> {item.desc}
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontSize: '20px', fontFamily: 'Playfair Display, serif', color: '#0A3A75', margin: '32px 0 14px' }}>
                  Livraison rapide à Yaoundé, Douala et partout au Cameroun
                </h3>
                <p style={{ marginBottom: '18px' }}>
                  Commandez vos <strong>livres scolaires en ligne</strong> et recevez-les chez vous en
                  <strong> 24 à 48 heures à Yaoundé et Douala</strong>. Pour les autres villes du Cameroun,
                  nous assurons une livraison sous 5 à 7 jours ouvrables. Les frais de port sont offerts
                  pour toute commande supérieure à 15 000 FCFA. Vous pouvez également retirer votre commande
                  directement dans l'un de nos deux magasins.
                </p>

                <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
                  {[
                    { text: '→ Voir les livres Maternelle', href: '/librairie/levels/maternelle' },
                    { text: '→ Voir les livres Primaire', href: '/librairie/levels/primaire' },
                    { text: '→ Voir les livres Collège', href: '/librairie/levels/college' },
                    { text: '→ Voir les livres Lycée', href: '/librairie/levels/lycee' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{
                        padding: '10px 20px', backgroundColor: '#F5F5F7', color: '#0A3A75',
                        borderRadius: '6px', textDecoration: 'none', fontSize: '13px',
                        fontWeight: '600', border: '1px solid #e0e0e0', transition: 'all 0.2s ease',
                      }}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </section>

              {/* ── FAQ SEO ── */}
              <section style={{ marginTop: '60px', paddingTop: '50px', borderTop: '2px solid #F5F5F7' }}>
                <h2 style={{ fontSize: '28px', fontFamily: 'Playfair Display, serif', color: '#0A3A75', marginBottom: '32px' }}>
                  Questions fréquentes sur nos livres scolaires
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {BOOKS_FAQS.map((faq) => (
                    <div key={faq.question} style={{ padding: '24px', backgroundColor: '#F5F5F7', borderRadius: '10px', borderLeft: '4px solid #0A3A75' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0A3A75', marginBottom: '10px' }}>
                        {faq.question}
                      </h3>
                      <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
