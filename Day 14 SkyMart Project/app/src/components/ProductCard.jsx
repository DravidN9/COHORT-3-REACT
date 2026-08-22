import { useState } from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const rating = Math.round(product.rating ?? 4);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white text-black rounded-2xl overflow-hidden flex flex-col group">
      <div className="relative aspect-square bg-neutral-100 overflow-hidden">
        <span className="absolute top-3 left-3 z-10 bg-black/85 text-white text-xs font-medium px-2.5 py-1 rounded-full capitalize">
          {product.category?.replace(/-/g, " ")}
        </span>
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <p className="text-xs text-neutral-500 capitalize">{product.category?.replace(/-/g, " ")}</p>
        <h3 className="font-semibold text-sm leading-snug line-clamp-2">{product.title}</h3>
        <div className="flex items-center gap-1 text-xs text-neutral-500">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < rating ? "fill-amber-400" : "fill-neutral-200 text-neutral-200"}
              />
            ))}
          </div>
          <span>({product.stock ?? 0} in stock)</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full transition-colors ${
              added ? "bg-green-500 text-white" : "bg-[#c9f31d] text-black hover:bg-[#a8d016]"
            }`}
          >
            {added ? <Check size={13} /> : <ShoppingCart size={13} />}
            {added ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
