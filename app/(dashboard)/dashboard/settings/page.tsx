"use client";

import { useState } from "react";
import { CheckCircle, Bell, Shield, Key, Smartphone } from "lucide-react";

function Toggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-10 h-5.5 rounded-full transition-colors duration-200 ${enabled ? "bg-indigo-500" : "bg-white/10"}`}
      style={{ height: "22px", width: "40px" }}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${enabled ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </button>
  );
}

function SettingRow({
  label,
  desc,
  enabled,
  onToggle,
}: {
  label: string;
  desc: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-white/5 last:border-0">
      <div>
        <p className="text-sm text-white font-medium">{label}</p>
        <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
      </div>
      <Toggle enabled={enabled} onToggle={onToggle} />
    </div>
  );
}

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    clicks: true,
    weekly: true,
    security: true,
  });
  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionAlerts: true,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white">Settings</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Manage your preferences and account security
        </p>
      </div>

      {/* Notifications */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center">
            <Bell className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <h2 className="text-sm font-semibold text-white">Notifications</h2>
        </div>
        <p className="text-xs text-slate-500 mb-4 ml-9.5">
          Choose what you want to be notified about
        </p>
        <div>
          <SettingRow
            label="Click milestones"
            desc="Get notified when a link hits 100, 500, or 1000 clicks"
            enabled={notifications.clicks}
            onToggle={() =>
              setNotifications((n) => ({ ...n, clicks: !n.clicks }))
            }
          />
          <SettingRow
            label="Weekly digest"
            desc="Receive a weekly summary of your link performance"
            enabled={notifications.weekly}
            onToggle={() =>
              setNotifications((n) => ({ ...n, weekly: !n.weekly }))
            }
          />
          <SettingRow
            label="Security alerts"
            desc="Get notified of suspicious activity on your account"
            enabled={notifications.security}
            onToggle={() =>
              setNotifications((n) => ({ ...n, security: !n.security }))
            }
          />
        </div>
      </div>

      {/* Security */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-violet-400" />
          </div>
          <h2 className="text-sm font-semibold text-white">Security</h2>
        </div>
        <p className="text-xs text-slate-500 mb-4">Protect your account</p>
        <div>
          <SettingRow
            label="Two-factor authentication"
            desc="Add an extra layer of security to your account"
            enabled={security.twoFactor}
            onToggle={() =>
              setSecurity((s) => ({ ...s, twoFactor: !s.twoFactor }))
            }
          />
          <SettingRow
            label="Login alerts"
            desc="Get notified when a new device signs into your account"
            enabled={security.sessionAlerts}
            onToggle={() =>
              setSecurity((s) => ({ ...s, sessionAlerts: !s.sessionAlerts }))
            }
          />
        </div>
      </div>

      {/* Change password */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Key className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <h2 className="text-sm font-semibold text-white">Change password</h2>
        </div>
        {["Current password", "New password", "Confirm new password"].map(
          (label) => (
            <div key={label}>
              <label className="block text-xs text-slate-500 mb-1.5 font-medium">
                {label}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
              />
            </div>
          ),
        )}
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
              <CheckCircle className="w-4 h-4" /> Updated!
            </>
          ) : (
            "Update password"
          )}
        </button>
      </div>

      {/* Connected devices */}
      <div className="bg-[#0f1629] border border-white/6 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-7 h-7 rounded-lg bg-rose-500/10 flex items-center justify-center">
            <Smartphone className="w-3.5 h-3.5 text-rose-400" />
          </div>
          <h2 className="text-sm font-semibold text-white">Active sessions</h2>
        </div>
        {[
          {
            device: "Chrome on Windows",
            location: "Dhaka, Bangladesh",
            current: true,
          },
          {
            device: "Safari on iPhone",
            location: "Dhaka, Bangladesh",
            current: false,
          },
        ].map((s) => (
          <div
            key={s.device}
            className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
          >
            <div>
              <p className="text-sm text-white flex items-center gap-2">
                {s.device}
                {s.current && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-medium">
                    Current
                  </span>
                )}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{s.location}</p>
            </div>
            {!s.current && (
              <button className="text-xs text-red-400 hover:text-red-300 transition-colors">
                Revoke
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
