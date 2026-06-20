"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Mail,
  Lock,
  User,
  Loader2,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "8+ characters", pass: password.length >= 8 },
    { label: "Uppercase letter", pass: /[A-Z]/.test(password) },
    { label: "Number", pass: /[0-9]/.test(password) },
  ];
  if (!password) return null;
  return (
    <div className="flex items-center gap-3 mt-2 flex-wrap">
      {checks.map((c) => (
        <span
          key={c.label}
          className={`flex items-center gap-1 text-[11px] transition-colors ${
            c.pass ? "text-emerald-400" : "text-white/25"
          }`}
        >
          <CheckCircle className="w-3 h-3" />
          {c.label}
        </span>
      ))}
    </div>
  );
}

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center px-5 py-12">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl bg-indigo-500/8" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 shadow-[0_4px_20px_rgba(99,102,241,0.4)]">
              <Zap className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Snaplink
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-1">
            Create your account
          </h1>
          <p className="text-sm text-white/40">
            Free forever. No credit card needed.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-[#0f1629] border border-white/6 overflow-hidden">
          <div className="p-6 space-y-4">
            {/* Error */}
            {error && (
              <div className="rounded-xl px-4 py-3 bg-red-500/10 border border-red-500/20">
                <p className="text-xs text-red-400">{error}</p>
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Md Yahya"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 bg-white/5 border border-white/6 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 bg-white/5 border border-white/6 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 rounded-xl text-sm text-white placeholder:text-white/20 bg-white/5 border border-white/6 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <PasswordStrength password={password} />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 mt-0.5 ${
                  agreed
                    ? "bg-indigo-500 border-indigo-500"
                    : "bg-white/5 border-white/15 group-hover:border-white/30"
                }`}
              >
                {agreed && <CheckCircle className="w-3.5 h-3.5 text-white" />}
              </div>
              <span className="text-xs text-white/40 leading-relaxed">
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating account…
                </>
              ) : (
                "Create free account"
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Footer */}
          <div className="px-6 py-4 text-center">
            <p className="text-xs text-white/30">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
