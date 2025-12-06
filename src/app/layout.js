// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Sistema UNEFA",
  description: "Gestión deportiva UNEFA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
      
    </html>
  );
}
