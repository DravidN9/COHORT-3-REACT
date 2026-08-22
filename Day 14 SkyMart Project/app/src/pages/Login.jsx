import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Zap, AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const stats = [
  { value: "20K+", label: "Products" },
  { value: "50K+", label: "Users" },
  { value: "4.9★", label: "Rating" },
];

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    // small delay so the button's loading state is visible
    setTimeout(() => {
      const result = login(email, password);
      setSubmitting(false);
      if (!result.success) {
        setError(result.error);
        return;
      }
      const redirectTo = location.state?.from ?? "/home";
      navigate(redirectTo, { replace: true });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col lg:flex-row">
      {/* Left: brand / marketing side */}
      <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-16 py-16 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #c9f31d, transparent 70%)" }}
        />

        <div className="relative flex items-center gap-2.5 mb-16">
          <div className="w-10 h-10 rounded-xl bg-[#c9f31d] flex items-center justify-center">
            <Zap size={20} className="text-black" strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Sky<span className="text-[#c9f31d]">Mart</span>
          </span>
        </div>

        <div className="relative max-w-lg">
          <p className="text-[#c9f31d] font-semibold text-sm tracking-widest mb-4">WELCOME BACK</p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
            Shop the future.
            <br />
            <span className="text-[#c9f31d]">Today.</span>
          </h1>
          <p className="text-neutral-400 text-lg mt-6 max-w-md">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="card px-4 py-5 text-center">
                <p className="text-[#c9f31d] font-bold text-2xl">{s.value}</p>
                <p className="text-neutral-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs text-neutral-500 card inline-block px-4 py-3">
            Demo account — <span className="text-neutral-300">demo@skymart.com</span> /{" "}
            <span className="text-neutral-300">demo1234</span>
          </div>
        </div>
      </div>

      {/* Right: form side */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 lg:border-l border-[#1c1c1c]">
        <div className="w-full max-w-md card p-8 sm:p-10">
          <h2 className="text-3xl font-bold">Sign in</h2>
          <p className="text-neutral-400 text-sm mt-2">Enter your credentials to continue</p>

          {error && (
            <div className="mt-5 flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3">
              <AlertCircle size={16} className="shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="relative">
              <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="email"
                placeholder="Email address"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <Lock size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field pr-11"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            <button type="submit" disabled={submitting} className="btn-lime mt-2 disabled:opacity-60">
              {submitting ? "Signing in..." : "Sign in"}
              {!submitting && <ArrowRight size={17} />}
            </button>
          </form>

          <p className="text-center text-sm text-neutral-400 mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#c9f31d] font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
