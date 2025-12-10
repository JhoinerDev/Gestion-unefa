"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"


export default function LoginPage() {
  const router = useRouter();

  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const USER = {
    cedula: "30193700",
    password: "jhoiner123",
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
    // 1. El contenedor principal tiene 'relative', lo que nos permite posicionar el footer
    <div className=" h-screen  flex items-center flex justify-center to-blue-500 bg-gradient-to-br from-blue-600 via-blue-800 to-blue-800">

      {/* Líneas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute bg-blue-300/20  animate-pulse"></div>
        <div className="absolute bottom-10 bg-indigo-600/20  animate-pulse"></div>
      </div>

      {/* Contenedor principal (LA TARJETA) */}
      <div className=" bg-grey-500 -grey-xl shadow-2xl p-10 rounded-3xl w-[90%] max-w-md border border-white/20 z-20">

        {/* Logo y título */}
        <div className="text-center mb-2" >
            {/* Nota: Asegúrate de que el nombre del archivo coincida con tu carpeta (logo.png vs logo-unefa.png) */}
            <Image
            src="/img/logo.png" 
            alt="Logo UNEFA"
            width={100}
            height={150}
            className="mx-auto mb-1"
            />
          <p className="text-slate-200 mt-2 text-xl tracking-wider">
            Sistema de Gestión Deportiva
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-slate-200 font-semibold text-sm">Cédula</label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Ingrese su cédula"
            />
          </div>

          <div>
            <label className="text-slate-200 font-semibold text-sm">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-slate-300 border border-white/30 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Ingrese su contraseña"
            />
          </div>

          {error && (
            <div className="text-red-300 text-center text-sm font-semibold">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide shadow-lg hover:shadow-xl transition"
          >
            Iniciar Sesión
            
          </button>
          
        </form>
        <p className="text-center text-slate-300 text-sm mt-4">
  ¿No tienes cuenta?{" "}
  <a
    href="/register"
    className="text-blue-300 underline hover:text-blue-400 transition"
  >
    Registrarme
  </a>
</p>

        
      </div>
      

      {/* 2. EL FOOTER: Ahora está fuera de la tarjeta, pero dentro del div principal */}
      <div className="absolute bottom-4 w-full text-center text-xs text-slate-400 z-10">
          © 2025 — Sistema de Gestión Deportiva UNEFA<br />
          Desarrollado por J.C.
      </div>

    </div>
  );
}