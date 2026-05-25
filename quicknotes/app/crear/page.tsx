"use client";

import { useState } from "react";

export default function Crear() {
  const [nota, setNota] = useState("");
  const [guardada, setGuardada] = useState("");

  const guardarNota = () => {
    localStorage.setItem("nota", nota);
    setGuardada(nota);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        Nueva Nota
      </h1>

      <textarea
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        placeholder="Escribe algo..."
        className="w-full h-40 p-4 rounded-xl bg-gray-800 mb-4"
      />

      <button
        onClick={guardarNota}
        className="bg-green-600 px-5 py-3 rounded-xl"
      >
        Guardar
      </button>

      {guardada && (
        <div className="mt-6 bg-gray-800 p-4 rounded-xl">
          <h2 className="font-bold mb-2">Nota guardada:</h2>
          <p>{guardada}</p>
        </div>
      )}
    </main>
  );
}