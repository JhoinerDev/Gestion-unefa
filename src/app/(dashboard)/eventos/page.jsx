"use client";

import { useState } from "react";
import ModalAddEvento from "@/components/eventos/ModalAddEvento";

export default function EventosPage() {
  const [openModal, setOpenModal] = useState(false);

  // Datos temporales (MOCK)
  const [eventos, setEventos] = useState([
    {
      id: 1,
      titulo: "Copa UNEFA – Torneo Relámpago",
      fecha: "2025-01-10",
      disciplina: "Fútbol",
      descripcion: "Competencia rápida entre equipos internos.",
      estado: "Activo",
    },
    {
      id: 2,
      titulo: "Carrera 5K Universitaria",
      fecha: "2025-02-02",
      disciplina: "Atletismo",
      descripcion: "Evento abierto para toda la comunidad universitaria.",
      estado: "Programado",
    },
  ]);

  return (
    <div className="p-8">

      {/* Título y botón */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Eventos Deportivos</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          + Crear Evento
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white p-6 rounded-xl shadow-lg border">

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left font-semibold text-gray-700">Título</th>
              <th className="p-3 text-left font-semibold text-gray-700">Fecha</th>
              <th className="p-3 text-left font-semibold text-gray-700">Disciplina</th>
              <th className="p-3 text-left font-semibold text-gray-700">Estado</th>
              <th className="p-3 text-center font-semibold text-gray-700">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {eventos.map((e) => (
              <tr key={e.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{e.titulo}</td>
                <td className="p-3">{e.fecha}</td>
                <td className="p-3">{e.disciplina}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded text-white ${
                      e.estado === "Activo"
                        ? "bg-green-600"
                        : e.estado === "Programado"
                        ? "bg-blue-600"
                        : "bg-gray-500"
                    }`}
                  >
                    {e.estado}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Editar
                  </button>
                  <button className="ml-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      {/* Modal */}
      {openModal && (
        <ModalAddEvento
          close={() => setOpenModal(false)}
          addEvento={(nuevo) => setEventos([...eventos, nuevo])}
        />
      )}

    </div>
  );
}
