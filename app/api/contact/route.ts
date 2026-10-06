import { NextRequest, NextResponse } from 'next/server'

const TYPES = ['general', 'business', 'support', 'complaint'] as const
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactPayload {
  name: string
  email: string
  phone?: string
  type: (typeof TYPES)[number]
  subject: string
  message: string
}

function parse(body: unknown): ContactPayload | null {
  if (typeof body !== 'object' || body === null) return null
  const b = body as Record<string, unknown>
  const str = (v: unknown, max: number) =>
    typeof v === 'string' ? v.trim().slice(0, max) : ''

  const payload = {
    name: str(b.name, 120),
    email: str(b.email, 200),
    phone: str(b.phone, 40),
    type: str(b.type, 20) as ContactPayload['type'],
    subject: str(b.subject, 200),
    message: str(b.message, 5000),
  }

  if (!payload.name || !payload.subject || !payload.message) return null
  if (!EMAIL_RE.test(payload.email)) return null
  if (!TYPES.includes(payload.type)) return null
  return payload
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const payload = parse(body)
  if (!payload) {
    return NextResponse.json({ error: 'Veuillez remplir correctement tous les champs obligatoires.' }, { status: 422 })
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('CONTACT_WEBHOOK_URL is not configured; contact message not delivered')
    return NextResponse.json({ error: "Le service de messagerie n'est pas configuré." }, { status: 503 })
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...payload, source: 'lipacam.cm', receivedAt: new Date().toISOString() }),
    })
    if (!res.ok) throw new Error(`webhook responded ${res.status}`)
  } catch (err) {
    console.error('Contact delivery failed', err)
    return NextResponse.json({ error: "L'envoi a échoué. Veuillez réessayer." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
