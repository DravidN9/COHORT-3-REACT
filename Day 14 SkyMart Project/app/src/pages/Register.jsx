import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import Logo from "../components/Logo";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const strength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;
  const strengthLabel = ["", "Weak", "Medium", "Strong"][strength];
  const strengthColor = ["", "#ef4444", "#f59e0b", "#22c55e"][strength];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      const result = register(name, email, password);
      setSubmitting(false);
      if (!result.success) {
        setError(result.error);
        return;
      }
      navigate("/home", { replace: true });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-16">
      <div className="mb-8">
        <Logo size="lg" />
      </div>

      <div className="w-full max-w-md card p-8 sm:p-10">
        <h2 className="text-3xl font-bold">Create account</h2>
        <p className="text-neutral-400 text-sm mt-2">Join SkyMart and start shopping</p>

        {error && (
          <div className="mt-5 flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3">
            <AlertCircle size={16} className="shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="relative">
            <User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Full name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          <div>
            <div className="relative">
              <Lock size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="input-field pr-11"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
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

            {password.length > 0 && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-1 flex-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-1 flex-1 rounded-full bg-[#232323] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: i < strength ? "100%" : "0%", backgroundColor: strengthColor }}
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-medium" style={{ color: strengthColor }}>
                  {strengthLabel}
                </span>
              </div>
            )}
          </div>

          <div className="relative">
            <Lock size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="password"
              placeholder="Confirm password"
              className="input-field"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={submitting} className="btn-lime mt-2 disabled:opacity-60">
            {submitting ? "Creating account..." : "Create Account"}
            {!submitting && <ArrowRight size={17} />}
          </button>
        </form>

        <p className="text-center text-sm text-neutral-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#c9f31d] font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
