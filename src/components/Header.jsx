// src/components/Header.jsx
"use client";

export default function Header({ onOpenProfile }) {
  return (
    <header className="h-14 bg-white shadow flex items-center px-6 justify-between">
      <div className="font-bold text-blue-900 text-xl">
        Gestión Deportiva
      </div>

      {/* Botón de perfil */}
      <button
        
        onClick={onOpenProfile}
        className="w-10 h-10 rounded-full  text-white flex items-center justify-center hover:bg-700 transition"
      >
        <img src="/img/perfil.png" alt="Perfil" className="w-10 h-10 rounded-full" />
      
      </button>
    </header>
  );
}
