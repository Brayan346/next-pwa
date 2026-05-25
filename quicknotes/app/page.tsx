"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">SnapMemo</h1>

      <p className="mb-8 text-gray-300">
        Guarda notas rápidas desde cualquier lugar.
      </p>

      <div className="bg-gray-800 p-5 rounded-xl mb-4">
        <h2 className="text-xl font-semibold">Recordatorio</h2>
        <p className="text-gray-300 mt-2">
          Entregar proyecto de PWA
        </p>
      </div>

      <Link
        href="/crear"
        className="bg-blue-600 px-5 py-3 rounded-xl inline-block"
      >
        Crear nota
      </Link>
    </main>
  );
}