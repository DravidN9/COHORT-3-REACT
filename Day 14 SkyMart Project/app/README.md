# SkyMart — Full Working E-commerce UI (Vite + React + Tailwind CSS v4)

A fully interactive recreation of the SkyMart app: real auth, a real cart, and
live product/category data pulled from the public **DummyJSON** API.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

**Demo login:** `demo@skymart.com` / `demo1234` — or just register a new account.

## What's actually wired up

- **Auth** — Register/login/logout backed by `localStorage` (`src/context/AuthContext.jsx`).
  Duplicate emails are rejected, wrong credentials show an inline error, sessions
  persist across refresh.
- **Protected routes** — `/home`, `/products`, `/about` redirect to `/login` if
  you're not signed in (`src/routes/ProtectedRoute.jsx`).
- **Live product data** — Products, categories, and search all hit the real
  [DummyJSON](https://dummyjson.com/docs/products) API (`src/api/products.js`).
  No mock arrays.
- **Cart** — Add/remove items, adjust quantity, live subtotal, checkout flow
  with a placed-order confirmation. Persisted per-account in `localStorage`
  (`src/context/CartContext.jsx`).
- **Search / filter / sort** — Products page debounces search input, calls the
  API's search + category endpoints, and syncs `?q=` / `?category=` into the URL
  so links from the homepage category cards deep-link correctly.
- **Loading & error states** — skeleton loaders for products/categories, and
  inline error banners if a fetch fails.

## Routes

| Path         | Access    | Page                                     |
|--------------|-----------|-------------------------------------------|
| `/login`     | public    | Sign in                                    |
| `/register`  | public    | Create account                             |
| `/home`      | protected | Dashboard-style welcome, live categories   |
| `/products`  | protected | Live product grid, search/filter/sort      |
| `/about`     | protected | About / team / values                      |

## Project structure

```
src/
  api/          products.js — DummyJSON fetch helpers (products, categories, search)
  context/      AuthContext.jsx, CartContext.jsx
  routes/       AppRoutes.jsx, ProtectedRoute.jsx
  components/   Navbar, Footer, Logo, CartDrawer, ProductCard, StatCard, Loaders
  pages/        Login, Register, Home, Products, About
  data/         team.js — static team bios for the About page
  index.css     Tailwind import + design tokens
```

## Notes

- Product/category data comes from a free public API (no key required), so it
  will vary slightly from the original SkyMart mockup — that's expected since
  it's real, live data now instead of a static mock.
- Auth is intentionally simple (localStorage) so there's nothing to configure —
  swap `AuthContext` for a real backend (JWT, Firebase, Supabase, etc.) when
  you're ready.
