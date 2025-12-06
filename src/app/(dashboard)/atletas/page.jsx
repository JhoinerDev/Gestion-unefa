"use client";

import { useState } from "react";
import ModalAddAtleta from "@/components/atletas/ModalAddAtleta";

export default function AtletasPage() {
  const [openModal, setOpenModal] = useState(false);

  // Datos temporales (MOCK)
  const [atletas, setAtletas] = useState([
    {
      id: 1,
      cedula: "28944012",
      nombre: "Carlos Gómez",
      edad: 20,
      disciplina: "Fútbol",
    },
    {
      id: 2,
      cedula: "27853200",
      nombre: "María Fernandez",
      edad: 19,
      disciplina: "Voleibol",
    },
    {
      id: 3,
      cedula: "30222901",
      nombre: "Luis Rivas",
      edad: 22,
      disciplina: "Basket",
    },
  ]);

  return (
    <div className="p-8">

      {/* Título */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Atletas Registrados</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          + Agregar Atleta
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white p-6 rounded-xl shadow-lg border">

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 font-semibold text-gray-700">ID</th>
              <th className="p-3 font-semibold text-gray-700">Cédula</th>
              <th className="p-3 font-semibold text-gray-700">Nombre</th>
              <th className="p-3 font-semibold text-gray-700">Edad</th>
              <th className="p-3 font-semibold text-gray-700">Disciplina</th>
              <th className="p-3 text-center font-semibold text-gray-700">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {atletas.map((a) => (
              <tr key={a.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{a.id}</td>
                <td className="p-3">{a.cedula}</td>
                <td className="p-3">{a.nombre}</td>
                <td className="p-3">{a.edad}</td>
                <td className="p-3">{a.disciplina}</td>

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

      {/* Llamamos el Modal */}
      {openModal && (
        <ModalAddAtleta
          close={() => setOpenModal(false)}
          addAtleta={(nuevo) => setAtletas([...atletas, nuevo])}
        />
      )}

    </div>
  );
}
