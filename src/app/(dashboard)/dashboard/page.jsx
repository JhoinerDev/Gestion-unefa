"use client";

import DisciplinaCard from "@/components/tarjetas/DisciplinaCard";

export default function DashboardPage() {

  const disciplinas = [
    { nombre: "Fútbol Sala", atletas: 25, color: "bg-blue-600" },
    { nombre: "Baloncesto", atletas: 18, color: "bg-yellow-500" },
    { nombre: "Voleibol", atletas: 22, color: "bg-red-500" },
    { nombre: "Karate Do", atletas: 10, color: "bg-green-600" },
    { nombre: "Atletismo", atletas: 15, color: "bg-purple-600" },
    { nombre: "Kickboxing", atletas: 8, color: "bg-orange-600" }
  ];

  return (
    <div className="w-full h-full flex flex-col gap-6">

      {/* FILA SUPERIOR – Tarjetas estatísticas */}
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-white border rounded-lg shadow">
          <p className="text-sm text-gray-600">Total Atletas</p>
          <h2 className="text-2xl font-bold text-blue-700">148</h2>
        </div>

        <div className="p-4 bg-white border rounded-lg shadow">
          <p className="text-sm text-gray-600">Profesores</p>
          <h2 className="text-2xl font-bold text-blue-700">9</h2>
        </div>

        <div className="p-4 bg-white border rounded-lg shadow">
          <p className="text-sm text-gray-600">Disciplinas</p>
          <h2 className="text-2xl font-bold text-blue-700">12</h2>
        </div>

        <div className="p-4 bg-white border rounded-lg shadow">
          <p className="text-sm text-gray-600">Eventos Activos</p>
          <h2 className="text-2xl font-bold text-blue-700">4</h2>
        </div>
      </div>

      {/* TARJETAS DE DISCIPLINAS */}
      <h2 className="text-lg font-bold text-gray-700">Accesos Rápidos</h2>

      <div className="grid grid-cols-3 gap-4">
        {disciplinas.map((d, i) => (
          <DisciplinaCard
            key={i}
            nombre={d.nombre}
            atletas={d.atletas}
            color={d.color}
          />
        ))}
      </div>

    </div>
  );
}
