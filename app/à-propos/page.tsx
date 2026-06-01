'use client'

import Link from 'next/link'

const STATS = [
  { value: '1993', label: 'Année de fondation', icon: '📅' },
  { value: '30+', label: "Années d'expérience", icon: '🏆' },
  { value: '15 000+', label: 'Titres en catalogue', icon: '📚' },
  { value: '50 000+', label: 'Clients satisfaits', icon: '😊' },
  { value: '2', label: 'Magasins au Cameroun', icon: '🏢' },
  { value: '24/7', label: 'Support client', icon: '💬' },
]

const TIMELINE = [
  {
    year: '1993',
    title: 'Fondation de Lipacam',
    description: 'Ouverture de la première librairie scolaire à Yaoundé par la famille Tiani. Un comptoir, des étagères, et la passion des livres.',
    icon: '🌱',
  },
  {
    year: '2000',
    title: 'Expansion de la gamme',
    description: "Ajout de la papeterie et des fournitures scolaires. Lipacam devient le guichet unique pour l'éducation au Cameroun.",
    icon: '📎',
  },
  {
    year: '2008',
    title: 'Ouverture à Douala',
    description: "Ouverture de la succursale de Douala pour servir la capitale économique du Cameroun et sa région.",
    icon: '🏢',
  },
  {
    year: '2015',
    title: 'Modernisation & Informatisation',
    description: 'Mise en place du système de gestion informatisé, de la caisse électronique et du premier catalogue numérique.',
    icon: '💻',
  },
  {
    year: '2020',
    title: 'Lancement en ligne',
    description: 'Création de la boutique en ligne pour permettre les commandes à distance pendant et après la pandémie.',
    icon: '🌐',
  },
  {
    year: '2024',
    title: "Aujourd'hui",
    description: "Lipacam est la référence incontournable en librairie scolaire et papeterie au Cameroun, avec plus de 15 000 titres et une équipe dévouée.",
    icon: '🚀',
  },
]

const TEAM = [
  {
    name: 'Directeur Général',
    role: 'Fondateur & Vision Stratégique',
    description: 'Plus de 30 ans au service de l\'éducation camerounaise',
    avatar: '👨‍💼',
  },
  {
    name: 'Responsable Librairie',
    role: 'Sélection & Approvisionnement',
    description: 'Expert en programmes scolaires camerounais',
    avatar: '📚',
  },
  {
    name: 'Responsable Papeterie',
    role: 'Fournitures & Équipements',
    description: 'Spécialiste en matériel scolaire et de bureau',
    avatar: '✏️',
  },
  {
    name: 'Service Client',
    role: 'Support & Livraison',
    description: 'Une équipe disponible 24h/24 pour vous aider',
    avatar: '🤝',
  },
]

const VALUES = [
  {
    icon: '🎯',
    title: 'Fiabilité',
    description: 'Des ouvrages conformes aux programmes officiels du Cameroun, sélectionnés avec soin depuis 30 ans.',
  },
  {
    icon: '💰',
    title: 'Accessibilité',
    description: 'Des prix justes et compétitifs pour que chaque élève camerounais puisse accéder aux manuels dont il a besoin.',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'Une sélection rigoureuse de titres de qualité pour accompagner la réussite scolaire et académique.',
  },
  {
    icon: '🌍',
    title: 'Engagement Local',
    description: 'Partenaire de l\'éducation camerounaise, nous soutenir c\'est investir dans la jeunesse du Cameroun.',
  },
  {
    icon: '🔒',
    title: 'Confiance',
    description: '30 ans de relation de confiance avec nos clients, parents, enseignants et institutions scolaires.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Modernisation continue de nos services — boutique en ligne, livraison rapide, catalogue numérique.',
  },
]

