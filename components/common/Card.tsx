import React from 'react'

interface CardProps {
  children: React.ReactNode
  variant?: 'library' | 'stationery' | 'default'
  className?: string
}

export default function Card({
  children,
  variant = 'default',
  className = '',
}: CardProps) {
  return (
    <div className={`card card-${variant} ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card-header ${className}`}>{children}</div>
}

export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card-body ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card-footer ${className}`}>{children}</div>
}
