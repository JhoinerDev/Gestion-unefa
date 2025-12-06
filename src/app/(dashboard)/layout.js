"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileModal from "@/components/modals/ProfileModal";

export default function DashboardLayout({ children }) {
  const [openProfileModal, setOpenProfileModal] = useState(false);

  return (
  
  
    <div className="flex h-screen w-full overflow-hidden">
   {/* Sidebar */}
      <Sidebar />

      {/* Contenido */}
      <div className="flex flex-col flex-1 h-full">

        {/* Header */}
        <Header onOpenProfile={() => setOpenProfileModal(true)} />
          
        

        {/* Área principal SIN SCROLL */}
        <main className="flex-1 p-6 overflow-hidden">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        {/* Modal de Perfil */}
        {openProfileModal && (
        <ProfileModal onClose={() => setOpenProfileModal(false)} />
        )}


      </div>
    </div>
  );
}