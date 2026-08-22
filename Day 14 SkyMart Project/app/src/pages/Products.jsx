import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, ChevronDown, AlertTriangle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import ProductCard from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/Loaders";
import { fetchProducts, fetchCategories, fetchProductsByCategory, searchProducts } from "../api/products";

const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Top Rated"];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All Categories";
  const initialQuery = searchParams.get("q") || "";

  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("Featured");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // load categories once
  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  // debounced fetch whenever query/category changes
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");

    const timer = setTimeout(() => {
      const run = async () => {
        try {
          let list;
          if (query.trim()) {
            list = await searchProducts(query.trim());
            if (category !== "All Categories") {
              list = list.filter((p) => p.category === category);
            }
          } else if (category !== "All Categories") {
            list = await fetchProductsByCategory(category);
          } else {
            list = await fetchProducts({ limit: 60 });
          }
          if (!cancelled) setProducts(list);
        } catch (err) {
          if (!cancelled) setError(err.message || "Something went wrong loading products.");
        } finally {
          if (!cancelled) setLoading(false);
        }
      };
      run();
    }, 350);

    // keep URL in sync
    const params = {};
    if (query.trim()) params.q = query.trim();
    if (category !== "All Categories") params.category = category;
    setSearchParams(params, { replace: true });

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category]);

  const sorted = useMemo(() => {
    const list = [...products];
    if (sort === "Price: Low to High") list.sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") list.sort((a, b) => b.price - a.price);
    if (sort === "Top Rated") list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    return list;
  }, [products, sort]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold">All Products</h1>
        <p className="text-neutral-400 mt-2">
          {loading ? "Loading products…" : `${sorted.length} products found`}
        </p>

        <div className="flex flex-col md:flex-row gap-3 mt-6">
          <div className="relative flex-1">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="input-field"
            />
          </div>

          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none bg-[#161616] border border-[#2a2a2a] rounded-xl pl-4 pr-9 py-3.5 text-sm outline-none focus:border-[#c9f31d]/60 cursor-pointer w-full md:w-56 capitalize"
            >
              <option>All Categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug} className="capitalize">
                  {c.name}
                </option>
              ))}
            </select>
            <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-[#161616] border border-[#2a2a2a] rounded-xl pl-4 pr-9 py-3.5 text-sm outline-none focus:border-[#c9f31d]/60 cursor-pointer w-full md:w-48"
            >
              {sortOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mt-6">
            <AlertTriangle size={16} className="shrink-0" />
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-8">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : sorted.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {!loading && !error && sorted.length === 0 && (
          <p className="text-center text-neutral-500 py-20">No products match your search.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
