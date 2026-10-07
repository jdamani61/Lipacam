'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getProductBySlug } from '@lib/data'
import type { Product } from '@lib/data/types'

const STORAGE_KEY = 'lipacam-cart-v1'
const MAX_QTY = 99

interface StoredItem {
  slug: string
  quantity: number
}

export interface CartLine {
  product: Product
  quantity: number
}

interface CartContextValue {
  lines: CartLine[]
  itemCount: number
  total: number
  ready: boolean
  addItem: (slug: string, quantity?: number) => void
  setQuantity: (slug: string, quantity: number) => void
  removeItem: (slug: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

function readStorage(): StoredItem[] {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]')
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (i): i is StoredItem =>
        typeof i?.slug === 'string' && Number.isInteger(i?.quantity) && i.quantity > 0
    )
  } catch {
    return []
  }
}

const clampQty = (q: number) => Math.min(MAX_QTY, Math.max(0, Math.floor(q)))

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<StoredItem[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setItems(readStorage())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable: the cart simply stays in memory */
    }
  }, [items, ready])

  const addItem = useCallback((slug: string, quantity = 1) => {
    const product = getProductBySlug(slug)
    if (!product || product.stockStatus === 'out_of_stock') return
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug)
      if (existing) {
        return prev.map((i) => (i.slug === slug ? { ...i, quantity: clampQty(i.quantity + quantity) } : i))
      }
      return [...prev, { slug, quantity: clampQty(quantity) }]
    })
  }, [])

  const setQuantity = useCallback((slug: string, quantity: number) => {
    const q = clampQty(quantity)
    setItems((prev) =>
      q === 0 ? prev.filter((i) => i.slug !== slug) : prev.map((i) => (i.slug === slug ? { ...i, quantity: q } : i))
    )
  }, [])

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo<CartContextValue>(() => {
    // Prices always come from the catalogue, never from storage.
    const lines = items.flatMap((i) => {
      const product = getProductBySlug(i.slug)
      return product ? [{ product, quantity: i.quantity }] : []
    })
    return {
      lines,
      itemCount: lines.reduce((n, l) => n + l.quantity, 0),
      total: lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0),
      ready,
      addItem,
      setQuantity,
      removeItem,
      clear,
    }
  }, [items, ready, addItem, setQuantity, removeItem, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
