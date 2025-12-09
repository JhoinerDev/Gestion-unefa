"use client";

import { useState, useEffect } from "react";
import ModalAddEvento from "@/components/eventos/ModalAddEvento";

// 🚨 REEMPLAZA ESTOS VALORES CON TUS CLAVES REALES 🚨
const API_KEY = 'AIzaSyD84X7lnlsbvBAP4ECFnuCrvJvIoG95Qik'; 
const CALENDAR_ID = '66367b75f1c26cf61f9b370675c2bcf6ef06c3b44058f18aeaea6bbfbe2d62d9@group.calendar.google.com'; 


export default function EventosPage() {
  const [openModal, setOpenModal] = useState(false);
  
  // 1. ESTADOS PARA LA API DE GOOGLE CALENDAR
  const [googleEvents, setGoogleEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. FUNCIÓN DE INICIALIZACIÓN DE LA API
  // Esta función ahora recibe 'gapi' como argumento
  const initClient = (gapi) => {
    gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    }).then(() => {
      fetchEvents(gapi); // Pasa gapi a la función de obtención de eventos
    }).catch(err => {
      console.error("Error al inicializar GAPI:", err);
      setError("Error de conexión. Verifica la API Key y la consola.");
      setLoading(false);
    });
  };

  // 3. FUNCIÓN PARA OBTENER LOS EVENTOS
  // Esta función ahora recibe 'gapi' como argumento
  const fetchEvents = (gapi) => {
    gapi.client.calendar.events.list({
      calendarId: CALENDAR_ID,
      // timeMin: (new Date()).toISOString(), // 🚨 COMENTA ESTA LÍNEA 🚨
      showDeleted: false,
      singleEvents: true,
      maxResults: 15,
      orderBy: 'startTime',
    }).then((response) => {
      setGoogleEvents(response.result.items);
      setLoading(false);
    }).catch(error => {
      console.error("Error al obtener eventos:", error);
      setError("No se pudieron cargar los eventos. Verifica el Calendar ID o el estado público.");
      setLoading(false);
    });
  };
  
  // 4. EFECTO PARA MONTAR E INICIALIZAR LA LIBRERÍA (SOLUCIÓN CLAVE)
  useEffect(() => {
    // 💡 Importación dinámica: Solo se ejecuta en el navegador
    if (typeof window !== 'undefined') {
      import('gapi-script').then(({ gapi }) => {
        gapi.load('client', () => initClient(gapi));
      }).catch(err => {
        console.error("Error al cargar gapi-script:", err);
        setError("Error al cargar la librería de Google.");
        setLoading(false);
      });
    } else {
        // En caso de SSR, si llega aquí (debería ser evitado por "use client"), al menos ponemos un estado de carga.
        setLoading(true);
    }
  }, []); // Se ejecuta solo una vez al montar el componente


  // --- FUNCIÓN DE UTILIDAD (MANTENIDA) ---
  const getEstadoClass = (status) => {
    if (status === "confirmed") return { text: "Confirmado", class: "bg-green-600" };
    if (status === "tentative") return { text: "Tentativo", class: "bg-yellow-600" };
    return { text: "Otros", class: "bg-gray-500" };
  };

  // --- RENDERING (MANTENIDO, pero usa googleEvents) ---
  return (
    <div className="p-8">

      {/* Título y botón */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Eventos Deportivos</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          + Crear Evento
        </button>
      </div>

      {/* Contenedor Principal para Tabla / Estados */}
      <div className="bg-white p-6 rounded-xl shadow-lg border min-h-[300px]">
        
        {/* ESTADO DE CARGA / ERROR */}
        {loading && <div className="flex items-center justify-center h-[300px] text-lg text-blue-600">Cargando eventos de Google Calendar...</div>}
        {!loading && error && <div className="flex flex-col items-center justify-center h-[300px] text-center text-lg text-red-600">❌ Error: {error}<p className="text-sm text-gray-500 mt-2">Verifica tu API Key, Calendar ID y asegúrate que el calendario sea público.</p></div>}
        
        {/* ESTADO DE TABLA VACÍA / SIN EVENTOS */}
        {!loading && !error && googleEvents.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[300px] text-center text-gray-500">
                {/* ... SVG y mensaje de No eventos ... */}
            </div>
        )}
        
        {/* TABLA DE GOOGLE CALENDAR */}
        {!loading && !error && googleEvents.length > 0 && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-semibold text-gray-700">Título</th>
                <th className="p-3 text-left font-semibold text-gray-700">Fecha / Hora</th>
                <th className="p-3 text-left font-semibold text-gray-700">Ubicación</th>
                <th className="p-3 text-left font-semibold text-gray-700">Estado</th>
                <th className="p-3 text-center font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {googleEvents.map((e) => {
                const estado = getEstadoClass(e.status);
                const eventDate = new Date(e.start.dateTime || e.start.date);
                
                return (
                  <tr key={e.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3 font-medium text-gray-800">{e.summary || 'Sin Título'}</td>
                    <td className="p-3 text-sm">
                        {eventDate.toLocaleDateString()}
                        {e.start.dateTime && (<span className="block text-xs text-gray-500">{eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>)}
                    </td>
                    <td className="p-3 text-sm">{e.location || 'N/A'}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded text-xs text-white ${estado.class}`}>
                        {estado.text}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Ver Detalles</button>
                      <button className="ml-2 px-3 py-1 bg-gray-400 text-white rounded cursor-not-allowed" disabled>Eliminar*</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal */}
      {openModal && (
        <ModalAddEvento
          close={() => setOpenModal(false)}
          addEvento={(nuevo) => console.log('Evento local añadido (si usas DB)')} 
        />
      )}
    </div>
  );
}