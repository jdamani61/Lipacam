import { NextRequest, NextResponse } from 'next/server'
import { getCategories, getFeaturedCategories, getRootCategories } from '@lib/data'
import type { Universe } from '@lib/data/types'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const universe = searchParams.get('universe') as Universe | null
  const featured = searchParams.get('featured') === 'true'
  const root     = searchParams.get('root') === 'true'

  let categories = universe
    ? getCategories(universe)
    : getCategories()

  if (featured) categories = categories.filter(c => c.featured)
  if (root)     categories = categories.filter(c => !c.parent)

  return NextResponse.json({
    data: categories,
    meta: { total: categories.length },
  })
}
