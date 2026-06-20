"use client";

import { useState } from "react";
import {
  Camera,
  CheckCircle,
  Link as LinkIcon,
  BarChart2,
  Calendar,
} from "lucide-react";

export default function ProfilePage() {
  const [name, setName] = useState("Md Yahya");
  const [email, setEmail] = useState("yahya@example.com");
  const [bio, setBio] = useState(
    "Building Snaplink — a fast, open-source URL shortener.",
  );
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white">Profile</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Manage your personal information
        </p>
      </div>

      {/* Avatar + stats */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-indigo-500/20">
              MY
            </div>
            <button className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-lg bg-[#0f1629] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Info + stats */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg font-bold text-white">{name}</h2>
            <p className="text-sm text-slate-500">{email}</p>
            <p className="text-xs text-slate-600 mt-1 flex items-center justify-center sm:justify-start gap-1">
              <Calendar className="w-3 h-3" /> Joined June 2026
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-5 mt-4">
              <div className="text-center">
                <p className="text-lg font-bold text-white">12</p>
                <p className="text-[11px] text-slate-500 flex items-center gap-1">
                  <LinkIcon className="w-3 h-3" />
                  Links
                </p>
              </div>
              <div className="w-px h-8 bg-white/5" />
              <div className="text-center">
                <p className="text-lg font-bold text-white">1,204</p>
                <p className="text-[11px] text-slate-500 flex items-center gap-1">
                  <BarChart2 className="w-3 h-3" />
                  Clicks
                </p>
              </div>
              <div className="w-px h-8 bg-white/5" />
              <div className="text-center">
                <p className="text-lg font-bold text-white">Free</p>
                <p className="text-[11px] text-slate-500">Plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit form */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-semibold text-white">
          Personal information
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5 font-medium">
              Full name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5 font-medium">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5 font-medium">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            saved
              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
              : "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90 shadow-lg shadow-indigo-500/20"
          }`}
        >
          {saved ? (
            <>
              <CheckCircle className="w-4 h-4" /> Saved!
            </>
          ) : (
            "Save changes"
          )}
        </button>
      </div>

      {/* Danger zone */}
      <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6">
        <h2 className="text-sm font-semibold text-red-400 mb-1">Danger zone</h2>
        <p className="text-xs text-slate-500 mb-4">
          Permanently delete your account and all associated data.
        </p>
        <button className="px-4 py-2 rounded-xl text-xs font-semibold text-red-400 border border-red-500/25 hover:bg-red-500/10 transition-colors">
          Delete account
        </button>
      </div>
    </div>
  );
}
