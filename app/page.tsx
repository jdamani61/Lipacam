'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0A3A75 0%, #0E1E3A 60%, #1a0a2e 100%)',
          overflow: 'hidden',
          textAlign: 'center',
          padding: '40px 20px',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgba(242,201,76,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(45,156,219,0.06) 0%, transparent 50%)',
            zIndex: 0,
          }}
        />

        {/* Badge */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(242,201,76,0.15)',
            border: '1px solid rgba(242,201,76,0.4)',
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#F2C94C',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}
        >
          Référence au Cameroun depuis 1963
        </div>

        {/* Main Title */}
        <h1
          style={{
            position: 'relative',
            zIndex: 1,
            fontSize: 'clamp(38px, 6vw, 78px)',
            fontWeight: '800',
            fontFamily: 'Playfair Display, serif',
            color: '#FFFFFF',
            lineHeight: '1.1',
            maxWidth: '900px',
            marginBottom: '24px',
            letterSpacing: '-1px',
          }}
        >
          Livres scolaires.<br />
          <span style={{ color: '#F2C94C' }}>Papeterie.</span><br />
          Excellence.
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            position: 'relative',
            zIndex: 1,
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255,255,255,0.78)',
            maxWidth: '620px',
            lineHeight: '1.8',
            marginBottom: '48px',
          }}
        >
          Lipacam accompagne chaque élève, chaque enseignant, chaque famille camerounaise —
          avec les meilleurs ouvrages éducatifs et les fournitures de bureau qu'il faut.
        </p>

        {/* CTAs */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '70px',
          }}
        >
          <Link
            href="/librairie"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              backgroundColor: '#F2C94C',
              color: '#0A3A75',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '16px',
              letterSpacing: '0.3px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(242,201,76,0.35)',
            }}
          >
            📚 Explorer la Librairie
          </Link>
          <Link
            href="/papeterie"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '2px solid rgba(255,255,255,0.45)',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.3s ease',
            }}
          >
            🛒 Voir la Papeterie
          </Link>
        </div>

        {/* Stats bar */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            gap: '48px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {[
            { number: '60+', label: 'ans d\'expérience' },
            { number: '1 500+', label: 'ouvrages disponibles' },
            { number: '2', label: 'villes couvertes' },
            { number: '50 000+', label: 'familles servies' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#F2C94C', lineHeight: 1 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEUX UNIVERS ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: '#0A3A75', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Deux univers. Une seule marque.
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: 'Playfair Display, serif', fontWeight: '700', color: '#1A1A1A', maxWidth: '700px', margin: '0 auto', lineHeight: '1.2' }}>
              Choisissez votre univers Lipacam
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {/* Librairie Card */}
            <Link href="/librairie" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #0E1E3A 0%, #0A3A75 100%)',
                  padding: '56px 40px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 32px rgba(10,58,117,0.25)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(10,58,117,0.35)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(10,58,117,0.25)'
                }}
              >
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>📚</div>
                <h3 style={{ fontSize: '28px', fontFamily: 'Playfair Display, serif', fontWeight: '700', marginBottom: '14px' }}>
                  Univers Librairie
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.78)', marginBottom: '28px' }}>
                  Manuels scolaires officiels, ouvrages parascolaires, annales d'examens —
                  conformes aux programmes camerounais, du préscolaire au lycée.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                  {['Livres scolaires', 'Parascolaire', 'Par niveau', 'Éditeurs partenaires'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '5px 14px',
                        backgroundColor: 'rgba(242,201,76,0.18)',
                        border: '1px solid rgba(242,201,76,0.35)',
                        borderRadius: '50px',
                        fontSize: '12px',
                        color: '#F2C94C',
                        fontWeight: '600',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#F2C94C',
                  }}
                >
                  Découvrir la librairie →
                </span>
              </div>
            </Link>

            {/* Papeterie Card */}
            <Link href="/papeterie" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #a71f1f 0%, #D62828 100%)',
                  padding: '56px 40px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 32px rgba(214,40,40,0.25)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(214,40,40,0.35)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(214,40,40,0.25)'
                }}
              >
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>🛒</div>
                <h3 style={{ fontSize: '28px', fontFamily: 'Montserrat, sans-serif', fontWeight: '700', marginBottom: '14px' }}>
                  Univers Papeterie & Bureau
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)', marginBottom: '28px' }}>
                  Fournitures scolaires, matériel de bureau, machines, archivage
                  et accessoires informatiques — tout au meilleur prix.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                  {['Fournitures', 'Matériel bureau', 'Machines', 'Promotions'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '5px 14px',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '50px',
                        fontSize: '12px',
                        color: '#FFFFFF',
                        fontWeight: '600',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#FFFFFF',
                  }}
                >
                  Voir les produits →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── POURQUOI LIPACAM ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#F5F5F7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: '#D62828', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Pourquoi nous choisir
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: 'Playfair Display, serif', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.2' }}>
              Lipacam, c'est bien plus<br />qu'une librairie
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {[
              {
                icon: '🏛️',
                title: '60+ ans de confiance',
                text: 'Fondée en 1963 par Tiani, Lipacam est l\'institution de référence pour des millions de familles camerounaises.',
              },
              {
                icon: '✅',
                title: 'Conformes aux programmes',
                text: 'Tous nos ouvrages scolaires sont rigoureusement sélectionnés pour être conformes aux programmes officiels du Cameroun.',
              },
              {
                icon: '💰',
                title: 'Prix justes, toujours',
                text: 'Nous nous engageons à proposer des tarifs accessibles à tous, avec des promotions régulières pour chaque budget.',
              },
              {
                icon: '📦',
                title: 'Livraison rapide',
                text: 'Livraison en 24-48h à Yaoundé et Douala. Service client WhatsApp 24/7 pour suivre chaque commande.',
              },
              {
                icon: '🎓',
                title: 'Expert pédagogique',
                text: 'Notre équipe d\'experts suit les évolutions des programmes et vous guide vers les meilleurs ouvrages pour chaque niveau.',
              },
              {
                icon: '🤝',
                title: 'Partenaire des entreprises',
                text: 'Devis personnalisés, tarifs professionnels et livraisons groupées pour les écoles, bureaux et institutions.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '36px 28px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,58,117,0.12)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '18px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0A3A75', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: '#0A3A75', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Ils nous font confiance
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: 'Playfair Display, serif', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.2' }}>
              Ce que disent nos clients
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {[
              {
                text: 'Lipacam est mon premier réflexe à chaque rentrée scolaire. Je trouve toujours les manuels conformes aux programmes, pour tous mes enfants du primaire au lycée.',
                name: 'Marie-Claire Ngo',
                role: 'Mère de famille, Yaoundé',
                stars: 5,
              },
              {
                text: 'En tant qu\'enseignant, je recommande Lipacam à mes élèves. La qualité des ouvrages est irréprochable et le personnel connaît parfaitement les programmes officiels.',
                name: 'Prof. Emmanuel Biya',
                role: 'Enseignant de Mathématiques, Douala',
                stars: 5,
              },
              {
                text: 'Nous équipons notre bureau grâce à Lipacam depuis 5 ans. Tarifs compétitifs, livraison fiable, service client réactif. Un partenaire commercial en qui nous avons pleinement confiance.',
                name: 'Directrice Sandra Mbarga',
                role: 'Responsable Administrative, Yaoundé',
                stars: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                style={{
                  padding: '36px',
                  backgroundColor: '#F5F5F7',
                  borderRadius: '12px',
                  position: 'relative',
                  borderLeft: '4px solid #0A3A75',
                }}
              >
                <div style={{ fontSize: '20px', color: '#F2C94C', marginBottom: '16px', letterSpacing: '2px' }}>
                  {'★'.repeat(review.stars)}
                </div>
                <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '24px', fontStyle: 'italic' }}>
                  "{review.text}"
                </p>
                <div>
                  <div style={{ fontWeight: '700', color: '#0A3A75', fontSize: '15px' }}>{review.name}</div>
                  <div style={{ fontSize: '13px', color: '#999', marginTop: '4px' }}>{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONS PARTENAIRES ── */}
      <section style={{ padding: '80px 20px', backgroundColor: '#0A3A75' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(242,201,76,0.8)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Éditeurs partenaires
          </p>
          <h2 style={{ fontSize: '28px', fontFamily: 'Playfair Display, serif', color: '#FFFFFF', marginBottom: '50px' }}>
            Les grandes maisons d'édition vous font confiance via Lipacam
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            {['EDICEF', 'Nathan', 'Hatier', 'ITEC', 'Bordas', 'Hachette Éducation'].map((editor) => (
              <div
                key={editor}
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontWeight: '700',
                  fontSize: '15px',
                  letterSpacing: '0.5px',
                }}
              >
                {editor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS MAGASINS ── */}
      <section style={{ padding: '100px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: '#D62828', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Présence physique
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: 'Playfair Display, serif', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.2' }}>
              Retrouvez-nous à Yaoundé & Douala
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              {
                city: 'Yaoundé — Siège social',
                address: 'Centre-Ville, Rue 1.456, Yaoundé',
                phone: '+237 222 XXX XXX',
                whatsapp: '+237 6XX XXX XXX',
                hours: 'Lun-Sam 8h–18h · Dim 10h–16h',
                flag: '🏢',
              },
              {
                city: 'Douala — Agence',
                address: 'Zone Portuaire, Douala',
                phone: '+237 233 XXX XXX',
                whatsapp: '+237 6XX XXX XXX',
                hours: 'Lun-Sam 8h–18h · Dim 10h–16h',
                flag: '🏪',
              },
            ].map((store) => (
              <div
                key={store.city}
                style={{
                  padding: '40px',
                  backgroundColor: '#F5F5F7',
                  borderRadius: '12px',
                  borderBottom: '4px solid #0A3A75',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{store.flag}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0A3A75', marginBottom: '20px', fontFamily: 'Montserrat, sans-serif' }}>
                  {store.city}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#555' }}>
                  <div>📍 {store.address}</div>
                  <div>📞 {store.phone}</div>
                  <div>💬 WhatsApp: {store.whatsapp}</div>
                  <div>🕐 {store.hours}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                backgroundColor: '#0A3A75',
                color: '#FFFFFF',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              Nous Contacter →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        style={{
          padding: '120px 20px',
          background: 'linear-gradient(135deg, #0A3A75 0%, #0E1E3A 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(242,201,76,0.06) 0%, transparent 70%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(30px, 5vw, 56px)',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: '1.15',
              marginBottom: '24px',
            }}
          >
            Prêt pour une rentrée réussie?
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.72)',
              marginBottom: '48px',
              lineHeight: '1.7',
            }}
          >
            Des milliers de familles et d'entreprises nous font confiance.<br />
            Rejoignez la communauté Lipacam dès aujourd'hui.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/librairie"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                backgroundColor: '#F2C94C',
                color: '#0A3A75',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '16px',
                boxShadow: '0 4px 20px rgba(242,201,76,0.35)',
              }}
            >
              📚 Livres Scolaires
            </Link>
            <Link
              href="/papeterie"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                backgroundColor: '#D62828',
                color: '#FFFFFF',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '16px',
                boxShadow: '0 4px 20px rgba(214,40,40,0.35)',
              }}
            >
              🛒 Fournitures & Bureau
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '2px solid rgba(255,255,255,0.4)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#0E1E3A', padding: '60px 20px 30px', color: 'rgba(255,255,255,0.65)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '50px' }}>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '20px', fontFamily: 'Playfair Display, serif', marginBottom: '14px' }}>Lipacam</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.8' }}>
                La référence camerounaise en librairie scolaire et papeterie & matériel de bureau depuis 1963.
              </p>
            </div>
            <div>
              <h5 style={{ color: '#F2C94C', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Librairie</h5>
              {[
                { label: 'Livres Scolaires', href: '/librairie/livres-scolaires' },
                { label: 'Parascolaire', href: '/librairie/parascolaire' },
                { label: 'Par Niveau', href: '/librairie/par-niveau' },
                { label: 'Éditeurs', href: '/librairie/editeurs' },
                { label: 'Blog & Conseils', href: '/blog' }
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: '8px' }}>
                  <Link href={item.href} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <h5 style={{ color: '#F2C94C', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Papeterie</h5>
              {['Tous les Produits', 'Catégories', 'Promotions', 'Bureau & Entreprises'].map((l) => (
                <div key={l} style={{ marginBottom: '8px' }}>
                  <Link href={`/papeterie/${l.toLowerCase().replace(/ /g, '-')}`} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '14px' }}>
                    {l}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <h5 style={{ color: '#F2C94C', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Aide</h5>
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Livraison & Retours', href: '/livraison-et-retours' },
                { label: 'Nous Contacter', href: '/contact' },
                { label: 'À propos', href: '/about' }
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: '8px' }}>
                  <Link href={item.href} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '14px' }}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '13px' }}>
            <span>© 2024 Lipacam. Tous droits réservés.</span>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Confidentialité</Link>
              <Link href="/terms" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Conditions</Link>
              <Link href="/sitemap" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Plan du site</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
