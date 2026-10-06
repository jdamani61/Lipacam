import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetail from '@components/common/ProductDetail'
import { getProducts, getProductBySlug } from '@lib/data'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getProducts({ universe: 'librairie' }).map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product || product.universe !== 'librairie') return {}
  return {
    title: `${product.title} | Librairie – Lipacam Cameroun`,
    description: product.shortDescription,
  }
}

export default function LibrairieBookPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  if (!product || product.universe !== 'librairie') notFound()

  return (
    <ProductDetail
      product={product}
      basePath="/librairie/books"
      universeLabel="Librairie"
      accent="#0A3A75"
    />
  )
}
