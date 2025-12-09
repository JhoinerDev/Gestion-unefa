"use client";

import { useState } from "react";
// Importación original mantenida
import ModalAddAtleta from "@/components/atletas/ModalAddAtleta"; 

export default function AtletasPage() {
  const [openModal, setOpenModal] = useState(false);

  // 1. Datos temporales (MOCK) - MANTENIDO
  const initialAtletas = [
    { id: 1, cedula: "30193700", nombre: "Jhoiner Colmenarez", edad: 21, disciplina: "Voleibol", semestre: "6to" },
    { id: 2, cedula: "17463583", nombre: "María Fernández", edad: 19, disciplina: "Voleibol", semestre: "5to" },
    { id: 3, cedula: "30222901", nombre: "Luis Rivas", edad: 22, disciplina: "Basket", semestre: "8vo" },
    // Añadimos más datos de prueba con Semestre para el filtro
    { id: 4, cedula: "29101010", nombre: "Ana López", edad: 21, disciplina: "Taekwondo", semestre: "6to" },
    { id: 5, cedula: "26500000", nombre: "Pedro Mármol", edad: 23, disciplina: "Ajedrez", semestre: "9no" },
    { id: 6, cedula: "26500001", nombre: "Laura Martínez", edad: 20, disciplina: "Ajedrez", semestre: "9no" },
    { id: 7, cedula: "26500002", nombre: "Jorge Ramírez", edad: 18, disciplina: "Fútbol Sala", semestre: "4to" },
    { id: 8, cedula: "26500003", nombre: "Sofía Castillo", edad: 19, disciplina: "Voleibol", semestre: "5to" },
    { id: 9, cedula: "26500004", nombre: "Miguel Torres", edad: 22, disciplina: "Basket", semestre: "8vo" },
    { id: 10, cedula: "26500005", nombre: "Isabella Cruz", edad: 21, disciplina: "Taekwondo", semestre: "7to" },



  ];

  // Mantenemos el estado original de atletas, pero lo usaremos como fuente de datos
  const [atletas, setAtletas] = useState(initialAtletas);

  // 2. Estados de filtrado y Resultados (NUEVO)
  const [filters, setFilters] = useState({
    cedula: "",
    disciplina: "",
    nombre: "",
    semestre: "",
  });
  
  // Usamos 'false' para que muestre el mensaje de guía al inicio
  const [searchResults, setSearchResults] = useState(false); 

  // Opciones de Disciplinas para el filtro Select
  const disciplinaOptions = ["Fútbol Sala", "Voleibol", "Basket", "Taekwondo", "Ajedrez"];
  
  const handleSearch = () => {
    const term = (filters.nombre || '').toLowerCase();
    
    const filtered = atletas.filter(a => {
      // Filtrado compacto para demostrar la funcionalidad
      const cedulaMatch = filters.cedula ? a.cedula.includes(filters.cedula) : true;
      const disciplinaMatch = filters.disciplina ? a.disciplina === filters.disciplina : true;
      const nombreMatch = term ? a.nombre.toLowerCase().includes(term) : true;
      const semestreMatch = filters.semestre ? a.semestre.includes(filters.semestre) : true;
      
      return cedulaMatch && disciplinaMatch && nombreMatch && semestreMatch;
    });
    
    // Almacenamos el resultado de la búsqueda
    setSearchResults(filtered);
  };
  
  return (
    // Se añade altura para evitar scroll innecesario en la pantalla principal
    <div className="mt-1 h-[calc(87vh-60px)] flex flex-col"> 

      {/* TÍTULO Y BOTÓN DE ACCIÓN (MANTENIDO) */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Atletas Registrados</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          + Agregar Atleta
        </button>
      </div>

      {/* ÁREA DE FILTROS (NUEVO) */}
      <div className="bg-white p-6 rounded-xl shadow-lg border mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Parámetros de Búsqueda</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
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
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={filters.disciplina}
            onChange={(e) => setFilters({ ...filters, disciplina: e.target.value })}
          >
            <option value="">— Disciplina —</option>
            {disciplinaOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          {/* Semestre */}
          <input
            type="number"
            placeholder="Semestre"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={filters.semestre}
            onChange={(e) => setFilters({ ...filters, semestre: e.target.value })}
          />
        </div>
        
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition"
          >
            Buscar Atletas
          </button>
        </div>
      </div>

      {/* ÁREA DE RESULTADOS DINÁMICA (REEMPLAZANDO LA TABLA ESTÁTICA) */}
      <div className="flex-grow bg-white p-6 rounded-xl shadow-lg border overflow-hidden">
        
        {/* ESTADO VACÍO O GUÍA DE USO */}
        {searchResults === false ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l-2 5L9 9l11 4-5 2zm0 0L8 10m8 4l2-4" />
            </svg>
            <p className="text-xl font-semibold mb-2 text-gray-600">Comience su búsqueda</p>
            <p className="max-w-md">Utilice los parámetros de búsqueda (Cédula, Disciplina, etc.) para filtrar la lista de atletas. Los resultados aparecerán aquí.</p>
          </div>
        ) : searchResults.length === 0 ? (
          /* Sin Resultados */
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl font-semibold mb-2 text-gray-600">No se encontraron atletas</p>
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
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs">Edad</th>
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs">Disciplina</th>
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs">Semestre</th>
                  <th className="px-3 py-2 font-semibold text-gray-700 text-xs text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((a) => (
                  <tr key={a.id} className="border-b hover:bg-blue-50/50 transition">
                    <td className="px-3 py-2 text-xs text-gray-800">{a.id}</td>
                    <td className="px-3 py-2 text-xs text-gray-800 font-medium">{a.cedula}</td>
                    <td className="px-3 py-2 text-xs text-gray-800">{a.nombre}</td>
                    <td className="px-3 py-2 text-xs text-gray-800">{a.edad}</td>
                    <td className="px-3 py-2 text-xs text-blue-700 font-medium">{a.disciplina}</td>
                    <td className="px-3 py-2 text-xs text-gray-800">{a.semestre}</td>
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

      {/* Llamamos el Modal (MANTENIDO) */}
      {openModal && (
        <ModalAddAtleta
          close={() => setOpenModal(false)}
          addAtleta={(nuevo) => setAtletas([...atletas, nuevo])}
        />
      )}

    </div>
  );
}