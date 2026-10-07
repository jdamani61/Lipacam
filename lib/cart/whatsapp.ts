export interface OrderLine {
  title: string
  sku: string
  unitPrice: number
  quantity: number
}

export interface Customer {
  name?: string
  city?: string
  note?: string
}

const fcfa = (n: number) => `${n.toLocaleString('fr-CM')} FCFA`

/** Keeps digits only; a valid international number has 8 to 15 digits. */
export function normalizeWhatsAppNumber(raw: string | undefined): string | null {
  const digits = (raw ?? '').replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 15 ? digits : null
}

export function buildOrderMessage(lines: OrderLine[], customer: Customer = {}): string {
  const total = lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0)
  const out = ['Bonjour Lipacam, je souhaite passer la commande suivante :', '']

  lines.forEach((l, i) => {
    out.push(`${i + 1}. ${l.title} (réf. ${l.sku})`)
    out.push(`   ${l.quantity} x ${fcfa(l.unitPrice)} = ${fcfa(l.unitPrice * l.quantity)}`)
  })

  out.push('', `Total : ${fcfa(total)}`)

  const name = customer.name?.trim()
  const city = customer.city?.trim()
  const note = customer.note?.trim()
  if (name || city || note) out.push('')
  if (name) out.push(`Nom : ${name}`)
  if (city) out.push(`Ville de livraison : ${city}`)
  if (note) out.push(`Remarque : ${note}`)

  return out.join('\n')
}

export function buildWhatsAppUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
