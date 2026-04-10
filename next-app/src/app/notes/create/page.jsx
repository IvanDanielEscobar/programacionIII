import React from "react";
import Link from "next/link";

export default function page() {

//    function fetch notas => me trae un array de notas con su id, title y content

    return(
        <section className="flex p-20 justify-center items-center gap-10">

            <form className="flex flex-col flex-1 p-6 rounded-lg bg-zinc-800 font-sans">
                <Link href={"/notes"} className="self-start mb-4 text-white font-semibold">
                    &larr; back to notes
                </Link>

                <p className="text-white text-lg font-semibold">create note</p>
                
                <input type="text" placeholder="title" className="p-2 rounded-md my-4" />
                <textarea placeholder="content" className="p-2 rounded-md my-4" rows={10}></textarea>
                <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 text-background hover:bg-foreground/80">
                    Guardar
                </button>
            </form>

        </section>
    );
}