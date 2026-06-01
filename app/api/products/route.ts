import { NextRequest, NextResponse } from 'next/server'
import { getProducts } from '@lib/data'
import type { Universe, SchoolLevel } from '@lib/data/types'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const universe  = searchParams.get('universe') as Universe | null
  const category  = searchParams.get('category') ?? undefined
  const level     = searchParams.get('level') as SchoolLevel | null
  const badge     = searchParams.get('badge') ?? undefined
  const q         = searchParams.get('q') ?? undefined
  const featured  = searchParams.get('featured') === 'true' ? true : undefined
  const limitRaw  = searchParams.get('limit')
  const limit     = limitRaw ? parseInt(limitRaw, 10) : undefined

  const products = getProducts({
    universe:  universe ?? undefined,
    category,
    level:     level ?? undefined,
    badge,
    q,
    featured,
    limit,
  })

  return NextResponse.json({
    data: products,
    meta: {
      total: products.length,
      filters: { universe, category, level, badge, q, featured },
    },
  })
}
