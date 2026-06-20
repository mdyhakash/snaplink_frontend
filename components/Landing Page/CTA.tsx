import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#070b14] py-20 px-5 sm:px-8 border-t border-white/5">
      <div className="max-w-2xl mx-auto text-center rounded-2xl p-10 sm:p-14 bg-gradient-to-b from-indigo-500/14 to-violet-500/8 border border-indigo-500/25">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-gradient-to-br from-indigo-500 to-violet-600 shadow-[0_8px_32px_rgba(99,102,241,0.3)]">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Start shortening for free
        </h2>
        <p className="text-sm mb-8 max-w-xs mx-auto leading-relaxed text-white/45">
          No credit card. No setup. Just fast, clean short links from day one.
        </p>
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:opacity-90 transition-opacity"
        >
          Create free account <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
