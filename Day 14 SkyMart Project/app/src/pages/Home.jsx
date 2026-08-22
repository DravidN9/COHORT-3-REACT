import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Package,
  TrendingUp,
  Star,
  Tag,
  Truck,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatCard from "../components/StatCard";
import CartDrawer from "../components/CartDrawer";
import { CategorySkeleton } from "../components/Loaders";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { fetchProducts, fetchCategories } from "../api/products";

export default function HomePage() {
  const { user } = useAuth();
  const { count, total } = useCart();

  const [cartOpen, setCartOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    Promise.all([fetchCategories(), fetchProducts({ limit: 100 })])
      .then(([cats, products]) => {
        if (cancelled) return;
        setCategories(cats.slice(0, 6));

        const byRating = [...products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 5);
        const newest = [...products].sort((a, b) => b.id - a.id).slice(0, 5);

        setTopRated(byRating);
        setNewArrivals(newest);
      })
      .catch(() => {
        if (!cancelled) {
          setCategories([]);
          setTopRated([]);
          setNewArrivals([]);
        }
      })
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, []);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "GOOD MORNING" : hour < 18 ? "GOOD AFTERNOON" : "GOOD EVENING";
  const firstName = user?.name?.split(" ")[0] ?? "there";

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* hero panel */}
        <div className="card p-8 sm:p-10 flex flex-col lg:flex-row justify-between gap-8 bg-[radial-gradient(circle_at_top_left,rgba(201,243,29,0.05),transparent_60%)]">
          <div className="max-w-xl">
            <p className="text-amber-400 text-sm font-medium flex items-center gap-2">
              {greeting} <span>👋</span>
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-3 leading-tight">
              Welcome back, <br />
              <span className="text-[#c9f31d]">{firstName}!</span>
            </h1>
            <p className="text-neutral-400 mt-4">
              Discover today's picks — hand-curated products across electronics, fashion, and more.
            </p>
            <div className="flex items-center gap-3 mt-7">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#c9f31d] text-black font-semibold rounded-full px-5 py-3 text-sm hover:bg-[#d7ff3a] transition-colors"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-[#2a2a2a] rounded-full px-5 py-3 text-sm hover:border-neutral-500 transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-4 shrink-0">
            <div className="card border-[#3a4a1a] bg-[#1a2005] px-6 py-5 text-center min-w-[150px]">
              <p className="text-[#c9f31d] font-bold text-2xl">100+</p>
              <p className="text-neutral-300 text-xs mt-1">Products Available</p>
            </div>
            <div className="card px-6 py-5 text-center min-w-[150px]">
              <p className="font-bold text-2xl">Free</p>
              <p className="text-neutral-400 text-xs mt-1">Delivery on $50+</p>
            </div>
          </div>
        </div>

        {/* quick stats — driven by real cart state */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <StatCard icon={Package} iconBg="#1a2005" iconColor="#c9f31d" value={count} label="Cart Items" sub="In your bag" />
          <StatCard icon={TrendingUp} iconBg="#0d1b2a" iconColor="#3b82f6" value={`$${total.toFixed(2)}`} label="Cart Value" sub="Ready to checkout" />
          <StatCard icon={Star} iconBg="#2a1a05" iconColor="#f59e0b" value={topRated.length} label="Top Products" sub="Highly rated" />
          <StatCard icon={Tag} iconBg="#1a0d2a" iconColor="#a855f7" value={categories.length} label="Categories" sub="To explore" />
        </div>

        {/* categories */}
        <div className="flex items-center justify-between mt-10 mb-4">
          <h2 className="text-xl font-bold">Shop by Category</h2>
          <Link to="/products" className="text-[#c9f31d] text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <CategorySkeleton key={i} />)
            : categories.map((cat) => (
                <Link
                  to={`/products?category=${encodeURIComponent(cat.slug)}`}
                  key={cat.slug}
                  className="bg-white text-black rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:-translate-y-0.5 transition-transform"
                >
                  <Tag size={20} />
                  <span className="font-semibold text-sm capitalize">{cat.name}</span>
                </Link>
              ))}
        </div>

        {/* top rated / new arrivals */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <ProductMiniList title="Top Rated" icon={Star} iconColor="#f59e0b" items={topRated} loading={loading} />
          <ProductMiniList title="New Arrivals" icon={Package} iconColor="#c9f31d" items={newArrivals} loading={loading} />
        </div>

        {/* trust badges */}
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          <TrustBadge icon={Truck} title="Fast Delivery" sub="Same-day on select items" />
          <TrustBadge icon={ShieldCheck} title="Secure Payments" sub="100% encrypted checkout" />
          <TrustBadge icon={BadgeDollarSign} title="Best Prices" sub="Price-match guarantee" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProductMiniList({ title, icon: Icon, iconColor, items, loading }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 font-semibold">
          <Icon size={16} style={{ color: iconColor }} />
          {title}
        </div>
        <Link to="/products" className="text-[#c9f31d] text-xs font-medium hover:underline">
          See all
        </Link>
      </div>
      <div className="flex flex-col divide-y divide-[#1c1c1c]">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 animate-pulse">
                <div className="w-9 h-9 rounded-lg bg-[#232323] shrink-0" />
                <div className="h-3 flex-1 bg-[#232323] rounded" />
                <div className="h-3 w-12 bg-[#232323] rounded" />
              </div>
            ))
          : items.map((p) => (
              <div key={p.id} className="flex items-center gap-3 py-2.5">
                <img src={p.thumbnail} alt={p.title} className="w-9 h-9 rounded-lg object-cover bg-white shrink-0" />
                <span className="text-sm flex-1 truncate">{p.title}</span>
                <span className="text-[#c9f31d] text-sm font-semibold whitespace-nowrap">
                  ${p.price.toFixed(2)}
                </span>
              </div>
            ))}
      </div>
    </div>
  );
}

function TrustBadge({ icon: Icon, title, sub }) {
  return (
    <div className="card px-5 py-4 flex items-center gap-3">
      <Icon size={18} className="text-[#c9f31d] shrink-0" />
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-neutral-500">{sub}</p>
      </div>
    </div>
  );
}
