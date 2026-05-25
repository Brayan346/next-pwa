import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import SWRegistration from "./SWRegistration";

export const metadata: Metadata = {
  title: "SnapMemo",
  description: "App de notas rápidas",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SWRegistration />

        <nav className="bg-black text-white p-4 flex gap-6">
          <Link href="/">Inicio</Link>
          <Link href="/crear">Crear Nota</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}