export default function AProposPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A3A75 0%, #0E1E3A 100%)',
          color: '#FFFFFF',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 18px',
              backgroundColor: 'rgba(242,201,76,0.2)',
              border: '1px solid rgba(242,201,76,0.4)',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#F2C94C',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Depuis 1993
          </div>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '54px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#FFFFFF',
              lineHeight: '1.2',
            }}
          >
            À propos de Lipacam
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '0' }}>
            Plus de 30 ans au service de l'éducation et de la réussite scolaire au Cameroun.
            La référence en librairie scolaire et papeterie depuis 1993.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 20px', backgroundColor: '#F5F5F7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', textAlign: 'center' }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{ padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: '#0A3A75', fontFamily: 'Montserrat', marginBottom: '6px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#0A3A75', marginBottom: '15px' }}>
              Notre Histoire
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Une aventure familiale devenue la première librairie du Cameroun
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: '#e0e0e0',
                transform: 'translateX(-50%)',
              }}
            />

            {TIMELINE.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '40px',
                  position: 'relative',
                }}
              >
                {/* Center dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '20px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#0A3A75',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 0 0 2px #0A3A75',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    width: '45%',
                    padding: '20px 24px',
                    backgroundColor: i % 2 === 0 ? '#F5F5F7' : '#FFFFFF',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    marginRight: i % 2 === 0 ? 'auto' : undefined,
                    marginLeft: i % 2 === 0 ? undefined : 'auto',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#FFFFFF',
                        backgroundColor: '#0A3A75',
                        padding: '3px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#0A3A75', marginBottom: '8px', fontFamily: 'Montserrat' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '80px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#FFFFFF', marginBottom: '20px' }}>
            Notre Mission
          </h2>
          <p style={{ fontSize: '20px', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>
            Rendre l'éducation accessible à tous en Cameroun en fournissant des ouvrages
            fiables, conformes aux programmes officiels, et des fournitures de qualité
            à des prix compétitifs — partout dans le pays.
          </p>
          <div
            style={{
              display: 'inline-block',
              padding: '4px 20px',
              borderLeft: '4px solid #F2C94C',
              fontSize: '18px',
              fontStyle: 'italic',
              color: '#F2C94C',
              textAlign: 'left',
            }}
          >
            "L'éducation est l'arme la plus puissante pour changer le monde."
            <br />
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontStyle: 'normal' }}>— Nelson Mandela</span>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#0A3A75', marginBottom: '15px' }}>
              Nos Valeurs
            </h2>
            <p style={{ fontSize: '18px', color: '#666' }}>Ce qui nous guide au quotidien depuis 30 ans</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {VALUES.map((value, i) => (
              <div
                key={i}
                style={{
                  padding: '30px',
                  backgroundColor: '#F5F5F7',
                  borderRadius: '12px',
                  borderTop: '4px solid #0A3A75',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '15px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0A3A75', marginBottom: '10px', fontFamily: 'Montserrat' }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7', margin: 0 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section style={{ padding: '80px 20px', backgroundColor: '#F5F5F7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#0A3A75', marginBottom: '15px' }}>
              Notre Équipe
            </h2>
            <p style={{ fontSize: '18px', color: '#666' }}>Des professionnels passionnés au service de l'éducation</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
            {TEAM.map((member, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#E8EEF7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '36px',
                    margin: '0 auto 16px',
                  }}
                >
                  {member.avatar}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0A3A75', marginBottom: '6px', fontFamily: 'Montserrat' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#D62828', marginBottom: '10px' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', margin: 0 }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magasins */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#0A3A75', marginBottom: '15px' }}>
              Nos Magasins
            </h2>
            <p style={{ fontSize: '18px', color: '#666' }}>Venez nous rendre visite à Yaoundé ou Douala</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Yaoundé */}
            <div style={{ padding: '30px', border: '2px solid #0A3A75', borderRadius: '12px', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20px',
                  backgroundColor: '#0A3A75',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: '700',
                  padding: '3px 12px',
                  borderRadius: '20px',
                }}
              >
                SIÈGE SOCIAL
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#0A3A75', marginBottom: '20px', fontFamily: 'Montserrat' }}>
                🏢 Yaoundé
              </h3>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '14px', color: '#666', margin: '0 0 4px' }}>📍 Centre-Ville, Rue 1.456</p>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Yaoundé, Cameroun</p>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '14px', color: '#666', margin: '0 0 4px' }}>📞 +237 222 XXX XXX</p>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>💬 WhatsApp: +237 6XX XXX XXX</p>
              </div>
              <div style={{ padding: '10px', backgroundColor: '#F5F5F7', borderRadius: '6px' }}>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
                  🕐 Lun–Sam: 8h00–18h00 | Dim: 10h00–16h00
                </p>
              </div>
            </div>

            {/* Douala */}
            <div style={{ padding: '30px', border: '2px solid #D62828', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#D62828', marginBottom: '20px', fontFamily: 'Montserrat' }}>
                🏢 Douala
              </h3>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '14px', color: '#666', margin: '0 0 4px' }}>📍 Zone Portuaire</p>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Douala, Cameroun</p>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '14px', color: '#666', margin: '0 0 4px' }}>📞 +237 233 XXX XXX</p>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>💬 WhatsApp: +237 6XX XXX XXX</p>
              </div>
              <div style={{ padding: '10px', backgroundColor: '#F5F5F7', borderRadius: '6px' }}>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
                  🕐 Lun–Sam: 8h00–18h00 | Dim: 10h00–16h00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section style={{ padding: '60px 20px', backgroundColor: '#F5F5F7', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#0A3A75', marginBottom: '10px' }}>
            Nos Partenaires
          </h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>
            En partenariat avec les ministères et les meilleures maisons d'édition
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {[
              'Ministère de l\'Éducation', 'MINESEC', 'MINESUP',
              'Hachette', 'Nathan', 'Edicef', 'CLE International', 'Hatier'
            ].map((partner, i) => (
              <div
                key={i}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#0A3A75',
                }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: '80px 20px', backgroundColor: '#0A3A75', textAlign: 'center', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#FFFFFF', marginBottom: '20px' }}>
            Rejoignez la famille Lipacam
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '40px', lineHeight: '1.7' }}>
            Des milliers de familles camerounaises nous font confiance pour l'éducation de leurs enfants.
            Découvrez nos collections et nos offres spéciales.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/librairie"
              style={{
                padding: '15px 35px',
                backgroundColor: '#F2C94C',
                color: '#0A3A75',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '16px',
              }}
            >
              📚 Librairie Scolaire
            </Link>
            <Link
              href="/papeterie"
              style={{
                padding: '15px 35px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '2px solid #FFFFFF',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '16px',
              }}
            >
              ✏️ Papeterie
            </Link>
            <Link
              href="/contact"
              style={{
                padding: '15px 35px',
                backgroundColor: '#D62828',
                color: '#FFFFFF',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '16px',
              }}
            >
              📞 Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
