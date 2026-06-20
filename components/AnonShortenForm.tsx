"use client";

import { useState } from "react";
import { Copy, CheckCircle, Link as LinkIcon, Loader2 } from "lucide-react";

export function AnonShortenForm() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <div className="rounded-2xl p-4 sm:p-5 bg-[#0f1629] border border-white/6">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-3 text-white/25">
          Paste your URL
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="flex-1 relative">
            <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleShorten()}
              placeholder="https://example.com/very/long/url/path"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 bg-white/5 border border-white/6 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
          </div>
          <button
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Shortening…
              </>
            ) : (
              "Shorten URL"
            )}
          </button>
        </div>
        <p className="text-xs mt-3 text-white/25">
          No account needed.{" "}
          <a
            href="/signup"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Sign up free
          </a>{" "}
          to get custom aliases & analytics.
        </p>
      </div>

      {result && (
        <div className="rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#0f1629] border border-indigo-500/30">
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <code className="text-base font-bold font-mono text-indigo-400 break-all">
              {result}
            </code>
          </div>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all border shrink-0 ${
              copied
                ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/25"
                : "bg-white/5 text-white/70 border-white/6 hover:bg-white/10"
            }`}
          >
            {copied ? (
              <>
                <CheckCircle className="w-3.5 h-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy link
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
