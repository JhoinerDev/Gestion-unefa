"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();

  const [user, setUser] = useState(null);

  // Cargar sesión al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("usuario");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login falso
  const login = (username, password) => {
    // USUARIO FALSO QUEMADO
    if (username === "coord.deportes@unefa.edu.ve" && password === "123456") {
      const fakeUser = { name: "Administrador", role: "admin" };

      localStorage.setItem("usuario", JSON.stringify(fakeUser));
      setUser(fakeUser);
      router.push("/dashboard");
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("usuario");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
