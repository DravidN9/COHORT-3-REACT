import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ size = "md" }) {
  const sizes = {
    sm: { box: "w-7 h-7", icon: 14, text: "text-lg" },
    md: { box: "w-9 h-9", icon: 18, text: "text-xl" },
    lg: { box: "w-11 h-11", icon: 22, text: "text-2xl" },
  };
  const s = sizes[size];

  return (
    <Link to="/home" className="flex items-center gap-2.5 select-none">
      <div className={`${s.box} rounded-xl bg-[#c9f31d] flex items-center justify-center shrink-0`}>
        <Zap size={s.icon} className="text-black fill-black" strokeWidth={2.5} />
      </div>
      <span className={`${s.text} font-bold tracking-tight`}>
        Sky<span className="text-[#c9f31d]">Mart</span>
      </span>
    </Link>
  );
}
