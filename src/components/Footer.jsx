import React from 'react';

export default function Footer() {
  // Obtiene el año actual automáticamente
  const currentYear = new Date().getFullYear();


  return (
    <footer 
      className="w-full py-5 text-center text-sm text-gray-600 border-t border-gray-200 bg-gray-100 shadow-inner"
      // Usa mt-auto si este footer debe pegarse al fondo de un contenedor flex
    >
      {/* El año se actualiza al año actual (2025 en tu caso) */}
      © {currentYear} UNEFA – Sistema de Gestión Deportiva • Desarrollado por J.C.
    </footer>
  );
}