# 🏪 Lipacam Web Suite

Plateforme e-commerce multi-univers pour **Librairie** (style Hachette) et **Papeterie & Bureau** (style Office Depot).

## 📁 Architecture du Projet

```
lipacam/
├── app/
│   ├── (shared)/              # Layout partagé
│   ├── librairie/             # Univers Librairie (Hachette style)
│   │   ├── books/             # Catalogue de livres
│   │   ├── levels/            # Filtrage par niveau scolaire
│   │   ├── subjects/          # Filtrage par matière
│   │   ├── publishers/        # Pages d'éditeurs
│   │   └── blog/              # Blog & conseils
│   ├── papeterie/             # Univers Papeterie (Office Depot style)
│   │   ├── products/          # Catalogue de produits
│   │   ├── categories/        # Catégories de produits
│   │   └── promotions/        # Promotions & offres
│   └── api/                   # API routes
│       ├── products/          # Gestion produits
│       ├── cart/              # Gestion panier
│       └── auth/              # Authentification
├── components/
│   ├── common/                # Composants partagés (Header, Footer)
│   ├── librairie/             # Composants de l'univers Librairie
│   └── papeterie/             # Composants de l'univers Papeterie
├── lib/
│   ├── db/                    # Modèles & requêtes DB
│   ├── hooks/                 # Hooks React personnalisés
│   └── utils/                 # Fonctions utilitaires
├── styles/                    # Styles globaux & design tokens
└── public/                    # Fichiers statiques (images, etc.)
```

## 🎨 Design System

### Couleurs
- **Primaire:** #0A3A75 (Bleu profond)
- **Accent:** #F2C94C (Jaune or)
- **Librairie:** Bleu nuit, Gris perle, Bordeaux
- **Papeterie:** Rouge dynamique, Gris acier, Bleu clair

### Typographie
- **Librairie:** Playfair Display (titres) + Inter (corps)
- **Papeterie:** Montserrat (titres) + Inter (corps)

### Layout
- Grille 12 colonnes
- Design responsif
- Espaces généreux (Librairie) vs Dense (Papeterie)

## 🚀 Démarrage Rapide

```bash
# Installation
npm install

# Développement
npm run dev

# Build
npm run build

# Production
npm start
```

## 📄 Structure des Pages

### Librairie (Univers Éditorial)
- `/librairie` - Page d'accueil avec catégories
- `/librairie/books` - Catalogue complet
- `/librairie/levels/[level]` - Filtrer par niveau (maternelle, primaire, collège, lycée)
- `/librairie/subjects/[subject]` - Filtrer par matière
- `/librairie/publishers` - Éditeurs partenaires
- `/librairie/blog` - Blog & conseils pédagogiques
- `/librairie/[slug]` - Détail d'un livre

### Papeterie (Univers E-Commerce)
- `/papeterie` - Page d'accueil avec catégories
- `/papeterie/products` - Catalogue complet
- `/papeterie/categories/[category]` - Filtrer par catégorie
- `/papeterie/promotions` - Promotions actives
- `/papeterie/[slug]` - Détail d'un produit

## 🔧 Configuration

Voir `lib/constants.ts` pour les configurations des univers, niveaux scolaires, et catégories.

## 📚 Documentation Supplémentaire

- Charte graphique complète: `C:\WorkSpace\Lipacam_Web\Document\`
- Maquettes détaillées: Voir fichiers .docx dans le dossier documentation
