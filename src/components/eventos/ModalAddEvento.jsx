"use client";

import { useState } from "react";

export default function ModalAddEvento({ close, addEvento }) {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const enviar = () => {
    if (!titulo || !fecha || !disciplina) {
      alert("Los campos Título, Fecha y Disciplina son obligatorios");
      return;
    }

    const nuevo = {
      id: Date.now(),
      titulo,
      fecha,
      disciplina,
      descripcion,
      estado: "Programado",
    };

    addEvento(nuevo);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[420px] p-6 rounded-xl shadow-2xl animate-fadeIn">

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Crear Nuevo Evento
        </h2>

        <label className="block mb-3">
          <span className="text-gray-700">Título del Evento:</span>
          <input
            className="mt-1 w-full border px-3 py-2 rounded"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700">Fecha:</span>
          <input
            type="date"
            className="mt-1 w-full border px-3 py-2 rounded"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700">Disciplina:</span>
          <input
            className="mt-1 w-full border px-3 py-2 rounded"
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Descripción (opcional):</span>
          <textarea
            className="mt-1 w-full border px-3 py-2 rounded"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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
