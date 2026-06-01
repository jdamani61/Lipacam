// Lipacam Design Tokens
export const COLORS = {
  primary: '#0A3A75',      // Bleu profond
  accent: '#F2C94C',        // Jaune or
  white: '#FFFFFF',
  black: '#1A1A1A',

  // Librairie (Hachette style)
  library: {
    darkBlue: '#0E1E3A',
    pearl: '#F5F5F7',
    burgundy: '#7A1E2C',
  },

  // Papeterie (Office Depot style)
  stationery: {
    red: '#D62828',
    steelGray: '#E0E0E0',
    lightBlue: '#2D9CDB',
  }
}

export const TYPOGRAPHY = {
  library: {
    titles: 'Playfair Display',
    description: 'Elegant, editorial, premium - for H1/H2 and premium sections'
  },
  stationery: {
    titles: 'Montserrat',
    description: 'Modern, geometric, readable - for categories and promotions'
  },
  body: {
    font: 'Inter',
    description: 'Optimal readability - for paragraphs and product descriptions'
  }
}

export const UNIVERSES = {
  LIBRARY: 'librairie',
  STATIONERY: 'papeterie'
}

export const LIBRARY_LEVELS = ['maternelle', 'primaire', 'college', 'lycee']
export const LIBRARY_SUBJECTS = ['mathematiques', 'francais', 'svt', 'physique', 'histoire-geo', 'anglais', 'philosophie', 'informatique']

export const STATIONERY_CATEGORIES = [
  'fournitures-scolaires',
  'materiel-bureau',
  'archivage-classeurs',
  'machines-equipements',
  'accessoires-informatiques',
  'arts-creativite'
]
