"use client";

import { useState } from "react";
// 💡 Necesario para la navegación en Next.js
import { useRouter } from "next/navigation";
import ModalAddDisciplina from "@/components/disciplinas/ModalAddDisciplina";

// Función para obtener el ícono y el gradiente de la tarjeta
const getDisciplineStyle = (nombre) => {
    switch (nombre) {
        case "Fútbol":
            return { icon: '⚽', gradient: "from-blue-700 to-indigo-600" };
        case "Voleibol":
            return { icon: '🏐', gradient: "from-red-600 to-pink-500" };
        case "Taekwondo": // 💡 Nombre actualizado
            return { icon: '🥋', gradient: "from-green-700 to-teal-600" };
        case "Baloncesto": // 💡 Nueva disciplina
            return { icon: '🏀', gradient: "from-yellow-600 to-orange-500" };
        case "Ajedrez": // 💡 Nueva disciplina
            return { icon: '♟️', gradient: "from-gray-700 to-slate-600" };
        default:
            return { icon: '📍', gradient: "from-gray-700 to-gray-600" };
    }
};


export default function DisciplinasPage() {
  const router = useRouter(); // Inicializa el router

  const [openModal, setOpenModal] = useState(false);

  // 💡 Datos temporales actualizados (se quitó 'estado' y se añadieron nuevas disciplinas)
  const [disciplinas, setDisciplinas] = useState([
    { id: 1, nombre: "Fútbol", entrenador: "Pedro Ruiz" },
    { id: 2, nombre: "Voleibol", entrenador: "María Rojas" },
    { id: 3, nombre: "Taekwondo", entrenador: "Luis Briceño" },
    { id: 4, nombre: "Baloncesto", entrenador: "Juan Pérez" },
    { id: 5, nombre: "Ajedrez", entrenador: "Ana Gámez" },
  ]);

  // Funciones de acción
  const handleEdit = (id) => { 
    // Detiene la burbuja de eventos para que la tarjeta no navegue
    console.log(`Editando disciplina ${id}`); 
    // Aquí iría la lógica para abrir el modal de edición
  };
  
  // 💡 Nueva función: Navegar a la vista de detalle
  const handleViewDetails = (id) => {
      // Navega a la ruta de la disciplina específica (ej: /disciplinas/1)
      router.push(`/disciplinas/${id}`);
  };


  return (
    <div className="mt-1">

      {/* Título y Botón */}
      <div className="flex items-center justify-between sm-1 mb-5">
        <h1 className="text-3xl font-bold text-gray-800">Disciplinas Deportivas</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          + Agregar Disciplina
        </button>
      </div>

      {/* TARJETAS DE DISCIPLINAS (Ahora son botones navegables) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {disciplinas.map((d) => {
          const { icon, gradient } = getDisciplineStyle(d.nombre);
          
          return (
            // 💡 La tarjeta completa es un botón que activa la navegación
            <div 
              key={d.id}
              onClick={() => handleViewDetails(d.id)}
              className="relative rounded-2xl shadow-xl overflow-hidden bg-gray-800 border border-gray-700 transition-transform duration-300 hover:scale-[1.02] cursor-pointer text-left"
            >
              
              {/* Área Superior con Gradiente (Visual) */}
              <div 
                className={`p-5 h-32 flex items-center justify-start bg-gradient-to-br ${gradient} relative`}
              >
                {/* Ícono de fondo */}
                <span className="text-6xl opacity-30 text-white select-none absolute inset-0 flex items-center justify-center">
                  {icon}
                </span>

                {/* Título de la Disciplina */}
                <h3 className="text-2xl font-bold text-white relative z-10">{d.nombre}</h3>
                
                {/* 💡 Se eliminó el badge de Estado */}
              </div>

              {/* Área de Detalle y Acciones (Inferior) */}
              <div className="p-4 bg-gray-900">
                
                {/* Entrenador */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span className="font-medium text-white">Entrenador:</span>
                    <span className="text-gray-300">{d.entrenador}</span>
                </div>

                {/* Acciones */}
                <div className="flex justify-end pt-3 border-t border-gray-700/50">
                  <button 
                    // 💡 Se usa e.stopPropagation() para que al hacer clic en Editar NO navegue la tarjeta
                    onClick={(e) => { e.stopPropagation(); handleEdit(d.id); }}
                    className="px-4 py-1 bg-yellow-500 rounded-lg text-white text-sm font-semibold hover:bg-yellow-600 transition"
                  >
                    Editar
                  </button>
                  {/* 💡 Se eliminó el botón Eliminar */}
                </div>
              </div>

            </div>
          );
        })}
      </div>
      {/* Fin de las Tarjetas */}


      {openModal && (
        <ModalAddDisciplina
          close={() => setOpenModal(false)}
          addDisciplina={(nueva) => setDisciplinas([...disciplinas, nueva])}
        />
      )}

    </div>
  );
}