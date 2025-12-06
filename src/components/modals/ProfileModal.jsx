"use client";

export default function ProfileModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      {/* Contenedor */}
      <div className="bg-white w-64 p-6 rounded-xl shadow-lg animate-fadeIn">

        {/* Título */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Mi Cuenta
        </h2>

        {/* Opciones */}
        <div className="space-y-3">

          <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
            Configuración
          </button>

          <button
            onClick={() => {
              // AQUI VA EL LOGOUT LUEGO
              alert("Sesión cerrada");
            }}
            className="w-full text-left px-3 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 transition"
          >
            Cerrar Sesión
          </button>

        </div>

        {/* Cerrar Modal */}
        <button
          onClick={onClose}
          className="mt-6 block w-full py-2 text-center text-sm text-gray-500 hover:text-gray-700"
        >
          Cancelar
        </button>

      </div>
    </div>
  );
}
