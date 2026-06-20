"use client";

import { useState } from "react";
import {
  Copy,
  CheckCircle,
  ExternalLink,
  QrCode,
  Trash2,
  Search,
  Filter,
  BarChart2,
  Plus,
} from "lucide-react";
import Link from "next/link";

const mockLinks = [
  {
    id: "abc123",
    originalUrl: "https://github.com/mdyhakash/snaplink",
    shortenedUrl: "snap.link/abc123",
    clicks: 142,
    createdAt: "2 hours ago",
    active: true,
  },
  {
    id: "def456",
    originalUrl: "https://vercel.com/docs/deploying",
    shortenedUrl: "snap.link/def456",
    clicks: 87,
    createdAt: "Yesterday",
    active: true,
  },
  {
    id: "ghi789",
    originalUrl:
      "https://nextjs.org/docs/app/building-your-application/routing",
    shortenedUrl: "snap.link/ghi789",
    clicks: 34,
    createdAt: "3 days ago",
    active: true,
  },
  {
    id: "jkl012",
    originalUrl: "https://tailwindcss.com/docs/installation",
    shortenedUrl: "snap.link/jkl012",
    clicks: 210,
    createdAt: "1 week ago",
    active: false,
  },
  {
    id: "mno345",
    originalUrl: "https://www.typescriptlang.org/docs/handbook/intro.html",
    shortenedUrl: "snap.link/mno345",
    clicks: 56,
    createdAt: "2 weeks ago",
    active: true,
  },
  {
    id: "mno345",
    originalUrl: "https://www.typescriptlang.org/docs/handbook/intro.html",
    shortenedUrl: "snap.link/mno345",
    clicks: 56,
    createdAt: "2 weeks ago",
    active: true,
  },
  {
    id: "mno345",
    originalUrl: "https://www.typescriptlang.org/docs/handbook/intro.html",
    shortenedUrl: "snap.link/mno345",
    clicks: 56,
    createdAt: "2 weeks ago",
    active: true,
  },
  {
    id: "mno345",
    originalUrl: "https://www.typescriptlang.org/docs/handbook/intro.html",
    shortenedUrl: "snap.link/mno345",
    clicks: 56,
    createdAt: "2 weeks ago",
    active: true,
  },
];

function LinkRow({ link }: { link: (typeof mockLinks)[0] }) {
  const [copied, setCopied] = useState(false);

  const domain = (() => {
    try {
      return new URL(link.originalUrl).hostname;
    } catch {
      return link.originalUrl;
    }
  })();

  return (
    <div className="group bg-[#0f1629] border border-white/6 rounded-2xl p-4 sm:p-5 hover:border-indigo-500/25 transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Favicon + URLs */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-slate-400">
              {domain.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <Link href={`/dashboard/links/${link.id}`}>
                <code className="text-sm font-bold text-indigo-400 font-mono hover:text-indigo-300 transition-colors">
                  {link.shortenedUrl}
                </code>
              </Link>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${link.active ? "bg-emerald-500/15 text-emerald-400" : "bg-slate-500/15 text-slate-500"}`}
              >
                {link.active ? "Active" : "Inactive"}
              </span>
            </div>
            <p className="text-xs text-slate-500 truncate">
              {link.originalUrl}
            </p>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="flex items-center gap-1 text-[11px] text-slate-600">
                <BarChart2 className="w-3 h-3" />
                {link.clicks} clicks
              </span>
              <span className="text-[11px] text-slate-700">·</span>
              <span className="text-[11px] text-slate-600">
                {link.createdAt}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              navigator.clipboard.writeText(link.shortenedUrl);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${copied ? "bg-green-500/15 text-green-400 border-green-500/20" : "bg-white/5 text-slate-400 border-white/8 hover:text-white hover:bg-white/10"}`}
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
          <Link
            href={`/dashboard/links/${link.id}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-400 border border-white/8 hover:text-white hover:bg-white/10 transition-all"
          >
            <BarChart2 className="w-3.5 h-3.5" />
            Stats
          </Link>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-400 border border-white/8 hover:text-white hover:bg-white/10 transition-all">
            <QrCode className="w-3.5 h-3.5" />
            QR
          </button>
          <a
            href={link.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-white/5 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button className="p-1.5 rounded-lg text-slate-600 hover:text-red-400 hover:bg-red-500/10 transition-all">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LinksPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const filtered = mockLinks.filter((l) => {
    const matchSearch =
      l.originalUrl.includes(search) || l.shortenedUrl.includes(search);
    const matchFilter =
      filter === "all" || (filter === "active" ? l.active : !l.active);
    return matchSearch && matchFilter;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white">My Links</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            {mockLinks.length} links total
          </p>
        </div>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> New link
        </Link>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search links…"
            className="w-full pl-10 pr-4 py-2.5 bg-[#0f1629] border border-white/8 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 bg-[#0f1629] border border-white/8 rounded-xl p-1">
          {(["all", "active", "inactive"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${filter === f ? "bg-indigo-500/20 text-indigo-300" : "text-slate-500 hover:text-slate-300"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Links list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-[#0f1629] border border-white/6 rounded-2xl">
            <Filter className="w-8 h-8 text-slate-700 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">No links found</p>
          </div>
        ) : (
          filtered.map((link) => <LinkRow key={link.id} link={link} />)
        )}
      </div>
    </div>
  );
}
