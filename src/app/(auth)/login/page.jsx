"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔑 Usuario de prueba (sin backend)
  const USER = {
    cedula: "12345678",
    password: "30193700",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (cedula === USER.cedula && password === USER.password) {
      router.push("/dashboard");
    } else {
      setError("Credenciales incorrectas. Intente nuevamente.");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-black relative overflow-hidden">

      {/* Líneas decorativas animadas */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Contenedor principal */}
      <div className="relative bg-white/10 backdrop-blur-xl shadow-2xl p-10 rounded-3xl w-[90%] max-w-md border border-white/20 animate-fadeIn">

        {/* Logo y título */}
        <div className="text-center mb-8">
          <div className="text-white text-4xl font-black tracking-wide drop-shadow-lg">
            UNEFA
          </div>
          <p className="text-slate-200 mt-2 text-sm tracking-wider">
            Sistema de Gestión Deportiva
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Cédula */}
          <div>
            <label className="text-slate-200 font-semibold text-sm">
              Cédula
            </label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Ingrese su cédula"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="text-slate-200 font-semibold text-sm">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Ingrese su contraseña"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="text-red-300 text-center text-sm font-semibold">
              {error}
            </div>
          )}

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide shadow-lg hover:shadow-xl transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* CopyRight */}
        <div className="text-center mt-8 text-xs text-slate-300 border-t border-white/20 pt-4">
          © 2024 — Sistema de Gestión Deportiva UNEFA<br />
          Desarrollado por J.C.
        </div>
      </div>
    </div>
  );
}
