'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from '@styles/components/navbar.module.css'

interface NavbarProps {
  logo?: string
  universe?: 'librairie' | 'papeterie'
}

export default function Navbar({ logo = 'Lipacam', universe = 'librairie' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const isLibrary = universe === 'librairie'

  return (
    <nav className={`navbar navbar-${universe}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          {logo}
        </Link>

        {/* Menu Toggle (Mobile) */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {isLibrary ? (
            <>
              <li>
                <Link href="/librairie">Accueil</Link>
              </li>
              <li>
                <Link href="/librairie/books">Livres Scolaires</Link>
              </li>
              <li>
                <Link href="/librairie/levels">Par Niveau</Link>
              </li>
              <li>
                <Link href="/librairie/subjects">Par Matière</Link>
              </li>
              <li>
                <Link href="/librairie/publishers">Éditeurs</Link>
              </li>
              <li>
                <Link href="/librairie/blog">Blog & Conseils</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/papeterie">Accueil</Link>
              </li>
              <li>
                <Link href="/papeterie/products">Tous les Produits</Link>
              </li>
              <li>
                <Link href="/papeterie/categories">Catégories</Link>
              </li>
              <li>
                <Link href="/papeterie/promotions">Promotions</Link>
              </li>
            </>
          )}
        </ul>

        {/* Right Actions */}
        <div className="navbar-actions">
          <input
            type="search"
            placeholder="Rechercher..."
            className="navbar-search"
          />
          <Link href="/account" className="navbar-icon">
            👤
          </Link>
          <Link href="/cart" className="navbar-icon">
            🛒
          </Link>
        </div>
      </div>
    </nav>
  )
}
