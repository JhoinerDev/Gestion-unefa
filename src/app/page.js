import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // This page will mainly be handled by middleware, 
  // but as a fallback/initial render we can show a loading state 
  // or redirect.
  return (
    <div className="flex bg-slate-900 h-screen w-full items-center justify-center">
      <div className="text-white text-xl">Calculando ruta...</div>
    </div>
  );
}
