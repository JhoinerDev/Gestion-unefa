import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { 
  LayoutDashboard, 
  Dumbbell, 
  Users, 
  GraduationCap, 
  Calendar, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Disciplinas", path: "/disciplinas", icon: Dumbbell },
    { name: "Atletas", path: "/atletas", icon: Users },
    { name: "Profesores", path: "/profesores", icon: GraduationCap },
    { name: "Eventos", path: "/eventos", icon: Calendar },
  ];

  return (
    <aside 
      className={`
        relative h-screen bg-[#12447f] text-white shadow-xl flex flex-col transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-20" : "w-64"}
      `}
    >
      
      {/* Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-9 bg-white text-[#12447f] p-1 rounded-full shadow-md border hover:bg-slate-100 transition z-50"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>


      {/* Logo Area */}
      <div className={`flex items-center justify-center py-6 transition-all duration-300 ${isCollapsed ? "px-2" : "px-6"}`}>
        <div className="relative flex items-center justify-center">
            {/* Show full logo when expanded, maybe icon only when collapsed? 
                For now, we'll scale it down or hide it. 
                Let's try to keep it but smaller or hide if it looks bad.
            */}
             {!isCollapsed ? (
                <Image
                  src="/img/logo.png"
                  alt="Logo UNEFA"
                  width={150}
                  height={150}
                  className="mx-auto animate-fadeIn"
                />
            ) : (
                 /* Placeholder for collapsed logo or just a smaller version */
                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs">
                    U
                 </div>
            )}
        </div>
      </div>
      
      {/* Navegación */}
      <nav className="flex-1 px-3 space-y-2 mt-4">
        {menu.map((item, i) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={i}
              onClick={() => router.push(item.path)}
              className={`
                group flex items-center w-full px-3 py-3 rounded-xl transition-all duration-200
                ${isActive 
                  ? "bg-white/20 text-white shadow-inner" 
                  : "hover:bg-white/10 text-slate-300 hover:text-white"
                }
                ${isCollapsed ? "justify-center" : "justify-start gap-4"}
              `}
              title={isCollapsed ? item.name : ""}
            >
              <Icon 
                size={22} 
                className={`transition-colors shrink-0 ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`} 
              />
              
              {!isCollapsed && (
                <span className="font-medium whitespace-nowrap overflow-hidden transition-all animate-fadeIn">
                  {item.name}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer / User Info (Optional - adding similar to image 2 reference just in case) */}
      <div className="p-4 border-t border-white/10">
         <div className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"}`}>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold ring-2 ring-white/30">
              A
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                 <span className="text-sm font-semibold truncate">Admin User</span>
                 <span className="text-xs text-slate-400 truncate">admin@unefa.edu</span>
              </div>
            )}
         </div>
      </div>

    </aside>
  );
}
