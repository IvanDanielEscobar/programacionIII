import Link from "next/link";

export default function NotesLayout({ children }) {
    
    const categorias = [
        { id: 1, title: 'Rutas', notes: ["rutas", "rutas anidadas"] },
        { id: 2, title: 'Components', notes: ["server components", "client components "] },
        { id: 3, title: 'Layouts', notes: ['Layout root', 'Layout default'] },  
    ];
    
    return (
        <div className="flex min-h-screen bg-zinc-900">
            {/* Sidebar persistente */}
            <aside className="w-72 py-8 px-6 border-r border-zinc-700 backdrop-blur-sm">
            <div>
                <h1 className="text-4xl font-bold">Notas</h1>
                <p>Todas Nuestras notas</p>
            </div>
            <div className="space-y-6 mt-8">
                {categorias.map((categoria) => (
                    <div className="border-b pb-6 border-zinc-700" key={categoria.id}>
                        <h2 className="text-2xl font-semibold ">
                            {categoria.title}
                        </h2>
                        <ul>
                            {categoria.notes.map((nota, index) => (
                                <li key={index} className="pl-4 cursor-pointer transition-all duration-200 hover:scale-106">
                                    <Link href={`/notes/${nota.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {nota}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                    <div className="">
                        <Link 
                            href="/notes/favoritas" 
                            className="flex items-center gap-2 px-3 py-2 text-yellow-500 hover:bg-yellow-500/10 rounded-md transition-colors"
                        >
                            <span> Favoritas </span>
                        </Link>
                    </div>
            </div>
            </aside>
            {children}
        </div>
    );
}