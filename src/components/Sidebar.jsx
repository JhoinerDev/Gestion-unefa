"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <aside className="w-64 bg-blue-400 text-white flex flex-col shadow-xl ">

      {/* Logo */}
      <Image
      src="/img/logo.png"
      alt="Logo UNEFA"
      width={200}
      height={200}
      className="mx-auto mb-6 mt-1"
      />
      

      {/* Navegación */}
      <nav className="flex-6 p-4 space-y-4">
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
