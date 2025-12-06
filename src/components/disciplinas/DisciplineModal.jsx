// src/components/DisciplineModal.jsx
"use client";
import { useState, useEffect } from "react";
import ModalWrapper from "./ModalWrapper";

export default function DisciplineModal({ open, onClose, onSave, initial }) {
  const [form, setForm] = useState({
    id: "",
    nombre: "",
    categoria: "",
    descripcion: "",
    responsable: "",
    estado: "Activo",
    horarios: ""
  });

  useEffect(() => {
    if (initial) setForm(initial);
    else
      setForm({
        id: "",
        nombre: "",
        categoria: "",
        descripcion: "",
        responsable: "",
        estado: "Activo",
        horarios: ""
      });
  }, [initial, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Validaciones simples
    if (!form.nombre.trim()) return alert("El nombre es obligatorio");
    // Asegurar id
    if (!form.id) form.id = `d_${Date.now()}`;
    onSave(form);
    onClose();
  };

  return (
    <ModalWrapper open={open} onClose={onClose} title={initial ? "Editar Disciplina" : "Agregar Disciplina"}>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700">Nombre</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Categoría</label>
            <input name="categoria" value={form.categoria} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Responsable</label>
          <input name="responsable" value={form.responsable} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Horarios</label>
          <input name="horarios" value={form.horarios} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Estado</label>
          <select name="estado" value={form.estado} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2">
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Descripción</label>
          <textarea name="descripcion" value={form.descripcion} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" rows={3} />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancelar</button>
          <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">Guardar</button>
        </div>
      </form>
    </ModalWrapper>
  );
}
