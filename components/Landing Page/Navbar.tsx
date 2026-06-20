"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#070b14]/90 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 shadow-[0_4px_14px_rgba(99,102,241,0.4)] group-hover:opacity-90 transition-opacity">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-white text-sm tracking-tight">
            Snaplink
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-xs font-medium px-3 py-1.5 rounded-lg text-white/50 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="w-px h-4 bg-white/8" />
          <Link
            href="/login"
            className="text-xs font-medium px-3 py-1.5 text-white/50 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-xs font-semibold px-4 py-1.5 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90 transition-opacity"
          >
            Sign up free
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-white/50 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-1 border-t border-white/5 bg-[#0f1629]">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm px-3 py-2.5 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="h-px bg-white/5 my-2" />
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block text-sm px-3 py-2.5 rounded-xl text-white/60 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-center py-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-violet-500"
          >
            Sign up free
          </Link>
        </div>
      )}
    </nav>
  );
}
