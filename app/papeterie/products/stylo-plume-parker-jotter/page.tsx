'use client'

import { useState } from 'react'
import Link from 'next/link'
import JsonLd from '@components/common/JsonLd'
import { productSchema, breadcrumbSchema, faqSchema } from '@lib/seo/schemas'

export { metadata } from './metadata'

/* ─── Données produit ─────────────────────────────────────── */
const PRODUCT = {
  id: 'parker-jotter-plume-acier',
  slug: 'stylo-plume-parker-jotter',
  name: 'Stylo Plume Parker Jotter',
  subtitle: 'L\'icône de l\'écriture premium, disponible chez Lipacam',
  brand: 'Parker',
  sku: 'PAR-JTR-PLM-SS',
  price: 18500,
  comparePrice: 22000,
  currency: 'FCFA',
  stock: 24,
  rating: 4.8,
  reviewCount: 47,
  badge: 'Best-seller',
  colors: ['Acier inoxydable', 'Noir mat', 'Bleu saphir'],
  nibSizes: ['Fine (F)', 'Moyenne (M)'],
  images: [
    { bg: '#1A1A1A', label: 'Vue principale' },
    { bg: '#2C2C2C', label: 'Détail plume' },
    { bg: '#383838', label: 'Capuchon ouvert' },
    { bg: '#444444', label: 'Vue profil' },
  ],
  specs: [
    { label: 'Marque', value: 'Parker' },
    { label: 'Modèle', value: 'Jotter' },
    { label: 'Type', value: 'Stylo plume' },
    { label: 'Corps', value: 'Acier inoxydable brossé' },
    { label: 'Plume', value: 'Acier inoxydable' },
    { label: 'Taille plume', value: 'Fine (F) / Moyenne (M)' },
    { label: 'Remplissage', value: 'Cartouche Parker courte/longue' },
    { label: 'Longueur', value: '132 mm (capuchon posé)' },
    { label: 'Poids', value: '16,7 g' },
    { label: 'Clip', value: 'Acier avec bille rotative' },
    { label: 'Garantie', value: '2 ans Parker' },
    { label: 'Référence', value: 'PAR-JTR-PLM-SS' },
  ],
  benefits: [
    {
      icon: '✒️',
      title: 'Plume acier premium',
      text: 'La plume en acier inoxydable assure un flux d\'encre constant et une écriture fluide, même lors de longues sessions de travail ou d\'examen.',
    },
    {
      icon: '🛡️',
      title: 'Corps indéformable',
      text: 'Fabriqué en acier inoxydable brossé résistant aux chocs et rayures. Un investissement qui dure toute une carrière scolaire et professionnelle.',
    },
    {
      icon: '⚙️',
      title: 'Rechargeable facilement',
      text: 'Compatible avec les cartouches Parker courtes et longues, disponibles chez Lipacam. Zéro déchet, économie maximale sur le long terme.',
    },
    {
      icon: '🎯',
      title: 'Équilibre parfait',
      text: 'Le poids et l\'équilibre du Jotter sont étudiés pour réduire la fatigue à l\'écriture — idéal pour les examens, la prise de notes et les documents officiels.',
    },
  ],
}

const FAQS = [
  {
    question: 'Le Parker Jotter est-il compatible avec toutes les cartouches Parker?',
    answer: 'Oui, le Parker Jotter Plume est compatible avec toutes les cartouches Parker courtes et longues, ainsi qu\'avec les convertisseurs Parker standard. Vous trouverez ces recharges directement chez Lipacam à Yaoundé et Douala.',
  },
  {
    question: 'Ce stylo plume convient-il aux élèves et étudiants?',
    answer: 'Absolument. Le Parker Jotter est l\'un des stylos plume les plus recommandés pour les élèves du lycée et les étudiants. Son corps robuste en acier inoxydable supporte un usage quotidien intensif, et sa plume fine offre une écriture précise idéale pour les examens.',
  },
  {
    question: 'Quel délai de livraison pour ce produit à Yaoundé?',
    answer: 'Le Parker Jotter est livré en 24-48 heures à Yaoundé et Douala pour toute commande passée avant 14h00. Pour les autres villes du Cameroun, comptez 5 à 7 jours ouvrables. La livraison est offerte pour toute commande supérieure à 15 000 FCFA.',
  },
  {
    question: 'Ce stylo peut-il servir de cadeau d\'entreprise?',
    answer: 'Le Parker Jotter est un cadeau professionnel particulièrement apprécié. Lipacam propose des tarifs dégressifs pour les commandes en volume (à partir de 10 unités). Contactez notre équipe pour un devis personnalisé avec possibilité de gravure.',
  },
  {
    question: 'Quelle est la garantie du Parker Jotter?',
    answer: 'Le Parker Jotter bénéficie d\'une garantie fabricant de 2 ans contre tout défaut de fabrication. En cas de problème, rapportez simplement votre stylo avec votre preuve d\'achat dans l\'un de nos magasins Lipacam.',
  },
]

