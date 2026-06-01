'use client'

import React from 'react'
import Link from 'next/link'
import Card from './Card'
import styles from '@styles/components/category-grid.module.css'

interface Category {
  id: string
  name: string
  icon?: string
  description?: string
  link: string
  count?: number
  image?: string
}

interface CategoryGridProps {
  title: string
  subtitle?: string
  categories: Category[]
  universe?: 'librairie' | 'papeterie'
  columns?: 2 | 3 | 4
}

export default function CategoryGrid({
  title,
  subtitle,
  categories,
  universe = 'librairie',
  columns = 4,
}: CategoryGridProps) {
  return (
    <section className={`category-grid category-${universe}`}>
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className={`categories grid-${columns}`}>
          {categories.map((category) => (
            <Link key={category.id} href={category.link} className="category-link">
              <Card variant={universe === 'librairie' ? 'library' : 'stationery'} className="category-card">
                {category.image && (
                  <div className="category-image">
                    <img src={category.image} alt={category.name} />
                  </div>
                )}

                {category.icon && <div className="category-icon">{category.icon}</div>}

                <div className="category-content">
                  <h3 className="category-name">{category.name}</h3>

                  {category.description && (
                    <p className="category-description">{category.description}</p>
                  )}

                  {category.count && (
                    <p className="category-count">{category.count} articles</p>
                  )}
                </div>

                <div className="category-hover">
                  <span>Découvrir →</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
