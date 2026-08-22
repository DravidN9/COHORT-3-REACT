import { Link } from "react-router-dom";
import { Zap, Package, Users, Star, Truck, ShieldCheck, Heart, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import { team } from "../data/team";

const stats = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "Every product is verified for quality and authenticity before listing." },
  { icon: Truck, title: "Speed", desc: "We obsess over delivery times so your orders arrive when promised." },
  { icon: Heart, title: "Community", desc: "Built around real customer feedback, not just business metrics." },
  { icon: Sparkles, title: "Quality", desc: "We curate the best — no filler, no junk, just great products." },
];

export default function About() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-5xl mx-auto px-6 py-14 text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#c9f31d] flex items-center justify-center mx-auto">
          <Zap size={26} className="text-black" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mt-6">
          About <span className="text-[#c9f31d]">SkyMart</span>
        </h1>
        <p className="text-neutral-400 max-w-xl mx-auto mt-4">
          SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and
          enjoyable — for everyone.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-left">
          {stats.map((s) => (
            <div key={s.label} className="card px-5 py-6 text-center">
              <s.icon size={18} className="text-[#c9f31d] mx-auto mb-2" />
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-neutral-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="card p-8 mt-8 text-left">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow
            e-commerce experiences. We asked ourselves: what if shopping online was actually{" "}
            <span className="italic text-white">enjoyable</span>?
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed mt-3">
            Three years later, SkyMart serves over 50,000 customers across the country. We stock
            electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a
            second mortgage.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed mt-3">
            We're still the same team at heart: obsessed with speed, transparency, and making you feel
            good about every purchase you make here.
          </p>
        </div>

        <h2 className="text-xl font-bold mt-12 mb-5">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {values.map((v) => (
            <div key={v.title} className="card p-5 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1a2005] flex items-center justify-center shrink-0">
                <v.icon size={18} className="text-[#c9f31d]" />
              </div>
              <div>
                <p className="font-semibold text-sm">{v.title}</p>
                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-12 mb-5">Meet the Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {team.map((m) => (
            <div key={m.name} className="card p-5 text-center">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mx-auto font-bold text-black"
                style={{ backgroundColor: m.color }}
              >
                {m.initial}
              </div>
              <p className="font-semibold text-sm mt-3">{m.name}</p>
              <p className="text-neutral-500 text-xs mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>

        <div className="card p-8 mt-12 text-center">
          <h3 className="text-lg font-bold">Ready to shop?</h3>
          <p className="text-neutral-500 text-sm mt-1">Explore thousands of products at unbeatable prices.</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#c9f31d] text-black font-semibold rounded-full px-5 py-2.5 text-sm mt-4 hover:bg-[#d7ff3a] transition-colors"
          >
            Browse Products <ArrowRight size={15} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
