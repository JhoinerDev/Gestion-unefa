"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const menu = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Disciplinas", path: "/disciplinas" },
  { name: "Atletas", path: "/atletas" },
  { name: "Profesores", path: "/profesores" },
  { name: "Eventos", path: "/eventos" },
];


  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-blue-700">
        UNEFA
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4 space-y-3">
        {menu.map((item, i) => (
          <button
            key={i}
            onClick={() => router.push(item.path)}
            className="w-full text-left px-4 py-3 rounded-lg bg-blue-800/40 hover:bg-blue-700 transition font-medium"
          >
            {item.name}
          </button>
        ))}
      </nav>

    </aside>
  );
}
