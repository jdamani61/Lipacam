# Lipacam Routing Architecture

## Site Map

### Home & Shared Pages
- `/` - Landing page with universe selector
- `/about` - About Lipacam (history, values, stores)
- `/contact` - Contact form & store info
- `/faq` - Frequently asked questions
- `/shipping` - Shipping & returns policy

### Librairie Universe (Library/Books)
- `/librairie` - Library homepage with hero, featured, categories
- `/librairie/books` - Complete book catalog with search & filters
- `/librairie/books/[slug]` - Individual book detail page
- `/librairie/levels` - Filter by school level
- `/librairie/levels/[level]` - Books for specific level (maternelle, primaire, college, lycee)
- `/librairie/subjects` - Filter by subject
- `/librairie/subjects/[subject]` - Books for specific subject
- `/librairie/publishers` - Publisher directory & info
- `/librairie/blog` - Articles & educational advice
- `/librairie/blog/[slug]` - Individual blog article

### Papeterie Universe (Stationery/Office)
- `/papeterie` - Stationery homepage with hero, featured, categories
- `/papeterie/products` - Complete product catalog with search & filters
- `/papeterie/products/[slug]` - Individual product detail page
- `/papeterie/categories/[category]` - Products by category
- `/papeterie/promotions` - Current promotions & special offers

### User & Account
- `/account` - User dashboard
- `/account/orders` - Order history
- `/account/profile` - Profile settings
- `/account/wishlist` - Saved items
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/order-confirmation` - Order confirmation page

### Admin & Backend (Future)
- `/admin` - Admin dashboard
- `/api/products` - Product API endpoint
- `/api/cart` - Cart API endpoint
- `/api/orders` - Order API endpoint
- `/api/auth` - Authentication endpoint

## Features Implemented

✅ **Routing Structure**: Complete Next.js 14 App Router with nested layouts
✅ **Dynamic Routes**: `[param]` routes for levels, subjects, categories
✅ **Universe-Aware**: Separate experiences for Librairie & Papeterie
✅ **Responsive**: Mobile-first design throughout
✅ **Search & Filter**: Implemented on product pages

## Next Steps

1. Implement `[slug]` detail pages for books & products
2. Create shopping cart functionality
3. Set up user authentication
4. Connect to database for real product data
5. Implement search & advanced filtering
6. Add wishlist functionality
7. Build admin dashboard
