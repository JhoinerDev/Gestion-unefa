"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.cedula || !form.nombre || !form.apellido || !form.email || !form.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");
    setSuccess("Cuenta creada exitosamente.");
    setTimeout(() => router.push("/login"), 1500);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#12447f] relative overflow-hidden">

      {/* Fondos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w- h-56 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* TARJETA — compactada */}
      <div className="relative bg-red/10 backdrop-blur-xl shadow-xl p-8 rounded-3xl w-[100%] max-w-md border border-white/20 z-10">

        {/* LOGO */}
        <div className="text-center mb-0">
          <Image
            src="/img/logo.png"
            alt="Logo UNEFA"
            width={100}   // 🔥 reducido
            height={100}
            className="mx-auto mb-1"
          />
          <p className="text-slate-200 mt-1 text-lg tracking-wide">
            Crear Cuenta
          </p>
        </div>

        {/* FORMULARIO — compactado */}
        <form onSubmit={handleRegister} className="space-y-3">

          <div>
            <label className="text-slate-200 font-semibold text-sm">Cédula</label>
            <input
              type="text"
              name="cedula"
              value={form.cedula}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Ingrese su cédula"
            />
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="text-slate-200 font-semibold text-sm">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Nombre"
              />
            </div>

            <div className="w-1/2">
              <label className="text-slate-200 font-semibold text-sm">Apellido</label>
              <input
                type="text"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Apellido"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-200 font-semibold text-sm">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 transition"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label className="text-slate-200 font-semibold text-sm">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div>
            <label className="text-slate-200 font-semibold text-sm">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Repita la contraseña"
            />
          </div>

          {error && <p className="text-red-300 text-sm text-center">{error}</p>}
          {success && <p className="text-green-300 text-sm text-center">{success}</p>}

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide shadow-lg transition"
          >
            Crear Cuenta
          </button>
        </form>

        {/* LINK */}
        <p className="text-center text-slate-300 text-sm mt-1">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-blue-300 underline hover:text-blue-400">
            Iniciar sesión
          </a>
        </p>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-4 w-full text-center text-xs text-slate-400">
        © 2025 — Sistema de Gestión Deportiva UNEFA <br />
        Desarrollado por J.C.
      </div>
    </div>
  );
}
