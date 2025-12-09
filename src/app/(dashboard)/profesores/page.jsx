"use client";

import { useState } from "react";
import ModalAddProfesor from "@/components/profesores/ModalAddProfesor";

export default function ProfesoresPage() {
  const [openModal, setOpenModal] = useState(false);

  // 1. Datos temporales MOCK (MANTENIDO)
  const initialProfesores = [
    { id: 1, cedula: "14588222", nombre: "José Martínez", telefono: "0424-5556677", disciplina: "Fútbol Sala" },
    { id: 2, cedula: "19877334", nombre: "Ana Blanco", telefono: "0412-9988221", disciplina: "Atletismo" },
    { id: 3, cedula: "22544311", nombre: "Luis Padrón", telefono: "0416-1122334", disciplina: "Voleibol" },
    { id: 4, cedula: "17001002", nombre: "Carla Rivas", telefono: "0426-3334455", disciplina: "Taekwondo" },
    { id: 5, cedula: "15987654", nombre: "Héctor Soto", telefono: "0414-7778899", disciplina: "Baloncesto" },
  ];

  const [profesores, setProfesores] = useState(initialProfesores);

  // 2. Estados de filtrado y Resultados (MANTENIDO)
  const [filters, setFilters] = useState({
    cedula: "",
    disciplina: "",
    nombre: "",
  });
  
  // Usamos 'false' para que muestre el mensaje de guía al inicio
  const [searchResults, setSearchResults] = useState(false); 

  // Opciones de Disciplinas para el filtro Select
  const disciplinaOptions = ["Fútbol Sala", "Atletismo", "Voleibol", "Taekwondo", "Baloncesto"];
  
  const handleSearch = () => {
    const term = (filters.nombre || '').toLowerCase();
    
    const filtered = profesores.filter(p => {
      // Lógica de filtrado (MANTENIDA)
      const cedulaMatch = filters.cedula ? p.cedula.includes(filters.cedula) : true;
      const disciplinaMatch = filters.disciplina ? p.disciplina === filters.disciplina : true;
      const nombreMatch = term ? p.nombre.toLowerCase().includes(term) : true;
      
      return cedulaMatch && disciplinaMatch && nombreMatch;
    });
    
    // Almacenamos el resultado de la búsqueda
    setSearchResults(filtered);
  };
  
  return (
    // Se ajusta la altura (MANTENIDA)
    <div className="p-8 h-[calc(90vh-60px)] flex flex-col"> 

      {/* TÍTULO Y BOTÓN DE ACCIÓN (MANTENIDO) */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Profesores Registrados</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          + Agregar Profesor
        </button>
      </div>

      {/* ÁREA DE FILTROS (MODIFICADA) */}
      <div className="bg-white p-6 rounded-xl shadow-lg border mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Parámetros de Búsqueda</h2>
        
        {/* CAMBIO CLAVE: Grid de 4 columnas, con el botón en la última posición. items-end para alinear. */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          
          {/* C.I. */}
          <input
            type="text"
            placeholder="Cédula (C.I.)"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={filters.cedula}
            onChange={(e) => setFilters({ ...filters, cedula: e.target.value })}
          />

          {/* Nombre/Apellido */}
          <input
            type="text"
            placeholder="Nombre o Apellido"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={filters.nombre}
            onChange={(e) => setFilters({ ...filters, nombre: e.target.value })}
          />
          
          {/* Disciplina */}
          <select
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
            value={filters.disciplina}
            onChange={(e) => setFilters({ ...filters, disciplina: e.target.value })}
          >
            <option value="">— Disciplina —</option>
            {disciplinaOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          
          {/* 🎯 BOTÓN BUSCAR PROFESORES ALINEADO CON EL FILTRO */}
          {/* Las clases h-full y self-end aseguran que coincida en altura con los inputs */}
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition h-full self-end"
          >
            Buscar Profesores
          </button>
          
        </div>
        
        {/* 💡 Se elimina el div que contenía el botón de búsqueda solo */}
        
      </div>

      {/* ÁREA DE RESULTADOS DINÁMICA (MANTENIDO) */}
      <div className="flex-grow bg-white p-6 rounded-xl shadow-lg border overflow-hidden">
        
        {/* ... (Lógica de resultados / Estado vacío) ... */}
        {searchResults === false ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l-2 5L9 9l11 4-5 2zm0 0L8 10m8 4l2-4" />
            </svg>
            <p className="text-xl font-semibold mb-2 text-gray-600">Comience su búsqueda</p>
            <p className="max-w-md">Utilice los parámetros de búsqueda (Cédula, Disciplina, etc.) para filtrar la lista de profesores. Los resultados aparecerán aquí.</p>
          </div>
        ) : searchResults.length === 0 ? (
          /* Sin Resultados */
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl font-semibold mb-2 text-gray-600">No se encontraron profesores</p>
            <p className="max-w-md">Intente modificar los filtros de búsqueda.</p>
          </div>
        ) : (
          /* TABLA DE RESULTADOS COMPACTA */
          <div className="h-full overflow-y-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left sticky top-0 shadow-sm">
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs">ID</th>
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs">C.I.</th>
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs">Nombre Completo</th>
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs">Teléfono</th>
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs">Disciplina Asignada</th>
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((p) => (
                  <tr key={p.id} className="border-b hover:bg-blue-50/50 transition">
                    <td className="px-3 py-2 text-xs text-gray-800">{p.id}</td>
                    <td className="px-3 py-2 text-xs text-gray-800 font-medium">{p.cedula}</td>
                    <td className="px-3 py-2 text-xs text-gray-800">{p.nombre}</td>
                    <td className="px-3 py-2 text-xs text-gray-800">{p.telefono}</td>
                    <td className="px-3 py-2 text-xs text-blue-700 font-medium">{p.disciplina}</td>
                    <td className="px-3 py-2 text-center text-xs">
                      <button className="px-3 py-1 bg-yellow-500 rounded text-white hover:bg-yellow-600 transition">
                        Ver/Editar
                      </button>
                      <button className="ml-2 px-3 py-1 bg-red-600 rounded text-white hover:bg-red-700 transition">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
      </div>

      {/* Modal (MANTENIDO) */}
      {openModal && (
        <ModalAddProfesor
          close={() => setOpenModal(false)}
          addProfesor={(nuevo) => setProfesores([...profesores, nuevo])}
        />
      )}

    </div>
  );
}