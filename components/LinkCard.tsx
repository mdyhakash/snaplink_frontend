"use client";

import {
  Copy,
  CheckCircle,
  ExternalLink,
  QrCode,
  BarChart2,
} from "lucide-react";
import { useState } from "react";

interface LinkCardProps {
  originalUrl: string;
  shortenedUrl: string;
  clicks?: number;
  createdAt?: string;
}

export function LinkCard({
  originalUrl,
  shortenedUrl,
  clicks = 0,
  createdAt = "Just now",
}: LinkCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const domain = (() => {
    try {
      return new URL(originalUrl).hostname;
    } catch {
      return originalUrl;
    }
  })();

  return (
    <div className="group bg-[#0f1629] border border-white/6 rounded-2xl p-4 sm:p-5 hover:border-indigo-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Left: favicon + URLs */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Favicon placeholder */}
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-sm font-bold text-slate-400">
              {domain.charAt(0).toUpperCase()}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            {/* Short URL */}
            <div className="flex items-center gap-2 mb-1">
              <code className="text-sm font-bold text-indigo-400 font-mono">
                {shortenedUrl}
              </code>
              <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-colors shrink-0" />
            </div>
            {/* Original URL */}
            <p className="text-xs text-slate-500 truncate">{originalUrl}</p>
            {/* Meta */}
            <div className="flex items-center gap-3 mt-2">
              <span className="flex items-center gap-1 text-[11px] text-slate-600">
                <BarChart2 className="w-3 h-3" />
                {clicks} clicks
              </span>
              <span className="text-[11px] text-slate-700">·</span>
              <span className="text-[11px] text-slate-600">{createdAt}</span>
            </div>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              copied
                ? "bg-green-500/15 text-green-400 border border-green-500/20"
                : "bg-white/5 text-slate-400 border border-white/8 hover:text-white hover:bg-white/10"
            }`}
          >
            {copied ? (
              <>
                <CheckCircle className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy
              </>
            )}
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-400 border border-white/8 hover:text-white hover:bg-white/10 transition-all">
            <QrCode className="w-3.5 h-3.5" /> QR
          </button>
        </div>
      </div>
    </div>
  );
}
