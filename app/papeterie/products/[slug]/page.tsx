import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetail from '@components/common/ProductDetail'
import { getProducts, getProductBySlug } from '@lib/data'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getProducts({ universe: 'papeterie' }).map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product || product.universe !== 'papeterie') return {}
  return {
    title: `${product.title} | Papeterie – Lipacam Cameroun`,
    description: product.shortDescription,
  }
}

export default function PapeterieProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  if (!product || product.universe !== 'papeterie') notFound()

  return (
    <ProductDetail
      product={product}
      basePath="/papeterie/products"
      universeLabel="Papeterie & Bureau"
      accent="#D62828"
    />
  )
}
