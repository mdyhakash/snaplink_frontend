"use client";
import { AnonShortenForm } from "../AnonShortenForm";

export function HeroSection() {
  return (
    <section className="bg-[#070b14] relative pt-32 pb-16 px-5 sm:px-8 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-3xl bg-indigo-500/9" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[350px] h-[250px] rounded-full blur-2xl bg-violet-500/7" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border border-indigo-500/30 bg-indigo-500/8 text-indigo-400">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Free for everyone · No account needed
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-extrabold tracking-tight leading-[1.1] mb-5 text-white">
          Short links that{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            actually work
          </span>
        </h1>

        <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto text-white/45">
          Paste a long URL and get a clean, shareable link in seconds. Sign in
          to unlock analytics, QR codes, and full link management.
        </p>

        <AnonShortenForm />
      </div>
    </section>
  );
}
