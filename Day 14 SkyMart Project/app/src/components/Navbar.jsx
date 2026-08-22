import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, LogOut } from "lucide-react";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/home", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/about", label: "About" },
];

export default function Navbar({ onCartClick }) {
  const { user, logout } = useAuth();
  const { count } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? "text-[#c9f31d]" : "text-neutral-300 hover:text-white transition-colors"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-[#c9f31d] text-black rounded-full pl-1 pr-3.5 py-1 font-semibold text-sm">
            <span className="w-6 h-6 rounded-full bg-black text-[#c9f31d] flex items-center justify-center text-xs font-bold">
              {(user?.name ?? "?").charAt(0).toUpperCase()}
            </span>
            {user?.name}
          </div>

          <button
            onClick={onCartClick}
            className="relative w-10 h-10 rounded-xl border border-[#2a2a2a] flex items-center justify-center hover:border-[#c9f31d]/50 hover:text-[#c9f31d] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart size={18} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#c9f31d] text-black text-[10px] font-bold w-4.5 h-4.5 min-w-[18px] rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={handleLogout}
            className="w-10 h-10 rounded-xl border border-[#2a2a2a] flex items-center justify-center hover:border-red-400/50 hover:text-red-400 transition-colors"
            aria-label="Log out"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
