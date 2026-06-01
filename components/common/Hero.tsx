import React from 'react'
import Button from './Button'

interface HeroProps {
  title: string
  subtitle: string
  cta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  backgroundImage?: string
  universe?: 'librairie' | 'papeterie'
}

export default function Hero({
  title,
  subtitle,
  cta,
  secondaryCta,
  backgroundImage,
  universe = 'librairie',
}: HeroProps) {
  const heroStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {}

  return (
    <section className={`hero hero-${universe}`} style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>

        <div className="hero-ctas">
          {cta && (
            <Button variant="primary" size="lg">
              {cta.text}
            </Button>
          )}
          {secondaryCta && (
            <Button variant="secondary" size="lg">
              {secondaryCta.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
