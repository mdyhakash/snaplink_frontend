"use client";

import { BarChart2, TrendingUp, MousePointerClick, Globe, Clock, ArrowUpRight } from "lucide-react";

const weeklyClicks = [
  { day: "Mon", clicks: 45 },
  { day: "Tue", clicks: 82 },
  { day: "Wed", clicks: 61 },
  { day: "Thu", clicks: 120 },
  { day: "Fri", clicks: 95 },
  { day: "Sat", clicks: 48 },
  { day: "Sun", clicks: 33 },
];

const topLinks = [
  { url: "snap.link/abc123", original: "github.com/mdyhakash/snaplink", clicks: 142, change: "+12%" },
  { url: "snap.link/jkl012", original: "tailwindcss.com/docs", clicks: 210, change: "+34%" },
  { url: "snap.link/def456", original: "vercel.com/docs/deploying", clicks: 87, change: "-5%" },
  { url: "snap.link/mno345", original: "typescriptlang.org/docs", clicks: 56, change: "+8%" },
];

const topCountries = [
  { country: "Bangladesh", flag: "🇧🇩", clicks: 410, pct: 72 },
  { country: "United States", flag: "🇺🇸", clicks: 98, pct: 17 },
  { country: "India", flag: "🇮🇳", clicks: 45, pct: 8 },
  { country: "Others", flag: "🌍", clicks: 17, pct: 3 },
];

const topReferrers = [
  { source: "Direct", clicks: 310 },
  { source: "Twitter / X", clicks: 145 },
  { source: "GitHub", clicks: 89 },
  { source: "WhatsApp", clicks: 26 },
];

const maxClicks = Math.max(...weeklyClicks.map((d) => d.clicks));

export default function AnalyticsPage() {
  const totalClicks = weeklyClicks.reduce((s, d) => s + d.clicks, 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white">Analytics</h1>
        <p className="text-sm text-slate-500 mt-0.5">Overview of all your links' performance</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Total Clicks", value: "1,204", icon: MousePointerClick, color: "text-indigo-400", bg: "bg-indigo-500/10", change: "+18%" },
          { label: "This Week",    value: String(totalClicks), icon: BarChart2,        color: "text-violet-400", bg: "bg-violet-500/10",  change: "+12%" },
          { label: "Active Links", value: "4",     icon: TrendingUp,      color: "text-emerald-400", bg: "bg-emerald-500/10", change: "+1" },
          { label: "Countries",    value: "12",    icon: Globe,           color: "text-rose-400",    bg: "bg-rose-500/10",    change: "+3" },
        ].map((s) => (
          <div key={s.label} className="bg-[#0f1629] border border-white/6 rounded-2xl p-4 sm:p-5">
            <div className={`w-8 h-8 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
              <s.icon className={`w-4 h-4 ${s.color}`} />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">{s.value}</p>
            <div className="flex items-center justify-between mt-0.5">
              <p className="text-xs text-slate-500">{s.label}</p>
              <span className="text-[11px] text-emerald-400 font-medium">{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly bar chart */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-sm font-semibold text-white">Clicks this week</h2>
            <p className="text-xs text-slate-500 mt-0.5">{totalClicks} total clicks</p>
          </div>
          <span className="text-xs text-slate-600 bg-white/5 border border-white/8 px-2.5 py-1 rounded-lg">Last 7 days</span>
        </div>
        <div className="flex items-end gap-2 sm:gap-3 h-36">
          {weeklyClicks.map((d) => {
            const heightPct = Math.round((d.clicks / maxClicks) * 100);
            return (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 group">
                <span className="text-[10px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">{d.clicks}</span>
                <div className="w-full rounded-t-lg overflow-hidden flex items-end" style={{ height: "96px" }}>
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-indigo-400 hover:from-violet-600 hover:to-violet-400 transition-all duration-300 cursor-pointer"
                    style={{ height: `${heightPct}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-600">{d.day}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top links */}
        <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5">
          <h2 className="text-sm font-semibold text-white mb-4">Top performing links</h2>
          <div className="space-y-3">
            {topLinks.map((l, i) => (
              <div key={l.url} className="flex items-center gap-3">
                <span className="text-xs text-slate-700 w-4 shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-indigo-400 truncate">{l.url}</p>
                  <p className="text-[11px] text-slate-600 truncate">{l.original}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-semibold text-white">{l.clicks}</p>
                  <p className={`text-[11px] ${l.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{l.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top countries */}
        <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5">
          <h2 className="text-sm font-semibold text-white mb-4">Traffic by country</h2>
          <div className="space-y-3">
            {topCountries.map((c) => (
              <div key={c.country}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span>{c.flag}</span>
                    <span className="text-xs text-slate-300">{c.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{c.clicks}</span>
                    <span className="text-xs text-slate-600 w-8 text-right">{c.pct}%</span>
                  </div>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referrers */}
        <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5 lg:col-span-2">
          <h2 className="text-sm font-semibold text-white mb-4">Top referrers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {topReferrers.map((r) => {
              const pct = Math.round((r.clicks / topReferrers.reduce((s, x) => s + x.clicks, 0)) * 100);
              return (
                <div key={r.source} className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <p className="text-lg font-bold text-white">{r.clicks}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{r.source}</p>
                  <div className="h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
