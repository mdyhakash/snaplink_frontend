"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Link as LinkIcon,
  BarChart3,
  Settings,
  LogOut,
  Zap,
  Plus,
} from "lucide-react";
import { CreateLinkModal } from "./CreateLinkModal";

const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: LinkIcon, label: "My Links", href: "/dashboard/links" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const pathname = usePathname();

  const NavLink = ({
    item,
    onClick,
  }: {
    item: (typeof navItems)[0];
    onClick?: () => void;
  }) => {
    const active = pathname === item.href;
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
          active
            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
            : "text-slate-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <item.icon
          className={`w-4 h-4 shrink-0 transition-colors ${active ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"}`}
        />
        {item.label}
        {active && (
          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
        )}
      </Link>
    );
  };

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 h-14 bg-sidebar/95 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-white text-sm tracking-tight">
            Snaplink
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile overlay ── */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 top-14"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden fixed left-0 top-14 bottom-0 w-64 z-50 flex flex-col bg-[#070b14] border-r border-white/5 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-3 border-b border-white/5 ">
          <button
            onClick={() => {
              setShowCreateModal(true);
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_4px_16px_rgba(99,102,241,0.3)] hover:opacity-90 transition-opacity text-center"
          >
            Create link
          </button>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </nav>
        <div className="p-3 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* ── Desktop sidebar ── */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen w-60 flex-col bg-sidebar border-r border-white/5 z-40">
        {/* Logo */}
        <div className="p-5 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-sm tracking-tight">
                Snaplink
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Fast URL shortening
              </p>
            </div>
          </div>
        </div>

        {/* Create link button */}
        <div className="px-3 pt-3">
          <button
            onClick={() => setShowCreateModal(true)}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_4px_16px_rgba(99,102,241,0.3)] hover:opacity-90 transition-opacity text-center"
          >
            Create link
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <p className="px-3 pt-1 pb-2 text-[10px] uppercase tracking-widest text-slate-600 font-semibold">
            Menu
          </p>
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        {/* Upgrade nudge */}
        <div className="mx-3 mb-3 p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
          <p className="text-xs font-semibold text-white mb-0.5">
            Upgrade to Pro
          </p>
          <p className="text-[11px] text-slate-400 mb-2">
            Unlock analytics & custom aliases.
          </p>
          <button className="w-full py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity">
            Upgrade →
          </button>
        </div>

        {/* Logout */}
        <div className="p-3 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <CreateLinkModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </>
  );
}
