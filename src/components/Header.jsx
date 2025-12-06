// src/components/Header.jsx
"use client";

export default function Header({ onOpenProfile }) {
  return (
    <header className="h-14 bg-white shadow flex items-center px-6 justify-between">
      <div className="font-bold text-blue-900 text-xl">
        UNEFA – Gestión Deportiva
      </div>

      {/* Botón de perfil */}
      <button
        onClick={onOpenProfile}
        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
      >
        JC
      </button>
    </header>
  );
}
