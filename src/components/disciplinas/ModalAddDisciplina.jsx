"use client";

import { useState } from "react";

export default function ModalAddDisciplina({ close, addDisciplina }) {
  const [nombre, setNombre] = useState("");
  const [entrenador, setEntrenador] = useState("");
  const [estado, setEstado] = useState("Activa");

  const enviar = () => {
    const nuevaDisciplina = {
      id: Date.now(),
      nombre,
      entrenador,
      estado,
    };

    addDisciplina(nuevaDisciplina);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-96 p-6 rounded-xl shadow-2xl animate-fadeIn">

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Registrar nueva disciplina
        </h2>

        <label className="block mb-3">
          <span className="text-gray-700">Nombre:</span>
          <input
            className="mt-1 w-full border px-3 py-2 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700">Entrenador:</span>
          <input
            className="mt-1 w-full border px-3 py-2 rounded"
            value={entrenador}
            onChange={(e) => setEntrenador(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Estado:</span>
          <select
            className="mt-1 w-full border px-3 py-2 rounded"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="Activa">Activa</option>
            <option value="Inactiva">Inactiva</option>
          </select>
        </label>

        {/* Botones */}
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
