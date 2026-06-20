"use client";

import { useState } from "react";
import {
  Copy,
  CheckCircle,
  ExternalLink,
  QrCode,
  Trash2,
  ArrowLeft,
  BarChart2,
  MousePointerClick,
  Globe,
  Clock,
  Edit2,
} from "lucide-react";
import Link from "next/link";

const weeklyClicks = [
  { day: "Mon", clicks: 18 },
  { day: "Tue", clicks: 32 },
  { day: "Wed", clicks: 24 },
  { day: "Thu", clicks: 41 },
  { day: "Fri", clicks: 15 },
  { day: "Sat", clicks: 8 },
  { day: "Sun", clicks: 4 },
];

const recentClicks = [
  { location: "Dhaka, BD 🇧🇩", referrer: "Direct", time: "2 min ago" },
  { location: "New York, US 🇺🇸", referrer: "Twitter", time: "14 min ago" },
  { location: "Mumbai, IN 🇮🇳", referrer: "WhatsApp", time: "1 hour ago" },
  { location: "London, UK 🇬🇧", referrer: "GitHub", time: "3 hours ago" },
  { location: "Dhaka, BD 🇧🇩", referrer: "Direct", time: "5 hours ago" },
];

const maxClicks = Math.max(...weeklyClicks.map((d) => d.clicks));

export default function LinkDetailPage() {
  const [copied, setCopied] = useState(false);
  const [editingAlias, setEditingAlias] = useState(false);
  const [alias, setAlias] = useState("abc123");

  const shortUrl = `snap.link/${alias}`;
  const originalUrl = "https://github.com/mdyhakash/snaplink";
  const totalClicks = weeklyClicks.reduce((s, d) => s + d.clicks, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back + header */}
      <div>
        <Link
          href="/dashboard/links"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to links
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 font-bold shrink-0">
              G
            </div>
            <div>
              {editingAlias ? (
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm text-slate-500 font-mono">
                    snap.link/
                  </span>
                  <input
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    onBlur={() => setEditingAlias(false)}
                    autoFocus
                    className="text-sm font-bold text-indigo-400 font-mono bg-transparent border-b border-indigo-500/50 focus:outline-none w-24"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 mb-0.5">
                  <code className="text-base font-bold text-indigo-400 font-mono">
                    {shortUrl}
                  </code>
                  <button
                    onClick={() => setEditingAlias(true)}
                    className="text-slate-600 hover:text-slate-300 transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              <a
                href={originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 truncate max-w-xs"
              >
                {originalUrl} <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <p className="text-[11px] text-slate-600 mt-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Created 2 hours ago
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all ${copied ? "bg-green-500/15 text-green-400 border-green-500/20" : "bg-white/5 text-slate-400 border-white/8 hover:text-white hover:bg-white/10"}`}
            >
              {copied ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white/5 text-slate-400 border border-white/8 hover:text-white hover:bg-white/10 transition-all">
              <QrCode className="w-3.5 h-3.5" /> QR Code
            </button>
            <button className="p-2 rounded-xl text-slate-600 hover:text-red-400 hover:bg-red-500/10 border border-white/8 transition-all">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: "Total clicks",
            value: "142",
            icon: MousePointerClick,
            color: "text-indigo-400",
            bg: "bg-indigo-500/10",
          },
          {
            label: "This week",
            value: String(totalClicks),
            icon: BarChart2,
            color: "text-violet-400",
            bg: "bg-violet-500/10",
          },
          {
            label: "Countries",
            value: "4",
            icon: Globe,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-[#0f1629] border border-white/6 rounded-2xl p-4"
          >
            <div
              className={`w-7 h-7 rounded-lg ${s.bg} flex items-center justify-center mb-2`}
            >
              <s.icon className={`w-3.5 h-3.5 ${s.color}`} />
            </div>
            <p className="text-xl font-bold text-white">{s.value}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5 sm:p-6">
        <h2 className="text-sm font-semibold text-white mb-5">
          Clicks this week
        </h2>
        <div className="flex items-end gap-2 sm:gap-3 h-28">
          {weeklyClicks.map((d) => {
            const h = Math.round((d.clicks / maxClicks) * 100);
            return (
              <div
                key={d.day}
                className="flex-1 flex flex-col items-center gap-2 group"
              >
                <span className="text-[10px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {d.clicks}
                </span>
                <div
                  className="w-full flex items-end"
                  style={{ height: "72px" }}
                >
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-indigo-400 hover:from-violet-600 hover:to-violet-400 transition-all duration-300 cursor-pointer"
                    style={{ height: `${h}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-600">{d.day}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent clicks */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5 sm:p-6">
        <h2 className="text-sm font-semibold text-white mb-4">Recent clicks</h2>
        <div className="space-y-0">
          {recentClicks.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <div>
                  <p className="text-xs text-white">{c.location}</p>
                  <p className="text-[11px] text-slate-600">via {c.referrer}</p>
                </div>
              </div>
              <span className="text-[11px] text-slate-600">{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
