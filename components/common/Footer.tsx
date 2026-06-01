import React from 'react'
import Link from 'next/link'

interface FooterProps {
  universe?: 'librairie' | 'papeterie'
}

export default function Footer({ universe = 'librairie' }: FooterProps) {
  const isLibrary = universe === 'librairie'

  return (
    <footer className={`footer footer-${universe}`}>
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column">
          <h4>À Propos</h4>
          <p>
            Lipacam est la référence camerounaise en librairie scolaire et papeterie depuis 1993.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            {isLibrary ? (
              <>
                <li><Link href="/librairie">Livres Scolaires</Link></li>
                <li><Link href="/librairie/levels">Par Niveau</Link></li>
                <li><Link href="/librairie/blog">Blog</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/papeterie/products">Produits</Link></li>
                <li><Link href="/papeterie/promotions">Promotions</Link></li>
                <li><Link href="/papeterie/categories">Catégories</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Column 3: Service Client */}
        <div className="footer-column">
          <h4>Service Client</h4>
          <ul>
            <li><Link href="/contact">Nous Contacter</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping">Livraison</Link></li>
            <li><Link href="/returns">Retours</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column">
          <h4>Nous Rejoindre</h4>
          <p>📞 +237 XXX XXX XXX</p>
          <p>📧 contact@lipacam.cm</p>
          <p>📍 Yaoundé, Douala, Cameroun</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Lipacam. Tous droits réservés.</p>
        <div className="footer-links">
          <Link href="/privacy">Confidentialité</Link>
          <Link href="/terms">Conditions</Link>
          <Link href="/sitemap">Plan du Site</Link>
        </div>
      </div>
    </footer>
  )
}
