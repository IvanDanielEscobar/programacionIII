import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-zinc-50 dark:bg-black px-6">

      <div className="max-w-2xl w-full border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 bg-white dark:bg-zinc-900 shadow-sm">
        
        <header className="mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-6">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
             Mi Cuaderno de Programación III
          </h1>
          <p className="text-zinc-500 mt-2">
            Tarea: Rutas y Layouts
          </p>
        </header>

        <section className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">¿De qué trata?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              Esta aplicación es mi laboratorio para la materia. Aquí estoy practicando cómo configurar 
              rutas dinámicas, crear layouts compartidos y entender cómo funciona el pasaje de parámetros 
              en la URL.
            </p>
          </div>

          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-2">Tareas completadas:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Configuración de rutas anidadas en <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">/notes</code></li>
              <li>Implementación de parámetros dinámicos con <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">[id]</code></li>
              <li>Creación de un Layout global con navegación</li>
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <Link 
              href="/notes" 
              className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition-all"
            >
              Ir a mis apuntes
            </Link>
          </div>
        </section>

      </div>

    </div>
  );
}
