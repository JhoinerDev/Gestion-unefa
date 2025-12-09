"use client";

import { useRouter } from 'next/navigation'; // 💡 Paso 1: Importar useRouter

export default function ProfileModal({ onClose }) {
  const router = useRouter(); // 💡 Paso 2: Inicializar el router

  // Función que maneja el cierre de sesión y la redirección
  const handleLogout = () => {
    // 1. Limpieza de Sesión (Importante para la seguridad)
    // Aquí es donde deberías poner tu lógica para limpiar cookies, tokens, o localStorage.
    console.log("Limpiando sesión y redirigiendo...");

    // 2. Cerramos el modal
    onClose(); 

    // 3. Redireccionamos a la página de login
    router.push('/login'); 
  };


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
            onClick={handleLogout} // 🚨 Usamos la función handleLogout aquí
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