const RELATED = [
  { name: 'Recharges Parker Courtes ×5', price: 2500, bg: '#1A1A1A', href: '/papeterie/products/recharges-parker-courtes' },
  { name: 'Convertisseur Parker Standard', price: 3200, bg: '#2C2C2C', href: '/papeterie/products/convertisseur-parker' },
  { name: 'Stylo Bille Parker Jotter', price: 14500, bg: '#383838', href: '/papeterie/products/stylo-bille-parker-jotter' },
  { name: 'Étui cuir stylo premium', price: 6800, bg: '#444444', href: '/papeterie/products/etui-cuir-stylo' },
]

/* ─── Page ────────────────────────────────────────────────── */
export default function ParkerJotterPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(PRODUCT.colors[0])
  const [selectedNib, setSelectedNib] = useState(PRODUCT.nibSizes[0])
  const [qty, setQty] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const discount = Math.round((1 - PRODUCT.price / PRODUCT.comparePrice) * 100)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2500)
  }

  return (
    <>
      {/* ── JSON-LD ── */}
      <JsonLd data={productSchema({
        name: PRODUCT.name,
        description: 'Stylo plume Parker Jotter corps acier inoxydable, plume acier fine/moyenne. Disponible chez Lipacam au Cameroun.',
        image: 'https://lipacam.cm/images/parker-jotter-plume.jpg',
        sku: PRODUCT.sku,
        brand: PRODUCT.brand,
        price: PRODUCT.price,
        url: 'https://lipacam.cm/papeterie/products/stylo-plume-parker-jotter',
        reviewCount: PRODUCT.reviewCount,
        ratingValue: PRODUCT.rating,
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Accueil', url: 'https://lipacam.cm' },
        { name: 'Papeterie', url: 'https://lipacam.cm/papeterie' },
        { name: 'Fournitures Bureau', url: 'https://lipacam.cm/papeterie/categories/materiel-bureau' },
        { name: PRODUCT.name, url: 'https://lipacam.cm/papeterie/products/stylo-plume-parker-jotter' },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <main style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>

        {/* ── BREADCRUMB ── */}
        <nav style={{ padding: '12px 20px', backgroundColor: '#F9F9F9', fontSize: '13px', color: '#999', borderBottom: '1px solid #eee' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#D62828', textDecoration: 'none' }}>Accueil</Link>
            <span>/</span>
            <Link href="/papeterie" style={{ color: '#D62828', textDecoration: 'none' }}>Papeterie</Link>
            <span>/</span>
            <Link href="/papeterie/categories/materiel-bureau" style={{ color: '#D62828', textDecoration: 'none' }}>Matériel de Bureau</Link>
            <span>/</span>
            <span style={{ color: '#1A1A1A', fontWeight: '600' }}>{PRODUCT.name}</span>
          </div>
        </nav>

        {/* ── PRODUCT HERO ── */}
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '50px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

            {/* LEFT — Galerie */}
            <div>
              {/* Main image */}
              <div style={{
                width: '100%', aspectRatio: '4/3', backgroundColor: PRODUCT.images[selectedImage].bg,
                borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {PRODUCT.images[selectedImage].label}
                </div>
                {/* Discount badge */}
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  padding: '6px 14px', backgroundColor: '#D62828', color: '#FFFFFF',
                  borderRadius: '20px', fontSize: '13px', fontWeight: '700',
                }}>
                  -{discount}%
                </div>
                {/* Stock badge */}
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  padding: '6px 14px', backgroundColor: 'rgba(39,174,96,0.9)', color: '#FFFFFF',
                  borderRadius: '20px', fontSize: '12px', fontWeight: '600',
                }}>
                  {PRODUCT.badge}
                </div>
              </div>
              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {PRODUCT.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    style={{
                      aspectRatio: '1', backgroundColor: img.bg, borderRadius: '10px',
                      border: selectedImage === i ? '3px solid #D62828' : '3px solid transparent',
                      cursor: 'pointer', transition: 'border 0.2s ease',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — Infos produit */}
            <div>
              {/* Brand */}
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#D62828', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                {PRODUCT.brand} · Papeterie Premium
              </p>

              {/* H1 SEO */}
              <h1 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontFamily: 'Playfair Display, serif', fontWeight: '800', color: '#1A1A1A', marginBottom: '8px', lineHeight: '1.2' }}>
                {PRODUCT.name}
              </h1>
              <p style={{ fontSize: '15px', color: '#666', marginBottom: '20px' }}>
                {PRODUCT.subtitle}
              </p>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} style={{ color: s <= Math.round(PRODUCT.rating) ? '#F2C94C' : '#ddd', fontSize: '18px' }}>★</span>
                  ))}
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#1A1A1A' }}>{PRODUCT.rating}/5</span>
                <span style={{ fontSize: '13px', color: '#999' }}>({PRODUCT.reviewCount} avis vérifiés)</span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontSize: '38px', fontWeight: '800', color: '#D62828', lineHeight: 1 }}>
                    {PRODUCT.price.toLocaleString('fr-CM')} {PRODUCT.currency}
                  </span>
                  <span style={{ fontSize: '18px', color: '#bbb', textDecoration: 'line-through' }}>
                    {PRODUCT.comparePrice.toLocaleString('fr-CM')} {PRODUCT.currency}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#27ae60', fontWeight: '600', marginTop: '6px' }}>
                  Vous économisez {(PRODUCT.comparePrice - PRODUCT.price).toLocaleString('fr-CM')} FCFA ({discount}%)
                </p>
              </div>

              {/* Color selector */}
              <div style={{ marginBottom: '22px' }}>
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Couleur : <span style={{ fontWeight: '400', color: '#555' }}>{selectedColor}</span>
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {PRODUCT.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      style={{
                        padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '600',
                        border: selectedColor === c ? '2px solid #D62828' : '2px solid #e0e0e0',
                        backgroundColor: selectedColor === c ? '#fff5f5' : '#FFFFFF',
                        color: selectedColor === c ? '#D62828' : '#555',
                        cursor: 'pointer', transition: 'all 0.2s ease',
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nib selector */}
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Taille de plume : <span style={{ fontWeight: '400', color: '#555' }}>{selectedNib}</span>
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {PRODUCT.nibSizes.map((n) => (
                    <button
                      key={n}
                      onClick={() => setSelectedNib(n)}
                      style={{
                        padding: '8px 20px', borderRadius: '6px', fontSize: '13px', fontWeight: '600',
                        border: selectedNib === n ? '2px solid #D62828' : '2px solid #e0e0e0',
                        backgroundColor: selectedNib === n ? '#fff5f5' : '#FFFFFF',
                        color: selectedNib === n ? '#D62828' : '#555',
                        cursor: 'pointer', transition: 'all 0.2s ease',
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + CTA */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                {/* Qty */}
                <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    style={{ width: '40px', height: '48px', border: 'none', backgroundColor: '#f9f9f9', fontSize: '20px', cursor: 'pointer', fontWeight: '600' }}
                  >
                    −
                  </button>
                  <span style={{ width: '44px', textAlign: 'center', fontSize: '16px', fontWeight: '700' }}>{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    style={{ width: '40px', height: '48px', border: 'none', backgroundColor: '#f9f9f9', fontSize: '20px', cursor: 'pointer', fontWeight: '600' }}
                  >
                    +
                  </button>
                </div>
                {/* Add to cart */}
                <button
                  onClick={handleAddToCart}
                  style={{
                    flex: 1, padding: '14px 24px',
                    backgroundColor: addedToCart ? '#27ae60' : '#D62828',
                    color: '#FFFFFF', border: 'none', borderRadius: '8px',
                    fontSize: '16px', fontWeight: '700', cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0 4px 16px rgba(214,40,40,0.3)',
                  }}
                >
                  {addedToCart ? '✓ Ajouté au panier !' : '🛒 Ajouter au panier'}
                </button>
              </div>

              {/* Wishlist */}
              <button style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#FFFFFF', fontSize: '14px', color: '#555', cursor: 'pointer', fontWeight: '600' }}>
                ♡ Ajouter à ma liste de souhaits
              </button>

              {/* Trust signals */}
              <div style={{ marginTop: '28px', padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[
                  { icon: '🚚', text: 'Livraison 24-48h Yaoundé & Douala' },
                  { icon: '↩️', text: 'Retour gratuit sous 30 jours' },
                  { icon: '🛡️', text: 'Garantie Parker 2 ans' },
                  { icon: '✅', text: 'Produit 100% authentique' },
                ].map((t) => (
                  <div key={t.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ fontSize: '16px' }}>{t.icon}</span>
                    <span style={{ fontSize: '12px', color: '#555', lineHeight: '1.5' }}>{t.text}</span>
                  </div>
                ))}
              </div>

              {/* Stock indicator */}
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27ae60', boxShadow: '0 0 0 3px rgba(39,174,96,0.2)' }} />
                <span style={{ fontSize: '13px', color: '#27ae60', fontWeight: '600' }}>
                  En stock — {PRODUCT.stock} unités disponibles
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── BÉNÉFICES ── */}
        <section style={{ padding: '70px 20px', backgroundColor: '#F9F9F9' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontFamily: 'Playfair Display, serif', color: '#1A1A1A', marginBottom: '12px' }}>
                Pourquoi choisir le Parker Jotter?
              </h2>
              <p style={{ color: '#666', fontSize: '16px', maxWidth: '550px', margin: '0 auto' }}>
                Un stylo plume pensé pour durer — dans les salles de classe comme dans les bureaux du Cameroun.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {PRODUCT.benefits.map((b) => (
                <div
                  key={b.title}
                  style={{
                    padding: '32px 28px', backgroundColor: '#FFFFFF', borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: '3px solid #D62828',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(214,40,40,0.12)' }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)' }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{b.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px', fontFamily: 'Montserrat, sans-serif' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPÉCIFICATIONS ── */}
        <section style={{ padding: '70px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontFamily: 'Playfair Display, serif', color: '#1A1A1A', marginBottom: '40px' }}>
              Caractéristiques techniques
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
              {/* Specs table */}
              <div style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden' }}>
                {PRODUCT.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 20px',
                      backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F9F9F9',
                      borderBottom: i < PRODUCT.specs.length - 1 ? '1px solid #eee' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#555', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                      {spec.label}
                    </span>
                    <span style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: '500', textAlign: 'right' }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* SEO editorial text */}
              <div style={{ fontSize: '15px', lineHeight: '1.85', color: '#444' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'Playfair Display, serif', color: '#1A1A1A', marginBottom: '16px' }}>
                  Le Parker Jotter Plume : un classique intemporel
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Depuis sa création, le <strong>Parker Jotter</strong> s'est imposé comme l'un des
                  stylos plume les plus vendus au monde. Son design iconique — corp en acier inoxydable,
                  clip à bille rotative — est resté inchangé depuis des décennies, preuve d'une
                  conception aboutie dès l'origine.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Chez <strong>Lipacam</strong>, nous proposons le Parker Jotter Plume comme référence
                  en matière de <strong>stylo plume premium au Cameroun</strong>. C'est le choix idéal
                  pour les lycéens, les étudiants à l'université et les professionnels qui souhaitent
                  associer élégance et performance au quotidien.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  La <strong>plume en acier inoxydable</strong> offre une durabilité bien supérieure
                  aux plumes dorées d'entrée de gamme, tout en garantissant un flux d'encre régulier
                  et une écriture confortable, séance après séance.
                </p>
                <p>
                  Compatible avec les <strong>cartouches Parker courtes et longues</strong> — disponibles
                  en rechange chez Lipacam — ce stylo vous accompagnera pendant des années, faisant
                  de lui un investissement rentable face aux stylos jetables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '70px 20px', backgroundColor: '#F9F9F9' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontFamily: 'Playfair Display, serif', color: '#1A1A1A', marginBottom: '40px' }}>
              Questions fréquentes sur le Parker Jotter
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {FAQS.map((faq) => (
                <div
                  key={faq.question}
                  style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '24px 28px', borderLeft: '4px solid #D62828', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.75' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUITS ASSOCIÉS ── */}
        <section style={{ padding: '70px 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontFamily: 'Playfair Display, serif', color: '#1A1A1A', marginBottom: '40px' }}>
              Complétez votre achat
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
              {RELATED.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{ border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden', transition: 'all 0.3s ease' }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(214,40,40,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <div style={{ height: '160px', backgroundColor: p.bg }} />
                    <div style={{ padding: '16px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', lineHeight: '1.4' }}>{p.name}</h4>
                      <p style={{ fontSize: '16px', fontWeight: '800', color: '#D62828' }}>
                        {p.price.toLocaleString('fr-CM')} FCFA
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FOOTER PRODUIT ── */}
        <section style={{ padding: '60px 20px', background: 'linear-gradient(135deg, #D62828 0%, #a71f1f 100%)', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', color: '#FFFFFF' }}>
            <h2 style={{ fontSize: '28px', fontFamily: 'Montserrat, sans-serif', fontWeight: '700', marginBottom: '14px' }}>
              Disponible en magasin à Yaoundé & Douala
            </h2>
            <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '30px', lineHeight: '1.6' }}>
              Venez tester le Parker Jotter en main dans l'un de nos magasins Lipacam.
              Notre équipe est disponible pour vous conseiller.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                style={{ padding: '13px 30px', backgroundColor: '#FFFFFF', color: '#D62828', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}
              >
                📍 Trouver un magasin
              </Link>
              <Link
                href="/papeterie/categories/materiel-bureau"
                style={{ padding: '13px 30px', backgroundColor: 'transparent', color: '#FFFFFF', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}
              >
                Voir tout le matériel bureau →
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
