"use client";
import { AuthShortenForm } from "@/components/AuthShortenForm";
import { LinkCard } from "@/components/LinkCard";
import { BarChart2, Link as LinkIcon, TrendingUp } from "lucide-react";


const recentLinks = [
  {
    originalUrl: "https://github.com/mdyhakash/snaplink",
    shortenedUrl: "snap.link/abc123",
    clicks: 142,
    createdAt: "2 hours ago",
  },
  {
    originalUrl: "https://vercel.com/docs/deploying",
    shortenedUrl: "snap.link/def456",
    clicks: 87,
    createdAt: "Yesterday",
  },
  {
    originalUrl:
      "https://nextjs.org/docs/app/building-your-application/routing",
    shortenedUrl: "snap.link/ghi789",
    clicks: 34,
    createdAt: "3 days ago",
  },
];

const stats = [
  {
    label: "Total Links",
    value: "12",
    icon: LinkIcon,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    label: "Total Clicks",
    value: "1,204",
    icon: BarChart2,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    label: "This Week",
    value: "+38%",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-[#0f1629] border border-white/6 rounded-2xl p-4 sm:p-5"
          >
            <div
              className={`w-8 h-8 rounded-xl ${s.bg} flex items-center justify-center mb-3`}
            >
              <s.icon className={`w-4 h-4 ${s.color}`} />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">
              {s.value}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Shorten form */}
      <div>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Shorten a new link
        </h2>
        <AuthShortenForm />
      </div>

      {/* Recent links */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Recent links
          </h2>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
            View all →
          </button>
        </div>
        <div className="space-y-3">
          {recentLinks.map((link, idx) => (
            <LinkCard key={idx} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
