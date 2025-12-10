"use client";

// Función para mapear la disciplina a un estilo visual (se coloca fuera del componente principal)
const getDisciplineStyle = (nombre) => {
    switch (nombre) {
        case "Fútbol Sala":
            return { icon: '⚽', gradient: "from-blue-500" };
        case "Baloncesto":
            return { icon: '🏀', gradient: "from-yellow-500" };
        case "Voleibol":
            return { icon: '🏐', gradient: "from-red-500 " };
        
        default:
            return { icon: '📍', gradient: "to-gray-500 " };
    }
};


export default function DashboardPage() {

  const disciplinas = [
    { nombre: "Fútbol Sala", atletas: 25, color: "bg-blue-600" },
    { nombre: "Baloncesto", atletas: 18, color: "bg-yellow-500" },
    { nombre: "Voleibol", atletas: 22, color: "bg-red-500" },
  ];

  // 1. Contenedor principal
  return (
    <div className= " flex-col gap-2 p-4 md:p-4">
      <h1 className="text-xl font-bold text-gray-800  ">Accesos Rápidos</h1>
      <br />

      {/* FILA SUPERIOR – Tarjetas estatísticas (Rediseño de la respuesta anterior) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        
        {/* TARJETA 1: Total Atletas (Gradiente Azul/Índigo) */}
        <div className="relative p-6 rounded-2xl shadow-xl overflow-hidden 
                      bg-gradient-to-br from-indigo-600 to-blue-500 text-white bg-gray-800 transition-transform duration-700 hover:scale-[1.05]">
            
            {/* Ícono de fondo sutil */}
            <div className="absolute top-0 right-4 opacity-40 text-[5rem] translate-x-4 translate-y-4">
               🏃
            </div>

            <p className="text-base font-semibold opacity-80">Total Atletas</p>
            <h2 className="text-5xl font-extrabold mt-1">148</h2>
            <p className="text-sm opacity-90 mt-2">Detalles del rendimiento</p>
        </div>

        {/* TARJETA 2: Profesores (Fondo Blanco/Claro) */}
        <div className="relative p-6 rounded-2xl shadow-xl bg-grey-200 border border-gray-200 bg-gray-1100 transition-transform duration-700 hover:scale-[1.05]">
            
            {/* Ícono de fondo sutil */}
            <div className="absolute top-0 right-4 opacity-40 text-[5rem] translate-x-4 translate-y-4">
                🧑‍🏫
            </div>

            <p className="text-base text-gray-500 font-semibold">Profesores</p>
            <h2 className="text-5xl font-extrabold text-gray-800 mt-1">9</h2>
            <p className="text-sm text-gray-500 mt-2">Detalle de asignación</p>
        </div>

        {/* TARJETA 3: Disciplinas (Gradiente Rojo/Rosa) */}
        <div className="relative p-6 rounded-2xl shadow-xl overflow-hidden bg-gray-500 transition-transform duration-700 hover:scale-[1.05]
                        from-red-450  text-white">

            {/* Ícono de fondo sutil */}
            <div className="absolute top-0 right-0 opacity-50 text-[5rem] translate-x-4 translate-y-4">
                🏅
            </div>
            
            <p className="text-base font-semibold opacity-80">Disciplinas</p>
            <h2 className="text-5xl font-extrabold mt-1">12</h2>
            <p className="text-sm opacity-90 mt-2">Clasificaciones activas</p>
        </div>

        {/* TARJETA 4: Eventos Activos (Gradiente Amarillo/Naranja) */}
        <div className="relative p-6 rounded-2xl shadow-xl overflow-hidden bg-gray-400 transition-transform duration-700 hover:scale-[1.05]
                       bg-gradient-to-br from-blue-300 to-blue-300 text-white">
            
            {/* Ícono de fondo sutil */}
            <div className="absolute top-0 right-5 opacity-40 text-[5rem] translate-x-4 translate-y-4">
                📅
            </div>

            <p className="text-base font-semibold opacity-100">Eventos Activos</p>
            <h2 className="text-5xl font-extrabold mt-1">4</h2>
            <p className="text-sm opacity-90 mt-2">Eventos en curso</p>
        </div>
      </div>

      {/* TÍTULO DE DISCIPLINAS */}
      <h1 className="text-xl font-bold text-gray-800 mt-10 mb-2">Mas Frecuentes</h1>
      <br />

      {/* TARJETAS DE DISCIPLINAS (Diseño implementado directamente en el map) */}
      <div className="grid  lg:grid-cols-5 gap-4">
        {disciplinas.map((d, i) => {
          // Lógica de la tarjeta de disciplina
          const { icon, gradient } = getDisciplineStyle(d.nombre);
          const maxAtletas = 30; // Máximo asumido para la barra
          const porcentaje = (d.atletas / maxAtletas) * 100;

          return (
            <div 
              key={i}
              className="relative rounded-2xl shadow-xl overflow-hidden bg-gray-800 transition-transform duration-700 hover:scale-[1.05]"
            >
              
              {/* Área Visual Superior con Gradiente */}
              <div 
                className={`p-6 h-32 flex items-center justify-center bg-gradient-to-br ${gradient} relative`}
              >
                {/* Ícono grande */}
                <span className="text-6xl opacity-30 text-white select-none absolute">
                  {icon}
                </span>
                
                {/* Enlace/Botón "Ver detalles" */}
                <span className="absolute bottom-2 right-3 text-xs font-semibold text-white/90 p-1 rounded-lg">
                  VER DETALLES →
                </span>
              </div>

              {/* Área de Contenido Inferior */}
              <div className="p-4 pt-3">
                <h3 className="text-lg font-bold text-white mb-1">{d.nombre}</h3>
                <p className="text-sm text-gray-400">
                  Atletas inscritos: <span className="font-semibold text-white">{d.atletas}</span>
                </p>

                {/* Barra de Progreso */}
                <div className="w-full h-1 mt-3 bg-gray-600 rounded-full">
                  <div 
                    className={`h-full rounded-full ${d.color}`} 
                    style={{ width: `${porcentaje}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

