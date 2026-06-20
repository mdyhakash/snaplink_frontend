"use client";

import { useState } from "react";
import {
  Copy,
  CheckCircle,
  Link as LinkIcon,
  Loader2,
  Edit2,
  X,
  QrCode,
} from "lucide-react";

type AliasStatus = "idle" | "available" | "taken" | "checking";

export function AuthShortenForm() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [editingAlias, setEditingAlias] = useState(false);
  const [aliasStatus, setAliasStatus] = useState<AliasStatus>("idle");
  const [generateQr, setGenerateQr] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const previewAlias = alias || "abc123";
  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-3">
      {/* Main card */}
      <div className="rounded-2xl bg-[#0f1629] border border-white/6 overflow-hidden">
        {/* Long URL */}
        <div className="p-4 sm:p-5">
          <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
            Long URL <span className="text-indigo-400">*</span>
          </label>
          <div className="relative">
            <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/very/long/url/path"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 bg-white/5 border border-white/6 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
          </div>
        </div>

        <div className="h-px bg-white/5 mx-5" />

        {/* Custom alias */}
        <div className="p-4 sm:p-5">
          <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
            Custom alias{" "}
            <span className="normal-case font-normal text-white/30">
              (optional)
            </span>
          </label>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/6">
            <div
              onClick={() => setEditingAlias(true)}
              className="flex-1 flex items-center gap-1 min-w-0"
            >
              <span className="text-white/30 text-sm shrink-0">snap.link/</span>
              {editingAlias ? (
                <input
                  autoFocus
                  value={alias}
                  onBlur={() => setEditingAlias(false)}
                  placeholder="my-alias"
                  className="flex-1 min-w-0 bg-transparent text-sm font-semibold text-indigo-400 focus:outline-none placeholder:text-white/20"
                />
              ) : (
                <span className="text-sm font-semibold text-indigo-400 truncate cursor-pointer hover:opacity-80 transition-opacity">
                  {previewAlias}
                </span>
              )}
            </div>

            {aliasStatus === "available" && (
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/12 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                Available
              </span>
            )}
            {aliasStatus === "taken" && (
              <span className="text-[11px] font-semibold text-red-400 bg-red-500/12 border border-red-500/20 px-2 py-0.5 rounded-full shrink-0">
                Taken
              </span>
            )}
            {aliasStatus === "checking" && (
              <Loader2 className="w-3.5 h-3.5 text-white/30 animate-spin shrink-0" />
            )}

            {editingAlias ? (
              <button
                onMouseDown={() => {
                  setAlias("");
                  setAliasStatus("idle");
                  setEditingAlias(false);
                }}
                className="p-1 rounded-lg text-white/30 hover:text-white/60 transition-colors shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setEditingAlias(true)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-indigo-400 border border-indigo-500/25 hover:bg-indigo-500/10 transition-colors shrink-0"
              >
                <Edit2 className="w-3 h-3" /> Edit
              </button>
            )}
          </div>

          <p className="text-[11px] text-white/25 mt-2 px-0.5">
            3–30 characters, lowercase letters, numbers, and hyphens only
          </p>
        </div>

        <div className="h-px bg-white/5 mx-5" />

        {/* QR toggle */}
        <div className="px-4 sm:px-5 py-4">
          <label className="flex items-center gap-3 cursor-pointer group w-fit">
            <div
              onClick={() => setGenerateQr(!generateQr)}
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 ${
                generateQr
                  ? "bg-indigo-500 border-indigo-500"
                  : "bg-white/5 border-white/15 group-hover:border-white/30"
              }`}
            >
              {generateQr && <CheckCircle className="w-3.5 h-3.5 text-white" />}
            </div>
            <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors flex items-center gap-2">
              <QrCode className="w-4 h-4 text-indigo-400" />
              Generate QR code{" "}
              <span className="text-white/30 text-xs">for this link</span>
            </span>
          </label>
        </div>

        <div className="h-px bg-white/5" />

        {/* Submit */}
        <div className="p-4 sm:p-5">
          <button
            disabled={loading || !url.trim() || aliasStatus === "taken"}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Shortening…
              </>
            ) : (
              "Shorten link"
            )}
          </button>
        </div>
      </div>

      {/* Info note */}
      <div className="rounded-xl p-4 bg-indigo-500/8 border border-indigo-500/20">
        <p className="text-xs text-indigo-300/80 leading-relaxed">
          <span className="font-semibold text-indigo-400">Custom aliases</span>{" "}
          are saved to your account. Choose a memorable alias that reflects your
          content for better brand recognition.
        </p>
      </div>

      {/* Result */}
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
