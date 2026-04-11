'use client'; // Esto le indica a nextque tiene interactividad

import React, { useState } from 'react';

export default function ChecklistPage() {
  const [tareas, setTareas] = useState([
    { id: 1, text: "Configurar el layout", completed: true },
    { id: 2, text: "Aprender Server Components", completed: false }
  ]);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    setTareas([...tareas, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  return (
    <div className="flex flex-1 items-center justify-center flex-col p-10 font-sans min-h-[70vh] w-full">
      <h1 className="text-xl font-bold mb-4 uppercase tracking-tighter">
        Checklist
      </h1>
      
      <div className="flex gap-2 mb-6">
        <input 
          className="border-2 border-zinc-700 p-2 flex-grow dark:text-zinc-500" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribir tarea..."
        />
        <button 
          onClick={handleAdd}
          className="bg-black text-white px-4 hover:bg-gray-800 dark:bg-white dark:text-black rounded-2xl"
        >
          Añadir
        </button>
      </div>

      <ul className="space-y-2">
        {tareas.map(t => (
          <li key={t.id} className="flex gap-2 items-center">
            <input 
              type="checkbox" 
              checked={t.completed} 
              onChange={() => setTareas(tareas.map(item => item.id === t.id ? {...item, completed: !item.completed} : item))}
            />
            <span className={t.completed ? "line-through text-gray-400" : ""}>
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}