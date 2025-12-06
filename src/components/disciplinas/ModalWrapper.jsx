// src/components/ModalWrapper.jsx
"use client";
import React from "react";

export default function ModalWrapper({ open, title, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 z-10 animate-fadeIn">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200"
          >
            Cerrar
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
