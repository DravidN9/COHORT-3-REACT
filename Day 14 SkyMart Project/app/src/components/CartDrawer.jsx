import { useState } from "react";
import { X, PackageOpen, Minus, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { items, updateQty, removeFromCart, clearCart, total } = useCart();
  const [placed, setPlaced] = useState(false);

  const handleCheckout = () => {
    setPlaced(true);
    setTimeout(() => {
      clearCart();
      setPlaced(false);
      onClose();
    }, 1600);
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0a0a] border-l border-[#1c1c1c] z-50 transform transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1c1c1c] shrink-0">
          <div className="flex items-center gap-2 font-bold text-lg">
            <PackageOpen size={18} className="text-[#c9f31d]" />
            Cart {items.length > 0 && <span className="text-neutral-500 font-normal text-sm">({items.length})</span>}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#161616] transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {placed ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 px-8 text-center">
            <CheckCircle2 size={40} className="text-[#c9f31d]" />
            <p className="font-semibold">Order placed!</p>
            <p className="text-neutral-500 text-sm">Thanks for shopping with SkyMart.</p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-[#232323] flex items-center justify-center">
              <PackageOpen size={26} className="text-neutral-500" />
            </div>
            <div>
              <p className="font-semibold">Cart is empty</p>
              <p className="text-neutral-500 text-sm mt-1">Go shop something cool!</p>
            </div>
            <Link
              to="/products"
              onClick={onClose}
              className="mt-2 bg-[#c9f31d] text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-[#d7ff3a] transition-colors"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover bg-white shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-2">{item.title}</p>
                    <p className="text-[#c9f31d] text-sm font-semibold mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 rounded-md border border-[#2a2a2a] flex items-center justify-center hover:border-neutral-500"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 rounded-md border border-[#2a2a2a] flex items-center justify-center hover:border-neutral-500"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-neutral-500 hover:text-red-400"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1c1c1c] px-6 py-5 shrink-0">
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-neutral-400">Subtotal</span>
                <span className="font-bold text-lg">${total.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="btn-lime">
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
