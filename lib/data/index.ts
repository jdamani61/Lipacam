import productsData from './products.json'
import categoriesData from './categories.json'
import type { Product, Category, Universe, SchoolLevel } from './types'

export const allProducts = productsData.products as Product[]
export const allCategories = categoriesData.categories as Category[]

/* ── Products ──────────────────────────────────────────────── */

export function getProducts(filters?: {
  universe?: Universe
  category?: string
  level?: SchoolLevel
  badge?: string
  q?: string
  featured?: boolean
  limit?: number
}): Product[] {
  let results = [...allProducts]

  if (filters?.universe)  results = results.filter(p => p.universe === filters.universe)
  if (filters?.category)  results = results.filter(p => p.category === filters.category)
  if (filters?.badge)     results = results.filter(p => p.badge === filters.badge)
  if (filters?.featured)  results = results.filter(p => p.featured === true)
  if (filters?.level)     results = results.filter(p => (p as any).metadata?.level === filters.level)
  if (filters?.q) {
    const q = filters.q.toLowerCase()
    results = results.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    )
  }

  return filters?.limit ? results.slice(0, filters.limit) : results
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug)
}

export function getFeaturedProducts(universe?: Universe, limit = 6): Product[] {
  return getProducts({ universe, featured: true, limit })
}

export function getProductsByCategory(category: string, limit?: number): Product[] {
  return getProducts({ category, limit })
}

/* ── Categories ────────────────────────────────────────────── */

export function getCategories(universe?: Universe): Category[] {
  return universe
    ? allCategories.filter(c => c.universe === universe)
    : allCategories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find(c => c.slug === slug)
}

export function getFeaturedCategories(universe?: Universe): Category[] {
  return getCategories(universe).filter(c => c.featured)
}

export function getRootCategories(universe?: Universe): Category[] {
  return getCategories(universe).filter(c => !c.parent)
}
