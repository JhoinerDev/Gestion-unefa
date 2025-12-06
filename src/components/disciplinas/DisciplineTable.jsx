// src/components/DisciplineTable.jsx
"use client";
export default function DisciplineTable({ data = [], onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full divide-y">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium">Nombre</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Categoría</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Responsable</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Horarios</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Estado</th>
            <th className="px-4 py-3 text-right text-sm font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-6 text-center text-sm text-slate-500">
                No hay disciplinas registradas.
              </td>
            </tr>
          )}

          {data.map((d) => (
            <tr key={d.id}>
              <td className="px-4 py-3 text-sm">{d.nombre}</td>
              <td className="px-4 py-3 text-sm">{d.categoria}</td>
              <td className="px-4 py-3 text-sm">{d.responsable}</td>
              <td className="px-4 py-3 text-sm">{d.horarios}</td>
              <td className="px-4 py-3 text-sm">{d.estado}</td>
              <td className="px-4 py-3 text-sm text-right">
                <div className="inline-flex gap-2">
                  <button onClick={() => onEdit(d)} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded">Editar</button>
                  <button onClick={() => onDelete(d)} className="px-3 py-1 bg-red-100 text-red-700 rounded">Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
