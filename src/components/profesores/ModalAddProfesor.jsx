"use client";

import { useState } from "react";

export default function ModalAddProfesor({ close, addProfesor }) {
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [disciplina, setDisciplina] = useState("");

  const enviar = () => {
    if (!cedula || !nombre || !telefono || !disciplina) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevo = {
      id: Date.now(),
      cedula,
      nombre,
      telefono,
      disciplina,
    };

    addProfesor(nuevo);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-xl shadow-2xl animate-fadeIn">

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Registrar Profesor
        </h2>

        <label className="block mb-3">
          <span className="text-gray-700">Cédula:</span>
          <input
            className="mt-1 w-full border px-3 py-2 rounded"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700">Nombre Completo:</span>
          <input
            className="mt-1 w-full border px-3 py-2 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700">Teléfono:</span>
          <input
            className="mt-1 w-full border px-3 py-2 rounded"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Disciplina:</span>
          <input
            className="mt-1 w-full border px-3 py-2 rounded"
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
          />
        </label>

        <div className="flex justify-end space-x-2">
          <button
            onClick={close}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>

          <button
            onClick={enviar}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>

      </div>
    </div>
  );
}
