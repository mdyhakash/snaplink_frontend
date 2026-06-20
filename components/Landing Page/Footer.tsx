import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#070b14] py-8 px-5 sm:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm font-semibold text-white/45">Snaplink</span>
        </div>
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} Snaplink. Built for speed.
        </p>
        <div className="flex items-center gap-5">
          {[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Log in", href: "/login" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-xs text-white/35 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
