"use client";

import { useState } from "react";
import {
  Copy,
  CheckCircle,
  Link as LinkIcon,
  QrCode,
  Loader2,
} from "lucide-react";

export function ShortenForm() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState(false);
  const [shortened, setShortened] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url.trim()) return;
    setLoading(true);
    // TODO: POST /api/links { url }
    await new Promise((r) => setTimeout(r, 700));
    setShortened("snap.link/" + Math.random().toString(36).substring(2, 8));
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortened);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-4">
      {/* Input card */}
      <div className="bg-[#0f1629] border border-white/8 rounded-2xl p-4 sm:p-5 shadow-xl shadow-black/20">
        <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wider">
          Paste your URL
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="flex-1 relative">
            <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleShorten()}
              placeholder="https://example.com/very/long/url/path"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
            />
          </div>
          <button
            onClick={handleShorten}
            disabled={loading || !url.trim()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl font-semibold text-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/20 whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Shortening…
              </>
            ) : (
              "Shorten URL"
            )}
          </button>
        </div>

        <label className="flex items-center gap-2.5 mt-3.5 cursor-pointer group w-fit">
          <div
            onClick={() => setQrCode(!qrCode)}
            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${qrCode ? "bg-indigo-500 border-indigo-500" : "border-white/20 bg-white/5"}`}
          >
            {qrCode && <CheckCircle className="w-3 h-3 text-white" />}
          </div>
          <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors flex items-center gap-1.5">
            <QrCode className="w-3.5 h-3.5" /> Generate QR code
          </span>
        </label>
      </div>

      {/* Result card */}
      {shortened && (
        <div className="bg-[#0f1629] border border-indigo-500/25 rounded-2xl p-4 sm:p-5 shadow-xl shadow-indigo-500/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
              Your short link is ready
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <code className="flex-1 text-base sm:text-lg font-mono font-bold text-indigo-400 break-all">
              {shortened}
            </code>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                copied
                  ? "bg-green-500/15 text-green-400 border border-green-500/25"
                  : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy link
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
