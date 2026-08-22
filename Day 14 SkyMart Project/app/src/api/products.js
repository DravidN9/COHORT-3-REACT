const BASE_URL = "https://dummyjson.com";

function toTitle(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function handle(res, fallbackMsg) {
  if (!res.ok) throw new Error(fallbackMsg || `Request failed (${res.status})`);
  return res.json();
}

/** Fetch a page of products. */
export async function fetchProducts({ limit = 100, skip = 0 } = {}) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
  const data = await handle(res, "Failed to load products");
  return data.products;
}

/** Fetch the list of categories, normalized to { slug, name }. */
export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  const data = await handle(res, "Failed to load categories");
  return data.map((c) =>
    typeof c === "string"
      ? { slug: c, name: toTitle(c) }
      : { slug: c.slug, name: c.name ?? toTitle(c.slug) }
  );
}

/** Fetch products belonging to a single category slug. */
export async function fetchProductsByCategory(slug) {
  const res = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(slug)}`);
  const data = await handle(res, "Failed to load category products");
  return data.products;
}

/** Full-text product search (server-side). */
export async function searchProducts(query) {
  const res = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
  const data = await handle(res, "Search failed");
  return data.products;
}

/** Fetch a single product by id. */
export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return handle(res, "Failed to load product");
}
