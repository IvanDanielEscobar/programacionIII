import React from "react";
import Link from "next/link";

export default function page() {
    return(
        <div className="flex flex-col flex-1 items-center justify-content bg-zinc-50 font-sans dark:bg-black">
             <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">                 
                    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Notas
                      </h1>
                    </div>

                    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                      <Link href={"/notes/create"} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 text-background hover:bg-foreground/80">
                        create note
                      </Link>
                    </div>
                    
                    {/* seccion que muestra las notas */}
                    <section className="w-full h-64 my-8 p-6 rounded-lg flex flex-col items-start text-white bg-zinc-800 justify-between">
                      <div className="gap-4">
                        <h1 className="font-semibold text-lg">Nota 1</h1>
                        <p className="text-center">Notas sobre como funcionan los componentes en NEXT</p>
                      </div>
                      <Link href={"/notes/1"} className="self- text-sm text-foreground font-medium hover:underline">
                        Ver Nota
                      </Link>
                    </section>

                    <section className="w-full h-64 my-8 p-6 rounded-lg flex flex-col items-start text-white bg-zinc-800 justify-between">
                      <div className="gap-4">
                        <h1 className="font-semibold text-lg">Rutas</h1>
                        <p className="text-center">Notas sobre como funcionan los componentes en NEXT</p>
                      </div>
                      <Link href={"/notes/1"} className="self- text-sm text-foreground font-medium hover:underline">
                        Ver Nota
                      </Link>
                    </section>

                    <section className="w-full h-64 my-8 p-6 rounded-lg flex flex-col items-start text-white bg-zinc-800 justify-between">
                      <div className="gap-4">
                        <h1 className="font-semibold text-lg">Layouts</h1>
                        <p className="text-center">Notas sobre como funcionan los componentes en NEXT</p>
                      </div>
                      <Link href={"/notes/1"} className="self- text-sm text-foreground font-medium hover:underline">
                        Ver Nota
                      </Link>
                    </section>

                 

                </main>
        </div>
    );
}