export default function ShippingPage() {
  return (
    <main>
      <header style={{ padding: '40px 20px', backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '10px', fontFamily: 'Playfair Display' }}>
            Livraison & Retours
          </h1>
          <p style={{ fontSize: '18px' }}>Informations complètes sur la livraison et les retours</p>
        </div>
      </header>

      <section style={{ padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Shipping Info */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '30px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Délais de Livraison
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '20px', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', color: '#0A3A75', marginBottom: '10px', fontWeight: '600' }}>
                  📍 Yaoundé
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  <strong>24-48h</strong> pour les commandes passées avant 14h
                </p>
              </div>

              <div style={{ padding: '20px', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', color: '#0A3A75', marginBottom: '10px', fontWeight: '600' }}>
                  📍 Douala
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  <strong>24-48h</strong> pour les commandes passées avant 14h
                </p>
              </div>

              <div style={{ padding: '20px', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', color: '#0A3A75', marginBottom: '10px', fontWeight: '600' }}>
                  📍 Autres Villes
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  <strong>5-7 jours ouvrables</strong> selon la localité
                </p>
              </div>
            </div>
          </div>

          {/* Shipping Costs */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '30px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Frais de Livraison
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0A3A75', color: '#FFFFFF' }}>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Zone</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Montant Minimum</th>
                    <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Frais de Livraison</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '15px' }}>Yaoundé & Douala</td>
                    <td style={{ padding: '15px' }}>Aucun</td>
                    <td style={{ padding: '15px', color: '#D62828', fontWeight: '600' }}>Gratuit</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '15px' }}>Autres villes (- 15 000 FCFA)</td>
                    <td style={{ padding: '15px' }}>-</td>
                    <td style={{ padding: '15px' }}>2 500 FCFA</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '15px' }}>Autres villes (+ 15 000 FCFA)</td>
                    <td style={{ padding: '15px' }}>15 000 FCFA</td>
                    <td style={{ padding: '15px', color: '#D62828', fontWeight: '600' }}>Gratuit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Returns Policy */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '30px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Politique de Retour
            </h2>

            <div style={{ padding: '30px', backgroundColor: '#F5F5F7', borderRadius: '8px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', color: '#0A3A75', marginBottom: '15px', fontWeight: '600' }}>
                Délai de Retour: 30 jours
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8' }}>
                Vous avez <strong>30 jours</strong> à partir de la date de livraison pour retourner un produit
                défectueux, endommagé ou non conforme à votre commande.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '2px solid #e0e0e0', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '16px', color: '#0A3A75', marginBottom: '10px', fontWeight: '600' }}>
                  ✓ Conditions pour un retour
                </h4>
                <ul style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Produit en bon état</li>
                  <li>Avec l'emballage original</li>
                  <li>Sans marques d'usage</li>
                  <li>Accompagné du bon de commande</li>
                </ul>
              </div>

              <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '2px solid #e0e0e0', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '16px', color: '#0A3A75', marginBottom: '10px', fontWeight: '600' }}>
                  ✗ Non-retournable
                </h4>
                <ul style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
                  <li>Produits personnalisés</li>
                  <li>Articles abîmés par le client</li>
                  <li>Livres annotés ou marqués</li>
                  <li>Fournitures consommées</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Return Process */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '30px', color: '#0A3A75', fontFamily: 'Playfair Display' }}>
              Processus de Retour
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>1️⃣</div>
                <h4 style={{ fontSize: '16px', color: '#0A3A75', marginBottom: '8px', fontWeight: '600' }}>
                  Contactez-nous
                </h4>
                <p style={{ fontSize: '13px', color: '#666' }}>
                  WhatsApp ou email avec photo du produit
                </p>
              </div>

              <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>2️⃣</div>
                <h4 style={{ fontSize: '16px', color: '#0A3A75', marginBottom: '8px', fontWeight: '600' }}>
                  Recevez l'accord
                </h4>
                <p style={{ fontSize: '13px', color: '#666' }}>
                  Numéro RMA et adresse de retour
                </p>
              </div>

              <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>3️⃣</div>
                <h4 style={{ fontSize: '16px', color: '#0A3A75', marginBottom: '8px', fontWeight: '600' }}>
                  Postez le colis
                </h4>
                <p style={{ fontSize: '13px', color: '#666' }}>
                  Frais payants sauf défaut
                </p>
              </div>

              <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F5F5F7', borderRadius: '8px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>4️⃣</div>
                <h4 style={{ fontSize: '16px', color: '#0A3A75', marginBottom: '8px', fontWeight: '600' }}>
                  Remboursement
                </h4>
                <p style={{ fontSize: '13px', color: '#666' }}>
                  Sous 7-10 jours après réception
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div style={{ padding: '40px', backgroundColor: '#0A3A75', borderRadius: '8px', color: '#FFFFFF', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', fontFamily: 'Playfair Display' }}>
              Des questions sur la livraison?
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.95 }}>
              Notre équipe est disponible 24/7 pour vous aider
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: '#F2C94C',
                color: '#0A3A75',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
