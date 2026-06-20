"use client";

import { useState, useRef, useEffect } from "react";
import {
  User,
  Settings,
  HelpCircle,
  FileText,
  LogOut,
  ChevronDown,
} from "lucide-react";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const menuItems = [
    { icon: User, label: "View profile" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help & support" },
    { icon: FileText, label: "Docs" },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-xl hover:bg-white/5 transition-colors group"
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-indigo-500/20">
          MY
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-xs font-semibold text-white leading-tight">
            Md Yahya
          </p>
          <p className="text-[10px] text-slate-500 leading-tight">
            yahya@example.com
          </p>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-52 bg-[#0f1629] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 z-50 overflow-hidden">
          {/* User info */}
          <div className="px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                MY
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Md Yahya</p>
                <p className="text-xs text-slate-500">yahya@example.com</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="p-1.5 space-y-0.5">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left"
              >
                <item.icon className="w-4 h-4 text-indigo-400 shrink-0" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Logout */}
          <div className="p-1.5 border-t border-white/5">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
