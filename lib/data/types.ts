/* ─── Lipacam E-Commerce Data Types ─────────────────────── */

export type Universe = 'librairie' | 'papeterie'
export type Badge = 'nouveau' | 'promo' | 'populaire' | 'essentiel' | 'bestseller' | 'solde'
export type SchoolLevel = 'maternelle' | 'primaire' | 'college' | 'lycee'
export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock'

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  universe: Universe
  icon: string
  color: string
  parent?: string
  count: number
  featured: boolean
}

export interface Product {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  price: number
  comparePrice?: number
  currency: 'XAF'
  images: string[]
  category: string
  universe: Universe
  stock: number
  stockStatus: StockStatus
  badge?: Badge
  featured: boolean
  rating: number
  reviewCount: number
  sku: string
  brand?: string
  tags: string[]
  metadata: Record<string, string>
  createdAt: string
}

export interface Book extends Product {
  universe: 'librairie'
  level: SchoolLevel
  subject: string
  publisher: string
  isbn?: string
  edition?: string
  pages?: number
  language: string
  conformProgram: boolean
}

export interface StationeryProduct extends Product {
  universe: 'papeterie'
  dimensions?: string
  weight?: string
  material?: string
  color?: string
  quantity?: number
}
