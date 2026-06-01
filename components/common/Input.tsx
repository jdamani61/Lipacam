import React from 'react'
import styles from '@styles/components/input.module.css'

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search'
  placeholder?: string
  label?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  [key: string]: any
}

export default function Input({
  type = 'text',
  placeholder = '',
  label = '',
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`input ${className}`}
        {...props}
      />
    </div>
  )
}

export function InputGroup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`input-group ${className}`}>{children}</div>
}
