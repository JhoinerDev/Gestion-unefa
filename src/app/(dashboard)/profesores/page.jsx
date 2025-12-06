"use client";

import { useState } from "react";
import ModalAddProfesor from "@/components/profesores/ModalAddProfesor";

export default function ProfesoresPage() {
  const [openModal, setOpenModal] = useState(false);

  // Datos temporales MOCK
  const [profesores, setProfesores] = useState([
    {
      id: 1,
      cedula: "14588222",
      nombre: "José Martínez",
      telefono: "0424-5556677",
      disciplina: "Fútbol",
    },
    {
      id: 2,
      cedula: "19877334",
      nombre: "Ana Blanco",
      telefono: "0412-9988221",
      disciplina: "Atletismo",
    },
    {
      id: 3,
      cedula: "22544311",
      nombre: "Luis Padrón",
      telefono: "0416-1122334",
      disciplina: "Voleibol",
    },
  ]);

  return (
    <div className="p-8">

      {/* Título */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Profesores Registrados</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          + Agregar Profesor
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
              <th className="p-3 font-semibold text-gray-700">Teléfono</th>
              <th className="p-3 font-semibold text-gray-700">Disciplina</th>
              <th className="p-3 text-center font-semibold text-gray-700">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {profesores.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.cedula}</td>
                <td className="p-3">{p.nombre}</td>
                <td className="p-3">{p.telefono}</td>
                <td className="p-3">{p.disciplina}</td>

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

      {/* Modal */}
      {openModal && (
        <ModalAddProfesor
          close={() => setOpenModal(false)}
          addProfesor={(nuevo) => setProfesores([...profesores, nuevo])}
        />
      )}

    </div>
  );
}
