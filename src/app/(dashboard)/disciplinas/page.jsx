"use client";

import { useState } from "react";
import ModalAddDisciplina from "@/components/disciplinas/ModalAddDisciplina";

export default function DisciplinasPage() {
  const [openModal, setOpenModal] = useState(false);

  // Datos temporales (Mock)
  const [disciplinas, setDisciplinas] = useState([
    { id: 1, nombre: "Fútbol", estado: "Activa", entrenador: "Pedro Ruiz" },
    { id: 2, nombre: "Voleibol", estado: "Activa", entrenador: "María Rojas" },
    { id: 3, nombre: "Karate Do", estado: "Inactiva", entrenador: "Luis Briceño" },
  ]);

  return (
    <div className="p-8">

      {/* Título */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Disciplinas Deportivas</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          + Agregar Disciplina
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white p-6 rounded-xl shadow-lg border">

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 font-semibold text-gray-700">ID</th>
              <th className="p-3 font-semibold text-gray-700">Nombre</th>
              <th className="p-3 font-semibold text-gray-700">Estado</th>
              <th className="p-3 font-semibold text-gray-700">Entrenador</th>
              <th className="p-3 font-semibold text-gray-700 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {disciplinas.map((d) => (
              <tr key={d.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{d.id}</td>
                <td className="p-3">{d.nombre}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      d.estado === "Activa" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {d.estado}
                  </span>
                </td>
                <td className="p-3">{d.entrenador}</td>
                <td className="p-3 text-center">
                  <button className="px-3 py-1 bg-yellow-500 rounded text-white hover:bg-yellow-600">
                    Editar
                  </button>
                  <button className="ml-2 px-3 py-1 bg-red-600 rounded text-white hover:bg-red-700">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {openModal && (
        <ModalAddDisciplina
          close={() => setOpenModal(false)}
          addDisciplina={(nueva) => setDisciplinas([...disciplinas, nueva])}
        />
      )}

    </div>
  );
}
