// // src/components/ProfileMenu.jsx (Este componente debe ser "use client")

// // No necesita la directiva si ya la tiene el componente padre, pero es buena práctica si usa onClick.
// // "use client"; 

// export default function ProfileMenu({ onLogout }) {
//   return (
//     <div className="w-48 bg-white rounded-lg shadow-xl py-2 border">
//       <div className="px-4 py-2 text-sm text-gray-700 border-b">
//         👋 ¡Hola, Administrador!
//       </div>
      
//       {/* Botón de Cerrar Sesión */}
//       <button
//         onClick={onLogout}
//         className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition text-sm"
//       >
//         <div className="flex items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//             </svg>
//             Cerrar Sesión
//         </div>
//       </button>
//     </div>
//   );
// }