"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { AuthShortenForm } from "./AuthShortenForm"; // adjust path to where AuthShortenForm lives

interface CreateLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateLinkModal({ isOpen, onClose }: CreateLinkModalProps) {
  // Close on Escape + lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mt-16 sm:mt-0 rounded-2xl bg-[#0a0f1c] border border-white/10 shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/5">
          <h2 className="text-base font-bold text-white">Create a new link</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          <AuthShortenForm />
        </div>
      </div>
    </div>
  );
}
